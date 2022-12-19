function validarFormulario(){
    $('.alert').remove();
    //declaracion de variables
    var nombre=$('#nombre').val(),
        correo=$('#correo').val(),
        asunto=$('#asunto').val(),
        mensaje=$('#mensaje').val();
    //validacion del campo nombre

    if(nombre=="" || nombre == null){
        cambiarColor("nombre");
        //Mostrar mensaje de alerta
        mostrarAlerta('Campo obligatorio');
        return false;
    }else{
        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if (!expresion.test(nombre)){
            //Mostrar el mensaje que debe ingresar un nombre valido
            cambiarColor("nombre");
            montraAlerta("No se permiten caracteres especiales o numeros")
        }
    }
    

    //Validamos el correo

    if(correo=="" || correo == null){
        cambiarColor("correo");
        //Mostrar mensaje de alerta
        mostrarAlerta('Campo obligatorio');
        return false;
    }else{
    var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!expresion.test(correo)){
        //Mostrar el mensaje que debe ingresar un nombre valido
        cambiarColor("correo");
        montraAlerta("Por favor ingrese un correo valido");
        return false;
        }
    }

    //Validamos el asunto
    if(asunto=="" || asunto == null){
        cambiarColor("asunto");
        //Mostrar mensaje de alerta
        mostrarAlerta('Campo obligatorio');
        return false;
    }else{
    var expresion = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]*$/;
    if (!expresion.test(asunto)){
        //Mostrar el mensaje que debe ingresar un nombre valido
        cambiarColor("asunto");
        montraAlerta("No se permite caracteres especiales");
        return false;
        }
    }

    //Validamos el mensaje
    if(mensaje=="" || mensaje == null){
        cambiarColor("mensaje");
        //Mostrar mensaje de alerta
        mostrarAlerta('Campo obligatorio');
        return false;
    }else{
    var expresion = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]*$/;
    if (!expresion.test(mensaje)){
        //Mostrar el mensaje que debe ingresar un nombre valido
        cambiarColor("mensaje");
        montraAlerta("No se permite caracteres especiales");
        return false;
        }
    }

    

    $("form").submit();
    return true;
}

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
    colorDefault('mensaje');

});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
    colorDefault('mensaje');

})



//Creamos una funcion de color por defecto a los bordes de los inputs
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    })
}
    









//funcion para cambiar de color a los bordes de los input
function cambiarColor(dato){
    $('#'+ dato).css({
        border: "1px solid #dd5144"
    });
}

//Funcion para mostrar alerta

function mostrarAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto + '</div>');
}






    
