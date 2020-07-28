import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

//EXAUSTMAP() IGNORA LAS SUSCRIPCIONES INTERNAS QUE ESTEN       CORRIENDO HASTA QUE LA PRIMERA SUSCRIPCION SE COMPLETE 

const interval$ = interval(500).pipe(take(3));
const clicks$ = fromEvent(document, 'click');

clicks$.pipe(
    exhaustMap( () =>interval$ )
)
.subscribe( console.log );