import { Observable, Observer, Subject } from 'rxjs';

const observer : Observer <any> = {
        next: value => console.log('next: ', value),
        error: error => console.warn('Error : ', error),
        complete: () => console.info('Completado ')
};


const intervalo$ = new Observable<number>( subs =>{
    
    const intervalId = setInterval(() => subs.next ( Math.random())
    ,1000);
    
    return () => { clearInterval( intervalId );
    console.log('Intervalo destruido'); 
    };
});

//CARACTERISTICAS DE SUBJECT
// 1-Casteo multiple
// 2-Tambien es un observer
// 3-Next, Error y Complete

const subject$ = new Subject();
const subscriptionSubject = intervalo$.subscribe( subject$ );


// const subs1 = intervalo$.subscribe(rnd => console.log('subs1',rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2',rnd));

 const subs1 = subject$.subscribe(observer);
 const subs2 = subject$.subscribe(observer);

 setTimeout( () =>{
       subject$.next(10);
       
       subject$.complete();

       subscriptionSubject.unsubscribe();
 },3500);








