import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';



const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton);

//TAKEUNTIL EMITE VALORES HASTA QUE OTRO OBSERVABLE EMITA SU PRIMER VALOR
// SKIP SALTA EL EVENTO LA CANTIDAD DE VECES SEGUL PARAMS PASADO
const counter$ = interval(1000);   
// const clickBtn$ = fromEvent(boton, 'click');
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('Tap antes de skip')),
    skip(1),
    tap(() => console.log('Tap despues de skip'))
)

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('Next: ',val),
    complete: () => console.log('Complete')
});


