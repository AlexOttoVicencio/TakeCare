$(document).ready(function() {
  $(".needs-validation").validate( {
    errorClass: "is-invalid",
    validClass: "is-valid",
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 20,
        }, 
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 20,
        },
        correo: {
            required: true,
        },
        profesion: {
            required: true,
        },
        pass: {
            required: true,
            minlength: 3,
            maxlength: 20,
        },
        repass: {
            required: true,
            equalTo: "#pass"
        }, 
        condiciones: {
            required: true,
        },
        paciente: {
            required: true,
        },
        fecha: {
            required: true,
            dateITA: true,
        },
        presion: {
            required: true,
        },
        temperatura: {
            required: true,
        },
        peso: {
            required: true,
        },
        escalaMalestar: {
            required: true,
        },
        observaciones: {
            maxlength: 500,
        },
        edad: {
            required: true,
        },
        sexo: {
            required: true,
        }, 
        domicilio: {
            required: true,
        },
        diagnostico: {
            required: true,
            maxlength: 500,
        }, 
        tratamiento: {
            required: true,
            maxlength: 500,
        },
    }, 
    messages: {
        nombre: {
            required: "Debe ingresar su nombre",
            minlength: "Debe ingresar más de 3 caracteres"
        },
        apellido: {
            required: "Debe ingresar su apellido",
            minlength: "Debe ingresar más de 3 caracteres"
        }, 
        correo: {
            required: "Debe ingresar su correo",
        },
        profesion: {
            required: "Debe ingresar su profesión",
        },
        pass: {
            required: "Debe ingresar su contraseña"
        },
        repass: {
            required: "Debe repetir su contraseña",
        },
        condiciones: {
            required: "Debe aceptar las condiciones de uso"
        },
        paciente: {
            required: "Debe ingresar el nombre del paciente"
        },
        diagnostico: {
            required: "Debe registrar un diagnóstico"
        },
        tratamiento: {
            required: "Debe registrar el tratamiento del paciente"
        },
        fecha: {
            required: "Debe ingresar una fecha"
        },
        presion: {
            required: "Debe registrar la presión del paciente"
        },
        temperatura: {
            required: "Debe registrar la temperatura del paciente"
        },
        peso: {
            required: "Debe registrar el peso del paciente"
        },
        escalaMalestar: {
            required: "Debe registrar el malestar del paciente"
        },
        edad: {
            required: "Debe ingresar la edad del paciente"
        },
        sexo: {
            required: "Debe seleccionar el sexo del paciente"
        },
        domicilio: {
            required: "Debe ingresar el domicilio del paciente"
        },        
    }
  })  
})

