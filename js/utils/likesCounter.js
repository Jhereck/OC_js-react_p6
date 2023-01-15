function addLike(id) {
    const thisLike = document.getElementsByClassName(id)[0]
    if (thisLike.classList[2] === thisLike.innerHTML) {
        thisLike.innerHTML++
    }    
}
