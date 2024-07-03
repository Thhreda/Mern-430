const bcrypt=require('bcryptjs')
const { User } = require('../../models')

class RegisterCtrl{
  register =async(req, res, next)=>{
    try{
      let {name, email, password, confirmPassword, phone, address} =req.body  //destructuring
      if(password == confirmPassword){
        // const salt =bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, 10 )

        await User.create({name,email,password:hash,phone,address})
        res.send({
          message:'thank you for registering'
        })



      }else{
        next({
          message: 'There seems to be some validation problem',
          status:422,
          errors:{
            password: 'The password is not confirmed'
          }
        })   //yesle error falxa, validation error
      }

    }catch(error){
      console.log(error)
    }
    res.send('Register')
 
  }
}

module.exports = new RegisterCtrl