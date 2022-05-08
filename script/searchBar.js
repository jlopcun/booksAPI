export {openCloseSearchBar}

const $id = (el) => document.getElementById(el)

const openCloseSearchBar = (thisEl) =>{
    const $searchBar = $id('searchBar')
    $searchBar.classList.toggle('show')
    thisEl.classList.toggle('show')
}