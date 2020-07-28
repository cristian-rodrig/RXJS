import { range, of, from, fromEvent }from 'rxjs';
import { filter, map }from 'rxjs/operators';

// range(1,10).pipe(
//     filter( val => val % 2 === 1)
// ).subscribe(console.log)

range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i)
    return val % 2 === 1;
    })    
)//.subscribe(console.log)

interface Personajes{
    tipo: string;
    nombre: string;
}


const personajes: Personajes[] = [
    {
        tipo: 'heroe',
        nombre:'Batman'
    },
    {
        tipo: 'heroe',
        nombre:'Robin'
    },
    {
        tipo: 'villano',
        nombre:'Joker'
    },

];


from(personajes).pipe(
    filter( heroe  => heroe.tipo === "heroe")).subscribe(console.log) 
     
const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( event => event.code),
    filter( key => key ==="Enter")
);


keyUp$.subscribe(console.log);

