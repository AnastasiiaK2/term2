from .models import Article
from django.shortcuts import render, redirect
from django.http import Http404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login, logout

def get_article(request, article_id):
    try:
        post = Article.objects.get(id=article_id)
        return render(request, 'article.html', {"post": post})
    except Article.DoesNotExist:
        raise Http404

def archive(request):
    if request.method == "POST":
        logout(request);
        return redirect(archive)
    else:
        return render(request, 'archive.html', {"posts": Article.objects.all()})

def create_post(request):
    if not request.user.is_anonymous:
        if request.method == "POST":
            # обработать данные формы, если метод POST
            form = {
                'text': request.POST["text"], 'title': request.POST["title"]
            }
            # в словаре form будет храниться информация, введенная пользователем
            if form["text"] and form["title"]:
                for i in Article.objects.all():
                    if form["title"]==i.title:
                        form['errors'] = u"Название статьи не уникально"
                        return render(request, 'create_post.html', {'form': form})
                # если поля заполнены без ошибок
                article = Article.objects.create(text=form["text"], title=form["title"], author=request.user)
                return redirect('get_article', article_id=article.id)
            # перейти на страницу поста
            else:
                # если введенные данные некорректны
                form['errors'] = u"Не все поля заполнены"
                return render(request, 'create_post.html', {'form': form})
        else:
            # просто вернуть страницу с формой, если метод GET
            return render(request, 'create_post.html', {})
    else:
        raise Http404

def create_user(request):
    if request.method == "POST":
        user = {
            'login': request.POST["login"], 'email': request.POST["email"], 'password': request.POST["password"]
        }
        try:
            User.objects.get(username=user['login'])
            error ="Пользователь с таким именем уже есть"
            return render(request, 'create_user.html', {'error':  error})
        except User.DoesNotExist:
            if (user['login'] and user['email'] and user['password']):
                User.objects.create_user(user['login'], user['email'], user['password'])
                return redirect('archive')
            else:
                error = "Заполните все поля"
                return render(request, 'create_user.html', {'error': error})
    else:
        return render(request, 'create_user.html')

def sign_in(request):
    if request.method == "POST":
        user = {
            'login': request.POST["login"], 'password': request.POST["password"]
        }
        User = authenticate(username=user['login'],password=user['password'])
        if User is not None:
            login(request, User)
            return redirect('archive')
        else:
            if (user['login']  and user['password']):
                error = "Неверный логин или пароль"
                return render(request, 'sign_in.html', {'error':  error})
            else:
                error = "Заполните все поля"
                return render(request, 'sign_in.html', {'error': error})
    else:
        return render(request, 'sign_in.html')