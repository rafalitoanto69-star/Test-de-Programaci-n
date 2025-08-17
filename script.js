let preguntasActuales = [];
let respuestasUsuario = [];
let preguntasRespondidas = [];
let preguntaActual;
let contador = 0;
let nombreStorage = "";
let respuestaSeleccionada = null;
let lenguajeActual = "";
let nivelSeleccionado = "";

// Selección de lenguaje
function seleccionarNivel(lenguaje) {
  lenguajeActual = lenguaje;
  document.getElementById("niveles").classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("botonSiguienteTest").classList.add("hidden");
}

// Iniciar test
function iniciarTest(nivel) {
  nivelSeleccionado = nivel;
  respuestasUsuario = [];
  preguntasRespondidas = [];
  contador = 0;
  respuestaSeleccionada = null;

  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("niveles").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("next").classList.add("hidden");
  document.getElementById("botonSiguienteTest").classList.add("hidden");

  switch (lenguajeActual) {
  case 'Html':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasHtmlJunior;
        nombreStorage = 'usadasHtml_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasHtmlSenior;
        nombreStorage = 'usadasHtml_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasHtmlBloquesdecodigo;
        nombreStorage = 'usadasHtml_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para HTML.");
        return;
    }
    break;

  case 'Css':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasCssJunior;
        nombreStorage = 'usadasCss_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasCssSenior;
        nombreStorage = 'usadasCss_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasCssBloquesdecodigo;
        nombreStorage = 'usadasCss_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para CSS.");
        return;
    }
    break;

  case 'Javascript':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasJavascriptJunior;
        nombreStorage = 'usadasJavascript_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasJavascriptSenior;
        nombreStorage = 'usadasJavascript_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasJavascriptBloquesdecodigo;
        nombreStorage = 'usadasJavascript_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para Javascript.");
        return;
    }
    break;

  case 'Java':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasJavaJunior;
        nombreStorage = 'usadasJava_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasJavaSenior;
        nombreStorage = 'usadasJava_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasJavaBloquesdecodigo;
        nombreStorage = 'usadasJava_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para Java.");
        return;
    }
    break;

  case 'Php':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasPhpJunior;
        nombreStorage = 'usadasPhp_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasPhpSenior;
        nombreStorage = 'usadasPhp_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasPhpBloquesdecodigo;
        nombreStorage = 'usadasPhp_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para PHP.");
        return;
    }
    break;

  case 'Python':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasPythonJunior;
        nombreStorage = 'usadasPython_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasPythonSenior;
        nombreStorage = 'usadasPython_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasPythonBloquesdecodigo;
        nombreStorage = 'usadasPython_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para Python.");
        return;
    }
    break;

  case 'Basededatos':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasBasededatosJunior;
        nombreStorage = 'usadasBasededatos_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasBasededatosSenior;
        nombreStorage = 'usadasBasededatos_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasBasededatosBloquesdecodigo;
        nombreStorage = 'usadasBasededatos_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para Base de Datos.");
        return;
    }
    break;

  case 'Sistemas':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasSistemasJunior;
        nombreStorage = 'usadasSistemas_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasSistemasSenior;
        nombreStorage = 'usadasSistemas_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasSistemasBloquesdecodigo;
        nombreStorage = 'usadasSistemas_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para Sistemas.");
        return;
    }
    break;

  case 'Ciberseguridad':
    switch (nivel) {
      case 'junior':
        preguntasActuales = preguntasCiberseguridadJunior;
        nombreStorage = 'usadasCiberseguridad_junior';
        break;
      case 'senior':
        preguntasActuales = preguntasCiberseguridadSenior;
        nombreStorage = 'usadasCiberseguridad_senior';
        break;
      case 'Bloquesdecodigo':
        preguntasActuales = preguntasCiberseguridadBloquesdecodigo;
        nombreStorage = 'usadasCiberseguridad_bloquesdecodigo';
        break;
      default:
        alert("Nivel no válido para Ciberseguridad.");
        return;
    }
    break;
       case 'Kotlin':
  switch (nivel) {
    case 'junior':
      preguntasActuales = preguntasKotlinJunior;
      nombreStorage = 'usadasKotlin_junior';
      break;
    case 'senior':
      preguntasActuales = preguntasKotlinSenior;
      nombreStorage = 'usadasKotlin_senior';
      break;
    case 'Bloquesdecodigo':
      preguntasActuales = preguntasKotlinBloquesdecodigo;
      nombreStorage = 'usadasKotlin_bloquesdecodigo';
      break;
    default:
      alert("Nivel no válido para Kotlin.");
      return;
 
}
}  

// Validación extra
if (!preguntasActuales || preguntasActuales.length === 0) {
  alert("No hay preguntas disponibles para este lenguaje y nivel.");
  return;
}



  if (!preguntasActuales || preguntasActuales.length === 0) {
    alert("No hay preguntas disponibles para este lenguaje y nivel.");
    return;
  }

  cargarPregunta();
}

// Obtener pregunta sin repetir
function obtenerPreguntaSinRepetir(nombreStorage, preguntas) {
  let usadas = JSON.parse(localStorage.getItem(nombreStorage)) || [];

  if (usadas.length >= preguntas.length) {
    usadas = [];
    localStorage.removeItem(nombreStorage);
  }

  const disponibles = preguntas.map((_, i) => i).filter(i => !usadas.includes(i));
  if (disponibles.length === 0) return null;

  const indice = disponibles[Math.floor(Math.random() * disponibles.length)];
  usadas.push(indice);
  localStorage.setItem(nombreStorage, JSON.stringify(usadas));

  return preguntas[indice];
}

// Cargar pregunta
function cargarPregunta() {
  respuestaSeleccionada = null;
  const preguntaOriginal = obtenerPreguntaSinRepetir(nombreStorage, preguntasActuales);

  if (!preguntaOriginal) {
    mostrarResultadoFinal(preguntasRespondidas, respuestasUsuario);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    return;
  }

  const copiaPregunta = {
    question: preguntaOriginal.question,
    options: [...preguntaOriginal.options],
    answer: preguntaOriginal.answer
  };

  // Mezclar opciones
  const indices = copiaPregunta.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const opcionesMezcladas = indices.map(i => copiaPregunta.options[i]);
  const nuevaRespuesta = indices.indexOf(copiaPregunta.answer);

  preguntaActual = {
    question: copiaPregunta.question,
    options: opcionesMezcladas,
    answer: nuevaRespuesta
  };

  preguntasRespondidas.push(preguntaActual);

  document.getElementById("question").textContent = preguntaActual.question;
  const opciones = document.getElementById("options");
  opciones.innerHTML = "";

 preguntaActual.options.forEach((opcion, index) => {
  const li = document.createElement("li");
  const code = document.createElement("code");

  // Esto asegura que cualquier etiqueta se muestre como texto (sin ejecutarse)
  code.textContent = opcion;

  li.appendChild(code);
  li.onclick = () => seleccionarOpcion(index);
  opciones.appendChild(li);
});




  document.getElementById("next").classList.add("hidden");
}

// Seleccionar opción
function seleccionarOpcion(indice) {
  respuestaSeleccionada = indice;
  document.getElementById("next").classList.remove("hidden");

  const opciones = document.querySelectorAll("#options li");
  opciones.forEach((li, i) => {
    li.style.pointerEvents = "auto";
    li.style.backgroundColor = i === indice ? "#2e7d32" : "#1e88e5";
  });
}

// Pasar a la siguiente pregunta o mostrar resultados
function siguientePregunta() {
  respuestasUsuario.push(respuestaSeleccionada);
  contador++;

  if (contador >= 5 || contador >= preguntasActuales.length) {
    mostrarResultadoFinal(preguntasRespondidas, respuestasUsuario);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  } else {
    cargarPregunta();
  }
}

// Función para escapar caracteres HTML como <, >, etc.
function escaparTexto(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

// Mostrar resultados finales
function mostrarResultadoFinal(preguntas, respuestasUsuario) {
  let resultadoHTML = "<h2>Resultados del Test</h2>";
  let correctas = 0;

  preguntas.forEach((pregunta, i) => {
    const correcta = pregunta.options[pregunta.answer] ?? "[Sin dato]";
    const usuario = pregunta.options[respuestasUsuario[i]] ?? "Sin respuesta";
    const esCorrecta = pregunta.answer === respuestasUsuario[i];
    if (esCorrecta) correctas++;

    resultadoHTML += `
      <div style="margin-bottom: 10px;">
        <strong>Pregunta ${i + 1}:</strong> ${escaparTexto(pregunta.question)}<br>
        ✅ Correcta: <strong>${escaparTexto(correcta)}</strong><br>
        ${esCorrecta ? "🟢" : "🔴"} Tu respuesta: ${escaparTexto(usuario)}
      </div>
    `;
  });

  resultadoHTML += `<h3><strong>Total:</strong> ${correctas} de ${preguntas.length} correctas</h3>`;
  document.getElementById("resultadoFinal").innerHTML = resultadoHTML;
  document.getElementById("botonSiguienteTest").classList.remove("hidden");
}


// Repetir test con nuevas preguntas
function continuarConNuevoTest() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("botonSiguienteTest").classList.add("hidden");
  iniciarTest(nivelSeleccionado);
}



  


