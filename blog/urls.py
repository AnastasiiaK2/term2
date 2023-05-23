"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, re_path
from django.urls import path
from articles import views
from django.contrib import admin

urlpatterns = [
    re_path(r'^article/(?P<article_id>\d+)$', views.get_article, name='get_article'),
    path('', views.archive, name='archive'),
    path('admin/articles/article/add/', admin.site.urls),
    path('article/new/', views.create_post, name='create_post'),
    path('register/', views.create_user, name='create_user'),
    path('signin/', views.sign_in, name='sign_in'),
]
