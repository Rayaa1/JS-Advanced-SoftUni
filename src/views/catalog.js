import { html } from "../lib.js";
import { getAllOffers } from "../data/offers.js";

const catalogTemplate = (offers) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">
            ${offers.length == 0 ? html`
            <div>
                <p class="no-pets">No pets in dashboard</p>
            </div>`: offers.map(p => html`
        <div class="animals-board">
           <article class="service-img">
             <img class="animal-image-cover" src="${p.image}">
           </article>
          <h2 class="name">${p.name}</h2>
          <h3 class="breed">${p.breed}</h3>
           <div class="action">
           <a class="btn" href="/catalog/${p._id}">Details</a>
           </div>
        </div>`)} 
        </div>
</section>`


export async function catalogPage(ctx) {
    const offers = await getAllOffers()
    ctx.render(catalogTemplate(offers))

}