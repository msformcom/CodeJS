// npm init
// npm i express
// node server => exécute le code du fichier server.js

// import de la function express
const express=require("express");


// Versions recentes de node
//import express from "express";

// Création d'un serveur web
var server=express();

// middleware 4200/hello
server.get("/hello",(req,res)=>{
    // fonction exécutée lorsque la requete porte sur /hello
    // req => objet contenant les infos de la requetes
    // res => objet représentant nla réponse
    res.send("Hello world");
});

// middleware qui distribue les fichiers dans le dossier
server.use(express.static("../moncode-ts/dist"));

// Ecouter sur le port 4200
server.listen(4200,()=>{
    console.log("Le serveur est lancé sur le port 4200");
})