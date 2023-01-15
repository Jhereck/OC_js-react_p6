class MediaCard {
    constructor(media) {
        this._media = media
    }

    createMediaCard() {
        const $wrapper = document.createElement('media')
        $wrapper.classList.add('media-card-wrapper')

        const mediaTemplate = `
            <div class='media-picture'>
    ${this._media.image ? `

        <img
        alt="${this._media.title}"
        src="/assets/images/${this._media.photographerId}/${this._media.image}"
        onclick="openModal(${this._media.id})"
        />
    ` : `
        <video controls>
        <source src="/assets/images/${this._media.photographerId}/${this._media.video}" type="video/mp4">
        </video>
    `}
            </div>
            <h2 class= "details">
                <span class="title">${this._media.title}, </span>
                <span class='numberOfLikes ${this._media.id} ${this._media.likes}' onclick=addLike(${this._media.id})>${this._media.likes}</span>
            </h2>
            </a>
        `

        $wrapper.innerHTML = mediaTemplate
        return $wrapper
    }

}