/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProdutosController from '#controllers/produtos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/nome', async () => {
  return {
    nome: 'Amanda',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()
