import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id vestibulum leo. Vestibulum mattis congue arcu ac porta. Vestibulum volutpat a felis nec iaculis. Fusce risus diam, pulvinar ut molestie at, tincidunt vitae massa. Praesent aliquam semper dignissim. Vivamus vestibulum gravida blandit. In eu ipsum orci. Donec congue ultrices consequat. Cras vehicula egestas eros, eget tincidunt augue vulputate ac. Praesent accumsan enim a augue pellentesque vulputate. Aliquam erat volutpat. Morbi fringilla quam quis odio venenatis porta. Morbi id faucibus sem, non laoreet eros.
<br></br>
Cras eu ante non lectus accumsan pretium sagittis quis felis. Pellentesque quis egestas justo. Morbi augue magna, venenatis et nibh ac, lobortis venenatis augue. In neque ligula, cursus nec maximus nec, ullamcorper et lectus. Phasellus scelerisque dignissim interdum. Vivamus urna purus, placerat ut lectus a, dapibus interdum lacus. Mauris in felis laoreet, fermentum sem sagittis, consectetur sapien. Cras sit amet justo vestibulum, placerat ipsum vel, scelerisque tellus. Proin eleifend fringilla augue eget eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer a metus pulvinar, euismod tortor sit amet, ultrices mi.
<br></br>
Morbi tristique lacus sit amet tellus aliquam condimentum. Nulla id ullamcorper sem, vitae congue mi. Ut sed lectus eu odio venenatis cursus. Vivamus tempus rutrum dui, quis sodales libero bibendum non. In nec velit quam. Sed semper commodo turpis, eget condimentum eros rhoncus vel. Phasellus nibh augue, aliquam porttitor lorem vel, cursus dapibus ante. Curabitur nec ipsum mi. Sed iaculis fringilla mauris, vitae suscipit eros vulputate vitae. Nulla massa elit, blandit nec erat non, euismod euismod justo. Mauris facilisis quam eu metus tincidunt pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
<br></br>
Donec orci ante, pulvinar at odio ut, ultricies finibus velit. Aliquam pharetra sed ex sit amet ornare. Donec quis mi non risus placerat volutpat in vitae massa. Vivamus vel tristique urna, sit amet porta dui. Aliquam ullamcorper mi id placerat lacinia. Aliquam non mauris et massa consequat fermentum. Phasellus eu ullamcorper justo. Curabitur enim felis, gravida bibendum aliquet sed, porttitor accumsan elit. Pellentesque in urna a lacus dignissim dignissim. Phasellus est felis, congue ut magna vitae, viverra tincidunt sem. Nam accumsan pellentesque ex vitae malesuada. Cras eu ante bibendum est pellentesque rutrum. Sed vulputate ut justo a vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sodales fermentum erat, non egestas mi aliquam in.
<br></br>
Aenean sed velit vel nibh venenatis elementum vitae sed quam. Nunc elementum nibh risus, eu scelerisque nibh lobortis eget. Vestibulum sit amet ex in augue congue mattis eu eget nisl. Sed nisl purus, vehicula et erat sit amet, mollis venenatis mi. Ut magna magna, lobortis eu libero ut, vulputate placerat sapien. In enim ipsum, mattis non pulvinar ac, euismod et augue. Proin tempus erat enim, in facilisis orci porta vel. Mauris nunc turpis, volutpat sed fermentum id, commodo id diam. Aliquam dictum tortor quis metus vehicula, in iaculis libero malesuada. Vestibulum non nunc ut nisl cursus efficitur. Aliquam in convallis neque, et egestas libero. Vestibulum in eros a enim accumsan elementum at ut augue. Ut dapibus elit ut elementum lacinia. Praesent eget nulla sed tortor rutrum venenatis.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);



//funcion calculo
const calcularPorcentajeScroll = (evento) =>{
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = evento.target.documentElement;
        
    console.log(scrollTop ,scrollHeight , clientHeight)

    return ( scrollTop / (scrollHeight - clientHeight )) * 100;
};



//Streams
const scroll$ = fromEvent(document, 'scroll');

//  scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
     map( calcularPorcentajeScroll ),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%` ;
});
