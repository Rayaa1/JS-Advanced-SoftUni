import { render } from '../../node_modules/lit-html/lit-html.js'
import page from '../../node_modules/page/page.mjs'
import { logout } from './data/auth.js'
import { getUserData } from './util.js'
import { homePage } from './views/home.js'
import { layoutTemplate } from './views/layout.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'

//TODO zamenish pravilnoto id
const root = document.body
page(decocrateContext)
page('index.html','/')
page('/',homePage)
page('/login',loginPage)
page('/register',registerPage)
page('/logout',logoutAction)

page.start()

function decocrateContext(ctx,next){
    ctx.render = renderView

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