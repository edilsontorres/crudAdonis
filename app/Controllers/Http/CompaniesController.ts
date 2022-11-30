import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Company from 'App/Models/Company'

export default class CompaniesController {
    public async index({auth}: HttpContextContract){
        let companies = await Company.query().where({
            user_id: auth.user!.id
        })
        return companies
    }

    public async store({auth, request}: HttpContextContract){
        let data = request.only(['name', 'initial_date', 'final_date', 'description']);
        let user = auth.user!

        let newCompany = await Company.create({...data, userId: user.id});
        return newCompany

    }
}
