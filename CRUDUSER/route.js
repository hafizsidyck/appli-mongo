const express = require("express");

const utilisateurModel = require("./models/utilisateur.model");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Salut Hafiz");
});

route.get("/listeUtilisateur", async (req, res) => {
    try {
        const listeUtilisateur = await utilisateurModel.find({});
        res.status(200).json(listeUtilisateur);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
});
route.post("/createUser", async (req, res) => {
    try {
        const utilisateur = await utilisateurModel.create(req.body);
        console.log(req.body);
        res.status(200).json(utilisateur);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message,
        })
        
    }
})

module.exports = route;