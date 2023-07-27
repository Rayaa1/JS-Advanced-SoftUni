import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
import { logout } from './data/auth.js'
import { getUserData } from './util.js'
import { catalogPage } from './views/catalog.js'
import { createPage } from './views/create.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js'
import { homePage } from './views/home.js'
import { layoutTemplate } from './views/layout.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
const root = document.getElementById('wrapper')
page(decorateContext)
//page('index.html','/')
page('/',homePage)
page('/login',loginPage)
page('/register',registerPage)
page('/logout',logoutAction)
page('/catalog',catalogPage)
page('/catalog/:id',detailsPage)
page('/create',createPage)
page('/catalog/:id/edit',editPage)

page.start()

function decorateContext(ctx,next){
    ctx.render = renderView()

    next()
}
function renderView(content){
    const userData = getUserData()
    render(layoutTemplate(userData,content),root)

}

function logoutAction(ctx){
    logout()
    ctx.page.redirect('/')

}