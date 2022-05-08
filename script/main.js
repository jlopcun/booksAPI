import { GetFunction } from "./getFunction.js"
import {openCloseSearchBar} from "./searchBar.js"
const $id = (el) => document.getElementById(el)

const $getBooks = $id('getBooks'),
$openSearch = $id('openSearch')

$getBooks.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    const getBooksElement = (el) => $getBooks.querySelector(`.getBooks__${el}`)

    const searchValue = getBooksElement('search--field')
    GetFunction(searchValue.value)
    searchValue.value = ""
})
$openSearch.addEventListener('click',()=>{
    openCloseSearchBar($openSearch)
})