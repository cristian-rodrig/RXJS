import { fromEvent } from 'rxjs';

//Eventos del DOM
const src0$ = fromEvent<MouseEvent>(document, 'click');
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('Next: ', val )
};

src0$.subscribe( ev =>{
    console.log('Pos x:',ev.x)
    console.log('Pos y:',ev.y)
});

src1$.subscribe( ({ x,y }) =>{//ES 6 sin pasar el evento solo pasando lo que necesitamos del evento
    console.log(x,y);
});


src2$.subscribe( evento =>{
    console.log(evento.key);
} );



