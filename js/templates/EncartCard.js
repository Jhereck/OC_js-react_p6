class EncartCard {
    constructor(totalLikes, price) {
        this._totalLikes = totalLikes
        this._price = price
    }

    createEncartCard() {
        const $wrapper = document.createElement('div')
        $wrapper.className = 'encart_details'; 
        const details = `
            <h2 class= "Encart">
            <span class="TotalLikes">${this._totalLikes}</span>
            <span class="Price">${this._price}</span>
            </h2>
        `
        $wrapper.innerHTML = details
        return $wrapper
    }

}