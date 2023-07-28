import { html, render } from "../lib.js";
import { get } from "../data/api.js";
import { searchAlbum } from "../data/albums.js";
import { getUserData } from "../util.js";

const searchTemplate = (isClicked,onSearch,albums,user) => html`<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button @click=${onSearch} class="button-list">Search</button>
</div>

<h2>Results:</h2>
${isClicked ? html`<div class="search-result">
    ${albums.length > 0  ? albums.map(p =>  html `<div class="card-box">
        <img src="${p.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${p.name}</p>
                <p class="artist">Artist: ${p.artist}</p>
                <p class="genre">Genre: ${p.genre}</p>
                <p class="price">Price: $${p.price}</p>
                <p class="date">Release Date: ${p.releaseDate}</p>
            </div>
            ${user == undefined ? null:html ` <div class="btn-group">
                <a href="/catalog/${p._id}" id="details">Details</a>
            </div>`}
           
        </div>
    </div>`) :html `<p class="no-result">No result.</p>`}
    `:null}
</div>
</section>`

export async function searchPage(ctx){
    //const user = ctx.user
    ctx.render(searchTemplate(false,onSearch))
    
async function onSearch(e){
    const searchElement = document.getElementById('search-input')
    const query = searchElement.value
    if(!query){
        return alert('Enter name')
    }
    const albums = await searchAlbum(query)
    
    ctx.render(searchTemplate(true,onSearch,albums,ctx.user))
}


}

