import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, filter, tap, catchError } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';





const manejaErrores = ( response: Response) => {    
    if( !response.ok ){
        throw new Error( response.statusText ); 
    }
    return response;
}

const atrapaError = (err: AjaxError) =>{
    console.log('Error en: ', err.message );
    return of([]);
}


const fetchpromesa = fetch(url);

// fetchpromesa
// .then( manejaErrores )
// .then( resp => resp.json())
// .then(data => console.log('data: ', data))
// .catch(err => console.warn('Error en usarios', err))



const paises= ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )        
)
 .subscribe(console.log)







    
