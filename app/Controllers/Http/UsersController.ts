import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async store({request, response}: HttpContextContract){
        let {name, email, password} = request.all();

        if( name && email && password ){
            let newUser = await User.create({
               name,
               email,
               password
            })
            await newUser.save();
        } else {
            return response.json({error: 'Envie todos os dados para cadastrar um novo usuário'})
        }
    }
}
