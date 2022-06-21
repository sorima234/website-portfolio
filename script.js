function messageSent(){
    document.getElementById("message-sent").innerHTML = "Your message has been sent. Thank you!";
}
function scrollToTop(){
    window.scrollTo(0, 0);
}
var header = document.getElementById("menu");
var menuItems = header.getElementsByTagName("li");
for (var i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current-selected");
    current[0].className = current[0].className.replace("current-selected", "");
    this.className += "current-selected";
    });
}
console.log(header);
console.log(menuItems);