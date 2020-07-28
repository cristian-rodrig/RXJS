import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

 

const url = 'https://httpbin.org/delay/1';//urls correctos
//const url = 'https://api.github.com/users?per_page=5';

//Metodo para manejar error y pasarlo cor el pip catchError
const manejaError = (resp: AjaxError) =>{
    console.warn('Error', resp.message);
    return of({
        ok:false,
        usuarios: []
    });
}


// const obs$ = ajax.getJSON(url, {
//     'Content-Type' : 'aplication/json',
//     'mi-token': 'ABC123'
// });

// const obs$ = ajax.getJSON(url).pipe(
//     catchError( manejaError )
// )
// const obs2$ = ajax(url).pipe(
//     catchError( manejaError )
// )

const obs$ = ajax.getJSON(url)
const obs2$ = ajax(url)

// obs$.subscribe( data => console.log('GetJSON: ', data));
// obs2$.subscribe( data => console.log('AJAX: ', data));

obs$.pipe(
    catchError(manejaError)
)
.subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('Error en subsc', err ),
    complete: () =>console.log('Complete')
});


