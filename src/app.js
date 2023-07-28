import { render,page } from "./lib.js";
import { homePage } from "./views/home.js";
import { catalogPage } from "./views/catalog.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { updateNav } from "./views/nav.js";
import { getUserData } from "./util.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { editPage } from "./views/edit.js";

const root = document.getElementById('content')

page(decorateContext)
page('/',homePage)
page('/login',loginPage)
page('/register',registerPage)
//page('/logout',logoutAction)
page('/catalog',catalogPage)
page('/catalog/:id',detailsPage)
page('/create',createPage)
page('/edit/:id',editPage)
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



