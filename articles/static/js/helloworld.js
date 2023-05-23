var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "БВТ1702",
        "marks": [5, 5, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БСТ1702",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл1",
        "surname": "Смирнов1",
        "group": "БАП1801",
        "marks": [4, 3, 4]
    },
    {
        "name": "Иван1",
        "surname": "Петров1",
        "group": "БСТ1702",
        "marks": [2, 3, 4]
    },
    {
        "name": "Кирилл2",
        "surname": "Смирнов2",
        "group": "БАП1801",
        "marks": [3, 3, 4]
    }
];

var rpad = function(str, length) {
// js не поддерживает добавление нужного количества символов
// справа от строки, т.е. аналога ljust из Python здесь нет
    str = str.toString(); // преобразование в строку
    while (str.length < length)
        str = str + ' '; // добавление пробела в конец строки return str; // когда все пробелы добавлены, возвратить строку
    return str;
};

var printStudents = function(students){
    console.log(
    rpad("Имя", 15),
    rpad("Фамилия", 15),
    rpad("Группа", 8),
    rpad("Оценки", 20)
    );
// был выведен заголовок таблицы
    for (var i = 0; i<=students.length-1; i++){
        // в цикле выводится каждый экземпляр студента
        console.log(
        rpad(students[i]['name'], 15),
        rpad(students[i]['surname'], 15),
        rpad(students[i]['group'], 8),
        rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n'); // добавляется пустая строка в конце вывода
};

var filtrStudents = function(students){
    var group = prompt("Введите наименование группы:  ");
     console.log('Студенты в группе ' + group + ':\n');
        for (var i = 0; i<=students.length-1; i++){
        if (students[i]['group'] == group)
            console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['marks'], 20)
            );
    }
     console.log('\n');
}

var avgStudents = function(students){
    var avg = prompt("Средняя оценка:  ");
    var num = 0;
     console.log('Список студентов, средний балл которых выше ' + avg + ':\n');
        for (var i = 0; i<=students.length-1; i++){
        num = 0;
        for (var j = 0; j<=2; j++)
           num+=students[i]['marks'][j];
        num=num/3;
        if (num > avg)
            console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['marks'], 20),
            ' ',
            num
            );
    }
     console.log('\n');
}

printStudents(groupmates);
filtrStudents(groupmates);
avgStudents(groupmates);

var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i<foldBtns.length; i++){
foldBtns[i].addEventListener("click", function(event) {
console.log("you clicked ", event.target);
});

foldBtns[i].addEventListener("click", function(e) {
event.target.parentElement.getElementsByClassName('article-author')[0].style.display = "none";
event.target.parentElement.getElementsByClassName('article-created-date')[0].style.display = "none";
event.target.parentElement.getElementsByClassName('article-text')[0].style.display = "none";
e.target.innerHTML = "развернуть";
});


foldBtns[i].addEventListener("click", function(e) {
if (e.target.className == "fold-button folded"){
e.target.innerHTML = "свернуть";
e.target.className = "fold-button";
var displayState = "block";
}
else{
e.target.innerHTML = "развернуть";
e.target.className = "fold-button folded";
var displayState = "none";
}
event.target.parentElement.getElementsByClassName('article-author')[0].style.display = displayState;
event.target.parentElement.getElementsByClassName('article-created-date')[0].style.display = displayState;
event.target.parentElement.getElementsByClassName('article-text')[0].style.display = displayState;
});

}
