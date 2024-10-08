const textoPerfil = document.querySelector("p");
const imagenPerfil = document.querySelector("#fotoPerfil");
const body = document.querySelector("body");


let nombre = prompt("Cual es tu nombre").toUpperCase().substring(0, 15)

let identidadEnCristo = prompt(`${nombre} => ¿Eres hijo de Dios? (responde si o no)`).toLowerCase()


if (identidadEnCristo !== "si" && identidadEnCristo !== "no") {
    alert(`Tu identidad debe ser 'si' o 'no', 'No puede ser ${identidadEnCristo}' Por favor, ingresa una respuesta válida.`);
    // return;
} else {
    let nuevaImagen;
    let mensajeIdentidad;


    if (identidadEnCristo === "no") {
        nuevaImagen = "./assets/img/hijo.jpg"
        mensajeIdentidad = "Aún no lo crees, pero te estoy llamando.";
    } else {
        nuevaImagen = "./assets/img/hijo.jpg"
        mensajeIdentidad = "Eres mi hijo(a)";
    }

    if (!nombre || !identidadEnCristo) {
        alert(
            "Toda la informacion es necesaria para continuar 'Vuelve a intentarlo'"
        );
    } else {
        imagenPerfil.src = nuevaImagen
        textoPerfil.innerHTML = `<p style="text-align: justify"><span style="font-size: 1.5rem ;color:red">${mensajeIdentidad}</span>, Yo te elegí antes de que nacieras; te aparté para que hablaras en mi nombre a todas las naciones del  mundo.<br /><strong>Jeremías 1:5 TLA.</strong><br /><br />
        Por tanto, no tengas miedo, pues yo soy tu Dios y estoy contigo. Mi mano victoriosa te dará fuerza y ayuda; mi mano victoriosa siempre te dará su apoyo.<br /> <strong>Isaías 41:10 TLA.</strong> <br /><br />
        No tengas miedo; yo siempre estaré contigo. No importa dónde estés, yo te llamaré y te haré volver a tu tierra, y volverás a ser mi pueblo. <br /><strong>Isaías 43:5 TLA.</strong><br /><br />
        
        Recuerda que yo te di libertad; yo fui quien te sacó de Egipto, país donde eras esclavo; yo envié a Moisés, a Aarón y a María para que te sacaran de allí.<br /> <strong>Miqueas 6:4 TLA.</strong><br /><br />
        
        <span style="color:red">${nombre} </span> , Yo haré que seas para este pueblo como un fuerte muro de bronce. Los malvados pelearán contra ti, pero no te podrán vencer, porque yo estaré contigo para librarte de su poder. ¡Yo te salvaré de esos tiranos! Te juro que así lo haré.<br /> <strong>Jeremías 15:20-21 TLA.</strong>
        </p>
        `;
    }
}