function Aplicar(){
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById ("edad").value;
    let correo = document.getElementById ("correo").value;
    edad= parseInt(edad)
     
    
    
    if (edad >= 18) {
        alert(`Hola ${nombre} ${apellido} has aplicado correctamente, te contactaremos a ${correo} `);
    }
    
     else if (edad <=18 ) {
        alert(`Hola ${nombre} ${apellido} no cumple los requerimientos `)
    }

    
}
