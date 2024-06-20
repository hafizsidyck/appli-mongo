const mongoose = require('mongoose')

const UtilisateurSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username obligatoire']
    },
    email: {
        type: String,
        required: [true, 'email obligatoire']
    },
    gender: {
        type: String
    },
    birthdate: {
        type: Date
    },
    country: {
        type: String,
        required: [true, 'Pays obligatoire']
    },
    favorite_techno: {
        type: String,
        required: [true, 'techno obligatoire']
    },
    job_title: {
        type: String,
        required: [true, 'job title obligatoire']
    },
    annual_salary: {
        type: Number,
        required: [true, 'annual salary obligatoire']
    },
    last_login: {
        type: Date, 
    }
})

const utilisateurModel = mongoose.model('utilisateurs', UtilisateurSchema)
module.exports = utilisateurModel;