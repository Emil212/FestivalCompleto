document.addEventListener('DOMContentLoaded', function(){
   // scrollNav();
   navegacionFija();

});

function navegacionFija(){

    const barra = document.querySelector('.header')

    //Registrar el interseccion Observer
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){ //isIntersecting para saber si un elemento es visisble 
            barra.classList.remove('fijo');
        }
        else{
            barra.classList.add('fijo');
        }
    });


    //Elemento a observar

    observer.observe(document.querySelector('.video'));
}

// function scrollNav (){

//     const enlaces = document.querySelectorAll('.navegacion-principal a');

//     enlaces.forEach(function(enlace){
//         enlace.addEventListener('click', function(e){
//             e.preventDefault();
//             const seccion = document.querySelector(e.target.attribute.href.value);   
            
//             seccion.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// }