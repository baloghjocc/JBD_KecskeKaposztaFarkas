window.addEventListener("load",init);

function init() {
    var tomb = new Array();

    for (var i = 0; i < document.getElementsByTagName("IMG").length; i++){
        document.getElementsByTagName("IMG")[i].addEventListener("click", function(){
        tomb.push(this.src);
        console.log(tomb);
    }, false);
    }
}
