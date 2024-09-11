document.addEventListener("DOMContentLoaded",()=>{
    let connection=new WebSocket("ws://localhost:4201");
    let ul=document.querySelector("#ul_messages") as HTMLElement;
    // réaction à un message provenant du server
    connection.addEventListener("message",async (e)=>{
        let li=document.createElement("li") as HTMLElement;
        li.innerHTML=await e.data.text();
        ul.append(li);
    });

    // Envoi du texte de l'input en cas de click sur le bouton
    document.querySelector("#btn_envoyer")?.addEventListener("click",()=>{
        let input =document.querySelector("#input_text") as HTMLInputElement;
        let text=input.value;
        connection.send(text);
    });
    //connection.close();
})