import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


//REDUCE operador que solo emite la salida al obtener el total
const numbers = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) =>{
    return acumulador + valorActual;
} 

const total = numbers.reduce( totalReducer , 0);
console.log('total arr', total);


//EJ con interval
interval(500).pipe(
    take(5), //take toma el valor 
    tap(console.log),
    reduce( totalReducer ,5) // el 5 el el valor inicial del reduce
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: ()=> console.log('Completado')
});

