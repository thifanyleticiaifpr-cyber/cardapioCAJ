var cardapio=[]
var cardC
var cardA 
var cardJ
var i=0

    document.write("<h1>Café da manhã</h1>")
do{
    cardC = prompt("Café da manhã: ")

    if(cardC!=null){
       if(cardC==""){
         alert("O cardápio está vazio, caso queira adicionar um novo item digite o nome do mesmo, caso contrário clique em CANCELAR")
       }
      else{
        cardapio.push(cardC)
        i++
      }}
      
     else{ 
        if(i>2){
            alert("Cardápio do café da manhã adicionado com sucesso")
        }
        else{
            alert("O cardápio do café da manhã deve conter no mínimo 2 itens, por favor adicione mais itens")
        }

     } 
}while(cardC!=null)
    
    alert(cardapio)

    for(i=0; i<cardapio.length-1; i++){
        document.write("<h2>"+cardapio[i]+"</h2>")
    
    }

    
    document.write("<h1>Almoço</h1>")

    do{
    cardA = prompt("Almoço: ")

    if(cardA!=null){
       if(cardA==""){
         alert("O cardápio está vazio, caso queira adicionar um novo item digite o nome do mesmo, caso contrário clique em CANCELAR")
       }
      else{
        cardapio.push(cardA)
        i++
      }}
      
     else{ 
        if(i>2){
            alert("Cardápio do almoço adicionado com sucesso")
        }
        else{
            alert("O cardápio do almoço deve conter no mínimo 2 itens, por favor adicione mais itens")
        }

     } 
}while(cardA!=null)
    
    alert(cardapio)

    for(i=0; i<cardapio.length-1; i++){
        document.write("<h2>"+cardapio[i]+"</h2>")
    
    }

     document.write("<h1>Janta</h1>")

    do{
    cardJ = prompt("Janta: ")

    if(cardJ!=null){
       if(cardJ==""){
         alert("O cardápio está vazio, caso queira adicionar um novo item digite o nome do mesmo, caso contrário clique em CANCELAR")
       }
      else{
        cardapio.push(cardJ)
        i++
      }}
      
     else{ 
        if(i>2){
            alert("Cardápio da janta adicionado com sucesso")
        }
        else{
            alert("O cardápio da janta deve conter no mínimo 2 itens, por favor adicione mais itens")
        }

     } 
}while(cardJ!=null)
    
    alert(cardapio)

    for(i=0; i<cardapio.length-1; i++){
        document.write("<h2>"+cardapio[i]+"</h2>")
    
    }

    