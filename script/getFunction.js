export {GetFunction}
const $id = (el) => document.getElementById(el)
const GetFunction = async (title) =>{
    try{
        const fragment = document.createDocumentFragment(),
        $mainContent = $id('mainContent')
        $mainContent.textContent = ""
        if(!title) return;
        const fetching = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`),
        json = await fetching.json()
        if(json.totalItems===0) throw{
            status : 404,
            statusText : 'book not found'
        }
        json.items.map(x=>x.volumeInfo).forEach(el=>{
            const template = $id('bookTemplate').content.cloneNode(true),
            getTempEl = (el) => template.querySelector(`.book${el}`)
            getTempEl('Title').textContent = el.title
            getTempEl('Title').href = el.previewLink
            getTempEl('Author').textContent = el.authors || 'autor desconocido';
            
            (el.description && el.description.length>250)
            ?getTempEl('Description').textContent = el.description.substring(0,247).concat('...')
            :getTempEl('Description').textContent = el.description

            getTempEl('Image').src = (el.imageLinks)
            ?el.imageLinks.smallThumbnail
            :'../assets/no_image_found.png'
            fragment.appendChild(template)
           
        })
        $mainContent.append(fragment)
    }
    catch(err){
        console.warn(`Ha ocurrido un error ${err.status}:${err.statusText}`)
        console.error(err)
    }
}


