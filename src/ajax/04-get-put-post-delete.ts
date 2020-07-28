import { ajax } from'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// PETICION DINAMICA SOLO SE CAMBIA EL METODO 
ajax({
    url,
    method:'GET',
    headers: {
        mi_token: 'ABC123456'
    },
    body:{
        id: 1,
        nombre: 'Cristian'
    }
}).subscribe(console.log)


//GET
ajax.get( url,{ 
    mi_token: 'ABC123'  //HEADERS
}).subscribe(console.log)

//POST
ajax.post( url, {
    id: 1,
    nombre: 'Cristian' //BODY
}, { 
    mi_token: 'ABC123'  //HEADERS
}).subscribe(console.log)

//PUT
ajax.put( url, {
    id: 1,
    nombre: 'Cristian' //BODY
}, { 
    mi_token: 'ABC123'  //HEADERS
}).subscribe(console.log)

//DELETE
ajax.delete( url,  { 
    mi_token: 'ABC123'  //HEADERS
}).subscribe(console.log)


