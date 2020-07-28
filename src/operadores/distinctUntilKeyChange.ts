import { from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';


//DISTINCT UNTIL KEY CHANGE DEJA PASAR LAS EMISIONES CUYOS VALORES NO HAYAN SIDO PREVIAMENTE EMITIDOS SE LE PASA LA KEY PARA QUE COMPARE CON EL VALOR ANTERIOR

interface Personaje{
    nombre: string;
}

const personajes : Personaje[] = [
    {nombre: 'Megaman'},
    {nombre: 'Megaman'},
    {nombre: 'X'},
    {nombre: 'Zero'},
    {nombre: 'Dr. Willy'},
    {nombre: 'X'},
    {nombre: 'X'},
    {nombre: 'Megaman'},
    {nombre: 'Zero'},
];

from( personajes).pipe(
    distinctUntilKeyChanged( 'nombre' )
).subscribe(console.log)