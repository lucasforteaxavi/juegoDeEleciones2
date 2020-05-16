

function botonDelColorRojo(){
    document.getElementById('contenedorCancionesRojo').style.display='inline-block';

        // Si quier hacer que desaparezca los botones seria asi:
        document.getElementById('contenedorBotones').style.display='none';
}
function botonDelColorAmarillo(){
    document.getElementById('contenedorCancionesAmarillo').style.display='inline-block';

        // Si quier hacer que desaparezca los botones seria asi:
        document.getElementById('contenedorBotones').style.display='none';
}

function botonDelColorAzul(){
    document.getElementById('contenedorCancionesAzul').style.display='inline-block';

        // Si quier hacer que desaparezca los botones seria asi:
        document.getElementById('contenedorBotones').style.display='none';
}

// console.log(botonDelColor);
// var codigoCancion;

function respuestaCodigoRojo(){
    var codigoCancion= document.getElementById('codigoDelRojo').value;

    codigoCancion= codigoCancion.toUpperCase();
    
    if (codigoCancion=='RGCC'){
       
        document.getElementById('acertijo1').style.display='block';
        // Desaparece las canciones
        document.getElementById('contenedorCancionesRojo').style.display='none';
         // alert('Estas cancion es de Naruto');
    } else if (codigoCancion=='OP22'){
        
        document.getElementById('acertijo2').style.display='block';
        document.getElementById('contenedorCancionesRojo').style.display='none';
    } else if (codigoCancion=='SC1C'){
        document.getElementById('acertijo3').style.display='block';
        document.getElementById('contenedorCancionesRojo').style.display='none';
    }
    console.log(codigoCancion);
}






function respuestaCodigoAmarillo(){
    var codigoCancion= document.getElementById('codigoDelAmarillo').value;

    codigoCancion= codigoCancion.toUpperCase();
    
    if (codigoCancion=='NS01'){
       
        document.getElementById('acertijo4').style.display='block';
        // Desaparece las canciones
        document.getElementById('contenedorCancionesAmarillo').style.display='none';
        
    } else if (codigoCancion=='DBS1'){

        document.getElementById('acertijo5').style.display='block';
        document.getElementById('contenedorCancionesAmarillo').style.display='none';

    } else if(codigoCancion=='WTFS'){

        document.getElementById('acertijo6').style.display='block';
        document.getElementById('contenedorCancionesAmarillo').style.display='none';
    }
    
}

function respuestaCodigoAzul(){
    var codigoCancion= document.getElementById('codigoDelAzul').value;

    codigoCancion= codigoCancion.toUpperCase();
    
    if (codigoCancion=='GMSE'){
       
        document.getElementById('acertijo7').style.display='block';
        // Desaparece las canciones
        document.getElementById('contenedorCancionesAzul').style.display='none';
        
    } else if (codigoCancion=='LGBR'){

        document.getElementById('acertijo8').style.display='block';
        document.getElementById('contenedorCancionesAzul').style.display='none';

    } else if(codigoCancion=='RGEC'){

        document.getElementById('acertijo9').style.display='block';
        document.getElementById('contenedorCancionesAzul').style.display='none';
    }
    
}




// Resolver Acertijos
function resolverAcertijo1(){
    var respuestaAcertijo=document.getElementById('respuestaAcertijo1').value;
    respuestaAcertijo= respuestaAcertijo.toLowerCase(); /*Para convertir todas las letras en minuscula y pueda ser eficiente el if*/
    if(respuestaAcertijo=='paula'){
        alert('Correcto, sigue adelante');
        document.getElementById('acertijo1').style.display='none';
        document.getElementById('goku').style.display='block';
        // Tengo que canviar la img de naruto y poner la de goku
        

    }else{
        alert('Incorrecto, empieza de nuevo');
        location.reload();
    }
}
// Debo de tener cuidado con las variables dentro de la funcion respuestaAcertijo si veo que me arrastra el resultado lo canviare por let

function resolverAcertijo2(){
    var rAcertijo2=document.getElementById('respuestaAcertijo2').value;

    if(rAcertijo2=='miente'){
        // console.log(rAcertijo2);
        alert('correcto');
        document.getElementById('acertijo2').style.display='none';
        document.getElementById('luffy').style.display='block';
    } else{
        alert('Incorrecto');
    }

}


function resolverAcertijo3(){
    var rAcertijo3=document.getElementById('respuestaAcertijo3').value;
    rAcertijo3=parseInt(rAcertijo3);

    
    if(rAcertijo3==4){
        alert('Correcto');
        document.getElementById('acertijo3').style.display='none';
        document.getElementById('shinchan').style.display='block';

    } else {
        alert('Incorrecto, empieza de nuevo');
        location.reload();
        
    }
    

}


function resolverAcertijo4(){
    var rAcertijo4=document.getElementById('respuestaAcertijo4').value;
    rAcertijo4=rAcertijo4.toLowerCase();

    
    if(rAcertijo4=='sudafrica'){
        alert('Correcto');
        document.getElementById('acertijo4').style.display='none';
        document.getElementById('naruto').style.display='block';

    } else {
        alert('Incorrecto, empieza de nuevo');
        location.reload();
        
    }
    

}

function resolverAcertijo5(){
    var rAcertijo5=document.getElementById('respuestaAcertijo5').value;
    rAcertijo5=parseInt(rAcertijo5);

    
    if(rAcertijo5==47){
        alert('Correcto');
        document.getElementById('acertijo5').style.display='none';
        document.getElementById('potara').style.display='block';

    } else {
        alert('Incorrecto, empieza de nuevo');
        location.reload();
        
    }
    

}

function resolverAcertijo6(){
    var rAcertijo6=document.getElementById('respuestaAcertijo6').value;
    rAcertijo6=rAcertijo6.toLowerCase();

    
    if(rAcertijo6=='la isla misteriosa'){
        alert('Correcto');
        document.getElementById('acertijo6').style.display='none';
        document.getElementById('pikachu').style.display='block';

    } else {
        alert('Incorrecto, empieza de nuevo');
        location.reload();
        
    }
    

}

function resolverAcertijo7(){
    var rAcertijo7R=document.getElementById('respuestaAcertijo7R').value;
    rAcertijo7R=parseInt(rAcertijo7R);

    var rAcertijo7J=document.getElementById('respuestaAcertijo7J').value;
    rAcertijo7J=parseInt(rAcertijo7J);


    
    if(rAcertijo7R==14 && rAcertijo7J==10){
        alert('Correcto');
        document.getElementById('acertijo7').style.display='none';
        document.getElementById('doraemon').style.display='block';

    } else {
        alert('Incorrecto, empieza de nuevo');
        location.reload();
        
    }
    

}


function resolverAcertijo8(){
    var rAcertijo8=document.getElementById('respuestaAcertijo8').value;
    rAcertijo8=rAcertijo8.toLowerCase();

    
    if(rAcertijo8=='despierto'){
        alert('Correcto');
        document.getElementById('acertijo8').style.display='none';
        document.getElementById('wonderWoman').style.display='block';

    } else {
        alert('Incorrecto, empieza de nuevo');
        location.reload();
        
    }
    

}

function resolverAcertijo9(){
    var rAcertijo9=document.getElementById('respuestaAcertijo9').value;
    // rAcertijo9=parseInt(rAcertijo9);

    
    if(rAcertijo9==062 || rAcertijo9=='062'){
        alert('Correcto');
        document.getElementById('acertijo9').style.display='none';
        document.getElementById('vegeta').style.display='block';

    } else {
        alert('Incorrecto, empieza de nuevo');
        location.reload();
        
    }
    

}


// Onclick abrir o cerrar el div para poner los codigos para ir a vegeto
var estadoBuscadorVegetto='oculto';
function mostrar(){
    
    if (estadoBuscadorVegetto=='oculto'){
    document.getElementById('buscadorVegetto').style.display='inline-block';
    estadoBuscadorVegetto='visible';
    
    } else  {
        document.getElementById('buscadorVegetto').style.display='none';
        estadoBuscadorVegetto='oculto';
        
    }
    // El problema era el comodin que me lo coge como 0 y cuando le vuelvo a hacer click me lo vuelve a asignar a 0 tenia que dejarlo fuera de la funcion

    // var comodin=0
    // switch (comodin){
    //     case 0: document.getElementById('buscadorVegetto').style.display='inline-block';
    //     break;
    //     case 1:  document.getElementById('buscadorVegetto').style.display='none';
    //     break;
    // }
}

// Ganar (victoria, has encontradoa Vegetto)

function victoria(){
    var codigo1=document.getElementById('codigoGoku').value;
                codigo1=codigo1.toUpperCase();

    var codigo2=document.getElementById('codigoVegeta').value;
                 codigo2=codigo2.toUpperCase();

    var codigo3=document.getElementById('codigoPotara').value;
                codigo3=codigo3.toUpperCase();

    if (codigo1=='KAKAGK'&& codigo2=='PRIVTA' && codigo3=='FUSPOT'){
        // alert('correcto');
        // Reenvio a la pagina ganadora de vegeto. Funciona XD
        window.location.href='vegetto.html'
    }
}