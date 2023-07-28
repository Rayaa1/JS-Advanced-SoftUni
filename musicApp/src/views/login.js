import { login } from "../data/auth.js";
import { html } from "../lib.js";
import { createSumbitHandler } from "../util.js";


const loginTemplate = (onLogin) => html`
<section id="loginPage">
<form @submit=${onLogin}>
    <fieldset>
        <legend>Login</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <button type="submit" class="login">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`

export function loginPage(ctx){
    ctx.render(loginTemplate(createSumbitHandler(onLogin)))

    async function onLogin({email,password},form){
        if (email == '' || password == '') {
            return alert('All fields are requires')
        }
        await login(email,password)
        form.reset()
        ctx.updateNav()
        ctx.page.redirect('/')
    }
}