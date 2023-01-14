class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
        .then(res => res.json())
        .catch(err => console.log('an error occured', err))
    }

    async getPhotographerId() {
        const url = new URLSearchParams(window.location.search)
        return url.get('id')
    }
}

class PhotographersApi extends Api {
    constructor(url) {
        super(url)
    }

    async getPhotographers() {
        const res = await this.get()
        return res.photographers
    }

        async getPhotographer() {
        const id = await this.getPhotographerId()
        const res = await this.get()
        const onePhoto = res.photographers.filter(photo => photo.id === parseInt(id))
        return onePhoto
    }
}

class MediasApi extends Api {
    constructor(url) {
        super(url)
    }

        async getAllMedias() {
        const res = await this.get()
        return res.media
    }

    async getMedias() {
        const id = await this.getPhotographerId()
        const res = await this.get()
        const mediasOnePhoto = res.media.filter(media => media.photographerId === parseInt(id))
        return mediasOnePhoto
    }
}