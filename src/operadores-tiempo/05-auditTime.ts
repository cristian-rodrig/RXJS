import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


//AUDITTIME EMITE EL ULTIMO VALOR QUE HAYA SIDO EMITIDO POR EL OPERADOR EN UN PERIODO DE TIEMPO DETERMINADO 

const click$ = fromEvent<MouseEvent>(document , 'click');

click$.pipe(
    map( ({ x }) => x),
    tap(val => console.log('tap ', val)),
    auditTime(2000)
)
.subscribe(console.log);