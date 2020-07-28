import { of, range, asyncScheduler } from 'rxjs';


// const src$ = of(1,2,3,4,5);
//SYNC
const src$ = range(1,5); 
console.log('Inicio');
src$.subscribe( res =>console.log(res));
console.log('Fin');

//ASYNC
const src1$ = range(1,5, asyncScheduler); 
console.log('Inicio');
src1$.subscribe( res =>console.log(res));
console.log('Fin');