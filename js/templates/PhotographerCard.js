class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('photographer-card-wrapper')

        const article = `
            <a href="photographer.html?id=${this._photographer.id}">
            <div class='photographer-picture'>
                <img
                    alt="${this._photographer.name}"
                    src="/assets/photographers/${this._photographer.portrait}"
                />
            </div>
            <h2 class= "photographer_name">${this._photographer.name}</h2>
            </a>
            <h3 class= "photographer_location">
                <span>${this._photographer.city}, </span>
                <span>${this._photographer.country}</span>
            </h3>
            <h4 class="tagline">${this._photographer.city}</h4>
            <h4 class="price">${this._photographer.price}</h4>
        `
        $wrapper.innerHTML = article
        return $wrapper
    }

}