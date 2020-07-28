import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap((tap)=>console.log('Tap',tap)),
    take(3)   //cantidad de valores que quiero dejar pasar
)             //cancela la suscripcion del observable
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Completado'),
})

