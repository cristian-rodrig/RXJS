import { Observable, Observer } from 'rxjs';

const observer : Observer <any> = {
        next: value => console.log('next: ', value),
        error: error => console.warn('Error : ', error),
        complete: () => console.info('Completado ')
};

const intervalo$ = new Observable<number>( subs => {
    //Crear un contador
    let contador: number = 0;
const interval = setInterval( ()=>{
        contador+=1;
        subs.next(contador);
        console.log(contador);
    },1000);

    setTimeout( () =>{
        subs.complete();
    },2500);
    
    return () =>{
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2)
             .add(subscription3);

setTimeout( () =>{
     subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();

    console.log('Completado TimeOut');
},6000);





