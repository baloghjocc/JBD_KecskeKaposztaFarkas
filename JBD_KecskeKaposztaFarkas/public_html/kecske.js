window.addEventListener("load",init);

function init() {
    var tomb = new Array();

    // 3. feladat
    for (var i = 0; i < document.getElementsByTagName("IMG").length; i++){
        document.getElementsByTagName("IMG")[i].addEventListener("click", function(){
        tomb.push(this.src);
        console.log(tomb);
    }, false);
    }

    //5 - 6. feladat
    for (var i = 0; i < $("img").length; i++){
        $("img")[i].addEventListener("mouseover",keretfel);
        $("img")[i].addEventListener("mouseout",keretle);
    }

    function $(nav) {
    return document.querySelectorAll(nav);
    }
    function keretfel() {
        this.classList.add("kiemel"); 
    }
    function  keretle() {
        this.classList.remove("kiemel"); 
    }

}