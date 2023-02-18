//Se cogen los ids de cada campo y del formulario
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const clave2 = document.getElementById("clave2");
const muestraError = document.getElementById("mensaje-Error");

//Se cogen las imagenes + y - de cada campo
const imagenCruzNombre = document.getElementById("imagenCruzNombre");
const imagenCheckNombre = document.getElementById("imagenCheckNombre");
const imagenCruzEmail = document.getElementById("imagenCruzEmail");
const imagenCheckEmail = document.getElementById("imagenCheckEmail");
const imagenCruzClave = document.getElementById("imagenCruzClave");
const imagenCheckClave = document.getElementById("imagenCheckClave");
const imagenCruzClave2 = document.getElementById("imagenCruzClave2");
const imagenCheckClave2 = document.getElementById("imagenCheckClave2");

//Se establece variable de control para la alerta
let controlNombre;
let controlEmail;
let controlClave;
let controlClave2;

//Se establece el estilo y mensaje cuando un campo es invalido o valido
const setError = (element, mensaje) => {
  const inputControl1 = element.parentElement.parentElement;
  const muestraError = inputControl1.querySelector(".mensaje-error");
  muestraError.innerHTML = mensaje;
  element.classList.add("valido-cruz");
  element.classList.remove("valido-check");
};
const setCheck = (element) => {
  const inputControl1 = element.parentElement.parentElement;
  const muestraError = inputControl1.querySelector(".mensaje-error");
  muestraError.innerHTML = "";
  element.classList.add("valido-check");
  element.classList.remove("valido-cruz");
};

//Expresiones regulares para nombre e email.
const regEx = {
  nombre: /^([^0-9]*)$/,
  email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
};

//Se valida cada campo del formulario
validarCampoFormulario = () => {
  //Validar campo Nombre
  if (nombre.value === "") {
    setError(nombre, "Rellene este campo");
    imagenCruzNombre.classList.remove("hidden");
    imagenCheckNombre.classList.add("hidden");
    controlNombre = false;
  } else if (!regEx.nombre.test(nombre.value)) {
    setError(nombre, "Nombre inválido");
    imagenCruzNombre.classList.remove("hidden");
    imagenCheckNombre.classList.add("hidden");
    controlNombre = false;
  } else {
    setCheck(nombre);
    imagenCruzNombre.classList.add("hidden");
    imagenCheckNombre.classList.remove("hidden");
    controlNombre = true;
  }
  //Validar campo Email
  if (email.value === "") {
    setError(email, "Rellene este campo");
    imagenCruzEmail.classList.remove("hidden");
    imagenCheckEmail.classList.add("hidden");
    controlEmail = false;
  } else if (!regEx.email.test(email.value)) {
    setError(email, "Email inválido");
    imagenCruzEmail.classList.remove("hidden");
    imagenCheckEmail.classList.add("hidden");
    controlEmail = false;
  } else {
    setCheck(email);
    imagenCruzEmail.classList.add("hidden");
    imagenCheckEmail.classList.remove("hidden");
    controlEmail = true;
  }
  //Validar campo Clave
  if (clave.value === "") {
    setError(clave, "Rellene este campo");
    imagenCruzClave.classList.remove("hidden");
    imagenCheckClave.classList.add("hidden");
    controlClave = false;
  } else if (clave.value.length < 8) {
    setError(clave, "Debe tener más de 8 caracteres");
    imagenCruzClave.classList.remove("hidden");
    imagenCheckClave.classList.add("hidden");
    controlClave = false;
  } else {
    setCheck(clave);
    imagenCruzClave.classList.add("hidden");
    imagenCheckClave.classList.remove("hidden");
    controlClave = true;
  }
  //Validar campo Confirmacion Clave
  if (clave2.value === "") {
    setError(clave2, "Rellene este campo");
    imagenCruzClave2.classList.remove("hidden");
    imagenCheckClave2.classList.add("hidden");
    controlClave2 = false;
  } else if (clave2.value.length < 8 || clave2.value != clave.value) {
    setError(clave2, "Las contraseñas no coinciden");
    imagenCruzClave2.classList.remove("hidden");
    imagenCheckClave2.classList.add("hidden");
    controlClave2 = false;
  } else {
    setCheck(clave2);
    imagenCruzClave2.classList.add("hidden");
    imagenCheckClave2.classList.remove("hidden");
    controlClave2 = true;
  }
};

//Se valida cada vez con el 'ENVIAR'
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validarCampoFormulario();
  if (controlNombre && controlEmail && controlClave && controlClave2) {
    alert("La inscripción es correcta");
  }
});
