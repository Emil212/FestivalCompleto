document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){

    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++){
        const imagen = document.createElement("IMG");
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i; //Agrega atributos nuevos a las imagenes para posteriormente poderlas identificar
        //Añadir la funcion de mostar imagen

        imagen.onclick = mostrarImagen;
        
        const lista = document.createElement('LI');
        lista.appendChild(imagen); //Este crea la lista y se le pasa por parametros las imagenes
        galeria.appendChild(lista); //Este inserta las imagenes dentro de la lista en la galeria 
    }
}


function mostrarImagen(e){
    console.log();

    const  id = parseInt(e.target.dataset.imagenId); //Hace que se convierta el id de un string a un int 


    //Genera la imagen

    const  imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
 
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da  clic , cerrar la
    
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //Boton para cerrar la imagen 

    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    overlay.appendChild(cerrarImagen);

    //Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove(); //Remueve el overlay que contine la imagen  
        body.classList.remove('fijar-body');
    }

    //Mostar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body'); //Sirve para evitar el scroll
}





