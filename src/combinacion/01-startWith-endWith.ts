import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


// STARTWITH COMIENZA EL OBSERBABLE CON EL VALOR INDICADO
const numeros$ = of(1,2,3).pipe(
    startWith(0)
);

//numeros$.subscribe(console.log);

//ENDWITH COMIENZA EL OBSERBABLE CON EL VALOR INDICADO
const numeros2$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
    );

numeros2$.subscribe(console.log);