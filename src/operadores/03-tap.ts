
//TAP PERMITE DISPARA EFECTOS SECUNDARIOS Y PERMIE IMPRIMIR EN CONSOLA LOS VALORES PARA JHACER UN SEGUIMIENTO A LOS VALORES QUE SE ESTAN RECIBIENDO


import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => { console.log('antes', x);
    return 100;
    }),
    map( val => (val * 10).toString()),
    tap( {
        next: valor => console.log('despues', valor),
        complete:() => console.log('Se termino todo')
    })
    )

.subscribe( val => console.log('subs',val));