import * as Router from 'koa-router'

const router = new Router()

router.post('/home', async ctx => {
	ctx.body = 'Hello Router';
})

router.get('/list', async ctx => {
	ctx.body = 'Hello Router';
})

export { router }