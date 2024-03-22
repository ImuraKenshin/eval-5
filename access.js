window.addEventListener("DOMContentLoaded",()=>{})


let monStockage = localStorage
window.addEventListener("load",()=>{
    if(monStockage.getItem("luciole") === 'true'){
        access.checked = true
        access2.checked = true
        luciole()
    }else{
    }
})

// la section traite de l'accessibilté sur le site

let corps = document.getElementById("body")


// la fonction verifie si body possède la classe init, si oui elle enlève la classe init et change les valeurs des font

function luciole(){
    // est ce que body possède init?
    if(corps.classList.contains("init")){
        //j'enlève la classe init
        corps.classList.remove("init")
        //je change la valeur des fonts dans le root
        document.body.style.setProperty(`--roboto`,`"Luciole"`)
        document.body.style.setProperty(`--archivo`,`"Luciole"`)
    }else{
        //je remet les valeurs des roots initiaux
        document.body.style.setProperty(`--roboto`,`"Roboto"`)
        document.body.style.setProperty(`--archivo`,`"Archivo black"`)
        //j'ajoute la classe init
        corps.classList.add("init")
    }
}

// je vais chercher ma première checkbox

let access = document.getElementById("accessibilite")
let access2 = document.getElementById("accessibilite2")

// j'écoute le changement de access

access.addEventListener("click",()=>{
    luciole()
    monStockage.setItem("luciole",access.checked)
})
access2.addEventListener("click",()=>{
    luciole()
    monStockage.setItem("luciole",access2.checked)
})