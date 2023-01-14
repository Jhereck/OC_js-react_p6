class ModalCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createModalCard() {
        const $wrapper = document.createElement('div')
        $wrapper.className = 'modal_details'; 
        const details = `
            <h2 class= "photographer_name">${this._photographer.name}</h2>
            <div>
            <label for="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom">
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom">
            <label for="email">Email</label>
            <input type="text" id="email" name="email">
            <label for="message">Votre message</label>
            <input type="text" id="message" name="message">
            </div>
            <button class="contact_button">Envoyer</button>
        `
        $wrapper.innerHTML = details
        return $wrapper
    }

}