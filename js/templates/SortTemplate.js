class Filter {
    constructor() {

    }

    createFilter() {
        const $wrapper = document.createElement('div')
        $wrapper.className = 'filters'; 
        
        const filters = `
            <div class= "filter_popularity" onclick=sortPopularity()>Popularité</div>
            <div class= "filter_date" onclick=sortDate()>Date</div>
            <div class= "filter_title" onclick=sortTitle()>Titre</div>
        `
        $wrapper.innerHTML = filters
        return $wrapper
    }

}