import { fromEvent } from 'rxjs';
import { debounceTime,  pluck,  distinctUntilChanged } from 'rxjs/operators';


//DEBOUNCE TIME RETRASA LA PETICION SIEMPRE Y SEGUN UN TIEMPO ESPECIFICADO
// Controla la cantidad de emisiones de observables que emiten una cantidad grande de emisiones

const click$ = fromEvent( document, 'click');

click$.pipe(
    debounceTime(1000)
)
.subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent(input, 'keyup');

input$.pipe(  
    debounceTime(1000), 
    pluck('target', 'value'),
    distinctUntilChanged()   
).
subscribe(console.log);
