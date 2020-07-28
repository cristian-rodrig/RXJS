import { forkJoin, of } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { catchError } from 'rxjs/operators';


//FORKJOIN PERMITE REALIZAR PETICIONES AJAX DE FORMA SIMULTANEA
// TAMBIEN PERMITE CONTROLAR LOS ERRORES DE MANERA INDEPENDIENTE HACIENDO QUE SI UNA PETICION FALLA LAS DEMAS SIGAN FUNCIONANDO

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'cristian-rodrig';

forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(
        catchError(err => of([]))
    ),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    )
}).pipe(
    catchError( err => of(err.message))
)
.subscribe(console.log);