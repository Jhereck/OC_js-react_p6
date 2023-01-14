class App {
    constructor() {
        this.$photographersWrapper = document.querySelector('.photographer_section')
        this.photographersApi = new PhotographersApi('./data/photographers.json')
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographers()

        photographersData
            .map(photographer => new PhotographerModel(photographer))
            .forEach(photographer => {

            const Template = new PhotographerCard(photographer)
            this.$photographersWrapper.appendChild(Template.createPhotographerCard())
        })
    }
}

const app = new App()
app.main()