import { fromEvent } from 'rxjs';
import { first, take, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    
    tap<MouseEvent>(console.log),
    
    //MAP optimizado
    map( ({clientX, clientY }) => ({clientY, clientX })),
     
    first(event => event.clientX <=350) //Devuelve el 1er valor del observable cuando se cumple la
    
    // tap<MouseEvent>(console.log),
    // map( event => ({
    //     clientY : event.clientY,
    //     clientX : event.clientX
    // }))  

)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado')
});