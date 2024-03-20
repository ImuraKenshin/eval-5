fetch("./baskets.json")
.then(data =>{
    return data.json()
})
.then(donnees => {
    contenu(donnees)
})


// la section suivante inclut les fonctions pour intégrer le contenu dynamique dans la page

/**
 * la fonction intègre du contenu depuis un tableau de donnée
 * @param {Array} donnees 
 */
function contenu (donnees){
    let div = document.getElementById("articleContainer")
    // pour chaque élement du tableau donnees
    donnees.forEach(donnee=>{
        //je rajoute dans le contenu html de ma div mon article avec les données du json
        div.innerHTML += `<a href="./detailProduit.html" title="Détail du produit"><article class="flex gap32">
        <div><img src="./imagesProduits/${donnee.photo}" alt="${donnee.description}"></div>
        <div class="flex gap16">
            <div class="outNew flex align-center space-between">
                <h5>${donnee.nom}</h5>
                <p class="newPrix">${donnee.prix}€</p>
            </div>
            <p>${donnee.description}</p>
        </div>
    </article></a>`

    })
}
/*
`<article class="flex gap32">
        <div><img src="./imagesProduits/${donnee.photo}" alt="${donnee.description}"></div>
        <div class="flex gap16">
            <div class="outNew flex align-center space-between">
                <h5>${donnee.nom}</h5>
                <p class="newPrix">${donnee.prix}€</p>
            </div>
            <p>${donnee.description}</p>
        </div>
    </article>`
*/