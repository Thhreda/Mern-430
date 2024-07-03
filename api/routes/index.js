const {Router}= require('express')
const authRoutes = require('./auth.routes.js')

const router = Router()

router.use('/auth', authRoutes)

router.use((req, res, next)=>{
  next({
    message: 'Resources not found',
    status:404
  })

})

module.exports = router
