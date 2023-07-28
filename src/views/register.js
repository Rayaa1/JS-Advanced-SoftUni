import {html,render} from '../../node_modules/lit-html/lit-html.js'
import { register } from '../data/auth.js'
import { createSumbitHandler } from '../util.js'

const registerTemplate = (onRegister)=>html`
<h1>Register Page</h1>
<form @onregister=${onRegister}> 
    <label>Email: <input type='text' name='email'></label>
    <label>Password: <input type='password' name='password'></label>
    <label>Repeat: <input type='password' name='repass'></label>
    <button>Register</button>
</form>

`

export function registerPage(ctx){
    ctx.render(registerTemplate(createSumbitHandler(onRegister)))

    //TODO change imenata na promenlivite
    async function onRegister({email,password,repass},form){
        if(email == ''||password == ''){
            return alert('All fields are requires')
        }
        if(password != repass){
            return alert('Passwords don\'t match')
        }
        await register(email,password)
        form.reset()
        //TODO redirect
        ctx.page.redirect('/')
    }

}