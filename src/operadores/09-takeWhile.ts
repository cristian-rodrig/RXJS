import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map( ({ x, y }) => ({x, y})),
    // takeWhile( ({y}) => y <= 150)
    takeWhile( ({y}) => y <= 150, true)//true imprime hasta el ultimo valor que se mayor a 150

)

.subscribe({
    next: val => console.log('Next: ',val),
    complete: ()=> console.log('Complete')
});