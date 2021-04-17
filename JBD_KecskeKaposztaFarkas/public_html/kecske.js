window.addEventListener("load",init);

function init() {
    var tomb = new Array();

    // 3. feladat
    for (var i = 0; i < document.getElementsByTagName("IMG").length; i++){
        document.getElementsByTagName("IMG")[i].addEventListener("click", function(){
        tomb.push(this.src);
        console.log(tomb);
        
        // 7. feladat
        var y = this;
        this.style.display = "none";
        
        var x = document.createElement("IMG");
        x.setAttribute("src", y.src);
        x.setAttribute("width", y.width);
        x.setAttribute("height", y.height);
        document.getElementById("csonak").appendChild(x);
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