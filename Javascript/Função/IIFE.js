//IIFE - immediatele Invoked Funntion Expression
//função auto-invocada
//Fugir manipular no escopo global.
//Executa uma funcção sem precisar chama-la. Ela é invocada assim que o condigo é lido


(function(){
    console.log("Será executado na hora")
    console.log("Foge do escopo mais abrangente")
})()
