import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';


//DISTINCT DEJA PASAR LAS EMISIONES CUYOS VALORES NO HAYAN SIDO PREVIAMENTE EMITIDOS
const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Personaje{
    nombre: string;
}

const personajes : Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'X'},
    {nombre: 'Zero'},
    {nombre: 'Dr. Willy'},
    {nombre: 'X'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
];

from( personajes).pipe(
    distinct( personaje => personaje.nombre)
).subscribe(console.log)