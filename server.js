const express = require('express')
const bp = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config.json')
const router = express.Router()
const app = express()
app.use(bp.json())

router.post('/login',(req,res)=>{
    const postdata= req.body
    const user={
        "uname":postdata.uname,
        "email":postdata.email
    }
    const token= jwt.sign(user,config.secret,{expiresIn:config.tokenlife})
    const response={
        "status":'logged in',
        "token":token
    }
    res.send(response)
})
router.use(require('./tokenChecker'))
router.get('/secure', (req, res) => {
    res.send('secured URL accessed')
})
app.use('/api', router)
app.listen(4000, () => {
    console.log('server is ready');
})