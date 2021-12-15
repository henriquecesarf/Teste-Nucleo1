function limite_textarea(valor) {
    quant = 255;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    } else {
        document.getElementById('text').value = valor.substr(0,quant);
        
    }
   
}

function changeText(){
    dt=document.getElementsByTagName("textarea")[0];
    dt.value=dt.value.replace("porra",'****');  
    dt.value=dt.value.replace("cu",'**');
    dt.value=dt.value.replace("buceta",'******');
    dt.value=dt.value.replace("foder",'*****');
    dt.value=dt.value.replace("fuder",'*****');
    dt.value=dt.value.replace("caralho",'********');
    dt.value=dt.value.replace("puta",'****');
    document.getElementById("text").setAttribute("style","border: 2px solid green");
    document.getElementById("button").setAttribute("style"," background-color: green");
    document.getElementById("button").setAttribute("value","Limpar outra frase");
    document.getElementById("textTit").innerHTML = "frase limpinha :)";
    document.getElementById("textTit").setAttribute("style","color: green");
    
    }


