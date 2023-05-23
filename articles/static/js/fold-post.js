var foldBtns = document.getElementsByClassName("fold-button");
var key = 0;
for (var i = 0; i<foldBtns.length; i++){
foldBtns[i].addEventListener("click", function(event) {
console.log("you clicked ", event.target);
});

foldBtns[i].addEventListener("click", function(e) {
e.target.parentElement.classList = "post_folded";
});


foldBtns[i].addEventListener("click", function(e) {
if (e.target.parentElement.classList == "post_folded"){
key++;
console.log("you clicked 1", event.target);
if (key%2==1) e.target.innerHTML = "развернуть"; else e.target.innerHTML = "свернуть";
e.target.parentElement.classList = "post";
}
else{
e.target.parentElement.classList = "post_folded";
console.log("you clicked 2", event.target);
}

});
}

