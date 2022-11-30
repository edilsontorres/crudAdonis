
import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'AuthController.login');
Route.post('/newUser', 'UsersController.store');
Route.get('/companies', 'CompaniesController.index').middleware('auth');
Route.post('/companies', 'CompaniesController.store').middleware('auth');


