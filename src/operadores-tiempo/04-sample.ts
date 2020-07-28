import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';


//SAMPLE REALIZA LA EMISION ESPERANDO QUE SE EJECUTE EL SEGUNDO OBSERVABLE E INDICA CUAL ES ESE VALOR EN DICHO MOMENTO RESPETANDO EL VALOR DEL INTERVAL

const interval$ = interval(500);
const click$ = fromEvent(document , 'click');


interval$.pipe(
    sample(click$)
)
.subscribe(console.log);