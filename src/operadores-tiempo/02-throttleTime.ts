import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime,  pluck,  distinctUntilChanged } from 'rxjs/operators';


//THROTTLE TIME REALIZA LA PETICION Y LUEGO ESPERA EL TIEMPO ESPECIFICADO
// Controla la cantidad de emisiones de observables que emiten una cantidad grande de emisiones


const click$ = fromEvent( document, 'click');

click$.pipe(
    throttleTime(3000)
)
// .subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent(input, 'keyup');

input$.pipe(  
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }), 
    pluck('target', 'value'),
    distinctUntilChanged()   
).
subscribe(console.log);


