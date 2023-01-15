class App {
    constructor() {
        this.$headerWrapper = document.querySelector('.photograph-header')
        this.$mediasWrapper = document.querySelector('.media_section')
        this.$modalWrapper = document.querySelector('.modal form')
        this.photographersApi = new PhotographersApi('./data/photographers.json')
        this.mediasApi = new MediasApi('./data/photographers.json')
    }

        async detailsPhotographer() {

            const headerData = await this.photographersApi.getPhotographer()
            const header = new PhotographerModel(headerData[0])
            const headerTemplate = new PhotographerHeaderCard(header)
            this.$headerWrapper.appendChild(headerTemplate.createPhotographerHeaderCard())

            
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



        async openContactModal() {
            const modalData = await this.photographersApi.getPhotographer()
            const modal = new PhotographerModel(modalData[0])
            const modalTemplate = new ModalCard(modal)
            this.$modalWrapper.appendChild(modalTemplate.createModalCard())
        }

}

const app = new App()
app.detailsPhotographer()
app.mediasPhotographer()
app.openContactModal()
