import { getAllAlbums} from "../data/albums.js";
import { html } from "../lib.js";

const catalogTemplate = (album,isLoggedIn) => html`
<section id="catalogPage">
<h1>All Albums</h1>
${album.length == 0 ? html`<p>No Albums in Catalog!</p>` : album.map(p => html `<div class="card-box">
    <img src="${p.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${p.name}</p>
            <p class="artist">Artist: ${p.artist}</p>
            <p class="genre">Genre: ${p.genre}</p>
            <p class="price">Price: $${p.price}</p>
            <p class="date">Release Date: ${p.releaseDate}</p>
        </div>
        ${isLoggedIn ? html `<div class="btn-group">
            <a href="/catalog/${p._id}" id="details">Details</a>
        </div>`:null}
    </div>
</div>`)}
</section>
`

export async function catalogPage(ctx) {
    const albums = await getAllAlbums()
    const user = ctx.user
    const isLoggedIn = user !== undefined;
    ctx.render(catalogTemplate(albums,isLoggedIn))

}