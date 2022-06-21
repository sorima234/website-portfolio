var header = document.getElementById("menu");
var menuItems = header.getElementsByTagName("li");
function messageSent(){
    document.getElementById("message-sent").innerHTML = "Your message has been sent. Thank you!";
}
function scrollToTop(){
    window.scrollTo(0, 0);
    var current1 = document.getElementsByClassName("current-selected");
    current1[0].className = current1[0].className.replace("current-selected", "");
    menuItems[0].className += "current-selected";
}
function goToAbout(){
    var current2 = document.getElementsByClassName("current-selected");
    current2[0].className = current2[0].className.replace("current-selected", "");
    menuItems[1].className += "current-selected";
}
for (var i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current-selected");
    current[0].className = current[0].className.replace("current-selected", "");
    this.className += "current-selected";
    });
}