function sortPopularity () {
    const mediaList = document.getElementsByClassName("media-card-wrapper")
    const array = Object.values(mediaList)
    for (let i = 0; i < array.length; i++) {
        array[i].remove()
    }
    app.mediasPhotographerPerPopularity()
}

function sortDate () {
    const mediaList = document.getElementsByClassName("media-card-wrapper")
    const array = Object.values(mediaList)
    for (let i = 0; i < array.length; i++) {
        array[i].remove()
    }
    app.mediasPhotographerPerDate()
}

function sortTitle () {
    const mediaList = document.getElementsByClassName("media-card-wrapper")
    const array = Object.values(mediaList)
    for (let i = 0; i < array.length; i++) {
        array[i].remove()
    }
    app.mediasPhotographerPerTitle()
}