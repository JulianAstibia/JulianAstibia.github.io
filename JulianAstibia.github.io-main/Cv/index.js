
const portafolio    =document.querySelector('.portafolio')
const punto         =document.querySelectorAll('.punto')

punto.forEach( ( cadapunto, i)=>{
    punto[i].addEventListener('click', ()=>{
        
        let posicion = i
        let operacion = posicion * -25

        portafolio.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadapunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})

const bloque =document.querySelectorAll('.bloque')
const boton  =document.querySelectorAll('.boton')

boton.forEach( ( cadaboton, i)=>{
    boton[i].addEventListener('click', ()=>{
        boton.forEach( (cadaboton, i)=>{
            boton[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })
        boton[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})