import {of} from 'rxjs';

const obs1$ = of<number>(...[1,2,3,4,5,6]);

console.log('Inicio del Obs1$');
obs1$.subscribe(
     next => console.log('Next: ', next),
     null,
     () => console.log('Terminada la secuencia') 
     );
console.log('Fin del Obs1$');




const obs2$ = of<any>([1,2], {a:1, b:2}, function(){}, Promise.resolve(true));

console.log('Inicio del Obs2$');
obs2$.subscribe(
     next => console.log('Next: ', next),
     null,
     () => console.log('Terminada la secuencia') 
     );
console.log('Fin del Obs2$');