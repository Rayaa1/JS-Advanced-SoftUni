import {html} from '../../node_modules/lit-html/lit-html.js'

//TODO
const homeTemplate = ()=> html`
<h1>Home</h1>
<p>Welcome</p>
`

export function homePage(ctx){
    ctx.render(homeTemplate())

}