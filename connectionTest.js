const mongoose= require('mongoose')
const URL ="mongodb+srv://admin:admin00@cluster0.l8iwhhy.mongodb.net/gfgdb?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL)

const user=mongoose.model('demousers',{name:String,email:String})
const myUser= new user({name:'admin',email:'admin@mail.com'})
myUser.save().then(()=> console.log('user added'))