import { of, fromEvent } from'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';
import { interval } from 'rxjs';

const letras$ = of('a', 'b', 'c');

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
       map( i => letra + ' '+ i),
        take(3)
    ))
)
// .subscribe({
//     next: val=>console.log('Next ', val),
//     complete: ()=> console.log('complete')
// });

const mouseDown$ = fromEvent( document, 'mousedown');
const mouseUp$ = fromEvent( document, 'mouseup');
const interval$ = interval(1000);

mouseDown$.pipe(
    mergeMap( () => interval$.pipe(
        takeUntil( mouseUp$ ) //hasta que soltemos el mouse 
    ))
)
.subscribe(console.log);

