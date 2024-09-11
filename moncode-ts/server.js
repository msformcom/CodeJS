// npm init
// npm i express --save-dev
// node server => exécute le code du fichier server.js

// import de la function express
const express=require("express");
const ws=require("ws");

// Création du server de ws
const wsServer=new ws.WebSocketServer({port:4201});
// Chaque fois qu'un client se connect
wsServer.on("connection",(ws)=>{
    // A chaque réception de message
    ws.on("message",(message)=>{
        wsServer.clients.forEach(c=>{
            c.send(message);
            
        });
    });

})



// Versions recentes de node
//import express from "express";

// Création d'un serveur web
var server=express();

// middleware 4200/hello
server.get("/sports",(req,res)=>{
    // fonction exécutée lorsque la requete porte sur /hello
    // req => objet contenant les infos de la requetes
    // res => objet représentant nla réponse
        res.send([
            {l:"basket", s:"Nike"}, //DTO
            {l:"pétanque", s:"Ricard"}
        ]);
});
 
// middleware qui distribue les fichiers dans le dossier
server.use(express.static("./dev"));

// Ecouter sur le port 4200
server.listen(4200,()=>{
    console.log("Le serveur est lancé sur le port 4200");
})