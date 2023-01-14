class PhotographerHeaderCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerHeaderCard() {
        const $wrapper = document.createElement('div')
        $wrapper.className = 'photographer_details'; 
        const details = `
            <img
                alt="${this._photographer.name}"
                src="/assets/photographers/${this._photographer.portrait}"
            />
            <h2 class= "photographer_name">${this._photographer.name}</h2>
            <h3 class= "photographer_location">
                <span>${this._photographer.city}, </span>
                <span>${this._photographer.country}</span>
            </h3>
            <h4 class="tagline">${this._photographer.tagline}</h4>
        `
        $wrapper.innerHTML = details
        return $wrapper
    }

}