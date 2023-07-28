import { render,page } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { registerPage } from "./views/register.js";
import { searchPage } from "./views/search.js";


const root = document.getElementById('main-content')

page(decorateContext)
page('/',homePage)
page('/login',loginPage)
page('/register',registerPage)
//page('/logout',logoutAction)
page('/catalog',catalogPage)
page('/catalog/:id',detailsPage)
page('/create',createPage)
page('/edit/:id',editPage)
page('/search',searchPage)
updateNav()
page.start()

function decorateContext(ctx,next){
   ctx.render = renderView;
    ctx.updateNav = updateNav;
   const user = getUserData()
   if(user){
        ctx.user = user
    }

    next()
}

function renderView(content){
    render(content,root)
}