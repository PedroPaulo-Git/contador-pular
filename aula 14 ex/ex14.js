function contar(){
    
 var inicio = parseInt(document.getElementById('inicio').value)
 var fim = parseInt(document.getElementById("fim").value)
 var passo = parseInt(document.getElementById("passo").value)
 var c = document.getElementById('c')

if (fim < inicio){

for (var inicio;inicio>=fim;inicio -= passo){

    c.innerText+= "  👉  " + inicio + "  " }
    

}else if (passo > fim ){
alert("The pass can't be greater than end")

}else if( passo <= 0 ){
  
    alert("The pass cannot be 0, considering as 1")

    for (var inicio;inicio<=fim;inicio += 1){

        c.innerText+= "  👉  " + inicio +"  " }
        
        
        }else if (inicio<=fim ){


for (var inicio;inicio<=fim;inicio += passo){

c.innerText+= "  👉  " + inicio + "  " }


}

}

