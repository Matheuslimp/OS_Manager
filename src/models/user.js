const { default: mongoose } = require('mongoose');
const connectToDatabase = require('../Config/database')

connectToDatabase();

//Model Usuário incluido em Users
const UserSchema = mongoose.Schema({
    login:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },


})

const newUser = mongoose.model('Users', UserSchema )

new newUser({
    login: "User.Teste",
    name: "Contoso",
    password: "Senha123"
}).save().then(() =>{
    console.log("Usuario criado com sucesso!")
}).catch((err)=>{ 
    console.log("Erro ao criar usuario" + err)

})