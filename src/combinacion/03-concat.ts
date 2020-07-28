import { interval, concat} from 'rxjs';
import { take } from 'rxjs/operators';

//CONCAT CONCATENA OBSERVABLES A PARTIR DE LA FINALIZACION DE   CADA EMISION DE CADA OBSERVABLE

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),

 ).subscribe( console.log);
