import { fromEvent, merge} from "rxjs";
import { pluck } from 'rxjs/operators';


//MERGE ES UN OBSERVABLE QUE PERMITE COMBINAR MULTIPLES OBSERBABLES QUE TRABAJEN JUNTOS
const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge( 
    keyup$.pipe( pluck('type')), 
    click$.pipe( pluck('type')),
    ).subscribe(console.log);
