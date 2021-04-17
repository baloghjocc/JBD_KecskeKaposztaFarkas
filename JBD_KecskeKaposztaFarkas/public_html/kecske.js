window.addEventListener("load",init);

var kecskeOn = 0;
var kaposztaOn = 0;
var farkasOn = 0;

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
        
        if ( this.alt === "kecske") {
            kecskeOn = 1;
        }
        else if ( this.alt === "kaposzta"){
            kaposztaOn = 1;
        }
        else {
            farkasOn = 1;
        }
        if ((kecskeOn === 1) && ((kaposztaOn === 1) || (farkasOn === 1))) {
            alert("Rossz volt a választás!");
        }
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