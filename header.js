let burger = document.getElementById("burger")
let lateral = document.getElementById("headerBurger")
let span1 = document.getElementById("1")
let span2 = document.getElementById("2")
let span3 = document.getElementById("3")

// lorsque je clique sur l'icône du burger
burger.addEventListener("click",()=>{
    // si le burger à la classe init
    if(burger.classList.contains("init")){
        // j'enlève la classe init
        burger.classList.remove("init")
        // je fait le déplacement du menu latéral
        lateral.style.transform = "translateX(0)"
        // je change l'apparence de l'icône en croix rouge
        span1.classList.add("burgerCroix1")
        span2.classList.add("burgerCroix2")
        span3.classList.add("burgerCroix3")
        // sinon
    }else{
        // j'ajoute la classe init
        burger.classList.add("init")
        // j'annule le déplacement du menu latéral
        lateral.style.transform = "translateX(200px)"
        // je remet l'icône du burger
        span1.classList.remove("burgerCroix1")
        span2.classList.remove("burgerCroix2")
        span3.classList.remove("burgerCroix3")
    }
})
