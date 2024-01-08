function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

// Create and insert image into header
var img = create('<a href="https://www.upv.es/index-en.html"><img class="logo-upv" src="images/UPV-Emblem2.png" width="10%"></a>');
document.getElementById("header").insertBefore(img, document.getElementById("header").childNodes[0]);

// Create and insert credentials into header
//var cred = create('<div><h1>Víctor García Valero</h1><p>Researcher at Universitat Politècnica de València</p></div>');
//document.getElementById("header").insertBefore(cred, document.getElementById("header").childNodes[1]);

// Create and insert navMenu into header
var navMenu = create('<nav class="nav-menu"><a href="index.html">Home</a><a href="projects.html">Projects</a><a href="publications.html">Publications</a><a href="contact.html">Contact</a></nav>');
document.getElementById("header").insertBefore(navMenu, document.getElementById("header").childNodes[2]);