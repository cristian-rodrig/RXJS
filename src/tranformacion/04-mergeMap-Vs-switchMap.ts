import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // mergeMap( ()=> interval$ ) //mantiene todas las suscripciones activas simultaneamente
    switchMap( ()=> interval$ ) //solo mantiene una subscripcion interna activa

).subscribe(console.log)