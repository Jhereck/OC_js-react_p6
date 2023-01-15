class App {
    constructor() {
        this.$headerWrapper = document.querySelector('.photograph-header')
        this.$filterWrapper = document.querySelector('.filter')
        this.$mediasWrapper = document.querySelector('.media_section')
        this.$modalWrapper = document.querySelector('.modal form')
        this.$encartWrapper = document.querySelector('.likes_tjm')
        this.photographersApi = new PhotographersApi('./data/photographers.json')
        this.mediasApi = new MediasApi('./data/photographers.json')
    }

        async detailsPhotographer() {
            const headerData = await this.photographersApi.getPhotographer()
            const header = new PhotographerModel(headerData[0])
            const headerTemplate = new PhotographerHeaderCard(header)
            this.$headerWrapper.appendChild(headerTemplate.createPhotographerHeaderCard())
        }

        async loadFilter() {
            const filter = new Filter()
            this.$filterWrapper.appendChild(filter.createFilter())
        }

        async mediasPhotographer() {
        const mediasData = await this.mediasApi.getMedias()
            mediasData
                .map(media => new MediaModel(media))
                .forEach(media => {
                    const Template = new MediaCard(media)
                    this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        }

        async mediasPhotographerPerPopularity() {
        const mediasData = await this.mediasApi.getMediasPerPopularity()
            mediasData
                .map(media => new MediaModel(media))
                .forEach(media => {
                    const Template = new MediaCard(media)
                    this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        }

        async mediasPhotographerPerDate() {
        const mediasData = await this.mediasApi.getMediasPerDate()
            mediasData
                .map(media => new MediaModel(media))
                .forEach(media => {
                    const Template = new MediaCard(media)
                    this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        }

        async mediasPhotographerPerTitle() {
        const mediasData = await this.mediasApi.getMediasPerTitle()
            mediasData
                .map(media => new MediaModel(media))
                .forEach(media => {
                    const Template = new MediaCard(media)
                    this.$mediasWrapper.appendChild(Template.createMediaCard())
            })
        }

        async loadContactModal() {
            const modalData = await this.photographersApi.getPhotographer()
            const modal = new PhotographerModel(modalData[0])
            const modalTemplate = new ModalCard(modal)
            this.$modalWrapper.appendChild(modalTemplate.createModalCard())
        }

        async loadEncart() {
            const encartPhoto = await this.photographersApi.getPhotographer()
            const encartMedias = await this.mediasApi.getMedias()
            let totalLikes = 0
            for (let i = 0; i < Object.keys(encartMedias).length; i++) {
                totalLikes += parseInt(encartMedias[i].likes)
            }
            const encartTemplate = new EncartCard(totalLikes, encartPhoto[0].price)
            this.$encartWrapper.appendChild(encartTemplate.createEncartCard())
        }

}

const app = new App()
app.detailsPhotographer()
app.mediasPhotographer()
app.loadContactModal()
app.loadEncart()
app.loadFilter()

