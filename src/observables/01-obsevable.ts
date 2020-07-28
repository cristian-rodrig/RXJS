import { Observable, Observer } from 'rxjs';

//Interface observer
const observer : Observer <any> = {
        next: value => console.log('siguiente [next]: ', value),
        error: error => console.error('Error [obs]: ', error),
        complete: () => console.info('Completado [obs]')
}

const obs$ = new Observable<string>( subs =>{
    
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');
    // //Forzar un error
    // const a = undefined;
    // a.nombre = 'Cristian'

    subs.complete();
});

obs$.subscribe( observer );


// obs$.subscribe( 
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.info('completado')

// );