function addLike(id) {
    const thisLike = document.getElementsByClassName(id)[0]
    const totLikes = document.getElementsByClassName("TotalLikes")[0]
    if (thisLike.classList[2] === thisLike.innerHTML) {
        thisLike.innerHTML++
        totLikes.innerHTML++
    }    
}
