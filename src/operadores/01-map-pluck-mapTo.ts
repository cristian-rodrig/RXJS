
import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

range(1,5).pipe(
    map<number,number>( val => val * 10 )
)
.subscribe(console.log);

//Convertido a string
range(1,5).pipe(
    map<number,string>( val => (val * 10).toString() ))
    .subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' );

//Map necesita acceder al objeto y a su propiedad (event.code)
const keyUpCode$ = keyup$.pipe(
    map( event => event.code)
);

//Pluck solo necesita que le pasemos el la propiedad del objeto a obtener en formato string ('key)
const keyUpPluck$ = keyup$.pipe(
    pluck('key')
);

const keyUpPluckAnidado$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
);


keyup$.subscribe(console.log);

keyUpCode$.subscribe( code => console.log('Map:', code));

keyUpPluck$.subscribe( code => console.log('Pluck:', code));

keyUpPluckAnidado$.subscribe( code => console.log('Pluck:', code));

keyUpMapTo$.subscribe( code => console.log('MapTo:', code));
