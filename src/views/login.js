import {html,render} from '../../node_modules/lit-html/lit-html.js'
import { login } from '../data/auth.js'
import { createSumbitHandler } from '../util.js'

//To DO Replace with actual template
const loginTemplate = (onLogin)=>html`
<h1>Login Page</h1>
<form @onlogin=${onLogin}> 
    <label>Email: <input type='text' name='email'></label>
    <label>Password: <input type='password' name='password'></label>
    <button>Login</button>
</form>

`

export function loginPage(ctx){
    ctx.render(loginTemplate(createSumbitHandler(onLogin)))

    //TODO change user object
    async function onLogin({email,password},form){
        // if (email == '' || password == '') {
          //  return alert('All fields are requires')
        //}
        await login(email,password)
        form.reset()
        //TODO use redirect
        ctx.page.redirect('/')
    }

}