import { of, from } from 'rxjs';

// OF = TOMA ARGUMENTOS Y GENERA UNA SECUENCIA
// FROM = ARRAY, OBJETO, PROMESA, ITERABLE, OBSERVABLE

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado')
};


const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from( miIterable).subscribe(observer);



// const source$ = from( [1,2,3,4,5]);
// const source$ = of( [1,2,3,4,5]);
//const source$ = from('Cristian');
const source$ = from( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async(resp) => {
//     console.log( resp );
//     const dataRespuesta = await resp.json();
//     console.log(dataRespuesta);
    
// });

//source$.subscribe( observer );
