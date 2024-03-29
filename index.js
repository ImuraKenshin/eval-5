window.addEventListener("DOMContentLoaded",()=>{})


/*
***********************REFERENCE CONTACT**************************
*/
// la fonction fait apparaitre la div ref lorque un objet lier à un produit est sélectionné
let ref = document.querySelector(".ref")

/**
 * la fonction teste la valeur du select et fait apparaitre ref en fonction de celle ci
 * @param {declaratiion} x 
 */
function reference (x){
    // si la valeur du select est une valeur de produit
    if(x.value === "infoProduit" || x.value === "probProduit"){
        ref.classList.remove("hidden")
    }else{
        ref.classList.add("hidden")
    }
}


/*
***********************teste du formulaire**************************
*/




let nom = document.getElementById("nom")
nom.addEventListener("change",()=>{
    testTexte("nom")
})
let prenom = document.getElementById("prenom")
prenom.addEventListener("change",()=>{
    testTexte("prenom")
})

/**
 * la fonction teste le remplissage des champs text
 * @param {chaine de caractères} id 
 * @returns booléen
 */
function testTexte(id){
    let texte = document.getElementById(id)
    // si le champ est vide
    if(texte.value === "" ){
        // fonction erreur
        addError(id,"Ce champ ne peut pas être vide")
        return false
    }else{
        // l'utilisateur n'utilise pas les caractères autorisés
        let req = /^[a-zA-ZÀ-ÿ'-]+$/
        if(req.test(texte.value)===false){
            //fonction erreur
            addError(id,"Vous avez saisie un ou plusieurs caractères non autorisés")
            return false
        // l'utilisateur tape du code
        }else if(hasCode(texte.value)){
            //fonction erreur
            addError(id,"Ecrire du code est interdit")
            return false
        }else if(texte.value.length<2 && texte.value.length>50){
            //fonction erreur
            addError(id,"Limite de caractères atteinte")
            return false
        }
        // fonction enleve erreur
        removeError(id)
        return true
    }
}

// la fonction teste l'adresse mail
let mail = document.getElementById("mail")
mail.addEventListener("change",testMail)

/**
 * la fonction teste le champ mail
 * @returns booléen
 */
function testMail() {
    let eMail = document.getElementById("mail")
    // si le champ est vide
    if(eMail.value === "" ){
        // fonction erreur
        addError("mail","Ce champ ne peut pas être vide")
        return false
    }else{
        // l'utilisateur n'utilise pas les caractères autorisés
        let req = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/
        if(req.test(eMail.value)===false){
            //fonction erreur
            addError("mail","Le mail saisie est dans un format incorrect")
            return false
        // l'utilisateur tape du code
        }else if(hasCode(eMail.value)){
            //fonction erreur
            addError("mail","Ecrire du code est interdit")
            return false
        }else if(eMail.value.length<2 && eMail.value.length>50){
            //fonction erreur
            addError("mail","Limite de caractères atteinte")
            return false
        }
        // fonction enleve erreur
        removeError("mail")
        return true
    }
}

let objet = document.getElementById("objet")
objet.addEventListener("change",()=>{
    reference(objet)
    testObjet()})
/**
 * la fonction teste si l'utilisateur à bien séléctionné une option
 * @returns booléen
*/
function testObjet() {
    if(objet.value === ""){
        addError("objet","Merci de choisir un sujet")
        return false
    }else{
        removeError("objet")
        return true
    }
}

let refArt = document.getElementById("ref")
refArt.addEventListener("change",testRef)

/**
 * la fonction teste la saisie de l'utilisateur dans le champ ref
 * @returns 
 */
function testRef(){
    // si la div ref est visible
    if(ref.classList.contains("hidden") === false){
        // si le champ est vide
        if(refArt.value === "" ){
            console.log("vide")
            // fonction erreur
            addError("ref","Ce champ ne peut pas être vide")
            return false
        }else{
            // l'utilisateur n'utilise pas les caractères autorisés
            let req = /^[a-zA-Z]{3}-\d{6}$/
            if(req.test(refArt.value)===false){
                //fonction erreur
                addError("ref","Votre référence ne correspond pas à nos références produits")
                return false
            // l'utilisateur tape du code
            }else if(hasCode(refArt.value)){
                //fonction erreur
                addError("ref","Ecrire du code est interdit")
                return false
            }
            // fonction enleve erreur
            removeError("ref")
            return true
        }
    }
}


let message = document.getElementById("message")
let long = document.querySelector(".long")
message.addEventListener("change", testMessage)
message.addEventListener("input",()=>{
    // compteur de caractère
    long.innerText = message.value.length+"/500"
})
/**
 * la fonction teste la saisie de l'utilisateur dans le champ message
 * @returns booléen
 */
function testMessage() {
    if(message.value==""){
        // le champ n'est pas vide
        addError("message","Votre message est vide")
        return false
    }else if (hasCode(message.value)){
        // est ce que notre utilisateur n'est pas entrain d'injecter du code
        // => balise script
        addError("message","Vous ne pouvez pas injecter de code ici!")
        return false
    }else if(message.value.length >=500){
        // on limite la longueur du message
        addError("message","Vous avez renseigné trop de caractères")
        return false
    }
    removeError("message")
    return true
    
}

/**
 * role : afficher une erreur : bordure sur le bonne input et remplir le paragraphe associé
 * @param {chaine de caractères} id 
 * @param {chaine de caractères} messageErreur
 * pas de retour
 */
function addError(id,messageErreur){
    let input = document.getElementById(id)
    input.classList.add("input-error")
    let p = document.getElementById("error-"+id)
    p.innerText = messageErreur
    p.classList.remove("hidden")
}
/**
 * role : enleve l'erreur sur l'input
 * @param {chaine de caractères} id 
 * pas de retour
 */
function removeError(id) {
    let input = document.getElementById(id)
    input.classList.remove("input-error")
    let p = document.getElementById("error-"+id)
    p.innerText = ""
    p.classList.add("hidden")
}

/**
 * cette fonction cherche dans une chaine s'il y a une balise script
 * @param {chaine de caractères} text 
 * return true : y'a du code // false : pas de code
 */
function hasCode(text) {
    let reg = /<script/
    return reg.test(text)
}


let monform = document.getElementById("monform")
// A la soumission du formulaire
monform.addEventListener("submit",(e)=>{
    e.preventDefault()
    // on relance notre batterie de tests
    let test1 = testTexte("nom")
    let test2 = testTexte("prenom")
    let test3 = testMail()
    let test4 = testObjet()
    let test5 = testRef(objet)
    let test6 = testMessage()

    // (on re-apelle nos fonctions test)
    if(test1 === false || test2 === false || test3 === false || test4 === false || test5 === false || test6 === false){
        // si une d'entre elle retourne FALSE
        // on envoie pas le formulaire
    }else{
        // sinon (TRUE)
        // j'envoie le formulaire
        monform.submit()
    }
})






