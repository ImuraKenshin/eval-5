window.addEventListener("DOMContentLoaded",()=>{})

// light recupère l'information si le thème est sombre

let dark = window.matchMedia('(prefers-color-scheme:dark)')

// la fonction affiche le favIcone en fonction de la valeur de light.matches

function favIcone(){
    let link = document.getElementById("favIcone")
    // si le thème est sombre
    if(dark.matches){
        // affiche le favIcone blanc dans link
        link.href = "./imagesSIte/fav-icone.png"
    }else{
        //sinon
        // affiche le favicone noir dans link
        link.href = "./imagesSIte/favicon-noir.png"
    }
}
favIcone()