// la section traite de l'accessibilté sur le site

let body = document.getElementById("body")

// la fonction verifie si body possède la classe init, si oui elle enlève la classe init et rajoute la classe luciole

function luciole(){
    // est ce que body possède init?
    if(body.classList.contains("init")){
        //j'enlève la classe init
        body.classList.remove("init")
        //j'ajoute la classe luciole
        body.classList.add("luciole")
    }else{
        //j'enlève la classe luciole
        body.classList.remove("luciole")
        //j'ajoute la classe init
        body.classList.add("init")
    }
}

// je vais chercher ma première checkbox

let access = document.getElementById("accessibilite")
let access2 = document.getElementById("accessibilite2")

// j'écoute le changement de access

access.addEventListener("change",luciole)
access2.addEventListener("change",luciole)