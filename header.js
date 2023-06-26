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
var img = create('<img src="images/UPV-Emblem2.png" width="15%">');
document.getElementById("header").insertBefore(img, document.getElementById("header").childNodes[0]);

// Create and insert credentials into header
//var cred = create('<div><h1>Víctor García Valero</h1><p>Researcher at Universitat Politècnica de València</p></div>');
//document.getElementById("header").insertBefore(cred, document.getElementById("header").childNodes[1]);

// Create and insert navMenu into header
var navMenu = create('<nav class="nav-menu"><ul><li><a href="index.html">Home</a></li><li><a href="projects.html">Projects</a></li><li><a href="publications.html">Publications</a></li><li><a href="contact.html">Contact</a></li></ul></nav>');
document.getElementById("header").insertBefore(navMenu, document.getElementById("header").childNodes[2]);