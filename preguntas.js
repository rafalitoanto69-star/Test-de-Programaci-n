// preguntas_niveles.js


// ===== HTML JUNIOR =====
const preguntasHtmlJunior = [
  { question: "¿Cuál es la etiqueta principal para definir una página HTML?", options: ["<html>", "<body>", "<head>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para insertar una imagen?", options: ["<img>", "<image>", "<src>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para definir un párrafo?", options: ["<p>", "<text>", "<div>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para crear un enlace?", options: ["<a>", "<link>", "<href>"], answer: 0 },
  { question: "¿Cuál es la extensión de un archivo HTML?", options: [".html", ".htm", ".xml"], answer: 0 },
  { question: "¿Qué atributo se usa para enlazar un archivo CSS?", options: ["href", "src", "link"], answer: 0 },
  { question: "¿Qué etiqueta contiene los metadatos de una página?", options: ["<head>", "<meta>", "<info>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para saltar una línea?", options: ["<br>", "<hr>", "<line>"], answer: 0 },
  { question: "¿Qué etiqueta representa el contenido visible?", options: ["<body>", "<main>", "<content>"], answer: 0 },
  { question: "¿Qué etiqueta agrupa elementos sin afectar la estructura?", options: ["<span>", "<div>", "<p>"], answer: 0 },
  { question: "¿Qué etiqueta crea una tabla?", options: ["<table>", "<tr>", "<td>"], answer: 0 },
  { question: "¿Qué etiqueta representa una fila en una tabla?", options: ["<tr>", "<td>", "<table>"], answer: 0 },
  { question: "¿Qué etiqueta representa una celda en una tabla?", options: ["<td>", "<th>", "<tr>"], answer: 0 },
  { question: "¿Qué etiqueta representa un encabezado de celda?", options: ["<th>", "<td>", "<header>"], answer: 0 },
  { question: "¿Qué etiqueta permite crear listas no ordenadas?", options: ["<ul>", "<ol>", "<li>"], answer: 0 },
  { question: "¿Qué etiqueta representa cada ítem en una lista?", options: ["<li>", "<item>", "<ul>"], answer: 0 },
  { question: "¿Qué atributo se usa para establecer una clase?", options: ["class", "id", "type"], answer: 0 },
  { question: "¿Qué atributo identifica de forma única un elemento?", options: ["id", "name", "value"], answer: 0 },
  { question: "¿Qué atributo se usa para incluir texto alternativo en imágenes?", options: ["alt", "title", "text"], answer: 0 },
  { question: "¿Qué etiqueta se usa para encabezados principales?", options: ["<h1>", "<title>", "<head>"], answer: 0 },
  { question: "¿Qué etiqueta representa un formulario?", options: ["<form>", "<input>", "<label>"], answer: 0 },
  { question: "¿Qué etiqueta representa un campo de texto en un formulario?", options: ["<input>", "<textarea>", "<text>"], answer: 0 },
  { question: "¿Qué atributo define el tipo de input?", options: ["type", "format", "input"], answer: 0 },
  { question: "¿Qué etiqueta representa un botón en HTML?", options: ["<button>", "<input type='button'>", "<submit>"], answer: 0 },
  { question: "¿Qué etiqueta agrupa controles relacionados en un formulario?", options: ["<fieldset>", "<group>", "<div>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para mostrar comentarios en HTML?", options: ["<!-- -->", "//", "#"], answer: 0 },
  { question: "¿Qué etiqueta define el título mostrado en la pestaña del navegador?", options: ["<title>", "<head>", "<h1>"], answer: 0 },
  { question: "¿Qué atributo define la URL de un enlace?", options: ["href", "src", "link"], answer: 0 },
  { question: "¿Qué etiqueta se usa para incrustar videos?", options: ["<video>", "<media>", "<mp4>"], answer: 0 },
  { question: "¿Qué atributo se usa para definir el destino del enlace?", options: ["target", "destination", "location"], answer: 0 },
  {
    question: "¿Qué etiqueta se usa para un salto de línea?",
    options: ["<hr>", "<br>", "<line>"],
    answer: 1
  },
  {
    question: "¿Qué atributo se usa para enlazar un archivo CSS?",
    options: ["src", "href", "style"],
    answer: 1
  },
  {
    question: "¿Qué etiqueta se usa para encabezado de nivel 1?",
    options: ["<h1>", "<header>", "<title>"],
    answer: 0
  },
  {
    question: "¿Qué elemento define un párrafo en HTML?",
    options: ["<text>", "<p>", "<div>"],
    answer: 1
  },
  {
    question: "¿Qué etiqueta se usa para insertar una imagen?",
    options: ["<image>", "<img>", "<src>"],
    answer: 1
  },
  {
    question: "¿Cuál es la etiqueta para crear una lista ordenada?",
    options: ["<ul>", "<ol>", "<li>"],
    answer: 1
  },
  {
    question: "¿Qué atributo define un texto alternativo en una imagen?",
    options: ["alt", "title", "description"],
    answer: 0
  },
  {
    question: "¿Cuál es la extensión de archivo para HTML?",
    options: [".html", ".htm", ".php"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define un hipervínculo?",
    options: ["<a>", "<link>", "<href>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta contiene los metadatos?",
    options: ["<body>", "<meta>", "<head>"],
    answer: 2
  },
  {
    question: "¿Qué etiqueta agrupa contenido sin significado semántico?",
    options: ["<section>", "<div>", "<article>"],
    answer: 1
  },
  {
    question: "¿Qué etiqueta se usa para texto en negrita semántica?",
    options: ["<strong>", "<bold>", "<b>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define el título de la pestaña del navegador?",
    options: ["<title>", "<head>", "<h1>"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para definir un ID único?",
    options: ["id", "class", "name"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa una tabla?",
    options: ["<table>", "<grid>", "<layout>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para crear una fila en una tabla?",
    options: ["<td>", "<row>", "<tr>"],
    answer: 2
  },
  {
    question: "¿Qué etiqueta contiene el contenido visible?",
    options: ["<body>", "<main>", "<head>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define una lista no ordenada?",
    options: ["<ol>", "<ul>", "<li>"],
    answer: 1
  },
  {
    question: "¿Qué atributo se usa para aplicar estilos en línea?",
    options: ["style", "css", "design"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa una celda de datos?",
    options: ["<td>", "<tr>", "<th>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa una celda de encabezado?",
    options: ["<td>", "<th>", "<tr>"],
    answer: 1
  },
  {
    question: "¿Qué atributo se usa para agrupar elementos en un formulario?",
    options: ["fieldset", "formgroup", "section"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para escribir texto por defecto en inputs?",
    options: ["placeholder", "default", "label"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define una línea horizontal?",
    options: ["<line>", "<hr>", "<br>"],
    answer: 1
  },
  {
    question: "¿Qué etiqueta define el contenido principal?",
    options: ["<main>", "<body>", "<section>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta es adecuada para citas en bloque?",
    options: ["<q>", "<blockquote>", "<cite>"],
    answer: 1
  },
  {
    question: "¿Qué etiqueta se usa para contenido de navegación?",
    options: ["<nav>", "<menu>", "<aside>"],
    answer: 0
  },
  {
    question: "¿Qué atributo hace que un input sea obligatorio?",
    options: ["required", "obligatory", "validate"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para representar un ícono?",
    options: ["<i>", "<icon>", "<img>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa un grupo de contenido interactivo?",
    options: ["<form>", "<button>", "<input>"],
    answer: 0
  },
  {
    question: "¿Qué elemento es adecuado para agrupar botones?",
    options: ["<div>", "<fieldset>", "<form>"],
    answer: 1
  },
  {
    question: "¿Qué atributo permite abrir un enlace en otra pestaña?",
    options: ["target='_blank'", "open='true'", "tab='new'"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define una sección independiente?",
    options: ["<section>", "<div>", "<block>"],
    answer: 0
  },
  {
    question: "¿Qué elemento representa contenido adicional?",
    options: ["<aside>", "<extra>", "<more>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define la barra de navegación?",
    options: ["<nav>", "<menu>", "<ul>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa el pie de página?",
    options: ["<footer>", "<bottom>", "<end>"],
    answer: 0
  },
  {
    question: "¿Qué elemento define texto resaltado importante?",
    options: ["<mark>", "<highlight>", "<b>"],
    answer: 0
  },
  {
    question: "¿Qué elemento es para incluir archivos multimedia?",
    options: ["<video>", "<multimedia>", "<media>"],
    answer: 0
  },
  {
    question: "¿Qué elemento define un botón clickable?",
    options: ["<button>", "<input type='button'>", "<submit>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa una abreviatura?",
    options: ["<abbr>", "<short>", "<abbrv>"],
    answer: 0
  }
];
 

// ===== HTML SENIOR =====
const preguntasHtmlSenior = [
  { question: "¿Qué atributo define si un campo es obligatorio?", options: ["required", "validate", "mustfill"], answer: 0 },
  { question: "¿Qué doctype se usa para HTML5?", options: ["<!DOCTYPE html>", "<!doctype html5>", "<doctype html>"], answer: 0 },
  { question: "¿Qué atributo permite abrir un enlace en una nueva pestaña?", options: ["target='_blank'", "newtab", "blank='true'"], answer: 0 },
  { question: "¿Qué etiqueta define una lista ordenada?", options: ["<ol>", "<ul>", "<li>"], answer: 0 },
  { question: "¿Qué etiqueta agrupa campos en un formulario?", options: ["<fieldset>", "<group>", "<container>"], answer: 0 },
  { question: "¿Qué etiqueta representa contenido complementario?", options: ["<aside>", "<footer>", "<extra>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para texto importante (negrita semántica)?", options: ["<strong>", "<b>", "<bold>"], answer: 0 },
  { question: "¿Qué etiqueta representa la navegación principal?", options: ["<nav>", "<menu>", "<aside>"], answer: 0 },
  { question: "¿Qué atributo se usa para dar un estilo inline?", options: ["style", "css", "design"], answer: 0 },
  { question: "¿Qué etiqueta representa una barra de progreso?", options: ["<progress>", "<load>", "<bar>"], answer: 0 },
  { question: "¿Qué etiqueta se utiliza para definir una lista de definición?", options: ["<dl>", "<ul>", "<ol>"], answer: 0 },
  { question: "¿Qué etiqueta define el término dentro de una lista de definición?", options: ["<dt>", "<dd>", "<df>"], answer: 0 },
  { question: "¿Qué etiqueta define la descripción de un término en una lista de definición?", options: ["<dd>", "<dt>", "<desc>"], answer: 0 },
  { question: "¿Qué etiqueta define un marco flotante?", options: ["<iframe>", "<frame>", "<window>"], answer: 0 },
  { question: "¿Qué atributo define un texto emergente al pasar el cursor?", options: ["title", "tooltip", "hover"], answer: 0 },
  { question: "¿Qué etiqueta se utiliza para agrupar varios elementos multimedia?", options: ["<figure>", "<media>", "<gallery>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para añadir pie de imagen?", options: ["<figcaption>", "<caption>", "<footer>"], answer: 0 },
  { question: "¿Qué etiqueta representa un grupo de opciones en un desplegable?", options: ["<optgroup>", "<options>", "<selectgroup>"], answer: 0 },
  { question: "¿Qué etiqueta representa un contenido externo incrustado?", options: ["<embed>", "<iframe>", "<object>"], answer: 0 },
  { question: "¿Qué atributo desactiva temporalmente un campo de formulario?", options: ["disabled", "readonly", "off"], answer: 0 },
  { question: "¿Qué etiqueta indica contenido de dirección?", options: ["<address>", "<contact>", "<info>"], answer: 0 },
  { question: "¿Qué atributo se usa para agrupar campos relacionados en formularios?", options: ["fieldset", "group", "section"], answer: 0 },
  { question: "¿Qué atributo define la codificación de caracteres?", options: ["charset", "encoding", "lang"], answer: 0 },
  { question: "¿Qué etiqueta representa una barra de navegación lateral?", options: ["<aside>", "<section>", "<nav>"], answer: 0 },
  { question: "¿Qué etiqueta representa una cita textual?", options: ["<blockquote>", "<quote>", "<cite>"], answer: 0 },
  { question: "¿Qué etiqueta se usa para abreviaciones o acrónimos?", options: ["<abbr>", "<short>", "<acronym>"], answer: 0 },
  { question: "¿Qué etiqueta define la base URL de los enlaces?", options: ["<base>", "<url>", "<linkbase>"], answer: 0 },
  { question: "¿Qué atributo se usa para incluir scripts JavaScript externos?", options: ["src", "href", "script"], answer: 0 },
  { question: "¿Qué etiqueta se usa para elementos de solo lectura?", options: ["readonly", "disabled", "input readonly"], answer: 0 },
  { question: "¿Qué atributo define un marcador de posición?", options: ["placeholder", "hint", "example"], answer: 0 },
  {
    question: "¿Qué atributo HTML indica que un campo del formulario debe ser llenado obligatoriamente?",
    options: ["required", "mandatory", "validate"],
    answer: 0
  },
  {
    question: "¿Qué doctype se usa para HTML5?",
    options: ["<!DOCTYPE html>", "<!doctype html5>", "<doctype html>"],
    answer: 0
  },
  {
    question: "¿Qué atributo permite que un enlace se abra en otra pestaña?",
    options: ["target='_blank'", "newtab", "tab='_new'"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para agrupar opciones dentro de un select?",
    options: ["<optgroup>", "<optiongroup>", "<group>"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para desactivar un campo?",
    options: ["disabled", "readonly", "blocked"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define una entrada de tipo número?",
    options: ["<input type='number'>", "<number>", "<input type='digit'>"],
    answer: 0
  },
  {
    question: "¿Qué atributo especifica una URL de acción en un formulario?",
    options: ["action", "url", "href"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para establecer el valor predeterminado de un input?",
    options: ["value", "default", "placeholder"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta permite insertar un archivo de audio?",
    options: ["<audio>", "<media>", "<sound>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define un área interactiva en una imagen?",
    options: ["<area>", "<region>", "<zone>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta agrupa controles de formulario y texto relacionados?",
    options: ["<fieldset>", "<formgroup>", "<groupbox>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para definir contenido repetitivo de tabla?",
    options: ["<tbody>", "<repeat>", "<content>"],
    answer: 0
  },
  {
    question: "¿Qué atributo define una pista de texto para un campo input?",
    options: ["placeholder", "hint", "title"],
    answer: 0
  },
  {
    question: "¿Qué atributo HTML define el tipo MIME del contenido?",
    options: ["type", "mime", "format"],
    answer: 0
  },
  {
    question: "¿Qué atributo especifica un mensaje para cuando una imagen no carga?",
    options: ["alt", "title", "description"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa un campo de entrada de fecha?",
    options: ["<input type='date'>", "<calendar>", "<datepicker>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para incluir código externo JavaScript?",
    options: ["<script>", "<js>", "<javascript>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para insertar una línea de tiempo en HTML5?",
    options: ["<time>", "<timeline>", "<clock>"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para definir el tamaño máximo de caracteres de input?",
    options: ["maxlength", "limit", "maxchars"],
    answer: 0
  },
  {
    question: "¿Qué elemento HTML se usa para incrustar contenido interactivo como un video de YouTube?",
    options: ["<iframe>", "<embed>", "<object>"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para que una opción esté seleccionada por defecto?",
    options: ["selected", "checked", "default"],
    answer: 0
  },
  {
    question: "¿Qué atributo HTML permite asociar una etiqueta con un campo?",
    options: ["for", "label", "target"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML semántica se usa para definir una cita de texto?",
    options: ["<blockquote>", "<cite>", "<quote>"],
    answer: 0
  },
  {
    question: "¿Qué atributo define si un input está solo lectura?",
    options: ["readonly", "disabled", "static"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML define la cabecera de una tabla?",
    options: ["<thead>", "<header>", "<thgroup>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML se utiliza para representar el contenido más relevante de la página?",
    options: ["<main>", "<body>", "<section>"],
    answer: 0
  },
  {
    question: "¿Qué atributo define si un botón de formulario envía el formulario?",
    options: ["type='submit'", "role='send'", "submit='true'"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML agrupa múltiples líneas de texto editable?",
    options: ["<textarea>", "<input type='text'>", "<editor>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML representa un icono en HTML5?",
    options: ["<i>", "<icon>", "<symbol>"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para definir estilos inline?",
    options: ["style", "css", "design"],
    answer: 0
  },
  {
    question: "¿Qué elemento HTML define una lista de definición?",
    options: ["<dl>", "<list>", "<definition>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa el encabezado de un documento o sección?",
    options: ["<header>", "<title>", "<hgroup>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML se usa para texto que debe ser resaltado?",
    options: ["<mark>", "<highlight>", "<strong>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML define un botón que no envía formularios?",
    options: ["<button type='button'>", "<input type='reset'>", "<submit>"],
    answer: 0
  },
  {
    question: "¿Qué atributo se usa para definir si un input puede ser enfocado automáticamente?",
    options: ["autofocus", "focus", "autoselect"],
    answer: 0
  },
  {
    question: "¿Qué atributo define la acción que realiza un formulario?",
    options: ["action", "method", "target"],
    answer: 0
  },
  {
    question: "¿Qué atributo define el método HTTP usado por el formulario?",
    options: ["method", "action", "type"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML representa una barra de progreso?",
    options: ["<progress>", "<meter>", "<bar>"],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML representa una medición escalar?",
    options: ["<meter>", "<scale>", "<range>"],
    answer: 0
  },
]

  const preguntasHtmlBloquesdecodigo = [
  {
    question: "¿Qué bloque HTML define correctamente un formulario básico?",
    options: [
      "<formulario><input></formulario>",
      "<form><input type='text'></form>",
      "<input type='text'>"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es la forma correcta de incluir un enlace en HTML?",
    options: [
      "<a href='https://example.com'>Visitar</a>",
      "<link url='https://example.com'>Visitar</link>",
      "<url>https://example.com</url>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la forma correcta de insertar una imagen?",
    options: [
      "<img src='logo.png' alt='Logo'>",
      "<image src='logo.png'>",
      "<img url='logo.png'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué código crea una lista desordenada?",
    options: [
      "<ul><li>Elemento</li></ul>",
      "<ol><li>Elemento</li></ol>",
      "<list><li>Elemento</li></list>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque HTML muestra correctamente una tabla simple?",
    options: [
      "<table><tr><td>Dato</td></tr></table>",
      "<table><data>Dato</data></table>",
      "<tb><row><column>Dato</column></row></tb>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque muestra correctamente un encabezado nivel 2?",
    options: [
      "<h2>Título</h2>",
      "<header2>Título</header2>",
      "<h3>Título</h3>"
    ],
    answer: 0
  },
  {
    question: "¿Qué línea representa un párrafo válido?",
    options: [
      "<p>Este es un párrafo</p>",
      "<text>Este es un párrafo</text>",
      "<paragraph>Este es un párrafo</paragraph>"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una lista ordenada?",
    options: [
      "<ol><li>Uno</li><li>Dos</li></ol>",
      "<ul><li>Uno</li><li>Dos</li></ul>",
      "<list><li>Uno</li><li>Dos</li></list>"
    ],
    answer: 0
  },
  {
    question: "¿Qué código inserta un comentario en HTML?",
    options: [
      "<!-- Esto es un comentario -->",
      "// Esto es un comentario",
      "# Esto es un comentario"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la forma correcta de definir el idioma del documento?",
    options: [
      "<html lang='es'>",
      "<html language='spanish'>",
      "<html lang='ESP'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque define un input de tipo correo electrónico?",
    options: [
      "<input type='email'>",
      "<input type='correo'>",
      "<correo></correo>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa correctamente un botón?",
    options: [
      "<button>Enviar</button>",
      "<btn>Enviar</btn>",
      "<input type='submitar'>"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines el encabezado de un sitio?",
    options: [
      "<header>Bienvenido</header>",
      "<head>Bienvenido</head>",
      "<encabezado>Bienvenido</encabezado>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque representa una sección del sitio?",
    options: [
      "<section>Contenido</section>",
      "<area>Contenido</area>",
      "<div class='seccion'></div>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque HTML se usa para resaltar texto importante?",
    options: [
      "<strong>Importante</strong>",
      "<highlight>Importante</highlight>",
      "<bold>Importante</bold>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque HTML crea una barra de navegación?",
    options: [
      "<nav><a href='#'>Inicio</a></nav>",
      "<navigation><link href='#'>Inicio</link></navigation>",
      "<navbar>Inicio</navbar>"
    ],
    answer: 0
  },
  {
    question: "¿Qué estructura HTML permite agrupar opciones en un formulario?",
    options: [
      "<fieldset><legend>Datos</legend></fieldset>",
      "<formgroup><title>Datos</title></formgroup>",
      "<group><text>Datos</text></group>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa correctamente una línea horizontal?",
    options: [
      "<hr>",
      "<line>",
      "<border-line>"
    ],
    answer: 0
  },
  {
    
    question: "¿Qué bloque HTML se usa para contenido secundario o lateral?",
    options: [
      "<aside>Publicidad</aside>",
      "<sider>Publicidad</sider>",
      "<aux>Publicidad</aux>"
    ],
    answer: 0
  },
  {
    question: "¿Qué código representa un campo de entrada de fecha?",
    options: [
      "<input type='date'>",
      "<input type='calendar'>",
      "<datefield></datefield>"
    ],
    answer: 0
  },

  {
    question: "¿Qué bloque crea una tabla con 2 filas y 2 columnas?",
    options: [
      "<table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table>",
      "<table><td>1</td><td>2</td><td>3</td><td>4</td></table>",
      "<table><tr>1 2</tr><tr>3 4</tr></table>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML representa un encabezado de nivel 3?",
    options: [
      "<h2>Encabezado</h2>",
      "<h3>Encabezado</h3>",
      "<h4>Encabezado</h4>"
    ],
    answer: 1
  },
  {
    question: "¿Cuál define correctamente una lista desordenada con tres elementos?",
    options: [
      "<ol><li>Uno</li><li>Dos</li><li>Tres</li></ol>",
      "<ul><li>Uno</li><li>Dos</li><li>Tres</li></ul>",
      "<list><li>Uno</li><li>Dos</li><li>Tres</li></list>"
    ],
    answer: 1
  },
  {
    question: "¿Qué etiqueta HTML se usa para insertar una imagen?",
    options: [
      "<img src='imagen.jpg' alt='desc'>",
      "<image src='imagen.jpg'>",
      "<src='imagen.jpg'>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál de estos bloques incluye correctamente metadatos?",
    options: [
      "<meta charset='UTF-8'>",
      "<header charset='UTF-8'>",
      "<html lang='UTF-8'>"
    ],
    answer: 0
  },

  {
    question: "¿Qué bloque HTML define un formulario básico?",
    options: [
      "<input type='text'>",
      "<formulario><input></formulario>",
      "<form><input type='text'></form>"
    ],
    answer: 2
  },
 
  {
    question: "¿Qué bloque crea un enlace a otra página?",
    options: [
      "<ref>pagina.html</ref>",
      "<a href='pagina.html'>Ir</a>",
      "<link='pagina.html'>Ir</link>"
    ],
    answer: 1
  },
 
  {
    question: "¿Qué bloque HTML muestra una imagen?",
    options: [
      "<img src='foto.jpg' alt='Foto'>",
      "<image src='foto.jpg'>",
      "<img>foto.jpg</img>"
    ],
    answer: 0
  },
 
  {
    question: "¿Cuál define correctamente una lista desordenada con tres elementos?",
    options: [
      "<ul><li>Uno</li><li>Dos</li><li>Tres</li></ul>",
      "<ol><li>Uno</li><li>Dos</li><li>Tres</li></ol>",
      "<list><li>Uno</li><li>Dos</li><li>Tres</li></list>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque HTML define un formulario básico?",
    options: [
      "<input type='text'>",
      "<formulario><input></formulario>",
      "<form><input type='text'></form>"
    ],
    answer: 2
  },
  {
    question: "¿Qué estructura es válida para una tabla HTML?",
    options: [
      "<table><thead><tr><th></th></tr></thead><tbody><tr><td></td></tr></tbody></table>",
      "<tabla><cabecera><fila><encabezado></encabezado></fila></cabecera></tabla>",
      "<table><td>dato</td></table>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta es correcta para crear una lista desordenada?",
    options: [
      "<list><item>Elemento</item></list>",
      "<ul><li>Elemento</li></ul>",
      "<ol><li>Elemento</li></ol>"
    ],
    answer: 1
  },
  {
    question: "¿Qué estructura es correcta para un enlace?",
    options: [
      "<link href='https://example.com'>Ir</link>",
      "<a href='https://example.com'>Ir</a>",
      "<enlace src='https://example.com'>Ir</enlace>"
    ],
    answer: 1
  },
  {
    question: "¿Qué etiqueta se usa para insertar una imagen?",
    options: [
      "<img src='imagen.jpg' alt='Descripción'>",
      "<image src='imagen.jpg'>",
      "<pic url='imagen.jpg'>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la estructura correcta para un input de correo?",
    options: [
      "<input type='email' placeholder='Tu correo'>",
      "<email placeholder='Tu correo'></email>",
      "<input correo='true'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa un botón en un formulario?",
    options: [
      "<submit>Enviar</submit>",
      "<input type='button' value='Enviar'>",
      "<button type='submit'>Enviar</button>"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque representa correctamente un documento HTML5?",
    options: [
      "<html><head></head><body></body></html>",
      "<!DOCTYPE html><html><head><title></title></head><body></body></html>",
      "<html5><header></header><main></main></html5>"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es la estructura correcta de una lista ordenada?",
    options: [
      "<ul><li>1</li><li>2</li></ul>",
      "<li>Elemento 1</li><li>Elemento 2</li>",
      "<ol><li>Elemento 1</li><li>Elemento 2</li></ol>"
    ],
    answer: 2
  },
  {
    question: "¿Qué etiqueta muestra texto en negrita semánticamente?",
    options: [
      "<b>Texto</b>",
      "<bold>Texto</bold>",
      "<strong>Texto</strong>"
    ],
    answer: 2
  },
 
  {
    question: "¿Qué estructura define correctamente un encabezado principal?",
    options: [
      "<h1>Título</h1>",
      "<titulo>Principal</titulo>",
      "<header>H1</header>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque representa una cita?",
    options: [
      "<quote>Cita</quote>",
      "<cite>Cita</cite>",
      "<blockquote>Cita</blockquote>"
    ],
    answer: 2
  },
  {
    question: "¿Qué código es válido para insertar un video?",
    options: [
      "<vid src='video.mp4'></vid>",
      "<video src='video.mp4' controls></video>",
      "<media file='video.mp4'>"
    ],
    answer: 1
  },
  {
    question: "¿Qué bloque representa una barra de navegación?",
    options: [
      "<nav><ul><li>Inicio</li></ul></nav>",
      "<menu><li>Inicio</li></menu>",
      "<bar><item>Inicio</item></bar>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para agrupar elementos en línea?",
    options: [
      "<span>Texto</span>",
      "<group>Texto</group>",
       "<inline>"
    ],
    answer: 2
  },
  {
    question: "¿Qué estructura representa una sección principal?",
    options: [
      "<section><h2>Título</h2></section>",
      "<div><h2>Sección</h2></div>",
      "<seccion><titulo></titulo></seccion>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define metadatos?",
    options: [
      "<meta charset='UTF-8'>",
      "<info charset='UTF-8'>",
      "<header charset='UTF-8'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para agrupar contenido genérico?",
    options: [
      "<group>Contenido</group>",
      "<container>Contenido</container>",
       "<div>Contenido</div>",
    ],
    answer: 2
  },
  {
    question: "¿Qué etiqueta es correcta para resaltar código?",
    options: [
      "<pre><code>console.log('Hola')</code></pre>",
      "<text><script>Hola</script></text>",
      "<p><highlight>Hola</highlight></p>",
    ],
    answer: 0
  },
    {
    question: "¿Qué etiqueta se usa para definir una descripción de imagen?",
    options: [
      "<caption>Imagen</caption>",
       "<figcaption>Descripción</figcaption>",
      "<describe>Texto</describe>"
    ],
    answer: 1
  },
  {
    question: "¿Qué bloque es correcto para agrupar contenido y descripción de imagen?",
    options: [
      "<figure><img src='img.jpg'><figcaption>Descripción</figcaption></figure>",
      "<img><caption>Texto</caption></img>",
      "<img alt='Texto'><description></description>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál de los siguientes fragmentos define un campo obligatorio?",
    options: [
      "<input required='false'>",
      "<text obligatorio>",
      "<input type='text' required>"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque HTML define un dropdown (lista desplegable)?",
    options: [
      "<dropdown><item>Uno</item></dropdown>",
      "<select><opt>Uno</opt></select>",
      "<select><option>Uno</option></select>"
    ],
    answer: 2
  },
  {
    question: "¿Qué estructura HTML se usa para comentarios?",
    options: [
      "<!-- Esto es un comentario -->",
      "// Comentario",
      "/* Comentario */"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque define un campo de texto largo?",
    options: [
      "<textarea rows='4' cols='50'></textarea>",
      "<input type='textarea'>",
      "<textareabox></textareabox>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque define un encabezado HTML5 semántico?",
    options: [
      "<head><h1>Inicio</h1></head>",
      "<header><h1>Inicio</h1></header>",
      "<mainhead><title>Inicio</title></mainhead>"
    ],
    answer: 1
  },
  {
    question: "¿Qué etiqueta representa contenido principal?",
    options: [
      "<center>Main</center>",
      "<principal>Contenido</principal>",
        "<main>Contenido</main>"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque representa contenido lateral (sidebar)?",
    options: [
      "<sidepanel>Menú</sidepanel>",
      "<leftbar>Menú</leftbar>",
       "<aside>Menú</aside>"
    ],
    answer: 2
  },
  {
    question: "¿Qué etiqueta agrupa campos relacionados en formularios?",
    options: [
      "<fieldset><legend>Datos</legend></fieldset>",
      "<formgroup>...</formgroup>",
      "<groupbox>...</groupbox>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál de estos códigos es válido para abrir un enlace en otra pestaña?",
    options: [
      "<a href='pagina.html' target='_blank'>Abrir</a>",
      "<a target='newtab'>Abrir</a>",
      "<link src='pagina.html' newwindow>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta es semántica para pie de página?",
    options: [
      "<bottom>© 2025</bottom>",
      "<footer>© 2025</footer>",
      "<pie>© 2025</pie>"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es la forma correcta de incluir un archivo JavaScript?",
    options: [
      "<script src='app.js'></script>",
      "<javascript src='app.js'>",
      "<script link='app.js'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta HTML representa texto en cursiva semánticamente?",
    options: [
      "<italic>Importante</italic>",
      "<i semantic='true'>Importante</i>",
       "<em>Importante</em>"
    ],
    answer: 2
  },
  {
    question: "¿Qué estructura define una lista de definición?",
    options: [
      "<deflist><term>Uno</term><def>Def</def></deflist>",
      "<dl><li>Item</li></dl>",
      "<dl><dt>Término</dt><dd>Definición</dd></dl>"
    ],
    answer: 2
  },
  {
    question: "¿Qué fragmento es correcto para indicar un campo de fecha?",
    options: [
      "<input type='date'>",
      "<calendar type='date'>",
      "<input fecha='true'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta agrupa la parte superior del documento HTML?",
    options: [
      "<header><title>Mi sitio</title></header>",
      "<head><title>Mi sitio</title></head>",
      "<headsection>Mi sitio</headsection>"
    ],
    answer: 1
  },
  {
    question: "¿Qué estructura define una barra de progreso?",
    options: [
      "<progress value='70' max='100'></progress>",
      "<barra progreso='70/100'></barra>",
      "<input type='progress'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué fragmento representa un botón con JavaScript inline?",
    options: [
      "<click function='Hola()'>Click</click>",
      "<button js='Hola'>Click</button>",
       "<button onclick='alert(\"Hola\")'>Click</button>"
    ],
    answer: 2
  },
  {
    question: "¿Qué estructura define correctamente un botón de reset?",
    options: [
      "<reset>Reiniciar</reset>",
      "<input type='reset' value='Restablecer'>",
      "<button reset='true'>Reset</button>"
    ],
    answer: 1
  },
  {
    question: "¿Qué bloque HTML representa el pie de página de un documento?",
    options: [
      "<footer>Derechos reservados</footer>",
      "<bottom>Derechos reservados</bottom>",
      "<pie>Derechos reservados</pie>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es el bloque correcto para agrupar contenido genérico?",
    options: [
      "<div>Contenido</div>",
      "<group>Contenido</group>",
      "<container>Contenido</container>"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se inserta una línea de separación en HTML?",
    options: [
      "<hr>",
      "<linea>",
      "<separator>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta muestra una cita en HTML?",
    options: [
      "<blockquote>Cita textual</blockquote>",
      "<quote>Cita textual</quote>",
      "<cita>Cita textual</cita>"
    ],
    answer: 0
  },
  {
    question: "¿Qué estructura HTML crea un dropdown básico?",
    options: [
      "<select><option>Uno</option></select>",
      "<dropdown><item>Uno</item></dropdown>",
      "<menu><choice>Uno</choice></menu>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta define un contenido repetido (por ejemplo: widgets)?",
    options: [
      "<template><p>Ejemplo</p></template>",
      "<repeat><p>Ejemplo</p></repeat>",
      "<clone><p>Ejemplo</p></clone>"
    ],
    answer: 0
  },
  {
    question: "¿Qué código HTML muestra correctamente una imagen con texto alternativo?",
    options: [
      "<img src='logo.png' alt='Mi logo'>",
      "<img source='logo.png' texto='Mi logo'>",
      "<image src='logo.png' alt='Mi logo'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque representa una celda de encabezado en una tabla?",
    options: [
      "<th>Nombre</th>",
      "<thead>Nombre</thead>",
      "<cellhead>Nombre</cellhead>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es el bloque HTML para definir un campo de texto grande?",
    options: [
      "<textarea></textarea>",
      "<textbox></textbox>",
      "<input size='largo'>"
    ],
    answer: 0
  },
  {
    question: "¿Qué estructura HTML representa mejor una sección de artículo?",
    options: [
      "<article><h2>Título</h2><p>Contenido</p></article>",
      "<section><title>Título</title></section>",
      "<div class='articulo'></div>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque HTML se usa para resaltar código de programación?",
    options: [
      "<code>console.log('Hola')</code>",
      "<script>console.log</script>",
      "<syntax>console.log</syntax>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque es adecuado para resaltar texto importante visualmente sin semántica?",
    options: [
      "<b>Importante</b>",
      "<highlight>Importante</highlight>",
      "<important>Importante</important>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque se usa para representar una dirección física?",
    options: [
      "<address>Calle 123</address>",
      "<direction>Calle 123</direction>",
      "<addr>Calle 123</addr>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta representa mejor una cita breve en línea?",
    options: [
      "<q>Texto citado</q>",
      "<shortquote>Texto citado</shortquote>",
      "<inlinequote>Texto citado</inlinequote>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque HTML representa mejor una línea de contacto?",
    options: [
      "<address>Email: contacto@web.com</address>",
      "<info>contacto@web.com</info>",
      "<contact>contacto@web.com</contact>"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta permite mostrar texto tachado?",
    options: [
      "<s>Tachado</s>",
      "<strike>Tachado</strike>",
      "<del>Tachado</del>"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque define correctamente una sección de navegación?",
    options: [
      "<nav><ul><li>Inicio</li></ul></nav>",
      "<menu><item>Inicio</item></menu>",
      "<navigation><link>Inicio</link></navigation>"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es el bloque correcto para un contenedor principal de la página?",
    options: [
      "<main>Contenido</main>",
      "<principal>Contenido</principal>",
      "<bodymain>Contenido</bodymain>"
    ],
    answer: 0
  },
  {
    question: "¿Qué estructura es válida para HTML5?",
    options: [
      "<!DOCTYPE html>",
      "<doctype html5>",
      "<html5-doctype>"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque representa correctamente una etiqueta de fecha?",
    options: [
      "<time datetime='2023-01-01'>1 de enero</time>",
      "<date>2023-01-01</date>",
      "<calendar>2023-01-01</calendar>"
    ],
    answer: 0
  },
]

const preguntasCssJunior = [
  { question: "¿Cómo se aplica color al texto en CSS?", options: ["color", "text-color", "font-color"], answer: 0 },
  { question: "¿Qué unidad representa píxeles en CSS?", options: ["px", "pt", "em"], answer: 0 },
  { question: "¿Qué propiedad cambia el tamaño del texto?", options: ["font-size", "text-size", "size"], answer: 0 },
  { question: "¿Cómo se hace negrita en CSS?", options: ["font-weight: bold;", "text-bold: true;", "font-bold: yes;"], answer: 0 },
  { question: "¿Qué propiedad cambia el fondo?", options: ["background-color", "bg-color", "color-bg"], answer: 0 },
  { question: "¿Qué propiedad alinea texto al centro?", options: ["text-align: center;", "align: center;", "text-center;"], answer: 0 },
  { question: "¿Cómo se selecciona por ID en CSS?", options: ["#id", ".id", "id:"], answer: 0 },
  { question: "¿Cómo se selecciona por clase en CSS?", options: [".clase", "#clase", "clase:"], answer: 0 },
  { question: "¿Qué propiedad cambia el tipo de fuente?", options: ["font-family", "font-type", "typeface"], answer: 0 },
  { question: "¿Cómo se aplica CSS a un elemento directamente?", options: ["style=\"...\"", "css=\"...\"", "design=\"...\""], answer: 0 },
  { question: "¿Qué propiedad define el alto de un elemento?", options: ["height", "top", "size"], answer: 0 },
  { question: "¿Qué propiedad define el ancho de un elemento?", options: ["width", "left", "size"], answer: 0 },
  { question: "¿Qué propiedad redondea los bordes?", options: ["border-radius", "round-border", "curve"], answer: 0 },
  { question: "¿Qué propiedad define el borde de un elemento?", options: ["border", "line", "outline"], answer: 0 },
  { question: "¿Qué propiedad ajusta el espacio entre letras?", options: ["letter-spacing", "word-spacing", "text-space"], answer: 0 },
  { question: "¿Qué propiedad alinea contenido verticalmente?", options: ["vertical-align", "text-align", "align-vertical"], answer: 0 },
  { question: "¿Qué propiedad oculta el desbordamiento?", options: ["overflow: hidden", "display: none", "visibility: hidden"], answer: 0 },
  { question: "¿Qué valor tiene display para ocultar un elemento?", options: ["none", "hidden", "block"], answer: 0 },
  { question: "¿Qué valor aplica CSS en bloque?", options: ["block", "inline", "flex"], answer: 0 },
  { question: "¿Qué propiedad define si el texto se subraya?", options: ["text-decoration", "underline", "text-line"], answer: 0 },
  { question: "¿Cómo se comenta en CSS?", options: ["/* comentario */", "// comentario", "# comentario"], answer: 0 },
  { question: "¿Qué propiedad ajusta el interlineado?", options: ["line-height", "text-height", "space-between"], answer: 0 },
  { question: "¿Qué unidad representa porcentaje en CSS?", options: ["%", "pct", "per"], answer: 0 },
  { question: "¿Qué propiedad se usa para agregar una imagen de fondo?", options: ["background-image", "image-bg", "bg-img"], answer: 0 },
  { question: "¿Qué propiedad ajusta el tamaño del fondo?", options: ["background-size", "bg-size", "image-size"], answer: 0 },
  { question: "¿Qué propiedad posiciona el fondo?", options: ["background-position", "bg-position", "image-position"], answer: 0 },
  { question: "¿Qué propiedad define la opacidad?", options: ["opacity", "transparent", "alpha"], answer: 0 },
  { question: "¿Qué propiedad transforma el texto a mayúsculas?", options: ["text-transform", "text-case", "uppercase"], answer: 0 },
  { question: "¿Qué propiedad controla la visibilidad?", options: ["visibility", "display", "show"], answer: 0 },
  { question: "¿Qué valor en font-weight representa texto normal?", options: ["normal", "bold", "light"], answer: 0 },
  {
    question: "¿Qué propiedad se usa para cambiar el color del texto?",
    options: ["text-color", "color", "font-color"],
    answer: 1
  },
  {
    question: "¿Qué unidad representa píxeles en CSS?",
    options: ["pt", "em", "px"],
    answer: 2
  },
  {
    question: "¿Cómo se cambia el fondo de un elemento?",
    options: ["background-color", "bg", "color"],
    answer: 0
  },
  {
    question: "¿Qué propiedad alinea texto al centro?",
    options: ["align: center;", "text-align: center;", "center-text;"],
    answer: 1
  },
  {
    question: "¿Qué propiedad cambia el tamaño del texto?",
    options: ["font-size", "text-length", "size-font"],
    answer: 0
  },
  {
    question: "¿Cómo se hace el texto en negrita?",
    options: ["font-weight: bold;", "text-bold;", "weight: 700;"],
    answer: 0
  },
  {
    question: "¿Cómo se selecciona un ID en CSS?",
    options: [".id", "id#", "#id"],
    answer: 2
  },
  {
    question: "¿Cómo se selecciona una clase en CSS?",
    options: ["class:", ".clase", "#clase"],
    answer: 1
  },
  {
    question: "¿Qué propiedad cambia el tipo de letra?",
    options: ["font-family", "font-type", "typeface"],
    answer: 0
  },
  {
    question: "¿Qué propiedad controla el espaciado externo?",
    options: ["margin", "padding", "spacing"],
    answer: 0
  },
  {
    question: "¿Qué propiedad controla el espaciado interno?",
    options: ["gap", "margin", "padding"],
    answer: 2
  },
  {
    question: "¿Cómo se hace que un texto esté subrayado?",
    options: ["text-decoration: underline;", "underline: true;", "decoration: underline;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para bordes?",
    options: ["border", "outline", "frame"],
    answer: 0
  },
  {
    question: "¿Cómo se hace un borde redondeado?",
    options: ["border-radius", "round-border", "curve"],
    answer: 0
  },
  {
    question: "¿Qué propiedad cambia el ancho de un elemento?",
    options: ["width", "length", "size"],
    answer: 0
  },
  {
    question: "¿Qué propiedad cambia la altura?",
    options: ["height", "size-y", "long"],
    answer: 0
  },
  {
    question: "¿Qué valor oculta un elemento?",
    options: ["hidden", "none", "display: none"],
    answer: 2
  },
  {
    question: "¿Qué propiedad ajusta el contenido dentro de su contenedor?",
    options: ["box-sizing", "fit", "size-adjust"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define el estilo del cursor?",
    options: ["pointer", "cursor", "mouse"],
    answer: 1
  },
  {
    question: "¿Cómo se define una transición simple?",
    options: ["transition: all 0.3s;", "change: 0.3s;", "effect: slow;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para cambiar el color del borde?",
    options: ["border-color", "color-border", "edge-color"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para aplicar sombra a una caja?",
    options: ["box-shadow", "shadow", "element-shadow"],
    answer: 0
  },
  {
    question: "¿Qué propiedad cambia el estilo de la fuente?",
    options: ["font-style", "text-style", "style-font"],
    answer: 0
  },
  {
    question: "¿Qué propiedad cambia el tamaño del fondo?",
    options: ["background-size", "bg-resize", "image-size"],
    answer: 0
  },
  {
    question: "¿Qué propiedad hace que un elemento flote a la derecha?",
    options: ["float: right;", "align-right;", "side: right;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para cambiar la opacidad?",
    options: ["opacity", "transparent", "alpha"],
    answer: 0
  },
  {
    question: "¿Qué propiedad transforma un elemento?",
    options: ["transform", "effect", "translate"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define el color del borde superior?",
    options: ["border-top-color", "top-color", "color-top"],
    answer: 0
  },
  {
    question: "¿Qué valor de display hace que un elemento esté en línea?",
    options: ["display: inline;", "inline-block", "line"],
    answer: 0
  },
  {
    question: "¿Qué unidad es relativa al tamaño de fuente del padre?",
    options: ["em", "px", "pt"],
    answer: 0
  },
  {
    question: "¿Cómo se aplica un comentario en CSS?",
    options: ["/* comentario */", "// comentario", "<!-- comentario -->"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define un borde de línea punteada?",
    options: ["border-style: dotted;", "border: dashed;", "border-type: point;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad ajusta la distancia entre letras?",
    options: ["letter-spacing", "font-gap", "text-distance"],
    answer: 0
  },
  {
    question: "¿Qué propiedad alinea los elementos flex?",
    options: ["justify-content", "align-text", "flex-align"],
    answer: 0
  },
  {
    question: "¿Qué propiedad cambia el estilo de lista?",
    options: ["list-style-type", "list-type", "bullet-style"],
    answer: 0
  },
  {
    question: "¿Qué propiedad aplica un color de fondo?",
    options: ["background-color", "bg-color", "fill"],
    answer: 0
  },
  {
    question: "¿Qué propiedad permite cambiar la fuente?",
    options: ["font-family", "font-type", "letter-style"],
    answer: 0
  },
  {
    question: "¿Qué propiedad agranda todo el elemento?",
    options: ["transform: scale(1.2);", "resize: large;", "zoom: in;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad limita el contenido visible?",
    options: ["overflow", "clip", "hide-content"],
    answer: 0
  },
  {
    question: "¿Qué propiedad aplica animaciones?",
    options: ["animation", "transition", "effect"],
    answer: 0
  }
];


const preguntasCssSenior = [
  { question: "¿Qué propiedad controla el espaciado externo?", options: ["margin", "padding", "spacing"], answer: 0 },
  { question: "¿Qué propiedad controla el espaciado interno?", options: ["padding", "margin", "spacing"], answer: 0 },
  { question: "¿Cómo se aplica un degradado?", options: ["background: linear-gradient(...)", "color: gradient(...)", "background: gradient(...)"], answer: 0 },
  { question: "¿Qué propiedad controla el orden de capas?", options: ["z-index", "layer-index", "depth"], answer: 0 },
  { question: "¿Qué valor de posición hace que un elemento se mueva con scroll?", options: ["fixed", "static", "relative"], answer: 0 },
  { question: "¿Qué valor de display oculta un elemento?", options: ["none", "hidden", "invisible"], answer: 0 },
  { question: "¿Qué propiedad transforma tamaño, posición o rotación?", options: ["transform", "transition", "animate"], answer: 0 },
  { question: "¿Qué propiedad permite animaciones CSS?", options: ["animation", "motion", "timeline"], answer: 0 },
  { question: "¿Qué propiedad aplica transición de forma suave?", options: ["transition", "smooth", "fade"], answer: 0 },
  { question: "¿Qué propiedad aplica sombra al texto?", options: ["text-shadow", "font-shadow", "shadow-text"], answer: 0 },
  { question: "¿Qué propiedad aplica sombra al contenedor?", options: ["box-shadow", "container-shadow", "element-shadow"], answer: 0 },
  { question: "¿Qué propiedad define si un elemento es flexible?", options: ["flex", "display", "position"], answer: 0 },
  { question: "¿Qué propiedad alinea los ítems en un flex container?", options: ["justify-content", "align-items", "text-align"], answer: 0 },
  { question: "¿Qué propiedad alinea los ítems verticalmente en flex?", options: ["align-items", "justify-content", "vertical-align"], answer: 0 },
  { question: "¿Qué propiedad controla el flujo de elementos?", options: ["flex-direction", "flow", "layout-direction"], answer: 0 },
  { question: "¿Qué propiedad controla el espacio entre ítems?", options: ["gap", "spacing", "margin-between"], answer: 0 },
  { question: "¿Qué propiedad agrupa estilos repetidos?", options: ["shorthand", "summary", "combine"], answer: 0 },
  { question: "¿Qué valor de position permite posicionamiento relativo?", options: ["relative", "absolute", "fixed"], answer: 0 },
  { question: "¿Qué valor de position permite fijar un elemento?", options: ["fixed", "absolute", "relative"], answer: 0 },
  { question: "¿Qué valor de display distribuye elementos horizontalmente?", options: ["flex", "inline", "block"], answer: 0 },
  { question: "¿Qué propiedad define reglas para medios específicos?", options: ["@media", "@screen", "@responsive"], answer: 0 },
  { question: "¿Qué propiedad se usa en grid para columnas?", options: ["grid-template-columns", "grid-columns", "columns"], answer: 0 },
  { question: "¿Qué propiedad define áreas en grid?", options: ["grid-template-areas", "grid-areas", "layout-areas"], answer: 0 },
  { question: "¿Qué propiedad controla la alineación de áreas de grid?", options: ["align-content", "justify-content", "grid-align"], answer: 0 },
  { question: "¿Qué propiedad se hereda por defecto?", options: ["color", "font-family", "line-height"], answer: 0 },
  { question: "¿Qué valor tiene visibility para ocultar un elemento manteniendo su espacio?", options: ["hidden", "none", "invisible"], answer: 0 },
  { question: "¿Qué propiedad controla el comportamiento de scroll en anclas?", options: ["scroll-behavior", "scroll-style", "scroll-effect"], answer: 0 },
  { question: "¿Qué pseudo-clase se activa al pasar el ratón?", options: [":hover", ":focus", ":active"], answer: 0 },
  { question: "¿Qué pseudo-elemento permite insertar contenido antes de un elemento?", options: ["::before", "::start", "::insert"], answer: 0 },
  { question: "¿Qué propiedad establece el valor mínimo de ancho?", options: ["min-width", "limit-width", "width-min"], answer: 0 },
  {
    question: "¿Qué propiedad controla el orden de apilamiento de elementos?",
    options: ["layer-index", "depth", "z-index"],
    answer: 2
  },
  {
    question: "¿Cómo se aplica un degradado lineal como fondo?",
    options: ["background: linear-gradient(red, blue);", "background: color-shift(red, blue);", "gradient: linear(red, blue);"],
    answer: 0
  },
  {
    question: "¿Qué valor de position hace que un elemento salga del flujo normal?",
    options: ["relative", "fixed", "static"],
    answer: 1
  },
  {
    question: "¿Qué propiedad define una cuadrícula flexible?",
    options: ["grid-template-columns", "columns-grid", "flex-grid"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para transformar un elemento rotándolo?",
    options: ["transform: rotate(45deg);", "rotate: 45deg;", "turn: 45;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad controla la animación en CSS?",
    options: ["animation", "transition", "effect"],
    answer: 0
  },
  {
    question: "¿Qué propiedad hace una transición suave de color?",
    options: ["transition: background-color 0.3s;", "background-delay: 0.3s;", "color-shift: 300ms;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad limita el número de líneas visibles de texto?",
    options: ["line-clamp", "max-lines", "text-trim"],
    answer: 0
  },
  {
    question: "¿Qué valor permite ocultar pero conservar el espacio del elemento?",
    options: ["visibility: hidden;", "display: none;", "hide: true;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad alinea verticalmente en Flexbox?",
    options: ["align-items", "justify-items", "flex-align"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define cuánto espacio puede crecer un ítem en Flexbox?",
    options: ["flex-grow", "item-expand", "flex-scale"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define si se permite que el contenido se desborde?",
    options: ["overflow", "exceed", "extra"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para sombrear el texto?",
    options: ["text-shadow", "font-shadow", "shadow-text"],
    answer: 0
  },
  {
    question: "¿Qué propiedad controla el espaciado entre palabras?",
    options: ["word-spacing", "text-gap", "space-word"],
    answer: 0
  },
  {
    question: "¿Qué propiedad permite repetir una imagen de fondo?",
    options: ["background-repeat", "image-loop", "repeat-bg"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para animar gradualmente una transformación?",
    options: ["transition", "animation", "easing"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define un área de recorte rectangular?",
    options: ["clip", "cut", "mask"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define una máscara de visualización?",
    options: ["mask", "opacity-mask", "clip-path"],
    answer: 0
  },
  {
    question: "¿Qué propiedad crea una animación definida por etapas?",
    options: ["@keyframes", "@animate", "@transition"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para definir el retraso de una animación?",
    options: ["animation-delay", "delay-animation", "transition-delay"],
    answer: 0
  },
  {
    question: "¿Qué valor de display se usa para un diseño flexible?",
    options: ["display: flex;", "layout: flex;", "view: flex;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad CSS se usa para centrar un elemento con Flexbox?",
    options: ["justify-content: center;", "align: center;", "flex-center;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad permite que un ítem Flex se contraiga?",
    options: ["flex-shrink", "item-shrink", "flex-collapse"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define cuánto espacio ocupa un ítem Flex?",
    options: ["flex-basis", "base-flex", "item-size"],
    answer: 0
  },
  {
    question: "¿Qué valor de position mantiene un elemento fijo en pantalla?",
    options: ["fixed", "absolute", "sticky"],
    answer: 0
  },
  {
    question: "¿Qué propiedad limita un texto a una línea con puntos suspensivos?",
    options: ["text-overflow: ellipsis;", "overflow-text: clip;", "text-truncate: true;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para crear columnas en un layout?",
    options: ["column-count", "grid-columns", "cols"],
    answer: 0
  },
  {
    question: "¿Qué valor permite que un fondo no se repita?",
    options: ["no-repeat", "repeat: false;", "repeat-none"],
    answer: 0
  },
  {
    question: "¿Qué propiedad ajusta el tamaño del fondo automáticamente?",
    options: ["background-size: cover;", "size: fill;", "bg-resize: full;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad alinea el fondo a la parte superior?",
    options: ["background-position: top;", "bg-align: up;", "align-bg: top;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define el tipo de borde?",
    options: ["border-style", "line-type", "stroke-style"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define la duración de una animación?",
    options: ["animation-duration", "duration", "animation-time"],
    answer: 0
  },
  {
    question: "¿Qué propiedad permite aplicar filtros como desenfoque?",
    options: ["filter", "blur", "transform-effect"],
    answer: 0
  },
  {
    question: "¿Qué valor de overflow oculta el contenido?",
    options: ["overflow: hidden;", "overflow: none;", "hide: true;"],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para personalizar barras de desplazamiento?",
    options: ["scrollbar-color", "scroll-style", "scrollbar-style"],
    answer: 0
  },
  {
    question: "¿Qué propiedad especifica una fuente secundaria?",
    options: ["font-family", "font-stack", "fallback-font"],
    answer: 0
  },
  {
    question: "¿Qué propiedad define un retardo antes de una transición?",
    options: ["transition-delay", "delay", "transition-wait"],
    answer: 0
  },
  {
    question: "¿Qué propiedad crea un diseño de columnas automáticamente?",
    options: ["columns", "column-layout", "auto-cols"],
    answer: 0
  },
  {
    question: "¿Qué propiedad establece un valor mínimo de ancho?",
    options: ["min-width", "width-min", "minimum-width"],
    answer: 0
  }
];


const preguntasCssBloquesdecodigo = [
 {
    question: "¿Cuál de los siguientes bloques de código aplica color de fondo azul a un párrafo con clase 'info'?",
    options: [
      "p.info { background-color: blue; }",
      "p#info { background-color: blue; }",
      "div.info { color: blue; }"
    ],
    answer: 0
 },
  {
    question: "¿Qué bloque de código centra el texto dentro de un encabezado h1?",
    options: [
      "h1 { text-align: center; }",
      "h1 { align: middle; }",
      "h1 { justify-content: center; }"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la sintaxis correcta para aplicar un margen de 20px a todos los lados de un div?",
    options: [
      "div { margin: 20; }",
      "div { margin-all: 20px; }",
       "div { margin: 20px; }",
    ],
    answer: 2
  },
  {
    question: "¿Cuál es el código correcto para hacer que el texto de un párrafo sea negrita?",
    options: [
      "p { font-weight: bold; }",
      "p { font-style: bold; }",
      "p { text-decoration: bold; }"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque de código cambia el color del texto a rojo al pasar el ratón por encima de un enlace?",
    options: [
      "a.onhover { color: red; }",
      "a:focus { color: red; }",
      "a:hover { color: red; }",
    ],
    answer: 2
  },
  {
    question: "¿Qué código aplica una animación llamada 'desvanecer' a una caja durante 2 segundos?",
    options: [
      "div.caja { animation: desvanecer 2s; }",
      "div.caja { animate: fade 2s; }",
      "div.caja { transition: desvanecer 2s; }"
    ],
    answer: 0
  },
  {
    question: "¿Cuál de los siguientes bloques establece un diseño de grid de 3 columnas de 1fr cada una?",
    options: [
      ".contenedor { display: grid; grid-template-columns: 1fr 1fr 1fr; }",
      ".contenedor { layout: grid; columns: 3; }",
      ".contenedor { display: flex; columns: 3fr; }"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque de código aplica una sombra al texto de clase 'titulo'?",
    options: [
      ".titulo { shadow-text: 2px 2px 5px black; }",
       ".titulo { text-shadow: 2px 2px 5px rgba(0,0,0,0.3); }",
      ".titulo { font-shadow: rgba(0,0,0,0.3); }"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es el código para aplicar un fondo con degradado de azul a blanco horizontalmente?",
    options: [
      "body { background: linear-gradient(to right, blue, white); }",
      "body { gradient: horizontal blue-white; }",
      "body { background-style: left-to-right blue white; }"
    ],
    answer: 0
  },
  {
    question: "¿Qué código crea una transición suave de opacidad en un botón de 0.5 segundos al hacer hover?",
    options: [
      "button:active { opacity-transition: 0.5s; }",
      "button { effect: fade 0.5s; }",
      "button:hover { transition: opacity 0.5s; opacity: 0.7; }",
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque cambia el fondo de un div a gris?",
    options: [
      "div { color: gray; }",
      "div { background-color: gray; }",
      "div { border-color: gray; }"
    ],
    answer: 1
  },
  {
    question: "¿Qué regla CSS hace que un párrafo tenga texto en cursiva?",
    options: [
      "p { font-style: italic; }",
      "p { font-weight: italic; }",
      "p { text-decoration: italic; }"
    ],
    answer: 0
  },
  {
    question: "¿Qué clase cambia el tamaño de fuente a 24px?",
    options: [
      ".titulo { size: 24px; }",
      ".titulo { text-size: 24px; }",
      ".titulo { font-size: 24px; }",
    ],
    answer: 2
  },
  {
    question: "¿Cuál aplica una sombra negra al texto?",
    options: [
      ".texto { text-shadow: 2px 2px 4px black; }",
      ".texto { box-shadow: 2px 2px 4px black; }",
      ".texto { shadow: black; }"
    ],
    answer: 0
  },
  {
    question: "¿Cuál bloque hace una transición suave al cambiar color?",
    options: [
      ".boton:hover { transition: color 0.3s ease; }",
      ".boton:hover { animate: color 0.3s; }",
      ".boton:hover { motion: 0.3s color; }"
    ],
    answer: 0
  },
  {
    question: "¿Qué propiedad se usa para cambiar el color del texto?",
    options: [
      "font-color: red;",
      "text-color: red;",
      "color: red;"
    ],
    answer: 2
  },
  {
    question: "¿Cuál es la sintaxis correcta para aplicar una fuente personalizada?",
    options: [
      "font: Arial;",
      "font-family: Arial, sans-serif;",
      "text-font: Arial;"
    ],
    answer: 1
  },
  {
    question: "¿Qué propiedad se usa para centrar texto en un div?",
    options: [
      "align: center;",
      "text-align: center;",
      "center: true;"
    ],
    answer: 1
  },
  {
    question: "¿Qué bloque aplica un fondo azul a un párrafo?",
    options: [
      "p { bg-color: blue; }",
      "p { background-color: blue; }",
      "p { color: blue; }"
    ],
    answer: 1
  },
  {
    question: "¿Cuál bloque aplica negrita a un texto?",
    options: [
      "font-weight: bold;",
      "text-bold: true;",
      "bold: yes;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se aplica un borde de 1px sólido negro?",
    options: [
      "border: 1px solid black;",
      "border-style: solid 1px black;",
      "border-width: 1 solid black;"
    ],
    answer: 0
  },
  {
    question: "¿Qué propiedad establece el alto de una caja?",
    options: [
      "height: 100px;",
      "box-height: 100px;",
      "size: 100px;"
    ],
    answer: 0
  },
  {
    question: "¿Cuál bloque define un margen exterior de 20 píxeles?",
    options: [
      "margin: 20px;",
      "padding: 20px;",
      "space: 20px;"
    ],
    answer: 0
  },
  {
    question: "¿Qué propiedad ajusta el espaciado interno de una caja?",
    options: [
      "padding: 10px;",
      "margin: 10px;",
      "border-spacing: 10px;"
    ],
    answer: 0
  },
  {
    question: "¿Qué selector aplica estilos a todos los elementos p?",
    options: [
      "p { ... }",
      "#p { ... }",
      ".p { ... }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se aplica una sombra al texto?",
    options: [
      "text-decoration: underline;",
      "text-shadow: 2px 2px 5px grey;",
      "shadow-text: grey;"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se centra un elemento con Flexbox?",
    options: [
      "justify-content: center; align-items: center;",
      "text-align: center;",
      "center: true;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define un color de fondo?",
    options: [
      "background-color: blue;",
      "bg: color-blue;",
      "color-background: blue;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se aplica una animación simple?",
    options: [
      "animation: fadeIn 1s ease-in-out;",
      "transition: all 0.3s;",
      "effect: fadeIn;"
    ],
    answer: 0
  },
  {
    question: "¿Qué regla limita el ancho mínimo de un elemento?",
    options: [
      "width-min: 100px;",
      "min-width: 100px;",
      "set-min-width: 100px;"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se hace que un texto aparezca en negrita?",
    options: [
      "font-weight: bold;",
      "text-bold: yes;",
      "strong: true;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se crea un borde punteado?",
    options: [
      "border: 1px dotted black;",
      "border-style: dashed;",
      "border-type: points;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define una fuente secundaria?",
    options: [
      "font-stack: Arial, Helvetica, sans-serif;",
      "font-family: Arial, Helvetica, sans-serif;",
      "fallback-font: Arial, Helvetica, sans-serif;"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se aplica un filtro de desenfoque?",
    options: [
      "filter: blur(5px);",
      "effect: blur(5px);",
      "transform: blur(5px);"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se aplica un degradado de fondo?",
    options: [
      "background: linear-gradient(to right, red, blue);",
      "gradient: background(red, blue);",
      "color: linear(red, blue);"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se oculta un elemento sin quitar su espacio?",
    options: [
      "display: none;",
      "visibility: hidden;",
      "hide: true;"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se alinea el texto a la derecha?",
    options: [
      "text-align: right;",
      "align-text: right;",
      "position: right;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se hace que un fondo no se repita?",
    options: [
      "background-repeat: no-repeat;",
      "repeat: none;",
      "bg-repeat: false;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se establece un espacio interno (padding)?",
    options: [
      "margin: 20px;",
      "padding: 20px;",
      "inner-space: 20px;"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se activa el modo oscuro en una clase?",
    options: [
      ".dark-theme { background-color: black; color: white; }",
      ".modo-oscuro: true;",
      "theme: dark;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se posiciona un elemento de forma fija?",
    options: [
      "position: fixed;",
      "location: fixed;",
      "display: fixed;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se transforma un elemento rotándolo?",
    options: [
      "transform: rotate(45deg);",
      "rotate: 45deg;",
      "transform-angle: 45;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se limita el número de líneas de un párrafo?",
    options: [
      "line-clamp: 3;",
      "max-lines: 3;",
      "truncate: 3;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se hace que un fondo cubra todo el contenedor?",
    options: [
      "background-size: cover;",
      "cover: true;",
      "bg-full: true;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se agrega una transición suave?",
    options: [
      "transition: all 0.5s ease;",
      "effect: fade;",
      "move-smooth: true;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define un diseño de columnas?",
    options: [
      "columns: 3;",
      "layout-columns: 3;",
      "grid-cols: 3;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se hace que un borde sea redondeado?",
    options: [
      "border-radius: 10px;",
      "round-borders: 10px;",
      "circle-corner: 10px;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se cambia el color del texto?",
    options: [
      "color: red;",
      "text-color: red;",
      "font-color: red;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se hace un botón al pasar el mouse?",
    options: [
      "button:hover { background-color: green; }",
      "hover-button: green;",
      "onhover { bg: green; }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se aplica un sombreado a una caja?",
    options: [
      "box-shadow: 2px 2px 10px #000;",
      "shadow-box: 10px;",
      "shadow: box;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se aplica una transición solo al color?",
    options: [
      "transition: color 0.3s;",
      "color-transition: 300ms;",
      "transition-color: 0.3s;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define el estilo de una lista?",
    options: [
      "list-style: square;",
      "ul-style: square;",
      "style-list: square;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se cambia el cursor al pasar por un botón?",
    options: [
      "cursor: pointer;",
      "hover-cursor: hand;",
      "pointer: on;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se alinea un ítem a la derecha en Flexbox?",
    options: [
      "justify-content: flex-end;",
      "align-self: right;",
      "flex-right: true;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se oculta el contenido que se desborda?",
    options: [
      "overflow: hidden;",
      "hide-overflow: true;",
      "clip: overflow;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se especifica el tamaño del texto?",
    options: [
      "font-size: 16px;",
      "text-size: 16;",
      "size: font 16;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se alinea verticalmente en Flexbox?",
    options: [
      "align-items: center;",
      "vertical-align: center;",
      "align-vertical: center;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se agrega una fuente externa?",
    options: [
      "@import url('https://fonts.googleapis.com/css?family=Roboto');",
      "load-font: Roboto;",
      "font-url: Roboto;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se asigna un valor base a un ítem flex?",
    options: [
      "flex-basis: 200px;",
      "basis: 200px;",
      "flex-start: 200px;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se recorta una imagen con forma circular?",
    options: [
      "border-radius: 50%;",
      "shape: circle;",
      "clip-path: round;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se activa un hover para cambiar color?",
    options: [
      "a:hover { color: red; }",
      "hover { text-color: red; }",
      "link:focus { color: red; }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define el ancho máximo?",
    options: [
      "max-width: 1200px;",
      "width-max: 1200px;",
      "maximum-width: 1200px;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se establece una imagen de fondo?",
    options: [
      "background-image: url('fondo.jpg');",
      "image-bg: fondo.jpg;",
      "bg-url: fondo.jpg;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se especifica la fuente a usar?",
    options: [
      "font-family: 'Arial';",
      "font: Arial;",
      "typeface: Arial;"
    ],
    answer: 0
  }
];




const preguntasJavascriptJunior = [
  { question: "¿Cómo se declara una variable en JavaScript?", options: ["let", "var", "int"], answer: 0 },
  { question: "¿Qué tipo de dato representa verdadero o falso?", options: ["boolean", "string", "int"], answer: 0 },
  { question: "¿Cómo se escribe un comentario de una línea?", options: ["// comentario", "/* comentario */", "# comentario"], answer: 0 },
  { question: "¿Qué función muestra un mensaje emergente?", options: ["alert()", "prompt()", "console.log()"], answer: 0 },
  { question: "¿Qué símbolo se usa para concatenar cadenas?", options: ["+", "&", "."], answer: 0 },
  { question: "¿Qué método convierte texto a número entero?", options: ["parseInt()", "toInt()", "parseFloat()"], answer: 0 },
  { question: "¿Cuál es el tipo de dato de una cadena?", options: ["string", "text", "char"], answer: 0 },
  { question: "¿Cómo se evalúa una condición en JavaScript?", options: ["if", "for", "do"], answer: 0 },
  { question: "¿Qué método agrega un elemento al final de un array?", options: ["push()", "pop()", "add()"], answer: 0 },
  { question: "¿Qué método elimina el último elemento de un array?", options: ["pop()", "remove()", "shift()"], answer: 0 },
  { question: "¿Qué estructura permite repetir acciones?", options: ["for", "if", "switch"], answer: 0 },
  { question: "¿Qué método imprime datos en consola?", options: ["console.log()", "print()", "write()"], answer: 0 },
  { question: "¿Cómo accedemos al primer elemento de un array?", options: ["array[0]", "array(0)", "array.0"], answer: 0 },
  { question: "¿Cómo se declara una constante?", options: ["const", "static", "let"], answer: 0 },
  { question: "¿Qué operador compara valor y tipo?", options: ["===", "==", "="], answer: 0 },
  { question: "¿Qué operador se usa para negar una condición?", options: ["!", "not", "~"], answer: 0 },
  { question: "¿Qué palabra se usa para definir funciones?", options: ["function", "define", "method"], answer: 0 },
  { question: "¿Qué método une elementos de un array en una cadena?", options: ["join()", "concat()", "merge()"], answer: 0 },
  { question: "¿Qué método elimina el primer elemento de un array?", options: ["shift()", "pop()", "splice()"], answer: 0 },
  { question: "¿Qué método ordena un array?", options: ["sort()", "order()", "arrange()"], answer: 0 },
  { question: "¿Qué estructura permite múltiples condiciones?", options: ["switch", "if", "while"], answer: 0 },
  { question: "¿Cómo se declara un objeto?", options: ["{}", "[]", "()"], answer: 0 },
  { question: "¿Qué operador se usa para asignar valores?", options: ["=", "==", ":"], answer: 0 },
  { question: "¿Qué función pide al usuario un valor?", options: ["prompt()", "alert()", "confirm()"], answer: 0 },
  { question: "¿Qué función muestra un mensaje de confirmación?", options: ["confirm()", "alert()", "prompt()"], answer: 0 },
  { question: "¿Qué palabra se usa para salir de un bucle?", options: ["break", "stop", "end"], answer: 0 },
  { question: "¿Qué palabra se usa para omitir una iteración?", options: ["continue", "skip", "next"], answer: 0 },
  { question: "¿Qué tipo de bucle ejecuta al menos una vez?", options: ["do...while", "while", "for"], answer: 0 },
  { question: "¿Qué símbolo representa el operador lógico 'y'?", options: ["&&", "&", "and"], answer: 0 },
  { question: "¿Qué método invierte el orden de un array?", options: ["reverse()", "flip()", "invert()"], answer: 0 }
];


const preguntasJavascriptSenior = [
  { question: "¿Qué es una promesa en JavaScript?", options: ["Una operación asincrónica", "Una función", "Un objeto de configuración"], answer: 0 },
  { question: "¿Qué palabra se usa para esperar una promesa?", options: ["await", "wait", "hold"], answer: 0 },
  { question: "¿Qué método ejecuta código después de un tiempo?", options: ["setTimeout()", "setDelay()", "after()"], answer: 0 },
  { question: "¿Qué método repite ejecución en intervalos?", options: ["setInterval()", "loop()", "repeat()"], answer: 0 },
  { question: "¿Qué estructura atrapa errores en JS?", options: ["try...catch", "if...else", "check...catch"], answer: 0 },
  { question: "¿Qué función convierte un objeto en JSON?", options: ["JSON.stringify()", "JSON.toText()", "JSON.encode()"], answer: 0 },
  { question: "¿Qué función convierte JSON en objeto?", options: ["JSON.parse()", "JSON.decode()", "JSON.objectify()"], answer: 0 },
  { question: "¿Cómo se define una función flecha?", options: ["()=>{}", "function=>{}", "()=>function"], answer: 0 },
  { question: "¿Qué método filtra un array?", options: ["filter()", "select()", "findAll()"], answer: 0 },
  { question: "¿Qué método transforma los elementos de un array?", options: ["map()", "transform()", "convert()"], answer: 0 },
  { question: "¿Qué método encuentra el primer elemento que cumple una condición?", options: ["find()", "search()", "first()"], answer: 0 },
  { question: "¿Qué es el hoisting?", options: ["Elevación de variables y funciones", "Prioridad de funciones", "Desbordamiento de memoria"], answer: 0 },
  { question: "¿Qué método verifica si un array incluye un valor?", options: ["includes()", "has()", "contains()"], answer: 0 },
  { question: "¿Qué palabra define una clase?", options: ["class", "object", "define"], answer: 0 },
  { question: "¿Qué palabra crea una instancia de clase?", options: ["new", "instance", "create"], answer: 0 },
  { question: "¿Qué método detiene la propagación de un evento?", options: ["stopPropagation()", "preventDefault()", "stopEvent()"], answer: 0 },
  { question: "¿Qué método previene el comportamiento por defecto?", options: ["preventDefault()", "cancelDefault()", "stopDefault()"], answer: 0 },
  { question: "¿Qué significa DOM?", options: ["Document Object Model", "Data Object Model", "Document Oriented Map"], answer: 0 },
  { question: "¿Qué método cambia el contenido de un elemento HTML?", options: ["innerHTML", "textContent", "value"], answer: 0 },
  { question: "¿Qué propiedad accede al valor de un input?", options: ["value", "text", "innerHTML"], answer: 0 },
  { question: "¿Qué método añade un listener de eventos?", options: ["addEventListener()", "on()", "addListener()"], answer: 0 },
  { question: "¿Qué palabra se usa para heredar en clases?", options: ["extends", "inherits", "super"], answer: 0 },
  { question: "¿Qué método ejecuta una función en todos los elementos de un array?", options: ["forEach()", "each()", "loop()"], answer: 0 },
  { question: "¿Qué operador verifica desigualdad estricta?", options: ["!==", "!=", "not=="], answer: 0 },
  { question: "¿Qué operador se usa para comparar tipos y valores?", options: ["===", "==", "equal()"], answer: 0 },
  { question: "¿Qué palabra clave hace referencia al objeto actual?", options: ["this", "self", "that"], answer: 0 },
  { question: "¿Qué método combina arrays?", options: ["concat()", "merge()", "combine()"], answer: 0 },
  { question: "¿Qué es un callback?", options: ["Una función pasada como argumento", "Una clase", "Un evento global"], answer: 0 },
  { question: "¿Qué estructura permite manejar múltiples errores?", options: ["try...catch...finally", "catch...finally", "try...except"], answer: 0 },
  { question: "¿Qué operador se usa para encadenar condiciones?", options: ["&&", "&", "AND"], answer: 0 }
];

const preguntasJavascriptBloquesdecodigo = [
  {
    question: "¿Qué instrucción muestra 'Hola mundo' en consola?",
    options: [
      "alert('Hola mundo');",
      "print('Hola mundo');",
       "console.log('Hola mundo');"
    ],
    answer: 2
  },
  {
    question: "¿Cuál define una función en JavaScript?",
    options: [
      "function saludo() { return 'Hola'; }",
      "func saludo() { return 'Hola'; }",
      "define saludo() => 'Hola';"
    ],
    answer: 0
  },
  {
    question: "¿Cuál declara correctamente una constante?",
    options: [
      "var PI = 3.14;",
      "const PI = 3.14;",
      "let PI = 3.14;"
    ],
    answer: 1
  },
  {
    question: "¿Qué bloque evalúa si x es mayor que 10?",
    options: [
      "if (x > 10) { console.log(x); }",
      "if x > 10 then log(x);",
      "x > 10 ? print(x) : ''"
    ],
    answer: 0
  },
  {
    question: "¿Qué función convierte un número a cadena?",
    options: [
      "parseInt('42')",
      "String(42)",
      "toNumber('42')"
    ],
    answer: 1
  },
  {
    question: "¿Cuál opción declara correctamente una función en JavaScript?",
    options: [
      "function suma(a, b) {\n  return a + b;\n}",
      "def suma(a, b):\n  return a + b",
      "func suma(a, b) {\n  return a + b;\n}"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es una forma correcta de declarar una variable?",
    options: [
      "variable nombre = 'Juan';",
      "nombre := 'Juan';",
       "let nombre = 'Juan';"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque muestra una estructura condicional válida?",
    options: [
      "if (x > 0) {\n  console.log('Positivo');\n}",
      "si x > 0 entonces:\n  print('Positivo')",
      "if x > 0 then\n  show 'Positivo'"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la forma correcta de iterar sobre un arreglo?",
    options: [
      "for (let i = 0; i < arr.length; i++) {\n  console.log(arr[i]);\n}",
      "foreach i in arr:\n  print(arr[i])",
      "loop (i in arr) {\n  console.log(i);\n}"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque muestra una forma válida de definir una constante?",
    options: [
      "constant PI = 3.14;",
      "PI := 3.14;",
      "const PI = 3.14;"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque representa una función flecha correctamente?",
    options: [
      "const saludar = () => {\n  console.log('Hola');\n};",
      "function => saludar() {\n  show('Hola');\n}",
      "saludar() => {\n  print('Hola');\n}"
    ],
    answer: 0
  },
  {
    question: "¿Qué código define un objeto correctamente en JavaScript?",
    options: [
      "const persona = {\n  nombre: 'Ana',\n  edad: 25\n};",
      "persona := [nombre = 'Ana', edad = 25]",
      "object persona { nombre = 'Ana'; edad = 25; }"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es una expresión válida para verificar igualdad estricta?",
    options: [
      "if (a === b) {\n  console.log('Iguales');\n}",
      "if a = b then\n  print('Iguales')",
      "if (a == b) {\n  show('Iguales');\n}"
    ],
    answer: 0
  },
  {
    question: "¿Cuál código convierte una cadena a número?",
    options: [
      "int numero = '42';",
      "let numero = parseInt('42');",
      "numero = ToInt('42');"
    ],
    answer: 1
  },
  {
    question: "¿Qué código muestra una función anónima dentro de una variable?",
    options: [
      "let sumar = function(a, b) {\n  return a + b;\n};",
      "func sumar(a, b): return a + b",
      "sumar := (a, b) => return a + b;"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es una forma válida de usar un switch en JavaScript?",
    options: [
      "switch (x) {\n  case 1:\n    console.log('Uno');\n    break;\n  default:\n    console.log('Otro');\n}",
      "if (x == 1):\n  print('Uno')\nelse:\n  print('Otro')",
      "switch x:\n  case 1 -> print('Uno')"
    ],
    answer: 0
  },
  {
    question: "¿Cuál de los siguientes bloques agrega un elemento a un arreglo?",
    options: [
      "lista.add('nuevo');",
      "lista.append('nuevo');",
      "lista.push('nuevo');"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque permite recorrer un arreglo con for...of?",
    options: [
      "for (const item of lista) {\n  console.log(item);\n}",
      "for (item in lista):\n  print(item)",
      "foreach (item in lista) do\n  print(item)"
    ],
    answer: 0
  },
  {
    question: "¿Qué fragmento crea una clase en JavaScript?",
    options: [
      "class Persona {\n  constructor(nombre) {\n    this.nombre = nombre;\n  }\n}",
      "class Persona(nombre):\n  this.nombre = nombre",
      "Persona := class(nombre) {\n  name = nombre;\n}"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se accede a una propiedad de un objeto?",
    options: [
      "persona.nombre",
      "persona->nombre",
      "persona:nombre"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque es correcto para usar typeof?",
    options: [
      "typeOf(valor) == 'string'",
      "typeof valor === 'string'",
      "typeof(valor) == string"
    ],
    answer: 1
  },
  {
    question: "¿Qué instrucción define un array correctamente?",
    options: [
      "let colores = ['rojo', 'azul', 'verde'];",
      "let colores := {'rojo', 'azul', 'verde'};",
      "array colores = ['rojo' 'azul' 'verde'];"
    ],
    answer: 0
  },
  {
    question: "¿Qué función convierte un string a entero?",
    options: [
      "NumberToInt('100');",
      "StringToInt('100');",
       "parseInt('100');"
    ],
    answer: 2
  },
  {
    question: "¿Cómo se evalúa una condición doble?",
    options: [
      "if (a > 0 && b > 0) {\n  console.log('Ambos positivos');\n}",
      "if a > 0 y b > 0:\n  print('Ambos')",
      "si a y b son positivos:\n  mostrar('ok')"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque define un método dentro de una clase?",
    options: [
      "class Animal {\n  sonido() {\n    return 'ruido';\n  }\n}",
      "class Animal:\n  def sonido(): return 'ruido'",
      "Animal := class {\n  sonido = 'ruido'\n}"
    ],
    answer: 0
  },
  {
    question: "¿Qué código elimina el último elemento de un array?",
    options: [
      "miArray.removeLast();",
       "miArray.pop();",
      "delete miArray[final];"
    ],
    answer: 1
  },
  {
    question: "¿Qué función crea una promesa?",
    options: [
      "return new Promise((resolve, reject) => {\n  resolve('Hecho');\n});",
      "return promise.create(resolve => 'Hecho')",
      "crearPromesa(resolve => 'ok')"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras una constante con valor?",
    options: [
      "const PI = 3.14;",
      "PI := const(3.14);",
      "defconst PI = 3.14;"
    ],
    answer: 0
  },
  {
    question: "¿Qué código invoca una función con argumentos?",
    options: [
      "saludar -> 'Ana'",
      "call saludar 'Ana'",
      "saludar('Ana');"
    ],
    answer: 2
  },
  {
    question: "¿Cómo accedes a un índice de un array?",
    options: [
      "frutas[1]",
      "frutas.get(1)",
      "frutas{1}"
    ],
    answer: 0
  },
  {
    question: "¿Qué código convierte un número a string?",
    options: [
      "let texto := toString(123);",
      "text = 123 convertToText",
      "let texto = String(123);"
    ],
    answer: 2
  },
  {
    question: "¿Qué bloque representa una función asincrónica?",
    options: [
      "async function obtenerDatos() {\n  await fetch(url);\n}",
      "function async obtener() {\n  wait fetch(url);\n}",
      "async obtener() => fetch(url)"
    ],
    answer: 0
  },
  {
    question: "¿Qué función sirve para filtrar un array?",
    options: [
      "const mayores = edades.filter(e => e > 18);",
      "edades.select(x > 18);",
      "filtrar(edades, x > 18)"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción agrega un nuevo par clave-valor a un objeto?",
    options: [
      "persona -> edad := 30;",
       "persona.edad = 30;",
      "persona[30] = 'edad';"
    ],
    answer: 1
  },
  {
    question: "¿Qué código convierte JSON a objeto?",
    options: [
      "JSON.parse(cadena);",
      "parse.JSON(cadena);",
      "cadena.toJSON()"
    ],
    answer: 0
  },
  {
    question: "¿Qué código convierte objeto a JSON?",
    options: [
      "stringify(objeto);",
      "objeto.toJson();",
      "JSON.stringify(objeto);"
    ],
    answer: 2
  },
  {
    question: "¿Qué fragmento captura un error?",
    options: [
      "try {\n  ejecutar();\n} catch (e) {\n  console.log(e);\n}",
      "catch error(e):\n  show(e)",
      "error = try ejecutar()"
    ],
    answer: 0
  },
  {
    question: "¿Qué código obtiene la longitud de un string?",
    options: [
      "nombre.length",
      "len(nombre)",
      "nombre.size()"
    ],
    answer: 0
  },
  {
    question: "¿Qué código verifica si un array incluye un valor?",
    options: [
      "colores.has('rojo');",
      "colores.includes('rojo');",
      "colores.contains('rojo');"
    ],
    answer: 1
  },
  {
    question: "¿Cómo defines una clase con constructor?",
    options: [
      "class Auto {\n  constructor(marca) {\n    this.marca = marca;\n  }\n}",
      "Auto := class(marca) => this.marca = marca",
      "clase Auto -> init(marca)"
    ],
    answer: 0
  },
  {
    question: "¿Qué método transforma todo un string a mayúsculas?",
    options: [
      "mayuscula(mensaje);",
      "mensaje.uppercase()",
      "mensaje.toUpperCase();"
    ],
    answer: 2
  },
  {
    question: "¿Qué método recorta los espacios en un string?",
    options: [
      "texto.clearSpaces();",
      "texto.trim();",
      "texto.strip()"
    ],
    answer: 1
  },
  {
    question: "¿Qué método busca una subcadena dentro de otra?",
    options: [
      "cadena.includes('texto');",
      "buscar(cadena, 'texto');",
      "cadena.hasText('texto');"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave define una clase?",
    options: [
      "struct",
      "object",
      "class"
    ],
    answer: 2
  }
];


   



const preguntasJavaJunior = [
  { question: "¿Qué palabra se usa para definir una clase en Java?", options: ["class", "Class", "define"], answer: 0 },
  { question: "¿Qué método inicia la ejecución en Java?", options: ["main", "start", "run"], answer: 0 },
  { question: "¿Qué tipo de dato almacena números enteros?", options: ["int", "float", "char"], answer: 0 },
  { question: "¿Qué operador se usa para comparar igualdad?", options: ["==", "=", "equals"], answer: 0 },
  { question: "¿Cómo se declara un arreglo de enteros?", options: ["int[]", "int()", "array int"], answer: 0 },
  { question: "¿Qué palabra clave previene la herencia?", options: ["final", "private", "sealed"], answer: 0 },
  { question: "¿Qué estructura permite múltiples condiciones?", options: ["switch", "if", "loop"], answer: 0 },
  { question: "¿Qué palabra reserva espacio para objeto?", options: ["new", "create", "init"], answer: 0 },
  { question: "¿Qué modificador permite acceso público?", options: ["public", "open", "external"], answer: 0 },
  { question: "¿Qué palabra clave define herencia?", options: ["extends", "inherits", "subclass"], answer: 0 },
  { question: "¿Cómo se declara una variable entera en Java?", options: ["int x;", "var x;", "integer x;"], answer: 0 },
  { question: "¿Qué palabra clave se usa para crear un objeto?", options: ["new", "create", "instance"], answer: 0 },
  { question: "¿Cuál es el tipo de dato para caracteres?", options: ["char", "string", "text"], answer: 0 },
  { question: "¿Qué método imprime texto en consola?", options: ["System.out.println()", "console.log()", "print()"], answer: 0 },
  { question: "¿Cuál es el tipo para decimales?", options: ["double", "int", "byte"], answer: 0 },
  { question: "¿Qué estructura permite elegir entre múltiples casos?", options: ["switch", "if", "loop"], answer: 0 },
  { question: "¿Qué palabra define una clase en Java?", options: ["class", "object", "define"], answer: 0 },
  { question: "¿Cómo se inicia el método principal?", options: ["public static void main", "main()", "start()"], answer: 0 },
  { question: "¿Qué palabra define una constante?", options: ["final", "const", "static"], answer: 0 },
  { question: "¿Qué operador compara igualdad?", options: ["==", "=", "!="], answer: 0 },
  { question: "¿Qué estructura repite mientras la condición es verdadera?", options: ["while", "for", "if"], answer: 0 },
  { question: "¿Cómo se hace un comentario de una línea?", options: ["//", "/* */", "#"], answer: 0 },
  { question: "¿Qué palabra clave se usa para heredar?", options: ["extends", "implements", "inherits"], answer: 0 },
  { question: "¿Qué palabra clave evita la herencia?", options: ["final", "sealed", "static"], answer: 0 },
  { question: "¿Qué tipo se usa para cadenas de texto?", options: ["String", "char", "Text"], answer: 0 },
  { question: "¿Qué palabra define un arreglo?", options: ["[]", "array()", "list"], answer: 0 },
  { question: "¿Qué operador incrementa en 1?", options: ["++", "+", "+="], answer: 0 },
  { question: "¿Cómo se define un constructor?", options: ["Mismo nombre que la clase", "constructor()", "init()"], answer: 0 },
  { question: "¿Qué palabra define una interfaz?", options: ["interface", "abstract", "protocol"], answer: 0 },
  { question: "¿Qué palabra clave implementa una interfaz?", options: ["implements", "extends", "interface"], answer: 0 },
  { question: "¿Qué operador lógico representa 'y'?", options: ["&&", "&", "and"], answer: 0 },
  { question: "¿Qué operador lógico representa 'o'?", options: ["||", "|", "or"], answer: 0 },
  { question: "¿Cómo se lanza una excepción?", options: ["throw", "raise", "error"], answer: 0 },
  { question: "¿Cómo se captura una excepción?", options: ["try-catch", "try-except", "handle"], answer: 0 },
  { question: "¿Qué palabra detiene un bucle?", options: ["break", "stop", "end"], answer: 0 },
  { question: "¿Qué palabra omite una iteración?", options: ["continue", "next", "skip"], answer: 0 },
  { question: "¿Qué palabra impide modificar una variable?", options: ["final", "static", "readonly"], answer: 0 },
  { question: "¿Cómo se llama a un método?", options: ["obj.metodo()", "metodo()", "call.metodo()"], answer: 0 },
  { question: "¿Qué palabra define un método estático?", options: ["static", "final", "shared"], answer: 0 },
  { question: "¿Qué tipo de dato se usa para valores true o false?", options: ["boolean", "bit", "bool"], answer: 0 }
];


// ===== JAVA SENIOR =====
const preguntasJavaSenior = [
  { question: "¿Qué interfaz se usa para listas en Java?", options: ["List", "Set", "Map"], answer: 0 },
  { question: "¿Qué clase permite cadenas mutables?", options: ["StringBuilder", "String", "Text"], answer: 0 },
  { question: "¿Qué palabra define una excepción personalizada?", options: ["throws", "exception", "custom"], answer: 0 },
  { question: "¿Qué estructura ejecuta bloques en orden?", options: ["try-catch-finally", "if-else", "loop-else"], answer: 0 },
  { question: "¿Qué significa JVM?", options: ["Java Virtual Machine", "Java Variable Manager", "Java View Model"], answer: 0 },
  { question: "¿Qué palabra implementa una interfaz?", options: ["implements", "extends", "inherit"], answer: 0 },
  { question: "¿Qué clase se usa para leer entradas del usuario?", options: ["Scanner", "Reader", "Input"], answer: 0 },
  { question: "¿Qué colección evita duplicados?", options: ["Set", "List", "ArrayList"], answer: 0 },
  { question: "¿Qué operador lanza excepciones?", options: ["throw", "raise", "error"], answer: 0 },
  { question: "¿Qué clase permite hilos en Java?", options: ["Thread", "Runnable", "Executor"], answer: 0 },
  { question: "¿Qué es la sobrecarga de métodos?", options: ["Mismo nombre, distintos parámetros", "Múltiples clases", "Clases heredadas"], answer: 0 },
  { question: "¿Qué es la herencia múltiple en Java?", options: ["No está permitida con clases", "Es por interfaces", "Es automática"], answer: 0 },
  { question: "¿Qué palabra se usa para referirse al objeto actual?", options: ["this", "self", "current"], answer: 0 },
  { question: "¿Qué palabra llama al constructor padre?", options: ["super", "parent", "base"], answer: 0 },
  { question: "¿Qué estructura permite manejar errores?", options: ["try-catch", "if-else", "switch"], answer: 0 },
  { question: "¿Qué clase se usa para leer entradas?", options: ["Scanner", "Input", "Reader"], answer: 0 },
  { question: "¿Qué tipo de colección permite duplicados?", options: ["List", "Set", "Map"], answer: 0 },
  { question: "¿Qué interfaz extiende Collection y permite orden?", options: ["List", "Map", "Queue"], answer: 0 },
  { question: "¿Qué interfaz representa clave-valor?", options: ["Map", "List", "Set"], answer: 0 },
  { question: "¿Qué palabra define clases abstractas?", options: ["abstract", "interface", "virtual"], answer: 0 },
  { question: "¿Qué palabra impide herencia y modificación?", options: ["final", "sealed", "static"], answer: 0 },
  { question: "¿Qué librería se usa para colecciones?", options: ["java.util", "java.io", "java.lang"], answer: 0 },
  { question: "¿Qué operador comprueba igualdad de referencias?", options: ["==", "equals()", "!="], answer: 0 },
  { question: "¿Qué método compara el contenido de objetos?", options: ["equals()", "==", "compare()"], answer: 0 },
  { question: "¿Qué palabra se usa para sincronizar hilos?", options: ["synchronized", "threaded", "lock"], answer: 0 },
  { question: "¿Qué clase es padre de todas las excepciones?", options: ["Throwable", "Exception", "Error"], answer: 0 },
  { question: "¿Qué palabra define genéricos?", options: ["<>", "[]", "{}"], answer: 0 },
  { question: "¿Qué palabra declara un paquete?", options: ["package", "namespace", "module"], answer: 0 },
  { question: "¿Qué palabra importa una clase?", options: ["import", "include", "require"], answer: 0 },
  { question: "¿Qué palabra define un método abstracto?", options: ["abstract", "virtual", "define"], answer: 0 },
  { question: "¿Qué clase representa cadenas de texto mutables?", options: ["StringBuilder", "String", "StringBuffer"], answer: 0 },
  { question: "¿Qué clase es segura para múltiples hilos?", options: ["StringBuffer", "StringBuilder", "ThreadSafeString"], answer: 0 },
  { question: "¿Qué librería se usa para interfaces gráficas?", options: ["javax.swing", "java.awt", "java.gui"], answer: 0 },
  { question: "¿Qué interfaz define una tarea concurrente?", options: ["Runnable", "Callable", "Threadable"], answer: 0 },
  { question: "¿Qué método inicia un hilo?", options: ["start()", "run()", "begin()"], answer: 0 },
  { question: "¿Qué método contiene el código del hilo?", options: ["run()", "start()", "execute()"], answer: 0 },
  { question: "¿Qué tipo de excepción se debe capturar?", options: ["Checked", "Unchecked", "Runtime"], answer: 0 },
  { question: "¿Qué palabra lanza una excepción?", options: ["throw", "raise", "fail"], answer: 0 },
  { question: "¿Qué palabra se usa para declarar constantes?", options: ["final", "const", "static final"], answer: 0 }
];

const preguntasJavaBloquesdecodigo = [
  {
    question: "¿Qué instrucción imprime texto en consola en Java?",
    options: [
      "System.out.print('Hola');",
      "Console.write('Hola');",
      "print('Hola');"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se utiliza para declarar una clase?",
    options: [
      "define",
      "class",
      "object"
    ],
    answer: 1
  },
  {
    question: "¿Qué método se ejecuta al iniciar una aplicación Java?",
    options: [
      "start()",
      "main()",
      "init()"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es la forma correcta de declarar una variable entera?",
    options: [
      "int numero = 10;",
      "integer numero = 10;",
      "num numero = 10;"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador se usa para comparar igualdad?",
    options: [
      "==",
      "=",
      "!="
    ],
    answer: 0
  },
  {
    question: "¿Qué estructura se usa para repetir un bloque mientras una condición sea verdadera?",
    options: [
      "do {} while();",
      "while() {}",
      "loop() {}"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se define un arreglo de enteros?",
    options: [
      "int[] numeros = {1,2,3};",
      "int numeros = {1,2,3};",
      "array numeros = [1,2,3];"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para heredar de otra clase?",
    options: [
      "extends",
      "inherits",
      "instanceof"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque captura una excepción?",
    options: [
      "try { ... } catch(Exception e) { ... }",
      "if(error) { ... }",
      "handle(exception) { ... }"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la forma correcta de declarar un método?",
    options: [
      "public void saludo() { }",
      "func saludo()",
      "method saludo()"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave define una constante?",
    options: [
      "const",
      "final",
      "static"
    ],
    answer: 1
  },
  {
    question: "¿Qué instrucción termina la ejecución de un ciclo?",
    options: [
      "exit;",
      "break;",
      "return;"
    ],
    answer: 1
  },
  {
    question: "¿Qué clase permite leer datos desde consola?",
    options: [
      "Scanner",
      "Reader",
      "Input"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la sintaxis correcta de un comentario de línea?",
    options: [
      "// comentario",
      "# comentario",
      "-- comentario"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador lógico representa Y (AND)?",
    options: [
      "&&",
      "&",
      "and"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador representa O lógico (OR)?",
    options: [
      "||",
      "or",
      "|"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se crea un objeto en Java?",
    options: [
      "Persona p = new Persona();",
      "p = Persona();",
      "create Persona p;"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave impide que una clase sea extendida?",
    options: [
      "final",
      "private",
      "sealed"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra se usa para definir una interfaz?",
    options: [
      "interface",
      "implements",
      "protocol"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se lanza manualmente una excepción?",
    options: [
      "throw new Exception();",
      "raise Exception();",
      "error();"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción se usa para ejecutar diferentes casos según un valor?",
    options: [
      "switch",
      "if else",
      "choose"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra define una variable dentro de un método?",
    options: [
      "local",
      "int",
      "var"
    ],
    answer: 2
  },
  {
    question: "¿Cuál es el modificador de acceso más restrictivo?",
    options: [
      "protected",
      "public",
      "private"
    ],
    answer: 2
  },
  {
    question: "¿Qué tipo de variable puede almacenar números decimales?",
    options: [
      "int",
      "float",
      "char"
    ],
    answer: 1
  },
  {
    question: "¿Qué palabra se usa para ejecutar código al crear una clase?",
    options: [
      "constructor",
      "init",
      "setup"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra permite que un método se modifique en clases hijas?",
    options: [
      "override",
      "abstract",
      "virtual"
    ],
    answer: 1
  },
  {
    question: "¿Qué palabra obliga a una clase a implementar un método?",
    options: [
      "abstract",
      "required",
      "static"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador incrementa una variable en uno?",
    options: [
      "++",
      "+=",
      "inc"
    ],
    answer: 0
  },
  {
    question: "¿Qué método convierte una cadena a entero?",
    options: [
      "Integer.parseInt()",
      "parseInt()",
      "toInt()"
    ],
    answer: 0
  },
  {
    question: "¿Qué clase se usa para cadenas de texto?",
    options: [
      "String",
      "Char",
      "Text"
    ],
    answer: 0
  }
];

// ===== PHP JUNIOR =====
const preguntasPhpJunior = [
  { question: "¿Con qué símbolo inician las variables en PHP?", options: ["$", "@", "&"], answer: 0 },
  { question: "¿Qué función imprime texto?", options: ["echo", "print", "write"], answer: 0 },
  { question: "¿Qué estructura condicional existe en PHP?", options: ["if", "when", "check"], answer: 0 },
  { question: "¿Cómo se comenta una línea?", options: ["//", "#", "--"], answer: 0 },
  { question: "¿Qué tipo de dato representa verdadero/falso?", options: ["boolean", "int", "text"], answer: 0 },
  { question: "¿Qué operador concatena cadenas?", options: [".", "+", "&"], answer: 0 },
  { question: "¿Qué función obtiene la longitud de una cadena?", options: ["strlen()", "length()", "count()"], answer: 0 },
  { question: "¿Qué tipo de bucle existe en PHP?", options: ["while", "foreach", "both"], answer: 2 },
  { question: "¿Qué función convierte a entero?", options: ["intval()", "toInt()", "convert()"], answer: 0 },
  { question: "¿Qué función define una constante?", options: ["define()", "constant()", "const"], answer: 0 },
  { question: "¿Cómo comienza un script PHP?", options: ["<?php", "<script>", "<?"], answer: 0 },
  { question: "¿Cómo se declara una variable en PHP?", options: ["$variable", "var variable", "@variable"], answer: 0 },
  { question: "¿Qué función se usa para mostrar texto?", options: ["echo", "print", "display"], answer: 0 },
  { question: "¿Qué símbolo se usa para concatenar cadenas?", options: [".", "+", "&"], answer: 0 },
  { question: "¿Qué estructura se usa para condiciones?", options: ["if", "when", "check"], answer: 0 },
  { question: "¿Cómo se comenta una línea en PHP?", options: ["//", "#", "/*"], answer: 0 },
  { question: "¿Qué función muestra información de una variable?", options: ["var_dump()", "info()", "print_r()"], answer: 0 },
  { question: "¿Qué función imprime con formato legible?", options: ["print_r()", "var_dump()", "echo"], answer: 0 },
  { question: "¿Qué estructura permite ejecutar varias veces?", options: ["while", "repeat", "loop"], answer: 0 },
  { question: "¿Qué función convierte texto en número entero?", options: ["intval()", "parseInt()", "toInt()"], answer: 0 },
  { question: "¿Qué tipo representa un arreglo?", options: ["array", "list", "set"], answer: 0 },
  { question: "¿Cómo se define una constante?", options: ["define()", "const", "constant"], answer: 0 },
  { question: "¿Cómo se declara una función?", options: ["function", "def", "method"], answer: 0 },
  { question: "¿Qué palabra detiene la ejecución?", options: ["exit", "stop", "end"], answer: 0 },
  { question: "¿Cómo se incluye otro archivo PHP?", options: ["include", "load", "insert"], answer: 0 },
  { question: "¿Qué operador compara igualdad?", options: ["==", "=", "==="], answer: 0 },
  { question: "¿Qué función convierte JSON a array?", options: ["json_decode()", "json_parse()", "json_array()"], answer: 0 },
  { question: "¿Qué función convierte array a JSON?", options: ["json_encode()", "toJSON()", "array_to_json()"], answer: 0 },
  { question: "¿Qué función obtiene el tamaño de un array?", options: ["count()", "size()", "length()"], answer: 0 },
  { question: "¿Qué operador representa 'y lógico'?", options: ["&&", "&", "and"], answer: 0 },
  { question: "¿Qué operador representa 'o lógico'?", options: ["||", "|", "or"], answer: 0 },
  { question: "¿Qué función redirige a otra página?", options: ["header()", "redirect()", "goto()"], answer: 0 },
  { question: "¿Qué función verifica si existe un archivo?", options: ["file_exists()", "exists()", "check_file()"], answer: 0 },
  { question: "¿Qué función obtiene la fecha actual?", options: ["date()", "now()", "getDate()"], answer: 0 },
  { question: "¿Qué función redondea un número?", options: ["round()", "ceil()", "floor()"], answer: 0 },
  { question: "¿Qué estructura se usa para arrays asociativos?", options: ["clave => valor", "clave : valor", "clave = valor"], answer: 0 },
  { question: "¿Qué extensión tiene un archivo PHP?", options: [".php", ".html", ".phtml"], answer: 0 },
  { question: "¿Qué función incluye archivo solo una vez?", options: ["include_once", "require_once", "load_once"], answer: 0 },
  { question: "¿Qué función detiene el script con mensaje?", options: ["die()", "exit()", "stop()"], answer: 0 }
];


// ===== PHP SENIOR =====
const preguntasPhpSenior = [
  { question: "¿Qué superglobal contiene datos POST?", options: ["$_POST", "$_DATA", "$_FORM"], answer: 0 },
  { question: "¿Qué operador verifica igualdad idéntica?", options: ["===", "==", "="], answer: 0 },
  { question: "¿Qué palabra se usa para funciones anónimas?", options: ["function", "fn", "closure"], answer: 0 },
  { question: "¿Qué función codifica a JSON?", options: ["json_encode()", "toJson()", "encode()"], answer: 0 },
  { question: "¿Qué estructura atrapa errores?", options: ["try-catch", "handle", "trap"], answer: 0 },
  { question: "¿Qué clase maneja excepciones?", options: ["Exception", "Error", "Throwable"], answer: 0 },
  { question: "¿Qué función divide una cadena en array?", options: ["explode()", "split()", "divide()"], answer: 0 },
  { question: "¿Qué palabra define visibilidad privada?", options: ["private", "protected", "internal"], answer: 0 },
  { question: "¿Qué estructura define espacios de nombre?", options: ["namespace", "module", "package"], answer: 0 },
  { question: "¿Qué función verifica si variable está definida?", options: ["isset()", "defined()", "exists()"], answer: 0 },
  { question: "¿Qué palabra clave define clases?", options: ["class", "object", "define"], answer: 0 },
  { question: "¿Qué método se ejecuta automáticamente al crear un objeto?", options: ["__construct()", "init()", "build()"], answer: 0 },
  { question: "¿Qué palabra permite heredar una clase?", options: ["extends", "implements", "inherit"], answer: 0 },
  { question: "¿Qué palabra implementa una interfaz?", options: ["implements", "extends", "use"], answer: 0 },
  { question: "¿Qué función serializa un array?", options: ["serialize()", "json_encode()", "array_encode()"], answer: 0 },
  { question: "¿Qué función devuelve nombre de clase de un objeto?", options: ["get_class()", "class_name()", "name()"], answer: 0 },
  { question: "¿Qué función verifica si una clase existe?", options: ["class_exists()", "isset_class()", "defined()"], answer: 0 },
  { question: "¿Qué palabra accede a propiedades estáticas?", options: ["self", "this", "static"], answer: 0 },
  { question: "¿Qué operador accede a métodos de un objeto?", options: ["->", ".", ":"], answer: 0 },
  { question: "¿Qué operador accede a miembros estáticos?", options: ["::", "->", ":"], answer: 0 },
  { question: "¿Qué tipo de error puede capturarse con try-catch?", options: ["Excepciones", "Warnings", "Parse errors"], answer: 0 },
  { question: "¿Qué función define un alias de clase?", options: ["class_alias()", "alias()", "define_alias()"], answer: 0 },
  { question: "¿Qué clase representa excepciones?", options: ["Exception", "Error", "Throwable"], answer: 0 },
  { question: "¿Qué palabra previene la herencia?", options: ["final", "static", "readonly"], answer: 0 },
  { question: "¿Qué palabra define visibilidad interna?", options: ["private", "public", "protected"], answer: 0 },
  { question: "¿Qué operador fusiona arrays?", options: ["+", "array_merge()", "join()"], answer: 0 },
  { question: "¿Qué operador compara tipo y valor?", options: ["===", "==", "="], answer: 0 },
  { question: "¿Qué palabra accede a variables globales?", options: ["global", "public", "extern"], answer: 0 },
  { question: "¿Qué función verifica si variable está definida?", options: ["isset()", "defined()", "exists()"], answer: 0 },
  { question: "¿Qué función elimina una variable?", options: ["unset()", "delete()", "remove()"], answer: 0 },
  { question: "¿Qué estructura permite definir múltiples opciones?", options: ["switch", "match", "case"], answer: 0 },
  { question: "¿Qué operador representa negación lógica?", options: ["!", "not", "~"], answer: 0 },
  { question: "¿Qué función filtra entrada de usuario?", options: ["filter_input()", "clean()", "sanitize()"], answer: 0 },
  { question: "¿Qué función protege contra XSS?", options: ["htmlspecialchars()", "escape()", "strip_tags()"], answer: 0 },
  { question: "¿Qué función valida email?", options: ["filter_var(..., FILTER_VALIDATE_EMAIL)", "validate_email()", "check_email()"], answer: 0 },
  { question: "¿Qué función valida números enteros?", options: ["filter_var(..., FILTER_VALIDATE_INT)", "is_int()", "validate_int()"], answer: 0 },
  { question: "¿Qué palabra define una constante global?", options: ["define()", "const", "static"], answer: 0 },
  { question: "¿Qué función cifra datos en hash?", options: ["password_hash()", "hash()", "encrypt()"], answer: 0 },
  { question: "¿Qué función verifica contraseñas cifradas?", options: ["password_verify()", "check_hash()", "verify()"], answer: 0 }
];

const preguntasPhpBloquesdecodigo = [
  {
    question: "¿Qué instrucción imprime texto en PHP?",
    options: [
      "print('Hola');",
      "echo 'Hola';",
      "write('Hola');"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se declara una variable en PHP?",
    options: [
      "$nombre = 'Juan';",
      "var nombre = 'Juan';",
      "nombre := 'Juan';"
    ],
    answer: 0
  },
  {
    question: "¿Qué etiqueta se usa para abrir un bloque de código PHP?",
    options: [
      "<?php",
      "<script>",
      "<php>"
    ],
    answer: 0
  },
  {
    question: "¿Qué función convierte texto en número entero?",
    options: [
      "intval()",
      "parseInt()",
      "toInt()"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se escribe un comentario de una línea?",
    options: [
      "# comentario",
      "<!-- comentario -->",
      "/* comentario */"
    ],
    answer: 0
  },
  {
    question: "¿Qué función obtiene la longitud de una cadena?",
    options: [
      "length()",
      "strlen()",
      "count()"
    ],
    answer: 1
  },
  {
    question: "¿Qué operador se usa para comparar igualdad?",
    options: [
      "==",
      "=",
      "==="
    ],
    answer: 2
  },
  {
    question: "¿Qué estructura permite repetir código hasta que una condición sea falsa?",
    options: [
      "repeat",
      "while",
      "foreach"
    ],
    answer: 1
  },
  {
    question: "¿Qué estructura se usa para recorrer un array?",
    options: [
      "foreach",
      "forin",
      "loop"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define una función en PHP?",
    options: [
      "function saludar() { }",
      "def saludar():",
      "void saludar() { }"
    ],
    answer: 0
  },
  {
    question: "¿Qué función redirige a otra página?",
    options: [
      "header('Location: pagina.php');",
      "redirect('pagina.php');",
      "goTo('pagina.php');"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador se usa para concatenar cadenas?",
    options: [
      "+",
      "&",
      "."
    ],
    answer: 2
  },
  {
    question: "¿Qué superglobal almacena variables enviadas por POST?",
    options: [
      "$_POST",
      "$post",
      "$POST"
    ],
    answer: 0
  },
  {
    question: "¿Qué función convierte una cadena en mayúsculas?",
    options: [
      "strtoupper()",
      "toUpper()",
      "uppercase()"
    ],
    answer: 0
  },
  {
    question: "¿Qué función verifica si una variable está definida?",
    options: [
      "isset()",
      "defined()",
      "exists()"
    ],
    answer: 0
  },
  {
    question: "¿Qué función destruye la sesión actual?",
    options: [
      "session_destroy()",
      "end_session()",
      "destroy_session()"
    ],
    answer: 0
  },
  {
    question: "¿Qué estructura condicional evalúa múltiples casos?",
    options: [
      "switch",
      "select",
      "choose"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador lógico representa Y (AND)?",
    options: [
      "and",
      "&&",
      "&"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se declara un array en PHP?",
    options: [
      "$arr = array(1, 2, 3);",
      "$arr = [1, 2, 3];",
      "array = {1, 2, 3};"
    ],
    answer: 0
  },
  {
    question: "¿Qué función muestra información de una variable?",
    options: [
      "echo()",
      "var_dump()",
      "print_r()"
    ],
    answer: 1
  },
  {
    question: "¿Qué función elimina espacios al inicio y final?",
    options: [
      "trim()",
      "strip()",
      "removeSpace()"
    ],
    answer: 0
  },
  {
    question: "¿Qué estructura se usa para manejar excepciones?",
    options: [
      "try { } catch(Exception $e) { }",
      "if(error) { }",
      "onerror { }"
    ],
    answer: 0
  },
  {
    question: "¿Qué función detiene la ejecución de un script?",
    options: [
      "die()",
      "stop()",
      "exit()"
    ],
    answer: 2
  },
  {
    question: "¿Qué función genera un número aleatorio?",
    options: [
      "random()",
      "rand()",
      "get_random()"
    ],
    answer: 1
  },
  {
    question: "¿Qué función obtiene la fecha actual?",
    options: [
      "now()",
      "getDate()",
      "date()"
    ],
    answer: 2
  },
  {
    question: "¿Qué operador se usa para asignación?",
    options: [
      ":=",
      "=",
      "=="
    ],
    answer: 1
  },
  {
    question: "¿Qué estructura repite el bloque al menos una vez?",
    options: [
      "do { } while(...);",
      "loop while",
      "while once"
    ],
    answer: 0
  },
  {
    question: "¿Qué función convierte JSON en array?",
    options: [
      "json_decode()",
      "parse_json()",
      "toArray()"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador compara valor e igual tipo?",
    options: [
      "==",
      "===",
      "="
    ],
    answer: 1
  },
  {
    question: "¿Qué etiqueta debe estar al final del script PHP?",
    options: [
      "?>",
      "<endphp>",
      "exit;"
    ],
    answer: 0
  }
];



// ===== PYTHON JUNIOR =====
const preguntasPythonJunior = [
  { question: "¿Cómo se imprime texto en Python?", options: ["print()", "echo()", "write()"], answer: 0 },
  { question: "¿Qué símbolo define comentarios?", options: ["#", "//", "--"], answer: 0 },
  { question: "¿Qué tipo representa texto?", options: ["str", "txt", "string"], answer: 0 },
  { question: "¿Qué función obtiene longitud?", options: ["len()", "length()", "count()"], answer: 0 },
  { question: "¿Qué operador suma valores?", options: ["+", "add", "&"], answer: 0 },
  { question: "¿Qué estructura repite código?", options: ["for", "repeat", "loop"], answer: 0 },
  { question: "¿Cómo se accede al primer elemento de una lista?", options: ["lista[0]", "lista(0)", "lista{0}"], answer: 0 },
  { question: "¿Qué función convierte a entero?", options: ["int()", "toInt()", "parseInt()"], answer: 0 },
  { question: "¿Qué estructura condiciona ejecución?", options: ["if", "check", "switch"], answer: 0 },
  { question: "¿Qué palabra define una función?", options: ["def", "func", "lambda"], answer: 0 },
  { question: "¿Cómo se declara una variable en Python?", options: ["x = 5", "int x = 5", "var x = 5"], answer: 0 },
  { question: "¿Cómo se imprime en consola?", options: ["print()", "console.log()", "echo"], answer: 0 },
  { question: "¿Qué símbolo se usa para comentarios?", options: ["#", "//", "--"], answer: 0 },
  { question: "¿Cómo se crea una lista?", options: ["[]", "{}", "()"], answer: 0 },
  { question: "¿Qué tipo representa cadenas?", options: ["str", "text", "string"], answer: 0 },
  { question: "¿Cómo se repite un bloque de código?", options: ["for", "repeat", "loop"], answer: 0 },
  { question: "¿Qué palabra detiene un bucle?", options: ["break", "exit", "stop"], answer: 0 },
  { question: "¿Cómo se crea una función?", options: ["def", "function", "fun"], answer: 0 },
  { question: "¿Cómo se verifica una condición?", options: ["if", "check", "when"], answer: 0 },
  { question: "¿Cómo se representa falso?", options: ["False", "false", "null"], answer: 0 },
  { question: "¿Qué operador se usa para sumar?", options: ["+", "++", "&"], answer: 0 },
  { question: "¿Qué función convierte texto a número?", options: ["int()", "toInt()", "parseInt()"], answer: 0 },
  { question: "¿Qué función obtiene la longitud de una lista?", options: ["len()", "size()", "length()"], answer: 0 },
  { question: "¿Qué operador compara igualdad?", options: ["==", "=", "==="], answer: 0 },
  { question: "¿Cómo se accede al primer elemento de una lista?", options: ["lista[0]", "lista(0)", "lista{0}"], answer: 0 },
  { question: "¿Qué palabra define una constante por convención?", options: ["MAYÚSCULAS", "const", "final"], answer: 0 },
  { question: "¿Qué tipo representa booleanos?", options: ["bool", "boolean", "bit"], answer: 0 },
  { question: "¿Qué operador representa 'y' lógico?", options: ["and", "&&", "&"], answer: 0 },
  { question: "¿Qué operador representa 'o' lógico?", options: ["or", "||", "|"], answer: 0 },
  { question: "¿Qué operador representa negación?", options: ["not", "!", "~"], answer: 0 },
  { question: "¿Qué función redondea un número?", options: ["round()", "int()", "math.round()"], answer: 0 },
  { question: "¿Cómo se comenta varias líneas?", options: ["''' texto '''", "//", "#"], answer: 0 },
  { question: "¿Qué estructura permite múltiples condiciones?", options: ["elif", "else if", "switch"], answer: 0 },
  { question: "¿Cómo se ejecuta un bloque al menos una vez?", options: ["while True + break", "do...while", "loop"], answer: 0 },
  { question: "¿Qué método elimina el último elemento de una lista?", options: ["pop()", "remove()", "del"], answer: 0 },
  { question: "¿Qué método agrega un elemento a una lista?", options: ["append()", "add()", "push()"], answer: 0 },
  { question: "¿Qué tipo representa números con decimales?", options: ["float", "decimal", "double"], answer: 0 },
  { question: "¿Qué función convierte un número a cadena?", options: ["str()", "toString()", "string()"], answer: 0 },
  { question: "¿Cómo se accede al diccionario?", options: ["dict['clave']", "dict.clave", "dict->clave"], answer: 0 },
  { question: "¿Qué método ordena una lista?", options: ["sort()", "order()", "sorted()"], answer: 0 }
];



// ===== PYTHON SENIOR =====
const preguntasPythonSenior = [
  { question: "¿Qué tipo representa diccionarios?", options: ["dict", "map", "obj"], answer: 0 },
  { question: "¿Qué estructura maneja errores?", options: ["try-except", "try-catch", "handle"], answer: 0 },
  { question: "¿Qué función recorre iterables?", options: ["enumerate()", "loop()", "iterate()"], answer: 0 },
  { question: "¿Qué palabra define clases?", options: ["class", "type", "structure"], answer: 0 },
  { question: "¿Qué operador compara identidad?", options: ["is", "==", "equals"], answer: 0 },
  { question: "¿Qué palabra define funciones anónimas?", options: ["lambda", "def", "func"], answer: 0 },
  { question: "¿Qué módulo trabaja con fechas?", options: ["datetime", "time", "calendar"], answer: 0 },
  { question: "¿Qué método agrega elemento a lista?", options: ["append()", "push()", "add()"], answer: 0 },
  { question: "¿Qué operador realiza división entera?", options: ["//", "/", "%"], answer: 0 },
  { question: "¿Qué método ordena listas?", options: ["sort()", "order()", "arrange()"], answer: 0 },
  { question: "¿Qué estructura permite capturar errores?", options: ["try...except", "try...catch", "check...handle"], answer: 0 },
  { question: "¿Qué palabra se usa para clases?", options: ["class", "type", "struct"], answer: 0 },
  { question: "¿Qué palabra representa el objeto actual?", options: ["self", "this", "me"], answer: 0 },
  { question: "¿Qué método se ejecuta al instanciar?", options: ["__init__", "init()", "__construct()"], answer: 0 },
  { question: "¿Qué módulo se usa para expresiones regulares?", options: ["re", "regex", "regexp"], answer: 0 },
  { question: "¿Qué estructura permite importar módulos?", options: ["import", "include", "require"], answer: 0 },
  { question: "¿Qué función convierte JSON a diccionario?", options: ["json.loads()", "json.parse()", "json_decode()"], answer: 0 },
  { question: "¿Qué función convierte diccionario a JSON?", options: ["json.dumps()", "json_encode()", "toJSON()"], answer: 0 },
  { question: "¿Qué módulo se usa para fechas?", options: ["datetime", "date", "time"], answer: 0 },
  { question: "¿Qué palabra evita modificar un valor?", options: ["@property", "final", "const"], answer: 0 },
  { question: "¿Qué estructura representa generadores?", options: ["yield", "return", "generate"], answer: 0 },
  { question: "¿Qué palabra define decoradores?", options: ["@", "!", "#"], answer: 0 },
  { question: "¿Qué método convierte en string?", options: ["__str__", "toString", "__repr__"], answer: 0 },
  { question: "¿Qué palabra impide herencia?", options: ["No existe en Python", "final", "sealed"], answer: 0 },
  { question: "¿Qué función termina el programa?", options: ["sys.exit()", "exit()", "stop()"], answer: 0 },
  { question: "¿Qué función pausa la ejecución?", options: ["time.sleep()", "wait()", "delay()"], answer: 0 },
  { question: "¿Qué estructura crea funciones anónimas?", options: ["lambda", "def", "anon"], answer: 0 },
  { question: "¿Qué estructura permite abrir archivos?", options: ["with open()", "open()", "file.open()"], answer: 0 },
  { question: "¿Qué modo abre archivo para lectura?", options: ["'r'", "'w'", "'a'"], answer: 0 },
  { question: "¿Qué modo abre archivo para escritura?", options: ["'w'", "'r'", "'rw'"], answer: 0 },
  { question: "¿Qué método recorre cada elemento de un iterable?", options: ["for", "while", "loop"], answer: 0 },
  { question: "¿Qué palabra define valores por defecto en funciones?", options: ["param=valor", "default", "optional"], answer: 0 },
  { question: "¿Qué palabra define argumentos variables?", options: ["*args", "varargs", "args..."], answer: 0 },
  { question: "¿Qué palabra define argumentos nombrados variables?", options: ["**kwargs", "*args", "namedargs"], answer: 0 },
  { question: "¿Qué método elimina clave de diccionario?", options: ["del", "remove", "delete"], answer: 0 },
  { question: "¿Qué método retorna claves del diccionario?", options: ["keys()", "getKeys()", "items()"], answer: 0 },
  { question: "¿Qué método retorna valores del diccionario?", options: ["values()", "getValues()", "items()"], answer: 0 },
  { question: "¿Qué método devuelve tuplas clave-valor?", options: ["items()", "tuples()", "pairs()"], answer: 0 },
  { question: "¿Qué módulo permite operaciones matemáticas avanzadas?", options: ["math", "numeric", "calc"], answer: 0 },
  { question: "¿Qué estructura implementa listas por comprensión?", options: ["[x for x in y]", "list(x)", "map(x)"], answer: 0 }
];

const preguntasPythonBloquesdecodigo = [
  {
    question: "¿Qué instrucción imprime un mensaje en consola?",
    options: [
      "display('Hola')",
      "print('Hola')",
      "echo('Hola')"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se declara una lista con tres elementos?",
    options: [
      "lista = [1, 2, 3]",
      "lista = (1, 2, 3)",
      "lista = {1, 2, 3}"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador se utiliza para comparar igualdad?",
    options: [
      "=",
      "==",
      "!="
    ],
    answer: 1
  },
  {
    question: "¿Cómo se define una función en Python?",
    options: [
      "def mi_funcion():",
      "function mi_funcion()",
      "fun mi_funcion():"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra se utiliza para crear un bucle?",
    options: [
      "repeat",
      "while",
      "loop"
    ],
    answer: 1
  },
  {
    question: "¿Qué método convierte un número en cadena?",
    options: [
      "str(123)",
      "int('123')",
      "string(123)"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se comenta una línea en Python?",
    options: [
      "# Este es un comentario",
      "// Comentario",
      "-- Comentario"
    ],
    answer: 0
  },
  {
    question: "¿Qué función obtiene la longitud de una lista?",
    options: [
      "count(lista)",
      "len(lista)",
      "size(lista)"
    ],
    answer: 1
  },
  {
    question: "¿Qué palabra clave detiene un bucle?",
    options: [
      "stop",
      "break",
      "exit"
    ],
    answer: 1
  },
  {
    question: "¿Qué instrucción maneja excepciones?",
    options: [
      "try ... except",
      "catch ... error",
      "handle ... except"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se llama a una función en Python?",
    options: [
      "llamar(funcion)",
      "funcion()",
      "call funcion()"
    ],
    answer: 1
  },
  {
    question: "¿Qué estructura condicional evalúa una condición?",
    options: [
      "if ... else",
      "when ... then",
      "check ... do"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato es True en Python?",
    options: [
      "boolean",
      "string",
      "int"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se accede al segundo elemento de una lista?",
    options: [
      "lista[1]",
      "lista(2)",
      "lista.2"
    ],
    answer: 0
  },
  {
    question: "¿Qué operador representa 'y' lógico?",
    options: [
      "&",
      "and",
      "&&"
    ],
    answer: 1
  },
  {
    question: "¿Qué operador representa 'o' lógico?",
    options: [
      "||",
      "or",
      "|"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se inicia un ciclo for sobre una lista?",
    options: [
      "for item in lista:",
      "foreach item in lista",
      "for (item : lista)"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave declara una clase?",
    options: [
      "define",
      "class",
      "object"
    ],
    answer: 1
  },
  {
    question: "¿Qué función convierte texto a entero?",
    options: [
      "str()",
      "parse()",
      "int()"
    ],
    answer: 2
  },
  {
    question: "¿Qué método se usa para añadir un elemento a una lista?",
    options: [
      "push()",
      "append()",
      "add()"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se accede al valor de una clave en un diccionario?",
    options: [
      "dic['clave']",
      "dic.clave",
      "get(dic, 'clave')"
    ],
    answer: 0
  },
  {
    question: "¿Qué función obtiene la entrada del usuario?",
    options: [
      "prompt()",
      "input()",
      "scan()"
    ],
    answer: 1
  },
  {
    question: "¿Qué palabra define una constante por convención?",
    options: [
      "No existe una palabra clave, se usa MAYÚSCULAS",
      "const",
      "final"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato es (1, 2, 3)?",
    options: [
      "tuple",
      "list",
      "set"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato es {'a', 'b', 'c'}?",
    options: [
      "list",
      "tuple",
      "set"
    ],
    answer: 2
  },
  {
    question: "¿Qué función redondea un número?",
    options: [
      "int()",
      "round()",
      "ceil()"
    ],
    answer: 1
  },
  {
    question: "¿Qué módulo se importa para funciones matemáticas?",
    options: [
      "math",
      "random",
      "numbers"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra define un método dentro de una clase?",
    options: [
      "self",
      "def",
      "method"
    ],
    answer: 1
  },
  {
    question: "¿Qué valor representa nulo en Python?",
    options: [
      "null",
      "None",
      "undefined"
    ],
    answer: 1
  },
  {
    question: "¿Qué función convierte una lista en conjunto (set)?",
    options: [
      "to_set()",
      "set()",
      "list_to_set()"
    ],
    answer: 1
  }
];




// ===== BASE DE DATOS JUNIOR =====
const preguntasBasededatosJunior = [
  { question: "¿Qué comando selecciona datos?", options: ["SELECT", "GET", "SHOW"], answer: 0 },
  { question: "¿Qué comando inserta datos?", options: ["INSERT", "ADD", "PUT"], answer: 0 },
  { question: "¿Qué comando elimina registros?", options: ["DELETE", "REMOVE", "DROP"], answer: 0 },
  { question: "¿Qué comando modifica registros?", options: ["UPDATE", "MODIFY", "SET"], answer: 0 },
  { question: "¿Qué comando crea tablas?", options: ["CREATE", "NEW", "BUILD"], answer: 0 },
  { question: "¿Qué comando borra tablas?", options: ["DROP", "DELETE", "REMOVE"], answer: 0 },
  { question: "¿Qué comando elimina toda una tabla?", options: ["DROP", "DELETE", "TRUNCATE"], answer: 0 },
  { question: "¿Qué tipo de clave identifica registros únicos?", options: ["PRIMARY KEY", "FOREIGN KEY", "INDEX"], answer: 0 },
  { question: "¿Qué comando muestra estructura de tabla?", options: ["DESCRIBE", "SHOW", "INFO"], answer: 0 },
  { question: "¿Qué tipo de dato almacena texto largo?", options: ["TEXT", "VARCHAR", "CHAR"], answer: 0 },
  { question: "¿Qué es SQL?", options: ["Lenguaje de consulta estructurado", "Lenguaje de programación", "Sistema operativo"], answer: 0 },
  { question: "¿Qué instrucción se usa para consultar datos?", options: ["SELECT", "GET", "SHOW"], answer: 0 },
  { question: "¿Qué instrucción se usa para insertar datos?", options: ["INSERT INTO", "ADD", "INCLUDE"], answer: 0 },
  { question: "¿Qué instrucción elimina datos?", options: ["DELETE", "REMOVE", "DROP"], answer: 0 },
  { question: "¿Qué instrucción actualiza registros?", options: ["UPDATE", "MODIFY", "SET"], answer: 0 },
  { question: "¿Qué palabra se usa para filtrar resultados?", options: ["WHERE", "IF", "FILTER"], answer: 0 },
  { question: "¿Qué palabra ordena resultados?", options: ["ORDER BY", "SORT", "ARRANGE"], answer: 0 },
  { question: "¿Qué instrucción crea una tabla?", options: ["CREATE TABLE", "NEW TABLE", "ADD TABLE"], answer: 0 },
  { question: "¿Qué tipo de dato almacena texto?", options: ["VARCHAR", "INT", "DATE"], answer: 0 },
  { question: "¿Qué tipo almacena números enteros?", options: ["INT", "CHAR", "FLOAT"], answer: 0 },
  { question: "¿Qué tipo almacena valores decimales?", options: ["FLOAT", "VARCHAR", "BOOLEAN"], answer: 0 },
  { question: "¿Qué tipo almacena fechas?", options: ["DATE", "DATETIME", "TIME"], answer: 0 },
  { question: "¿Qué palabra elimina una tabla?", options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE"], answer: 0 },
  { question: "¿Qué comando cambia la estructura de una tabla?", options: ["ALTER TABLE", "UPDATE STRUCTURE", "MODIFY TABLE"], answer: 0 },
  { question: "¿Qué palabra agrupa resultados?", options: ["GROUP BY", "COLLECT", "AGGREGATE"], answer: 0 },
  { question: "¿Qué función cuenta registros?", options: ["COUNT()", "SUM()", "TOTAL()"], answer: 0 },
  { question: "¿Qué función devuelve el promedio?", options: ["AVG()", "MEAN()", "AVERAGE()"], answer: 0 },
  { question: "¿Qué función devuelve el valor máximo?", options: ["MAX()", "TOP()", "HIGHEST()"], answer: 0 },
  { question: "¿Qué función devuelve el valor mínimo?", options: ["MIN()", "LOW()", "SMALLEST()"], answer: 0 },
  { question: "¿Qué palabra devuelve resultados sin duplicados?", options: ["DISTINCT", "UNIQUE", "FILTER"], answer: 0 },
  { question: "¿Qué cláusula limita la cantidad de resultados?", options: ["LIMIT", "TOP", "MAXROWS"], answer: 0 },
  { question: "¿Qué operador busca un patrón?", options: ["LIKE", "FIND", "MATCH"], answer: 0 },
  { question: "¿Qué operador selecciona un rango?", options: ["BETWEEN", "IN", "RANGE"], answer: 0 },
  { question: "¿Qué palabra se usa para alias?", options: ["AS", "ALIAS", "LIKE"], answer: 0 },
  { question: "¿Qué comando borra todos los datos de una tabla?", options: ["TRUNCATE", "DELETE ALL", "CLEAR"], answer: 0 },
  { question: "¿Qué comando muestra todas las tablas?", options: ["SHOW TABLES", "LIST TABLES", "SELECT *"], answer: 0 },
  { question: "¿Qué cláusula selecciona valores dentro de un conjunto?", options: ["IN", "SET", "GROUP"], answer: 0 },
  { question: "¿Qué tipo almacena valores booleanos?", options: ["BOOLEAN", "BIT", "TINYINT"], answer: 0 },
  { question: "¿Qué operador lógico representa 'y'?", options: ["AND", "&&", "&"], answer: 0 },
  { question: "¿Qué operador lógico representa 'o'?", options: ["OR", "||", "|"], answer: 0 }
];


// ===== BASE DE DATOS SENIOR =====
const preguntasBasededatosSenior = [
  { question: "¿Qué tipo de relación se representa con FOREIGN KEY?", options: ["uno a muchos", "uno a uno", "muchos a muchos"], answer: 0 },
  { question: "¿Qué comando crea índices?", options: ["CREATE INDEX", "MAKE INDEX", "SET INDEX"], answer: 0 },
  { question: "¿Qué tipo de JOIN devuelve registros coincidentes?", options: ["INNER JOIN", "LEFT JOIN", "OUTER JOIN"], answer: 0 },
  { question: "¿Qué cláusula agrupa resultados?", options: ["GROUP BY", "ORDER BY", "COLLECT BY"], answer: 0 },
  { question: "¿Qué comando limita el número de resultados?", options: ["LIMIT", "MAX", "TOP"], answer: 0 },
  { question: "¿Qué cláusula ordena resultados?", options: ["ORDER BY", "SORT", "ARRANGE"], answer: 0 },
  { question: "¿Qué función cuenta filas?", options: ["COUNT()", "TOTAL()", "SUM()"], answer: 0 },
  { question: "¿Qué palabra se usa para alias de columnas?", options: ["AS", "ALIAS", "NAME"], answer: 0 },
  { question: "¿Qué función suma valores?", options: ["SUM()", "TOTAL()", "ADD()"], answer: 0 },
  { question: "¿Qué función obtiene valor máximo?", options: ["MAX()", "HIGHEST()", "TOP()"], answer: 0 },
  { question: "¿Qué es una clave primaria?", options: ["Identificador único de una fila", "Columna duplicada", "Relación externa"], answer: 0 },
  { question: "¿Qué es una clave foránea?", options: ["Relaciona dos tablas", "Clave principal", "Campo duplicado"], answer: 0 },
  { question: "¿Qué tipo de JOIN devuelve coincidencias en ambas tablas?", options: ["INNER JOIN", "OUTER JOIN", "LEFT JOIN"], answer: 0 },
  { question: "¿Qué tipo de JOIN devuelve todos los registros de la izquierda?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN"], answer: 0 },
  { question: "¿Qué JOIN devuelve todos los registros de ambas tablas?", options: ["FULL JOIN", "OUTER JOIN", "ALL JOIN"], answer: 0 },
  { question: "¿Qué significa normalizar una base de datos?", options: ["Eliminar redundancias", "Crear índices", "Mejorar diseño"], answer: 0 },
  { question: "¿Qué forma normal elimina grupos repetitivos?", options: ["Primera forma normal (1NF)", "2NF", "3NF"], answer: 0 },
  { question: "¿Qué forma normal elimina dependencias parciales?", options: ["2NF", "1NF", "BCNF"], answer: 0 },
  { question: "¿Qué forma elimina dependencias transitivas?", options: ["3NF", "2NF", "1NF"], answer: 0 },
  { question: "¿Qué comando crea un índice?", options: ["CREATE INDEX", "NEW INDEX", "MAKE INDEX"], answer: 0 },
  { question: "¿Qué comando elimina un índice?", options: ["DROP INDEX", "DELETE INDEX", "REMOVE INDEX"], answer: 0 },
  { question: "¿Qué comando agrega clave foránea?", options: ["ALTER TABLE ... ADD CONSTRAINT", "MODIFY FK", "SET FOREIGN"], answer: 0 },
  { question: "¿Qué es una vista (VIEW)?", options: ["Consulta guardada como tabla virtual", "Tabla temporal", "Índice especial"], answer: 0 },
  { question: "¿Qué comando crea una vista?", options: ["CREATE VIEW", "MAKE VIEW", "ADD VIEW"], answer: 0 },
  { question: "¿Qué comando modifica una vista?", options: ["ALTER VIEW", "MODIFY VIEW", "UPDATE VIEW"], answer: 0 },
  { question: "¿Qué comando elimina una vista?", options: ["DROP VIEW", "DELETE VIEW", "REMOVE VIEW"], answer: 0 },
  { question: "¿Qué comando crea un procedimiento almacenado?", options: ["CREATE PROCEDURE", "MAKE PROCEDURE", "NEW PROC"], answer: 0 },
  { question: "¿Qué palabra se usa para declarar variables en SQL?", options: ["DECLARE", "VAR", "LET"], answer: 0 },
  { question: "¿Qué comando ejecuta un procedimiento almacenado?", options: ["CALL", "EXEC", "RUN"], answer: 0 },
  { question: "¿Qué palabra se usa en transacciones para confirmar?", options: ["COMMIT", "SAVE", "APPLY"], answer: 0 },
  { question: "¿Qué palabra deshace una transacción?", options: ["ROLLBACK", "UNDO", "REVERSE"], answer: 0 },
  { question: "¿Qué comando bloquea una tabla?", options: ["LOCK TABLE", "BLOCK", "HOLD"], answer: 0 },
  { question: "¿Qué es un trigger?", options: ["Procedimiento que se ejecuta automáticamente", "Error en tabla", "Vista temporal"], answer: 0 },
  { question: "¿Qué comando crea un trigger?", options: ["CREATE TRIGGER", "NEW TRIGGER", "MAKE TRIGGER"], answer: 0 },
  { question: "¿Qué función devuelve la fecha actual?", options: ["NOW()", "CURRENT_DATE()", "TODAY()"], answer: 0 },
  { question: "¿Qué comando crea una base de datos?", options: ["CREATE DATABASE", "NEW DATABASE", "MAKE DB"], answer: 0 },
  { question: "¿Qué comando elimina una base de datos?", options: ["DROP DATABASE", "DELETE DATABASE", "REMOVE DB"], answer: 0 },
  { question: "¿Qué comando selecciona una base de datos?", options: ["USE", "SELECT DB", "SET DATABASE"], answer: 0 },
  { question: "¿Qué operador se usa para concatenar en SQL estándar?", options: ["||", "+", "&"], answer: 0 }
];

const preguntasBasededatosBloquesdecodigo = [
  {
    question: "¿Cómo se seleccionan todos los campos de una tabla llamada empleados?",
    options: [
      "SELECT * FROM empleados;",
      "GET * FROM empleados;",
      "FETCH ALL FROM empleados;"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción se usa para insertar datos?",
    options: [
      "INSERT INTO tabla VALUES(...);",
      "ADD INTO tabla VALUES(...);",
      "PUT INTO tabla VALUES(...);"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se actualiza un campo en SQL?",
    options: [
      "MODIFY SET campo = valor;",
      "UPDATE tabla SET campo = valor;",
      "SET campo = valor ON tabla;"
    ],
    answer: 1
  },
  {
    question: "¿Qué instrucción elimina una tabla completa?",
    options: [
      "DELETE * FROM tabla;",
      "DROP TABLE tabla;",
      "REMOVE TABLE tabla;"
    ],
    answer: 1
  },
  {
    question: "¿Qué palabra clave elimina registros en SQL?",
    options: [
      "DELETE FROM tabla WHERE ...;",
      "REMOVE FROM tabla WHERE ...;",
      "CLEAR FROM tabla WHERE ...;"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando crea una tabla nueva?",
    options: [
      "CREATE TABLE nombre (...);",
      "MAKE TABLE nombre (...);",
      "BUILD TABLE nombre (...);"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato almacena texto en SQL?",
    options: [
      "VARCHAR",
      "CHARACTER",
      "TEXT"
    ],
    answer: 0
  },
  {
    question: "¿Qué cláusula se usa para ordenar resultados?",
    options: [
      "ORDER BY campo;",
      "SORT BY campo;",
      "ARRANGE BY campo;"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se establece una clave primaria?",
    options: [
      "PRIMARY KEY (id)",
      "KEY PRIMARY (id)",
      "SET PRIMARY (id)"
    ],
    answer: 0
  },
  {
    question: "¿Qué función devuelve el número total de registros?",
    options: [
      "COUNT(*)",
      "SUM(*)",
      "TOTAL(*)"
    ],
    answer: 0
  },
  {
    question: "¿Qué cláusula combina condiciones lógicas?",
    options: [
      "WHERE campo = 1 AND campo2 = 2",
      "IF campo = 1 AND campo2 = 2",
      "WHEN campo = 1 AND campo2 = 2"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato guarda números enteros?",
    options: [
      "INTEGER",
      "REAL",
      "VARCHAR"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se limita la cantidad de resultados?",
    options: [
      "LIMIT 5",
      "MAX 5",
      "TOP 5"
    ],
    answer: 0
  },
  {
    question: "¿Qué función calcula la media?",
    options: [
      "AVERAGE()",
      "MEAN()",
      "AVG()"
    ],
    answer: 2
  },
  {
    question: "¿Qué instrucción establece una relación entre dos tablas?",
    options: [
      "FOREIGN KEY",
      "RELATION KEY",
      "LINK KEY"
    ],
    answer: 0
  },
  {
    question: "¿Qué sentencia elimina todos los datos sin borrar la tabla?",
    options: [
      "TRUNCATE TABLE tabla;",
      "DELETE TABLE tabla;",
      "DROP ALL FROM tabla;"
    ],
    answer: 0
  },
  {
    question: "¿Qué cláusula agrupa resultados según un campo?",
    options: [
      "GROUP BY campo",
      "ORDER BY campo",
      "SORT campo"
    ],
    answer: 0
  },
  {
    question: "¿Qué función devuelve el valor más alto de una columna?",
    options: [
      "MAX(campo)",
      "GREATEST(campo)",
      "HIGH(campo)"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para evitar duplicados?",
    options: [
      "DISTINCT",
      "UNIQUE",
      "FILTER"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de JOIN incluye todas las filas de ambas tablas?",
    options: [
      "FULL OUTER JOIN",
      "LEFT JOIN",
      "INNER JOIN"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción muestra la estructura de una tabla?",
    options: [
      "DESCRIBE tabla;",
      "SHOW FIELDS FROM tabla;",
      "TABLE INFO tabla;"
    ],
    answer: 0
  },
  {
    question: "¿Qué cláusula se usa para filtrar registros después del agrupamiento?",
    options: [
      "HAVING",
      "WHERE",
      "FILTER"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando cambia el nombre de una tabla?",
    options: [
      "RENAME TABLE antigua TO nueva;",
      "CHANGE TABLE antigua nueva;",
      "ALTER NAME antigua TO nueva;"
    ],
    answer: 0
  },
  {
    question: "¿Qué cláusula filtra los registros devueltos?",
    options: [
      "WHERE",
      "FILTER",
      "CONDITION"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para modificar la estructura de una tabla?",
    options: [
      "ALTER TABLE",
      "CHANGE TABLE",
      "MODIFY TABLE"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de JOIN devuelve solo coincidencias?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "FULL JOIN"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato almacena fechas?",
    options: [
      "DATE",
      "DATETIME",
      "TIMESTAMP"
    ],
    answer: 0
  },
  {
    question: "¿Qué función devuelve el menor valor?",
    options: [
      "MIN(columna)",
      "LOW(columna)",
      "LEAST(columna)"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando se usa para dar un alias a una columna?",
    options: [
      "SELECT campo AS alias",
      "SELECT campo TO alias",
      "RENAME campo AS alias"
    ],
    answer: 0
  },
  {
    question: "¿Qué sentencia detiene una transacción y revierte cambios?",
    options: [
      "ROLLBACK;",
      "UNDO;",
      "REVERT;"
    ],
    answer: 0
  }
];


const preguntasSistemasJunior = [
  // Hardware
  { question: "¿Cuál es la función principal de la CPU?", options: ["Procesar datos", "Almacenar archivos", "Mostrar gráficos"], answer: 0 },
  { question: "¿Qué tipo de memoria es volátil?", options: ["RAM", "ROM", "Disco duro"], answer: 0 },
  { question: "¿Qué componente almacena el sistema operativo?", options: ["Disco duro", "RAM", "CPU"], answer: 0 },

  // Software
  { question: "¿Qué tipo de software es el sistema operativo?", options: ["Software de sistema", "Software de aplicación", "Firmware"], answer: 0 },
  { question: "¿Qué es un driver?", options: ["Programa que permite al SO comunicarse con el hardware", "Antivirus", "Programa ofimático"], answer: 0 },

  // Redes
  { question: "¿Qué dispositivo conecta redes diferentes?", options: ["Router", "Switch", "Hub"], answer: 0 },
  { question: "¿Qué es una dirección IP?", options: ["Identificador único de red", "Nombre de host", "DNS"], answer: 0 },

  // IP y Servicios
  { question: "¿Qué protocolo se usa para obtener una IP automática?", options: ["DHCP", "DNS", "FTP"], answer: 0 },
  { question: "¿Qué puerto usa HTTP?", options: ["80", "443", "21"], answer: 0 },
  { question: "¿Qué servicio traduce nombres de dominio a IP?", options: ["DNS", "DHCP", "FTP"], answer: 0 },

  // Instalación y administración básica (Windows)
  { question: "¿Qué herramienta permite ver dispositivos instalados en Windows?", options: ["Administrador de dispositivos", "Panel de control", "CMD"], answer: 0 },
  { question: "¿Qué combinación abre el administrador de tareas?", options: ["Ctrl + Shift + Esc", "Alt + F4", "Win + R"], answer: 0 },
  
  // Extensión para preguntasSistemasJunior
  { question: "¿Qué unidad representa la capacidad de almacenamiento?", options: ["GB", "MHz", "ms"], answer: 0 },
  { question: "¿Qué es un periférico de entrada?", options: ["Teclado", "Monitor", "Altavoz"], answer: 0 },
  { question: "¿Qué componente almacena datos temporalmente?", options: ["RAM", "SSD", "ROM"], answer: 0 },
  { question: "¿Qué hace un antivirus?", options: ["Detecta y elimina malware", "Actualiza el sistema", "Abre documentos"], answer: 0 },
  { question: "¿Qué extensión tiene un archivo ejecutable en Windows?", options: [".exe", ".doc", ".bat"], answer: 0 },
  { question: "¿Qué sistema operativo es más común en servidores?", options: ["Linux", "Windows 11", "MacOS"], answer: 0 },
  { question: "¿Qué es un router doméstico?", options: ["Dispositivo para compartir Internet", "Procesador", "Firewall"], answer: 0 },
  { question: "¿Qué función tiene un switch de red?", options: ["Conecta múltiples dispositivos en LAN", "Distribuye electricidad", "Imprime archivos"], answer: 0 },
  { question: "¿Qué es una IP privada?", options: ["IP que no se enruta por Internet", "IP pública", "Dirección MAC"], answer: 0 },
  { question: "¿Qué es una dirección MAC?", options: ["Identificador único de red física", "IP temporal", "DNS alternativo"], answer: 0 },
  { question: "¿Qué extensión tienen los scripts de Windows?", options: [".bat", ".html", ".txt"], answer: 0 },
  { question: "¿Qué comando muestra archivos ocultos en Windows?", options: ["dir /a", "ls -a", "show hidden"], answer: 0 },
  { question: "¿Qué es una LAN?", options: ["Red de área local", "Internet", "Red de área extensa"], answer: 0 },
  { question: "¿Qué tecla accede al BIOS?", options: ["Supr / F2", "Alt + Tab", "Ctrl + Alt + Del"], answer: 0 },
  { question: "¿Qué significa 'plug and play'?", options: ["Detectar automáticamente hardware", "Quitar sin apagar", "Actualizar drivers"], answer: 0 },
  { question: "¿Qué tipo de archivo usa Linux para configuraciones?", options: [".conf", ".exe", ".bat"], answer: 0 },
  { question: "¿Qué significa formatear un disco?", options: ["Borrar y preparar para uso", "Copiar archivos", "Dividir particiones"], answer: 0 },
  { question: "¿Qué extensión identifica un ejecutable de Linux?", options: ["Sin extensión o .sh", ".exe", ".bin"], answer: 0 },
  { question: "¿Qué puerto usa HTTPS?", options: ["443", "80", "22"], answer: 0 },
  { question: "¿Qué puerto usa FTP?", options: ["21", "22", "25"], answer: 0 },
  { question: "¿Qué componente permite ver contenido en pantalla?", options: ["Tarjeta gráfica", "CPU", "Disco duro"], answer: 0 },
  { question: "¿Qué utilidad borra archivos desde consola en Windows?", options: ["del", "rm", "erase"], answer: 0 },
  { question: "¿Qué tecla interrumpe procesos en consola?", options: ["Ctrl + C", "Ctrl + X", "Shift + Esc"], answer: 0 },
  { question: "¿Qué software permite navegar por Internet?", options: ["Navegador web", "Servidor web", "Antivirus"], answer: 0 },
  { question: "¿Qué es un backup?", options: ["Copia de seguridad", "Virus", "Actualización"], answer: 0 },
  { question: "¿Qué comando en Linux se usa para verificar conectividad?", options: ["ping", "checknet", "trace"], answer: 0 },
  { question: "¿Qué comando en Windows hace lo mismo que 'ls' en Linux?", options: ["dir", "list", "show"], answer: 0 },
  { question: "¿Qué herramienta permite ver logs en Linux?", options: ["journalctl", "logsctl", "logview"], answer: 0 },
  { question: "¿Qué comando muestra procesos activos en Linux?", options: ["top", "ps -ef", "tasklist"], answer: 0 },
  { question: "¿Qué comando muestra usuarios conectados en Linux?", options: ["who", "users", "loggedin"], answer: 0 },
  { question: "¿Qué herramienta permite gestionar discos en Windows?", options: ["Disk Management", "Disk Utility", "Drive Control"], answer: 0 },
  { question: "¿Qué servicio gestiona nombres de dominio en red?", options: ["DNS", "DHCP", "WINS"], answer: 0 },
  { question: "¿Qué tipo de red es una VPN?", options: ["Red privada virtual", "Red pública visible", "Red inalámbrica"], answer: 0 },
  { question: "¿Qué es NAT?", options: ["Traducción de direcciones de red", "Firewall", "Red automática"], answer: 0 },
  { question: "¿Qué comando apaga el sistema Linux?", options: ["shutdown -h now", "poweroff", "halt"], answer: 0 },
  { question: "¿Qué comando actualiza los paquetes en Ubuntu?", options: ["sudo apt update", "yum update", "dnf upgrade"], answer: 0 },
  { question: "¿Qué tipo de archivo es un .deb?", options: ["Paquete de instalación Debian", "Archivo comprimido", "Configuración"], answer: 0 },
  { question: "¿Qué protocolo se usa para enviar correos?", options: ["SMTP", "POP3", "IMAP"], answer: 0 },
  { question: "¿Qué protocolo se usa para recibir correos?", options: ["POP3 / IMAP", "SMTP", "FTP"], answer: 0 },
  { question: "¿Qué servicio de red asigna direcciones IP?", options: ["DHCP", "DNS", "NAT"], answer: 0 },
  { question: "¿Qué es un demonio (daemon)?", options: ["Proceso en segundo plano", "Error del sistema", "Driver del sistema"], answer: 0 },
  { question: "¿Qué comando en Linux muestra disco disponible?", options: ["df -h", "lsblk", "free"], answer: 0 },
  { question: "¿Qué comando en Linux borra un usuario?", options: ["userdel", "deluser", "removeuser"], answer: 0 },
  { question: "¿Qué archivo configura el hostname?", options: ["/etc/hostname", "/etc/network", "/etc/resolv.conf"], answer: 0 },
  { question: "¿Qué herramienta gráfica administra servicios en Windows?", options: ["services.msc", "taskmgr", "control.exe"], answer: 0 }
];

const preguntasSistemasSenior = [
  // Administración de redes (Windows)
  { question: "¿Qué comando muestra configuración de red en Windows?", options: ["ipconfig", "ifconfig", "netconfig"], answer: 0 },
  { question: "¿Qué herramienta configura la IP manualmente en Windows?", options: ["Propiedades de red", "Administrador de tareas", "Firewall"], answer: 0 },

  // Instalación y administración (Linux)
  { question: "¿Qué comando se usa para instalar paquetes en Debian?", options: ["apt install", "yum install", "rpm install"], answer: 0 },
  { question: "¿Qué archivo contiene la configuración de red en Linux?", options: ["/etc/network/interfaces", "/etc/hosts", "/etc/passwd"], answer: 0 },
  { question: "¿Qué comando reinicia un servicio en Linux?", options: ["systemctl restart", "service shutdown", "reboot"], answer: 0 },

  // Administración de redes (Linux)
  { question: "¿Qué comando muestra interfaces de red en Linux?", options: ["ip a", "netstat", "hostname"], answer: 0 },
  { question: "¿Qué comando permite cambiar la IP en Linux?", options: ["ip addr add", "set ip", "edit ip"], answer: 0 },
  {
    question: "¿Qué comando de Windows se utiliza para ver la configuración IP del equipo?",
    options: [
      "netstat",
      "ipconfig",
      "ping"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es la ruta para configurar usuarios en Windows 10?",
    options: [
      "Panel de control > Usuarios",
      "Configuración > Cuentas > Familia y otros usuarios",
      "Inicio > Sistema > Usuarios"
    ],
    answer: 1
  },
  {
    question: "¿Qué utilidad permite gestionar discos en Windows?",
    options: [
      "diskmgmt.msc",
      "chkdsk",
      "msconfig"
    ],
    answer: 0
  },
  {
    question: "¿Qué protocolo permite acceso remoto seguro a servidores Linux?",
    options: [
      "Telnet",
      "SSH",
      "FTP"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando de Linux muestra las interfaces de red?",
    options: [
      "ip a",
      "ifshow",
      "netinfo"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de sistema de archivos utiliza Linux por defecto?",
    options: [
      "NTFS",
      "ext4",
      "FAT32"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando detiene un servicio en Linux?",
    options: [
      "systemctl stop servicio",
      "service off servicio",
      "servicio --stop"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando permite ver los procesos en ejecución en Linux?",
    options: [
      "ps aux",
      "processlist",
      "showproc"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la dirección IP de loopback?",
    options: [
      "127.0.0.1",
      "255.255.255.0",
      "192.168.0.1"
    ],
    answer: 0
  },
  {
    question: "¿Qué herramienta permite controlar servicios en Windows?",
    options: [
      "services.msc",
      "taskmgr",
      "regedit"
    ],
    answer: 0
  },
  {
    question: "¿Qué archivo contiene las contraseñas en Linux?",
    options: [
      "/etc/password",
      "/etc/shadow",
      "/etc/passwd"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando cambia los permisos de archivos en Linux?",
    options: [
      "chmod",
      "chperm",
      "perms"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando se usa para cambiar la propiedad de un archivo en Linux?",
    options: [
      "chowner",
      "chown",
      "own"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando se usa para instalar paquetes en Debian/Ubuntu?",
    options: [
      "yum install",
      "apt install",
      "dnf install"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando verifica conectividad con otra máquina?",
    options: [
      "ping",
      "checkip",
      "trace"
    ],
    answer: 0
  },
  {
    question: "¿Qué puerto usa HTTP?",
    options: [
      "21",
      "80",
      "443"
    ],
    answer: 1
  },
  {
    question: "¿Qué puerto usa HTTPS?",
    options: [
      "443",
      "80",
      "22"
    ],
    answer: 0
  },
  {
    question: "¿Qué puerto usa SSH?",
    options: [
      "23",
      "22",
      "21"
    ],
    answer: 1
  },
  {
    question: "¿Qué significa RAID?",
    options: [
      "Redundant Array of Independent Disks",
      "Random Access Indexed Disks",
      "Rapid Access Integrated Data"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando se usa para reiniciar una máquina Linux?",
    options: [
      "reboot",
      "shutdown -r now",
      "restart"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando actualiza todos los paquetes en Debian/Ubuntu?",
    options: [
      "apt upgrade",
      "update all",
      "upgrade"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando lista el contenido de un directorio en Linux?",
    options: [
      "ls",
      "dir",
      "show"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de dirección IP no cambia con el tiempo?",
    options: [
      "Estática",
      "Dinámica",
      "Privada"
    ],
    answer: 0
  },
  {
    question: "¿Qué significa DNS?",
    options: [
      "Domain Name System",
      "Data Network Service",
      "Directory Name Server"
    ],
    answer: 0
  },
  {
    question: "¿Qué significa DHCP?",
    options: [
      "Dynamic Host Configuration Protocol",
      "Direct Host Control Protocol",
      "Domain Host Connection Point"
    ],
    answer: 0
  },
  {
    question: "¿Qué herramienta gráfica permite configurar redes en Windows?",
    options: [
      "ncpa.cpl",
      "inetmgr",
      "ipconfig"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando muestra las rutas hacia una dirección IP?",
    options: [
      "tracert",
      "route",
      "netstat"
    ],
    answer: 0
  },
  {
    question: "¿Qué protocolo usa puerto 3389?",
    options: [
      "RDP",
      "SSH",
      "FTP"
    ],
    answer: 0
  },
  {
    question: "¿Qué extensión usan los scripts de bash?",
    options: [
      ".sh",
      ".bash",
      ".cmd"
    ],
    answer: 0
  },
  {
    question: "¿Qué significa UAC en Windows?",
    options: [
      "User Account Control",
      "User Access Control",
      "Unified Access Control"
    ],
    answer: 0
  },
  {
    question: "¿Qué archivo almacena el registro de arranque en Windows?",
    options: [
      "boot.ini",
      "bootmgr",
      "bootlog"
    ],
    answer: 1
  },
  {
    question: "¿Qué sistema de archivos es más moderno y usado por defecto en Windows?",
    options: [
      "NTFS",
      "FAT32",
      "exFAT"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando de Linux muestra el espacio disponible en disco?",
    options: [
      "df -h",
      "lsblk",
      "free"
    ],
    answer: 0
  },
  {
    question: "¿Qué servicio permite compartir archivos en red en Linux?",
    options: [
      "Samba",
      "NFS",
      "FTP"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando muestra el kernel de Linux?",
    options: [
      "uname -r",
      "kernel -v",
      "system --version"
    ],
    answer: 0
  },
  {
    question: "¿Qué significa LVM en Linux?",
    options: [
      "Logical Volume Manager",
      "Linux Virtual Machine",
      "Low Voltage Memory"
    ],
    answer: 0
  },
  {
    question: "¿Qué protocolo de red asigna direcciones IP automáticamente?",
    options: [
      "DHCP",
      "DNS",
      "ICMP"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando se usa para ver los logs del sistema en Linux?",
    options: [
      "journalctl",
      "logview",
      "cat /var/log/logs"
    ],
    answer: 0
  },
  {
    question: "¿Qué utilidad permite gestionar particiones en Linux desde consola?",
    options: [
      "fdisk",
      "format",
      "parttool"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la función principal de la unidad aritmético-lógica (ALU)?",
    options: [
      "Realizar operaciones matemáticas y lógicas",
      "Controlar el flujo de datos en memoria",
      "Almacenar instrucciones"
    ],
    answer: 0
  },
  {
    question: "¿Qué componente es el encargado de interpretar y ejecutar instrucciones?",
    options: [
      "Unidad de control",
      "ALU",
      "Memoria RAM"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de memoria se borra al apagar el ordenador?",
    options: [
      "RAM",
      "ROM",
      "Cache"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la función del bus de datos?",
    options: [
      "Transportar información entre componentes",
      "Sincronizar el reloj del sistema",
      "Almacenar los datos de arranque"
    ],
    answer: 0
  },
  {
    question: "¿Qué componente actúa como cerebro del sistema?",
    options: [
      "CPU",
      "RAM",
      "Disco duro"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace la memoria caché en un sistema?",
    options: [
      "Acelera el acceso a los datos más usados",
      "Almacena programas ejecutables",
      "Controla los periféricos"
    ],
    answer: 0
  },
  {
    question: "¿Qué componente controla la comunicación entre el procesador y la memoria?",
    options: [
      "Chipset",
      "Fuente de alimentación",
      "Tarjeta gráfica"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la función de la ROM en una computadora?",
    options: [
      "Almacenar instrucciones permanentes del sistema",
      "Ejecutar cálculos aritméticos",
      "Guardar archivos del usuario"
    ],
    answer: 0
  },
  {
    question: "¿Qué componente se encarga de iniciar el sistema operativo?",
    options: [
      "BIOS/UEFI",
      "CPU",
      "RAM"
    ],
    answer: 0
  },
  {
    question: "¿Qué característica define al bus de direcciones?",
    options: [
      "Transporta la ubicación de memoria",
      "Conecta periféricos externos",
      "Proporciona alimentación eléctrica"
    ],
    answer: 0
  },
  {
    question: "¿Qué parte del sistema determina la velocidad general de procesamiento?",
    options: [
      "Frecuencia del reloj del procesador",
      "Tamaño del disco duro",
      "Velocidad del ventilador"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace el registro del contador de programa (PC)?",
    options: [
      "Almacena la dirección de la siguiente instrucción",
      "Guarda el número de núcleos activos",
      "Incrementa la memoria física disponible"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es el propósito de los registros del procesador?",
    options: [
      "Almacenar datos temporales y direcciones",
      "Reducir el consumo energético",
      "Ampliar la capacidad del sistema"
    ],
    answer: 0
  },
  {
    question: "¿Qué unidad gestiona la ejecución secuencial de instrucciones?",
    options: [
      "Unidad de control",
      "Unidad gráfica",
      "Unidad lógica de red"
    ],
    answer: 0
  },
  {
    question: "¿Qué nombre recibe el conjunto de instrucciones que ejecuta el procesador?",
    options: [
      "ISA (Instruction Set Architecture)",
      "BIOS",
      "USB"
    ],
    answer: 0
  },
  {
    question: "¿Qué componente interconecta CPU, RAM, GPU y almacenamiento?",
    options: [
      "Placa base",
      "Fuente de alimentación",
      "Chasis"
    ],
    answer: 0
  },
  {
    question: "¿Qué mejora la técnica de 'pipelining' en una CPU?",
    options: [
      "Aumenta el rendimiento al superponer instrucciones",
      "Reduce el uso de RAM",
      "Aumenta el almacenamiento"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de memoria es más rápida pero más cara?",
    options: [
      "Cache",
      "RAM",
      "Disco SSD"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la diferencia entre la memoria principal y la caché?",
    options: [
      "La caché es más rápida y cercana al procesador",
      "La principal almacena datos de larga duración",
      "La caché sólo se usa para gráficos"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de bus transfiere instrucciones y datos?",
    options: [
      "Bus de sistema",
      "Bus de energía",
      "Bus óptico"
    ],
    answer: 0
  },
  {
    question: "¿Qué parte del sistema contiene el firmware de arranque?",
    options: [
      "BIOS/UEFI",
      "Disco SSD",
      "RAM"
    ],
    answer: 0
  },
  {
    question: "¿Qué componente convierte la corriente alterna en corriente continua?",
    options: [
      "Fuente de alimentación",
      "Procesador",
      "Chasis"
    ],
    answer: 0
  },
  {
    question: "¿Qué componente se comunica directamente con la ALU?",
    options: [
      "Unidad de control",
      "Memoria ROM",
      "Placa base"
    ],
    answer: 0
  },
  {
    question: "¿Qué tecnología permite ejecutar múltiples tareas a la vez en un CPU?",
    options: [
      "Multinúcleo (multicore)",
      "Overclocking",
      "Cooler Boost"
    ],
    answer: 0
  },
  {
    question: "¿Qué parte del procesador actúa como temporizador global?",
    options: [
      "Reloj del sistema",
      "Ventilador de CPU",
      "BIOS"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es el rol de los buses en la arquitectura del sistema?",
    options: [
      "Comunicar los distintos componentes internos",
      "Incrementar el almacenamiento",
      "Mostrar la salida por pantalla"
    ],
    answer: 0
  },
  {
    question: "¿Qué tipo de procesadores ejecutan varias instrucciones por ciclo de reloj?",
    options: [
      "Superescalares",
      "Secuenciales",
      "Lógicos"
    ],
    answer: 0
  },
  {
    question: "¿Qué mejora trae la memoria dual channel?",
    options: [
      "Duplica el ancho de banda entre CPU y RAM",
      "Reduce la latencia de caché",
      "Aumenta la vida útil del procesador"
    ],
    answer: 0
  },
  {
    question: "¿Qué registro contiene los resultados de la ALU?",
    options: [
      "Acumulador",
      "Stack Pointer",
      "Program Counter"
    ],
    answer: 0
  },
  {
    question: "¿Qué significa que un CPU tenga arquitectura de 64 bits?",
    options: [
      "Puede manejar registros de 64 bits",
      "Sólo funciona con sistemas Linux",
      "Tiene 64 procesadores internos"
    ],
    answer: 0
  }
];

const preguntasSistemasBloquesdecodigo = [
  {
    question: "¿Qué comando se usa para reiniciar un sistema en Linux?",
    options: [
      "shutdown -h now",
      "poweroff",
      "sudo reboot"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando muestra el uso de disco en Linux de forma legible?",
    options: [
      "df -h",
      "du -k",
      "lsblk"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando permite crear un nuevo usuario en Linux?",
    options: [
      "sudo mkuser nuevo_usuario",
      "user new nuevo_usuario",
      "sudo adduser nuevo_usuario"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando se utiliza para listar servicios en Linux con systemd?",
    options: [
      "systemctl list-units --type=service",
      "service --list",
      "services.sh"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando se usa para ver los últimos logs del sistema en Linux?",
    options: [
      "cat /var/log/syslog",
      "logshow -all",
      "journalctl -xe"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando configura manualmente una dirección IP en Linux?",
    options: [
      "ifconfig eth0 192.168.1.100",
      "netconfig set eth0",
      "ip addr add 192.168.1.100/24 dev eth0"
    ],
    answer: 2
  },
  {
    question: "¿Qué archivo de configuración gestiona las interfaces de red en Debian?",
    options: [
      "/network/config",
      "/etc/network/interfaces",
      "/etc/inet/interfaces"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando muestra los usuarios conectados actualmente?",
    options: [
      "userslist",
      "who",
      "logins"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando en Windows muestra información del sistema?",
    options: [
      "systeminfo",
      "wininfo",
      "msinfo"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando se usa para asignar permisos 755 a un archivo?",
    options: [
      "setperm archivo.sh 755",
      "chmod 755 archivo.sh",
      "perm archivo.sh 755"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando número 11 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto1_0 --fail",
      "comando_incorrecto2_0 --bad",
      "comando_correcto_0 --option"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando número 12 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto1_1 --fail",
      "comando_correcto_1 --option",
      "comando_incorrecto2_1 --bad"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando número 13 representa correctamente una instrucción del sistema?",
    options: [
      "comando_correcto_2 --option",
      "comando_incorrecto2_2 --bad",
      "comando_incorrecto1_2 --fail"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando número 14 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto2_3 --bad",
      "comando_incorrecto1_3 --fail",
      "comando_correcto_3 --option"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando número 15 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto1_4 --fail",
      "comando_correcto_4 --option",
      "comando_incorrecto2_4 --bad"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando número 16 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto1_5 --fail",
      "comando_incorrecto2_5 --bad",
      "comando_correcto_5 --option"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando número 17 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto1_6 --fail",
      "comando_correcto_6 --option",
      "comando_incorrecto2_6 --bad"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando número 18 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto2_7 --bad",
      "comando_incorrecto1_7 --fail",
      "comando_correcto_7 --option"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando número 19 representa correctamente una instrucción del sistema?",
    options: [
      "comando_correcto_8 --option",
      "comando_incorrecto1_8 --fail",
      "comando_incorrecto2_8 --bad"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando número 20 representa correctamente una instrucción del sistema?",
    options: [
      "comando_incorrecto1_9 --fail",
      "comando_incorrecto2_9 --bad",
      "comando_correcto_9 --option"
    ],
    answer: 2
  }
];



const preguntasCiberseguridadJunior = [
  { question: "¿Qué es un antivirus?", options: ["Un programa para proteger contra malware", "Un sistema operativo", "Un navegador web"], answer: 0 },
  { question: "¿Qué significa HTTPS?", options: ["Protocolo seguro para transferir datos en la web", "Un tipo de red inalámbrica", "Un lenguaje de programación"], answer: 0 },
  { question: "¿Qué es un firewall?", options: ["Un sistema de seguridad que filtra el tráfico de red", "Un tipo de malware", "Un proveedor de internet"], answer: 0 },
  { question: "¿Qué es el phishing?", options: ["Un intento de robar información engañando al usuario", "Un ataque físico al hardware", "Una técnica para acelerar redes"], answer: 0 },
  { question: "¿Qué es una contraseña segura?", options: ["Una contraseña larga y compleja", "Tu fecha de nacimiento", "123456"], answer: 0 },
  { question: "¿Qué acción ayuda a proteger tus cuentas en línea?", options: ["Activar la autenticación en dos pasos", "Usar la misma contraseña en todos los sitios", "Desactivar el antivirus"], answer: 0 },
  { question: "¿Qué hace un software espía (spyware)?", options: ["Roba información personal sin permiso", "Mejora el rendimiento de tu PC", "Es una app legal"], answer: 0 },
  { question: "¿Qué es el malware?", options: ["Un software malicioso", "Una actualización del sistema", "Un antivirus"], answer: 0 },
  { question: "¿Qué hace un troyano?", options: ["Se oculta en archivos legítimos para dañar el sistema", "Encripta datos y pide rescate", "Optimiza la RAM"], answer: 0 },
  { question: "¿Qué es una VPN?", options: ["Una red privada virtual que cifra tu conexión", "Un servidor público de correos", "Un tipo de software de edición"], answer: 0 },
  { question: "¿Qué debe evitarse al crear contraseñas?", options: ["Palabras comunes", "Mayúsculas y símbolos", "Frases largas"], answer: 0 },
  { question: "¿Qué es el spam?", options: ["Correo basura no deseado", "Software de seguridad", "Servicio de streaming"], answer: 0 },
  { question: "¿Qué indica un candado en la barra de direcciones del navegador?", options: ["Conexión segura HTTPS", "Antivirus activado", "Página de pago"], answer: 0 },
  { question: "¿Qué NO es una buena práctica de ciberseguridad?", options: ["Compartir contraseñas por email", "Cambiar contraseñas regularmente", "Actualizar el sistema"], answer: 0 },
  { question: "¿Qué es un ataque de fuerza bruta?", options: ["Probar muchas contraseñas posibles", "Sobrecargar una red", "Eliminar archivos"], answer: 0 },
  { question: "¿Qué es el ransomware?", options: ["Un malware que bloquea archivos y pide rescate", "Un software de backup", "Un programa de antivirus"], answer: 0 },
  { question: "¿Qué significa mantener el software actualizado?", options: ["Tener los últimos parches de seguridad", "Eliminarlo regularmente", "Desactivarlo para ahorrar batería"], answer: 0 },
  { question: "¿Qué es un keylogger?", options: ["Software que registra teclas presionadas", "Un tipo de firewall", "Una extensión del navegador"], answer: 0 },
  { question: "¿Cuál es una señal de posible ataque de phishing?", options: ["Correos urgentes con enlaces sospechosos", "Notificaciones de tu antivirus", "Mensajes de bienvenida"], answer: 0 },
  { question: "¿Cuál es una forma segura de navegar por internet?", options: ["No hacer clic en enlaces sospechosos", "Desactivar antivirus", "Usar Wi-Fi público sin protección"], answer: 0 },
  { question: "¿Qué tipo de archivos deben abrirse con precaución?", options: ["Archivos ejecutables desconocidos", "Imágenes JPG", "PDF de confianza"], answer: 0 },
  { question: "¿Qué dispositivo puede contener virus?", options: ["Un pendrive", "Un monitor", "Un teclado"], answer: 0 },
  { question: "¿Qué puede protegerte del malware?", options: ["Antivirus actualizado", "Desactivar alertas", "No usar contraseñas"], answer: 0 },
  { question: "¿Qué debe hacerse al recibir un correo sospechoso?", options: ["No abrirlo ni hacer clic en sus enlaces", "Responderlo", "Descargar adjuntos"], answer: 0 },
  { question: "¿Qué es ingeniería social?", options: ["Manipular personas para obtener información", "Instalar programas legales", "Cambiar configuraciones"], answer: 0 },
  { question: "¿Qué es una amenaza cibernética?", options: ["Un riesgo de ataque digital", "Una mejora del sistema", "Un antivirus"], answer: 0 },
  { question: "¿Qué se recomienda hacer con las contraseñas?", options: ["No compartirlas y cambiarlas frecuentemente", "Escribirlas en papel visible", "Usar la misma para todo"], answer: 0 },
  { question: "¿Qué evita una política de contraseñas fuertes?", options: ["Acceso no autorizado", "Más velocidad", "Actualizaciones automáticas"], answer: 0 },
  { question: "¿Qué peligro tiene usar redes Wi-Fi públicas sin protección?", options: ["Riesgo de interceptación de datos", "Ninguno si es gratis", "Menor velocidad"], answer: 0 },
  { question: "¿Qué aplicación ayuda a gestionar contraseñas?", options: ["Un gestor de contraseñas", "Spotify", "Excel"], answer: 0 },
  { question: "¿Cuál es una señal de que tu equipo puede estar infectado?", options: ["Funciona muy lento sin razón", "Tiene una batería nueva", "No tiene fondo de pantalla"], answer: 0 },
  { question: "¿Qué se debe hacer si pierdes tu dispositivo móvil?", options: ["Bloquearlo o rastrearlo con apps de seguridad", "Esperar unos días", "Ignorarlo"], answer: 0 },
  { question: "¿Cuál de estos NO es un buen lugar para guardar contraseñas?", options: ["Post-it en la pantalla", "Gestor de contraseñas", "Aplicación segura"], answer: 0 },
  { question: "¿Qué es el auto-relleno de contraseñas?", options: ["Función que recuerda tus contraseñas", "Virus que cambia tu contraseña", "Antivirus web"], answer: 0 },
  { question: "¿Por qué se debe cerrar sesión en sitios públicos?", options: ["Para evitar que otros accedan a tu cuenta", "Para ahorrar datos", "Para reiniciar el navegador"], answer: 0 },
  { question: "¿Qué es una copia de seguridad?", options: ["Una copia de tus datos por seguridad", "Un virus duplicado", "Un antivirus"], answer: 0 },
  { question: "¿Qué significa 2FA?", options: ["Autenticación en dos factores", "Doble archivo seguro", "Acceso físico avanzado"], answer: 0 },
  { question: "¿Qué debe evitarse al responder correos desconocidos?", options: ["Hacer clic en enlaces adjuntos", "Leer el mensaje", "Marcar como leído"], answer: 0 },
  { question: "¿Qué es una red segura?", options: ["Una red con contraseña y cifrado", "Una red abierta", "Wi-Fi pública de un café"], answer: 0 },
  { question: "¿Qué es un código CAPTCHA?", options: ["Una medida para evitar robots", "Un tipo de virus", "Una app de chat"], answer: 0 },
  { question: "¿Qué indica un correo fraudulento?", options: ["Errores gramaticales y urgencia excesiva", "Diseño moderno", "Firmado por tu jefe"], answer: 0 },
  { question: "¿Qué es importante revisar en un sitio web?", options: ["La URL y el candado de seguridad", "El color del fondo", "La velocidad del sitio"], answer: 0 },
  { question: "¿Qué es el modo incógnito del navegador?", options: ["Modo que no guarda historial ni cookies", "Modo seguro de antivirus", "Navegación protegida por firewall"], answer: 0 },
  { question: "¿Qué hacer si recibes un mensaje sospechoso por WhatsApp?", options: ["No hacer clic y reportarlo", "Compartirlo con tus amigos", "Responder al remitente"], answer: 0 },
  { question: "¿Qué permite un gestor de contraseñas?", options: ["Guardar contraseñas seguras y únicas", "Navegar más rápido", "Evitar anuncios"], answer: 0 },
  { question: "¿Qué acción es útil para proteger tus redes sociales?", options: ["Activar alertas de acceso", "Publicar tus claves", "Compartir tu ubicación"], answer: 0 },
  { question: "¿Qué es una actualización de seguridad?", options: ["Parche que corrige vulnerabilidades", "Nuevo diseño del sistema", "Aplicación para redes"], answer: 0 },
  { question: "¿Qué tipo de archivo puede ocultar virus?", options: [".exe", ".docx", ".png"], answer: 0 },
  { question: "¿Por qué no se deben usar redes Wi-Fi abiertas?", options: ["Son inseguras y permiten interceptar datos", "Tienen poca señal", "Son lentas"], answer: 0 },
  { question: "¿Qué es suplantación de identidad?", options: ["Hacerse pasar por otra persona", "Usar doble antivirus", "Tener dos cuentas"], answer: 0 },
  { question: "¿Cuál es una forma de reconocer apps seguras?", options: ["Descargar desde tiendas oficiales", "Pedirlas por WhatsApp", "Usar versiones piratas"], answer: 0 },
  { question: "¿Qué es el correo basura (spam)?", options: ["Mensajes no solicitados y repetitivos", "Correos del trabajo", "Respuestas automáticas"], answer: 0 },
  { question: "¿Qué debes hacer antes de usar una app nueva?", options: ["Revisar sus permisos", "Instalarla sin leer nada", "Darle todos los accesos"], answer: 0 },
  { question: "¿Qué tipo de contraseña es más débil?", options: ["123456", "MiGato$2023", "x!K7@hR8"], answer: 0 },
  { question: "¿Cuál es un riesgo de no actualizar tu sistema?", options: ["Quedas expuesto a vulnerabilidades", "No tienes emojis nuevos", "No puedes ver videos"], answer: 0 },
  { question: "¿Qué hacer si una app pide muchos permisos?", options: ["Evaluar si realmente los necesita", "Conceder todos sin pensar", "Desinstalar todas las apps"], answer: 0 },
  { question: "¿Qué debes hacer con archivos de fuentes desconocidas?", options: ["Escanearlos antes de abrirlos", "Compartirlos por redes", "Abrirlos directamente"], answer: 0 },
  { question: "¿Qué tipo de conexión es más segura?", options: ["Cifrada con contraseña", "Wi-Fi abierta", "Datos móviles sin clave"], answer: 0 },
  { question: "¿Qué se debe hacer al usar ordenadores públicos?", options: ["No guardar contraseñas y cerrar sesión", "Actualizar el antivirus", "Reiniciar la máquina"], answer: 0 },
  { question: "¿Cuál es una técnica usada para el robo de identidad?", options: ["Phishing", "Zipping", "Pixelado"], answer: 0 }
];



const preguntasCiberseguridadSenior = [
  { question: "¿Qué es un ataque Man-in-the-Middle?", options: ["Interceptar comunicación entre dos partes sin que lo sepan", "Una sobrecarga de servidores", "Acceso físico a dispositivos"], answer: 0 },
  { question: "¿Qué es un certificado SSL?", options: ["Un archivo que cifra la comunicación web", "Una licencia de software", "Un protocolo de red"], answer: 0 },
  { question: "¿Qué es un exploit?", options: ["Una vulnerabilidad utilizada por atacantes", "Un backup cifrado", "Un método de validación"], answer: 0 },
  { question: "¿Qué es una política de seguridad?", options: ["Conjunto de reglas para proteger sistemas y datos", "Un antivirus gratuito", "Una VPN pública"], answer: 0 },
  { question: "¿Qué hace un IDS?", options: ["Monitorea y detecta accesos no autorizados", "Destruye malware", "Reemplaza cortafuegos"], answer: 0 },
  { question: "¿Qué es una zona DMZ?", options: ["Una subred separada para exponer servicios sin comprometer la red interna", "Red sin internet", "Una VPN cifrada"], answer: 0 },
  { question: "¿Qué es la criptografía asimétrica?", options: ["Usa clave pública y privada para cifrar y descifrar", "Cifrado con contraseña única", "Compresión de archivos"], answer: 0 },
  { question: "¿Qué protocolo se usa para correo electrónico seguro?", options: ["SMTPS", "FTP", "POP sin cifrado"], answer: 0 },
  { question: "¿Qué representa el hash en seguridad?", options: ["Un resumen único e irrepetible de datos", "Un error del sistema", "Un valor temporal"], answer: 0 },
  { question: "¿Qué tipo de ataque es un DDoS?", options: ["Ataque que satura un servidor con múltiples peticiones", "Ataque por phishing", "Acceso físico"], answer: 0 },
  { question: "¿Qué es un sandbox?", options: ["Entorno aislado para ejecutar software sospechoso", "Sistema operativo", "Servidor virtual"], answer: 0 },
  { question: "¿Qué es un pentest?", options: ["Evaluación de seguridad simulando un ataque", "Creación de backups", "Instalación de antivirus"], answer: 0 },
  { question: "¿Qué es un honeypot?", options: ["Sistema trampa para detectar atacantes", "Firewall avanzado", "Router seguro"], answer: 0 },
  { question: "¿Qué es la autenticación multifactor?", options: ["Requiere varios métodos de verificación", "Usar un solo PIN", "Acceso sin validación"], answer: 0 },
  { question: "¿Qué herramienta permite analizar tráfico de red?", options: ["Wireshark", "Notepad++", "Photoshop"], answer: 0 },
  { question: "¿Qué es el hardening del sistema?", options: ["Fortalecer la configuración del sistema", "Instalar apps pesadas", "Eliminar logs"], answer: 0 },
  { question: "¿Qué riesgo tiene un puerto abierto sin uso?", options: ["Puede ser explotado por atacantes", "Acelera la red", "Reduce el ping"], answer: 0 },
  { question: "¿Qué se evalúa en una auditoría de seguridad?", options: ["Vulnerabilidades, cumplimiento y configuración segura", "Color de la pantalla", "Calidad de la imagen"], answer: 0 },
  { question: "¿Qué indica CVE?", options: ["Identificador de vulnerabilidad conocida", "Clave de seguridad", "Versión de sistema"], answer: 0 },
  { question: "¿Qué es la escalada de privilegios?", options: ["Obtener acceso superior al autorizado", "Subida de archivos", "Actualización de antivirus"], answer: 0 },
  { question: "¿Qué diferencia hay entre IDS y IPS?", options: ["IDS detecta, IPS detecta y bloquea", "IDS es local y IPS remoto", "Ninguna"], answer: 0 },
  { question: "¿Qué es spoofing?", options: ["Falsificación de identidad digital", "Reinicio forzado del sistema", "Encriptación avanzada"], answer: 0 },
  { question: "¿Qué representa el principio de menor privilegio?", options: ["Dar acceso mínimo necesario a usuarios", "Dar acceso completo por defecto", "Solo acceso administrador"], answer: 0 },
  { question: "¿Qué tipo de análisis busca vulnerabilidades automáticamente?", options: ["Escaneo automatizado de seguridad", "Prueba de conectividad", "Ping de red"], answer: 0 },
  { question: "¿Qué herramienta evalúa políticas de grupo en Windows?", options: ["gpresult / rsop", "ping", "tracert"], answer: 0 },
  { question: "¿Qué es la seguridad en capas?", options: ["Aplicar múltiples controles en diferentes niveles", "Un solo firewall", "Acceso libre"], answer: 0 },
  { question: "¿Qué es un drive-by download?", options: ["Descarga automática de malware sin interacción", "Descarga por Wi-Fi", "Actualización manual"], answer: 0 },
  { question: "¿Qué diferencia hay entre cifrado y hashing?", options: ["El cifrado se puede revertir, el hash no", "El hash es más seguro", "El hash reemplaza al cifrado"], answer: 0 },
  { question: "¿Qué hace un SIEM?", options: ["Centraliza y analiza eventos de seguridad", "Actualiza contraseñas", "Envía backups"], answer: 0 },
  { question: "¿Qué protocolo es más seguro para autenticación?", options: ["Kerberos", "FTP", "POP"], answer: 0 },
  { question: "¿Qué es OWASP?", options: ["Proyecto para mejorar la seguridad en aplicaciones web", "Un antivirus", "Una herramienta de análisis"], answer: 0 },
  { question: "¿Qué es un zero-day?", options: ["Vulnerabilidad desconocida por el proveedor", "Ataque DDoS coordinado", "Troyano oculto en la BIOS"], answer: 0 },
  { question: "¿Qué es el protocolo TLS?", options: ["Protocolo de seguridad para cifrado en internet", "Un tipo de firewall", "Una red interna"], answer: 0 },
  { question: "¿Qué es sniffing?", options: ["Captura del tráfico de red para análisis o ataque", "Configuración de puertos", "Actualización de BIOS"], answer: 0 },
  { question: "¿Qué representa un CVSS alto?", options: ["Vulnerabilidad crítica", "Bajo rendimiento", "Nivel de cifrado fuerte"], answer: 0 },
  { question: "¿Qué es una botnet?", options: ["Red de dispositivos infectados controlados remotamente", "Antivirus distribuido", "Red de respaldo"], answer: 0 },
  { question: "¿Qué es una fuga de datos?", options: ["Divulgación no autorizada de información confidencial", "Pérdida de hardware", "Cierre forzado del sistema"], answer: 0 },
  { question: "¿Qué es el principio de defensa en profundidad?", options: ["Uso de múltiples capas de seguridad", "Revisión de redes públicas", "Escaneo periódico de discos"], answer: 0 },
  { question: "¿Qué tipo de malware cifra tus archivos?", options: ["Ransomware", "Spyware", "Adware"], answer: 0 },
  { question: "¿Qué es una backdoor?", options: ["Acceso oculto que omite controles normales", "Sistema de logs", "Navegador anónimo"], answer: 0 },
  { question: "¿Qué herramienta sirve para auditorías web?", options: ["Burp Suite", "Excel", "Photoshop"], answer: 0 },
  { question: "¿Qué es el cifrado de extremo a extremo?", options: ["Protección de datos entre emisor y receptor", "Firewall doble", "Backups automáticos"], answer: 0 },
  { question: "¿Qué es un ataque de ingeniería inversa?", options: ["Analizar un software para encontrar vulnerabilidades", "Eliminar registros", "Duplicar aplicaciones"], answer: 0 },
  { question: "¿Qué es un certificado autofirmado?", options: ["Emitido por la misma entidad que lo usa", "Emitido por una CA válida", "Licencia para JavaScript"], answer: 0 },
  { question: "¿Qué es el hashing salteado (salting)?", options: ["Agregar datos aleatorios al hash para mayor seguridad", "Eliminar claves", "Desactivar validaciones"], answer: 0 },
  { question: "¿Qué tipo de autenticación es más robusta?", options: ["Biométrica con MFA", "PIN simple", "Contraseña sin cifrar"], answer: 0 },
  { question: "¿Qué tipo de seguridad protege los datos en tránsito?", options: ["Cifrado TLS/SSL", "Backups", "Antivirus local"], answer: 0 },
  { question: "¿Qué es el control de acceso basado en roles (RBAC)?", options: ["Permitir accesos según el rol del usuario", "Acceso abierto", "Permisos totales por defecto"], answer: 0 },
  { question: "¿Qué es la autenticación basada en certificados?", options: ["Validación mediante claves digitales emitidas por CA", "Login social", "Contraseña dinámica"], answer: 0 },
  { question: "¿Qué es un archivo .pcap?", options: ["Captura de tráfico de red", "Backup comprimido", "Instalador de parches"], answer: 0 },
  { question: "¿Qué define el modelo CIA?", options: ["Confidencialidad, Integridad, Disponibilidad", "Código, Integración, Ataque", "Centro de Inteligencia Artificial"], answer: 0 },
  { question: "¿Qué técnica puede evitar ataques de inyección SQL?", options: ["Validación de entradas y consultas preparadas", "Mayor ancho de banda", "Desactivar JavaScript"], answer: 0 },
  { question: "¿Qué ataque modifica la caché DNS?", options: ["DNS Spoofing", "ARP Flooding", "Wi-Fi sniffing"], answer: 0 },
  { question: "¿Qué protocolo cifra el correo en tránsito?", options: ["STARTTLS", "SMTP simple", "ICMP"], answer: 0 },
  { question: "¿Qué tipo de amenaza aprovecha dispositivos IoT?", options: ["Botnets y malware remoto", "Ataques físicos", "Errores de codificación"], answer: 0 },
  { question: "¿Qué significa parchear un sistema?", options: ["Aplicar actualizaciones para corregir fallos de seguridad", "Reiniciarlo", "Cambiar su idioma"], answer: 0 },
  { question: "¿Qué es el tiempo de exposición (exposure window)?", options: ["Periodo en el que una vulnerabilidad puede ser explotada", "Tiempo que dura el antivirus", "Latencia de red"], answer: 0 },
  { question: "¿Qué es una política de retención de datos?", options: ["Norma sobre cuánto y cómo conservar la información", "Uso compartido", "Compresión forzada"], answer: 0 },
  { question: "¿Qué es un ataque Cross-Site Scripting (XSS)?", options: ["Inyección de scripts maliciosos en una web", "Ataque a routers", "Error de disco"], answer: 0 },
  { question: "¿Qué tecnología permite identificar dispositivos por red inalámbrica?", options: ["MAC Address", "DNS cache", "HTTPS fingerprint"], answer: 0 }
];

const preguntasCiberseguridadBloquesdecodigo = [
  {
    question: "¿Qué comando escanea puertos abiertos en una IP?",
    options: [
      "ping 192.168.1.1",
      "nmap 192.168.1.1",
      "netstat -an"
    ],
    answer: 1
  },
  {
    question: "¿Qué comando lista reglas de iptables?",
    options: [
      "iptables --list",
      "iptables -L",
      "show iptables rules"
    ],
    answer: 1
  },
  {
    question: "¿Qué instrucción cifra un archivo con GPG?",
    options: [
      "gpg --encrypt archivo.txt",
      "gpg archivo.txt --cifrar",
      "encrypt archivo.txt"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando verifica integridad de un archivo con SHA256?",
    options: [
      "md5sum archivo.txt",
      "sha256sum archivo.txt",
      "checkfile archivo.txt"
    ],
    answer: 1
  },
  {
    question: "¿Qué línea activa el firewall UFW?",
    options: [
      "sudo ufw enable",
      "firewall activate",
      "ufw start"
    ],
    answer: 0
  },
  {
    question: "¿Qué opción en curl permite simular una cabecera personalizada?",
    options: [
      "curl --header 'X-Test: valor'",
      "curl --user-agent 'fake'",
      "curl --custom-header"
    ],
    answer: 0
  },
  {
    question: "¿Qué herramienta se usa para capturar paquetes en red?",
    options: [
      "wireshark",
      "netcap",
      "tcpdump"
    ],
    answer: 2
  },
  {
    question: "¿Qué comando busca contraseñas débiles en servidores SSH?",
    options: [
      "ssh-audit",
      "hydra -l root -P pass.txt ssh://192.168.1.10",
      "netdiscover"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es el formato correcto para escanear todos los puertos con nmap?",
    options: [
      "nmap -p- 192.168.0.1",
      "nmap --full 192.168.0.1",
      "nmap 192.168.0.1 all"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción bloquea una IP en UFW?",
    options: [
      "ufw deny from 192.168.1.10",
      "ufw block 192.168.1.10",
      "iptables -block 192.168.1.10"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se cifra un archivo con OpenSSL AES-256?",
    options: [
      "openssl enc -aes-256-cbc -in archivo.txt -out archivo.enc",
      "openssl --crypt archivo.txt",
      "encrypt -aes archivo.txt"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando muestra conexiones activas en el sistema?",
    options: [
      "ss -tuln",
      "ps aux",
      "who"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este comando?: chmod 600 archivo.key",
    options: [
      "Otorga acceso total",
      "Permite lectura solo al propietario",
      "Hace el archivo ejecutable"
    ],
    answer: 1
  },
  {
    question: "¿Qué herramienta permite escanear vulnerabilidades web?",
    options: [
      "Nikto",
      "netstat",
      "nmap"
    ],
    answer: 0
  },
  {
    question: "¿Qué opción del comando find busca archivos con permisos peligrosos?",
    options: [
      "find / -perm -4000",
      "find / -perm 777",
      "find -type s"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando borra archivos de forma segura?",
    options: [
      "rm -rf",
      "shred -u archivo.txt",
      "delete archivo.txt"
    ],
    answer: 1
  },
  {
    question: "¿Qué script en Linux detecta rootkits?",
    options: [
      "chkrootkit",
      "firewalld",
      "logwatch"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando establece contraseña para zip?",
    options: [
      "zip -e archivo.zip archivo.txt",
      "zip archivo.txt -protect",
      "compress -secure"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando muestra intentos de inicio de sesión fallidos?",
    options: [
      "cat /var/log/auth.log",
      "lastlog --failed",
      "sshd --errors"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este comando?: chattr +i archivo.txt",
    options: [
      "Hace el archivo inmutable",
      "Oculta el archivo",
      "Borra metadatos"
    ],
    answer: 0
  },
  {
    question: "¿Qué significa este comando?: ssh-keygen -t rsa",
    options: [
      "Genera claves RSA",
      "Cifra un archivo",
      "Borra claves SSH"
    ],
    answer: 0
  },
  {
    question: "¿Qué opción de fail2ban revisa reglas activas?",
    options: [
      "fail2ban-client status",
      "fail2ban show",
      "iptables-fail2ban"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción muestra usuarios con privilegios root?",
    options: [
      "grep '^sudo' /etc/group",
      "whoami root",
      "cat /etc/sudoers"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este comando?: netstat -an | grep 22",
    options: [
      "Muestra conexiones SSH",
      "Muestra usuarios activos",
      "Desactiva el puerto 22"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este comando?: openssl rand -base64 16",
    options: [
      "Genera contraseña aleatoria",
      "Descifra clave AES",
      "Genera una llave SSH"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción cierra un puerto en iptables?",
    options: [
      "iptables -A INPUT -p tcp --dport 80 -j DROP",
      "ufw disable 80",
      "block port 80"
    ],
    answer: 0
  },
  {
    question: "¿Qué herramienta analiza malware en archivos?",
    options: [
      "ClamAV",
      "nmap",
      "Wireshark"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando realiza hashing con SHA512?",
    options: [
      "sha512sum archivo.txt",
      "hashgen archivo.txt",
      "openssl sum archivo.txt"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este comando?: sudo passwd -l usuario",
    options: [
      "Bloquea una cuenta",
      "Cambia el shell por defecto",
      "Cifra contraseña"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando audita el sistema en busca de vulnerabilidades?",
    options: [
      "lynis audit system",
      "chkconfig scan",
      "systemctl check"
    ],
    answer: 0
  },
  {
    question: "¿Qué herramienta permite escaneo de subdominios?",
    options: [
      "sublist3r",
      "tcpdump",
      "hashcat"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este script?: sudo ufw allow 443",
    options: [
      "Abre puerto HTTPS",
      "Bloquea tráfico UDP",
      "Desactiva firewall"
    ],
    answer: 0
  },
  {
    question: "¿Qué indica el comando sudo visudo?",
    options: [
      "Edita archivo de sudoers",
      "Muestra usuarios activos",
      "Crea reglas de firewall"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este comando?: grep 'invalid' /var/log/auth.log",
    options: [
      "Busca inicios inválidos",
      "Resetea logs",
      "Cifra archivos"
    ],
    answer: 0
  },
  {
    question: "¿Qué herramienta permite romper contraseñas con fuerza bruta?",
    options: [
      "hydra",
      "nmap",
      "sshpass"
    ],
    answer: 0
  },
  {
    question: "¿Qué indica esta línea?: chmod 700 .ssh",
    options: [
      "Permite solo al propietario usar el directorio SSH",
      "Hace visible el archivo",
      "Cifra las conexiones SSH"
    ],
    answer: 0
  },
  {
    question: "¿Qué comando exporta una clave pública SSH?",
    options: [
      "cat ~/.ssh/id_rsa.pub",
      "showkey ssh",
      "openssl keygen"
    ],
    answer: 0
  },
  {
    question: "¿Qué hace este comando?: sudo ufw default deny incoming",
    options: [
      "Bloquea todo el tráfico entrante por defecto",
      "Permite todo el tráfico saliente",
      "Activa el modo oculto"
    ],
    answer: 0
  }
];
const preguntasKotlinJunior = [
  {
    question: "¿Cómo se declara una variable inmutable en Kotlin?",
    options: [
      "val nombre = \"Juan\"",
      "var nombre = \"Juan\"",
      "const nombre = \"Juan\""
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para definir una variable mutable?",
    options: [
      "mutable",
      "var",
      "val"
    ],
    answer: 1
  },
  {
    question: "¿Cómo se define una función simple en Kotlin?",
    options: [
      "function suma(a: Int, b: Int): Int { return a+b }",
      "fun suma(a: Int, b: Int): Int { return a+b }",
      "def suma(a: Int, b: Int): Int { return a+b }"
    ],
    answer: 1
  },
  {
    question: "¿Qué estructura de control se usa para condicionales en Kotlin?",
    options: [
      "when",
      "switch",
      "case"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define una cadena multilínea en Kotlin?",
    options: [
      "'''Texto'''",
      "\"\"\"Texto\"\"\"",
      "<<<Texto>>>"
    ],
    answer: 1
  },
  
{
    question: "¿Cómo se declara una variable inmutable en Kotlin?",
    options: ["var nombre = \"Juan\"", "val nombre = \"Juan\"", "let nombre = \"Juan\""],
    answer: 1
  },
  {
    question: "¿Qué palabra clave se usa para una variable mutable?",
    options: ["var", "val", "const"],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato se usa para números enteros en Kotlin?",
    options: ["Int", "Integer", "Number"],
    answer: 0
  },
  {
    question: "¿Qué instrucción imprime en consola en Kotlin?",
    options: ["print()", "console.log()", "println()"],
    answer: 2
  },
  {
    question: "¿Cómo se define una función en Kotlin?",
    options: ["fun suma(a: Int, b: Int): Int { return a+b }", "function suma(a, b) { return a+b }", "def suma(a, b): Int = a+b"],
    answer: 0
  },
  {
    question: "¿Qué operador se usa para la concatenación de cadenas?",
    options: ["+", "&", "."],
    answer: 0
  },
  {
    question: "¿Cómo se declara un valor nulo en Kotlin?",
    options: ["val nombre: String? = null", "val nombre: String = Null", "var nombre = none"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para crear un array?",
    options: ["ArrayOf()", "array()", "list()"],
    answer: 0
  },
  {
    question: "¿Cómo se escribe un bucle while en Kotlin?",
    options: ["while(x < 10) { println(x) }", "loop(x<10) { println(x) }", "repeat(x<10) { println(x) }"],
    answer: 0
  },
  {
    question: "¿Cómo se define un comentario de una línea en Kotlin?",
    options: ["<!-- comentario -->", "// comentario", "# comentario"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave se usa para devolver un valor en una función?",
    options: ["return", "yield", "break"],
    answer: 0
  },
  {
    question: "¿Qué estructura reemplaza a switch en Kotlin?",
    options: ["case", "when", "choose"],
    answer: 1
  },
  {
    question: "¿Qué símbolo se usa para la interpolación de variables en cadenas?",
    options: ["$", "&", "%"],
    answer: 0
  },
  {
    question: "¿Cuál es el tipo de dato para valores lógicos?",
    options: ["bool", "Boolean", "logic"],
    answer: 1
  },
  {
    question: "¿Qué operador lógico representa la conjunción (AND)?",
    options: ["&&", "AND", "||"],
    answer: 0
  },
  {
    question: "¿Qué palabra se usa para declarar una constante en tiempo de compilación?",
    options: ["val", "const val", "final"],
    answer: 1
  },
  {
    question: "¿Cómo se obtiene la longitud de una cadena?",
    options: ["cadena.size", "cadena.length", "cadena.count()"],
    answer: 1
  },
  {
    question: "¿Cómo se define un rango del 1 al 5?",
    options: ["1 to 5", "1..5", "[1-5]"],
    answer: 1
  },
  {
    question: "¿Qué función convierte un String en Int?",
    options: ["parseInt()", "toInt()", "Int.parse()"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave se usa para declarar una lista inmutable?",
    options: ["arrayOf()", "listOf()", "setOf()"],
    answer: 1
  },
  
  {
    question: "¿Cómo declaras una variable mutable en Kotlin?",
    options: ["let x = 10", "var x = 10", "const x = 10"],
    answer: 1
  },
  {
    question: "¿Cómo declaras una constante en Kotlin?",
    options: ["val PI = 3.14", "const x = 5.0", "def pi = 3.14"],
    answer: 0
  },
  {
    question: "¿Qué tipo de dato es usado para números decimales?",
    options: ["Int", "Double", "Char"],
    answer: 1
  },
  {
    question: "¿Cuál es el tipo de dato correcto para un carácter?",
    options: ["Char", "Character", "String"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para definir una función?",
    options: ["func", "function", "fun"],
    answer: 2
  },
  {
    question: "¿Qué imprime `println(5/2)` en Kotlin?",
    options: ["2.5", "2", "2.0"],
    answer: 1
  },
  {
    question: "¿Qué imprime `println(5/2.0)` en Kotlin?",
    options: ["2.0", "2.5", "2"],
    answer: 1
  },
  {
    question: "¿Qué estructura de control reemplaza a switch?",
    options: ["when", "select", "case"],
    answer: 0
  },
  {
    question: "¿Qué símbolo se usa para interpolar variables en cadenas?",
    options: ["@", "$", "%"],
    answer: 1
  },
  {
    question: "¿Cómo defines un bucle que se repite 5 veces?",
    options: ["repeat(5) { println(it) }", "loop(5) { println(it) }", "for(0..5) { println(it) }"],
    answer: 0
  },
  {
    question: "¿Cómo defines un rango de 1 a 10?",
    options: ["1 to 10", "1..10", "[1,10]"],
    answer: 1
  },
  {
    question: "¿Qué función convierte un String en Int?",
    options: ["Integer.parse()", "toInt()", "parseInt()"],
    answer: 1
  },
  {
    question: "¿Qué función obtiene el tamaño de un arreglo?",
    options: ["length", "size", "count"],
    answer: 1
  },
  {
    question: "¿Cómo defines una lista inmutable?",
    options: ["arrayOf(1,2,3)", "listOf(1,2,3)", "mutableListOf(1,2,3)"],
    answer: 1
  },
  {
    question: "¿Cómo defines una lista mutable?",
    options: ["mutableListOf(1,2,3)", "list(1,2,3)", "array(1,2,3)"],
    answer: 0
  },
  {
    question: "¿Cuál es el operador lógico para OR?",
    options: ["OR", "||", "&&"],
    answer: 1
  },
  {
    question: "¿Qué operador lógico representa NOT?",
    options: ["!", "NOT", "~"],
    answer: 0
  },
  {
    question: "¿Qué significa el operador `?:`?",
    options: ["Operador nulo seguro", "Operador Elvis", "Operador ternario"],
    answer: 1
  },
  {
    question: "¿Qué palabra se usa para declarar una variable que puede ser null?",
    options: ["val x: Int = null", "var x: Int? = null", "let x = Null"],
    answer: 1
  },
  {
    question: "¿Cómo defines un bucle while?",
    options: ["while(x<10) { println(x) }", "loop(x<10) { println(x) }", "for(x<10) { println(x) }"],
    answer: 0
  },
  {
    question: "¿Qué función recorre cada elemento de una lista?",
    options: ["map", "each", "forEach"],
    answer: 2
  },
  {
    question: "¿Cómo defines un arreglo de enteros?",
    options: ["Array<Int>(5)", "IntArray(5)", "arrayOf(1,2,3)"],
    answer: 1
  },
  {
    question: "¿Cómo defines un condicional if?",
    options: ["if(x>5) { println(x) }", "when(x>5) { println(x) }", "if x>5 then println(x)"],
    answer: 0
  },
  {
    question: "¿Cómo se compara igualdad estructural?",
    options: ["==", "===", "equals()"],
    answer: 0
  },
  {
    question: "¿Cómo se compara igualdad referencial?",
    options: ["==", "===", "equals()"],
    answer: 1
  },
  {
    question: "¿Cómo se declara un Set inmutable?",
    options: ["setOf(1,2,3)", "immutableSet(1,2,3)", "const set(1,2,3)"],
    answer: 0
  },
  {
    question: "¿Cómo defines un Map en Kotlin?",
    options: ["mapOf(1 to \"uno\", 2 to \"dos\")", "dictionary(1: \"uno\")", "Map(1 -> uno)"],
    answer: 0
  },
  {
    question: "¿Qué imprime `println(\"Hola\".length)`?",
    options: ["4", "5", "error"],
    answer: 1
  },
  {
    question: "¿Qué función transforma cada elemento de una lista?",
    options: ["forEach", "map", "filter"],
    answer: 1
  },
  {
    question: "¿Qué función filtra elementos de una lista?",
    options: ["map", "filter", "select"],
    answer: 1
  },
  {
    question: "¿Cómo defines una función de una sola expresión?",
    options: ["fun suma(a: Int, b: Int) = a+b", "function suma(a,b) return a+b", "def suma(a,b) => a+b"],
    answer: 0
  },
  {
    question: "¿Cómo defines un String multilínea?",
    options: ["\"texto\"", "'''texto'''", "\"\"\"texto\"\"\""],
    answer: 2
  },
  {
    question: "¿Qué significa `!!` en Kotlin?",
    options: ["Asegura que un valor no es nulo", "Convierte null en 0", "Ignora errores"],
    answer: 0
  },
  {
    question: "¿Cómo defines un valor lazy?",
    options: ["val x = lazy { 10 }", "val x by lazy { 10 }", "lazy var x = 10"],
    answer: 1
  },
  {
    question: "¿Qué palabra define una clase simple?",
    options: ["object Persona {}", "class Persona {}", "data Persona {}"],
    answer: 1
  },
  {
    question: "¿Cómo defines un constructor primario?",
    options: ["class Persona(val nombre: String)", "Persona(nombre: String)", "constructor class Persona(nombre)"],
    answer: 0
  },
  {
    question: "¿Cómo defines un objeto único (singleton)?",
    options: ["unique Config {}", "object Config {}", "singleton Config {}"],
    answer: 1
  },
  {
    question: "¿Qué imprime `println(10%3)`?",
    options: ["3", "1", "0.3"],
    answer: 1
  },
  {
    question: "¿Cómo defines un valor booleano?",
    options: ["Boolean activo = true", "var activo: Boolean = true", "bool activo = true"],
    answer: 1
  },
  {
    question: "¿Qué operador incrementa en 1 una variable?",
    options: ["++", "+=", "+1"],
    answer: 0
  },
  {
    question: "¿Cómo defines un array de Strings?",
    options: ["val arr = arrayOf(\"a\",\"b\")", "StringArray(\"a\",\"b\")", "val arr: Strings = [\"a\",\"b\"]"],
    answer: 0
  },
  {
    question: "¿Qué imprime `println(\"Hola\"[1])`?",
    options: ["o", "H", "l"],
    answer: 0
  },
  {
    question: "¿Qué función devuelve el último elemento de una lista?",
    options: ["list.last()", "list.end()", "list[length]"],
    answer: 0
  },
  {
    question: "¿Qué imprime `println(2==2 && 3>2)`?",
    options: ["false", "true", "error"],
    answer: 1
  },
  {
    question: "¿Qué palabra se usa para heredar en Kotlin?",
    options: ["extends", ":", "inherits"],
    answer: 1
  },
  {
    question: "¿Cómo defines un comentario de varias líneas?",
    options: ["/* comentario */", "// comentario //", "# comentario #"],
    answer: 0
  },
  {
    question: "¿Qué función genera una secuencia del 1 al 5?",
    options: ["sequence(1,5)", "(1..5)", "rangeOf(1,5)"],
    answer: 1
  },
  {
    question: "¿Qué tipo de colección no permite duplicados?",
    options: ["List", "Set", "Array"],
    answer: 1
  },
  {
    question: "¿Qué imprime `println(\"kotlin\".uppercase())`?",
    options: ["kotlin", "KOTLIN", "Error"],
    answer: 1
  }
];




const preguntasKotlinSenior = [
  {
    question: "¿Qué palabra clave se usa para definir una clase en Kotlin?",
    options: [
      "class",
      "object",
      "struct"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se declara una clase de datos en Kotlin?",
    options: [
      "data class Usuario(val nombre: String, val edad: Int)",
      "class Usuario(val nombre: String, val edad: Int)",
      "dataclass Usuario(val nombre: String, val edad: Int)"
    ],
    answer: 0
  },
  {
    question: "¿Qué modificador se usa para heredar de una clase en Kotlin?",
    options: [
      ":",
      "extends",
      "inherits"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define una función lambda en Kotlin?",
    options: [
      "{ a, b -> a + b }",
      "lambda (a, b) => a + b",
      "fun lambda(a,b) = a+b"
    ],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para interfaces en Kotlin?",
    options: [
      "interface",
      "protocol",
      "implements"
    ],
    answer: 0
  },
  
  {
    question: "¿Cómo se define una clase en Kotlin?",
    options: ["object Persona {}", "class Persona {}", "struct Persona {}"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave se usa para heredar en Kotlin?",
    options: ["extends", ":", "inherits"],
    answer: 1
  },
  {
    question: "¿Cómo se define una clase de datos?",
    options: ["data class Usuario(val nombre: String)", "dataclass Usuario()", "class Usuario() data"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para definir una interfaz?",
    options: ["interface", "protocol", "implements"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para definir una función lambda?",
    options: ["lambda()", "{ x, y -> x+y }", "fun lambda = {}"],
    answer: 1
  },
  {
    question: "¿Qué modificador de visibilidad hace una clase accesible solo dentro del mismo archivo?",
    options: ["internal", "private", "protected"],
    answer: 1
  },
  {
    question: "¿Cómo se declara un constructor primario?",
    options: ["class Persona constructor(val nombre: String)", "constructor class Persona()", "def Persona(nombre: String)"],
    answer: 0
  },
  {
    question: "¿Cómo se implementa una interfaz en Kotlin?",
    options: ["class Gato implements Animal", "class Gato: Animal", "class Gato inherits Animal"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave define una clase que no puede heredarse?",
    options: ["sealed", "final", "closed"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave define una clase abstracta?",
    options: ["abstract", "sealed", "base"],
    answer: 0
  },
  {
    question: "¿Cómo se declara una función de extensión?",
    options: ["fun String.hola() = println(\"Hola\")", "extend fun String.hola()", "String extension hola()"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para objetos únicos?",
    options: ["singleton", "object", "unique"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave define una jerarquía limitada de clases?",
    options: ["sealed", "final", "restricted"],
    answer: 0
  },
  {
    question: "¿Cómo se manejan excepciones en Kotlin?",
    options: ["try/catch", "try/except", "catch/except"],
    answer: 0
  },
  {
    question: "¿Qué operador se usa para el Elvis operator?",
    options: ["?:", "??", "::"],
    answer: 0
  },

  {
    question: "¿Qué palabra clave en Kotlin se usa para declarar una clase abstracta?",
    options: ["abstract", "interface", "sealed"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave define una interfaz en Kotlin?",
    options: ["interface", "abstract", "protocol"],
    answer: 0
  },
  {
    question: "¿Qué tipo de clase permite un número fijo de subclases?",
    options: ["open class", "sealed class", "final class"],
    answer: 1
  },
  {
    question: "¿Qué función se usa para lanzar una excepción?",
    options: ["throw Exception()", "raise Exception()", "error(Exception())"],
    answer: 0
  },
  {
    question: "¿Qué modificador evita que una clase sea heredada?",
    options: ["final", "sealed", "private"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave permite heredar de una clase?",
    options: ["extend", ":", "inherits"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave se usa para declarar una coroutine?",
    options: ["launch", "async", "suspend"],
    answer: 2
  },
  {
    question: "¿Cuál es el tipo de retorno de una función suspendida?",
    options: ["Job", "Deferred", "Cualquier tipo"],
    answer: 2
  },
  {
    question: "¿Qué biblioteca de Kotlin se usa para corrutinas?",
    options: ["kotlinx.coroutines", "kotlin.coroutines", "coroutines.kt"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave permite sobreescribir métodos?",
    options: ["override", "extends", "redefine"],
    answer: 0
  },
  {
    question: "¿Cómo defines un parámetro con valor por defecto?",
    options: ["fun saludar(nombre: String = \"Anon\")", "fun saludar(nombre: String default \"Anon\")", "fun saludar(nombre?: String)"],
    answer: 0
  },
  {
    question: "¿Qué significa el modificador 'inline'?",
    options: ["Optimiza funciones pequeñas en tiempo de compilación", "Convierte funciones en lambdas", "Ejecuta en segundo plano"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para crear un objeto anónimo?",
    options: ["object", "class", "instance"],
    answer: 0
  },
  {
    question: "¿Qué operador se usa para casting seguro?",
    options: ["as?", "as!", "is"],
    answer: 0
  },
  {
    question: "¿Qué operador se usa para comprobar tipo?",
    options: ["typeof", "is", "instanceof"],
    answer: 1
  },
  {
    question: "¿Qué palabra clave convierte una clase en singleton?",
    options: ["object", "static", "final"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa en Kotlin para 'try with resources'?",
    options: ["use", "with", "tryUse"],
    answer: 0
  },
  {
    question: "¿Qué significa el modificador 'data class'?",
    options: ["Genera automáticamente equals, hashCode y toString", "Hace que la clase sea final", "Optimiza la memoria"],
    answer: 0
  },
  {
    question: "¿Cómo defines una función lambda?",
    options: ["{ x -> x*2 }", "lambda(x) => x*2", "fun(x) = x*2"],
    answer: 0
  },
  {
    question: "¿Qué función devuelve el primer elemento que cumple una condición?",
    options: ["find", "first", "filterFirst"],
    answer: 0
  },
  {
    question: "¿Qué función convierte una lista en otra de distinto tipo?",
    options: ["filter", "map", "flatMap"],
    answer: 1
  },
  {
    question: "¿Qué función une listas en pares?",
    options: ["zip", "merge", "combine"],
    answer: 0
  },
  {
    question: "¿Qué función devuelve una copia inmutable de una lista mutable?",
    options: ["toList()", "clone()", "copy()"],
    answer: 0
  },
  {
    question: "¿Qué es un Flow en Kotlin?",
    options: ["Un tipo de lista reactiva", "Un stream asíncrono de datos", "Un array dinámico"],
    answer: 1
  },
  {
    question: "¿Qué función cancela una coroutine?",
    options: ["stop()", "cancel()", "terminate()"],
    answer: 1
  },
  {
    question: "¿Qué significa lateinit en Kotlin?",
    options: ["Variable inicializada después", "Variable constante", "Variable perezosa"],
    answer: 0
  },
  {
    question: "¿Qué significa el modificador 'companion object'?",
    options: ["Permite definir miembros estáticos", "Crea clases anidadas", "Evita herencia"],
    answer: 0
  },
  {
    question: "¿Qué significa generics en Kotlin?",
    options: ["Permiten clases y funciones con tipos genéricos", "Permiten arrays dinámicos", "Permiten casting automático"],
    answer: 0
  },
  {
    question: "¿Qué operador se usa para definir rangos decrecientes?",
    options: ["downTo", "reverseRange", "stepBack"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave evita la creación de subclases?",
    options: ["final", "sealed", "abstract"],
    answer: 0
  },
  {
    question: "¿Qué función transforma elementos y luego los aplana?",
    options: ["flatMap", "map", "reduce"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave permite definir métodos de extensión?",
    options: ["extension", "fun", "impl"],
    answer: 1
  },
  {
    question: "¿Qué función reduce una lista a un único valor?",
    options: ["reduce", "sum", "aggregate"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para corrutinas diferidas?",
    options: ["Deferred", "Future", "AsyncTask"],
    answer: 0
  },
  {
    question: "¿Qué tipo de función devuelve una Sequence?",
    options: ["map()", "asSequence()", "stream()"],
    answer: 1
  },
  {
    question: "¿Qué modificador permite redefinir variables en subclases?",
    options: ["override", "open", "lateinit"],
    answer: 1
  },
  {
    question: "¿Qué diferencia hay entre val y var?",
    options: ["val es inmutable, var mutable", "val es global, var local", "val es privado, var público"],
    answer: 0
  },
  {
    question: "¿Qué significa el operador '::'?",
    options: ["Referencia a funciones o propiedades", "Operador ternario", "Operador de casting"],
    answer: 0
  },
  {
    question: "¿Qué significa sealed interface?",
    options: ["Una interfaz que solo puede ser implementada en el mismo archivo", "Una interfaz privada", "Una interfaz abstracta"],
    answer: 0
  },
  {
    question: "¿Qué significa tailrec?",
    options: ["Optimiza recursión eliminando llamadas adicionales", "Convierte bucles en recursión", "Optimiza coroutines"],
    answer: 0
  },
  {
    question: "¿Qué modificador permite que una clase se herede?",
    options: ["open", "extends", "inherits"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave define una excepción personalizada?",
    options: ["class MiError: Exception()", "error MiError()", "Exception MiError {}"],
    answer: 0
  },
  {
    question: "¿Qué diferencia hay entre == y ===?",
    options: ["== compara valores, === referencias", "== compara referencias, === valores", "Ambos son iguales"],
    answer: 0
  },
  {
    question: "¿Qué función ejecuta código diferido hasta su primera llamada?",
    options: ["lazy{}", "defer{}", "delay{}"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave se usa para evitar null en Kotlin?",
    options: ["requireNotNull", "safeNull", "assertNull"],
    answer: 0
  },
  {
    question: "¿Qué diferencia hay entre List y MutableList?",
    options: ["MutableList permite modificar, List no", "List es array, MutableList es set", "No hay diferencia"],
    answer: 0
  },
  {
    question: "¿Qué palabra clave define una función suspendida?",
    options: ["async", "suspend", "delay"],
    answer: 1
  },
  {
    question: "¿Qué función combina listas en una sola?",
    options: ["union", "merge", "plus"],
    answer: 2
  },
  {
    question: "¿Qué operador se usa para null safety?",
    options: ["?.", "!!", "??"],
    answer: 0
  },
  {
    question: "¿Qué significa CoroutineScope?",
    options: ["Define el ciclo de vida de corrutinas", "Define el hilo principal", "Define un canal de datos"],
    answer: 0
  }
];





const preguntasKotlinBloquesdecodigo = [
  {
    question: "¿Cuál es la forma correcta de declarar un bucle for en Kotlin?",
    options: [
      "for(i in 1..10) { println(i) }",
      "for(int i=0; i<10; i++) { println(i) }",
      "foreach(i: Int in 1..10) { println(i) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define una función con expresión única en Kotlin?",
    options: [
      "fun doble(x: Int): Int = x * 2",
      "def doble(x: Int) { return x*2 }",
      "function doble(x: Int): Int => x*2"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la forma correcta de usar 'when'?",
    options: [
      "when(x) { 1 -> println(\"Uno\") 2 -> println(\"Dos\") else -> println(\"Otro\") }",
      "switch(x) { case 1: println(\"Uno\"); case 2: println(\"Dos\"); default: println(\"Otro\"); }",
      "when(x) do { 1: println(\"Uno\"); 2: println(\"Dos\"); }"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción imprime 'Hola Kotlin' en consola?",
    options: [
      "println(\"Hola Kotlin\")",
      "System.out.print(\"Hola Kotlin\")",
      "echo(\"Hola Kotlin\")"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define un objeto singleton en Kotlin?",
    options: [
      "object Config { val version = \"1.0\" }",
      "singleton Config { val version = \"1.0\" }",
      "static class Config { val version = \"1.0\" }"
    ],
    answer: 0
  },
  
  {
    question: "¿Cómo se declara un bucle for en Kotlin?",
    options: [
      "for(i in 1..10) { println(i) }",
      "for(int i=0; i<10; i++) { println(i) }",
      "foreach(i in 1..10) { println(i) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define una función con expresión única?",
    options: [
      "fun doble(x: Int): Int = x * 2",
      "function doble(x: Int) { return x*2 }",
      "def doble(x) -> x*2"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la forma correcta de usar when?",
    options: [
      "when(x) { 1 -> println(\"Uno\") 2 -> println(\"Dos\") else -> println(\"Otro\") }",
      "switch(x) { case 1: println(\"Uno\") }",
      "case(x) { 1: println(\"Uno\") }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define un objeto singleton?",
    options: [
      "object Config { val version = \"1.0\" }",
      "singleton Config { val version = \"1.0\" }",
      "unique object Config { val version = \"1.0\" }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se declara una lista mutable?",
    options: [
      "mutableListOf(1,2,3)",
      "listOfMutable(1,2,3)",
      "arrayList(1,2,3)"
    ],
    answer: 0
  },
  {
    question: "¿Qué código convierte una lista en otra transformando sus elementos?",
    options: [
      "val nueva = lista.map { it * 2 }",
      "val nueva = lista.transform { it*2 }",
      "val nueva = lista.each { it*2 }"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque define un try con recursos en Kotlin?",
    options: [
      "use { val lector = BufferedReader(...) }",
      "withResource { val lector = BufferedReader(...) }",
      "tryResource { ... }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se declara una variable perezosa (lazy)?",
    options: [
      "val x by lazy { 10 }",
      "lazy var x = 10",
      "var x = lazy(10)"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se ejecuta código asíncrono en Kotlin?",
    options: [
      "async { tarea() }",
      "launch async { tarea() }",
      "start { tarea() }"
    ],
    answer: 0
  },
  {
    question: "¿Qué función recorre una lista elemento por elemento?",
    options: [
      "forEach { println(it) }",
      "each { println(it) }",
      "loop { println(it) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se define una función anónima?",
    options: [
      "val suma = fun(a: Int, b: Int): Int { return a+b }",
      "function(a,b) { return a+b }",
      "lambda(a,b) => a+b"
    ],
    answer: 0
  },
  {
    question: "¿Qué función devuelve el primer elemento de una lista?",
    options: ["list.first()", "list.getFirst()", "list[0]"],
    answer: 0
  },
  {
    question: "¿Cómo se filtra una lista en Kotlin?",
    options: [
      "val pares = lista.filter { it % 2 == 0 }",
      "val pares = lista.where { it % 2 == 0 }",
      "val pares = lista.select { it % 2 == 0 }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo se ordena una lista en Kotlin?",
    options: [
      "lista.sorted()",
      "lista.orderBy()",
      "lista.sort()"
    ],
    answer: 0
  },
  {
    question: "¿Qué instrucción define una corrutina?",
    options: [
      "launch { println(\"Hola\") }",
      "start { println(\"Hola\") }",
      "thread { println(\"Hola\") }"
    ],
    answer: 0
  },

  {
    question: "¿Cómo se declara una variable inmutable en Kotlin?",
    options: [
      "val nombre: String = \"Juan\"",
      "var nombre: String = \"Juan\"",
      "const nombre = \"Juan\""
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una función en Kotlin?",
    options: [
      "fun suma(a: Int, b: Int): Int { return a + b }",
      "def suma(a: Int, b: Int): Int = a + b",
      "function suma(a: Int, b: Int) { return a + b }"
    ],
    answer: 0
  },
  {
    question: "¿Qué sintaxis correcta define una clase en Kotlin?",
    options: [
      "class Persona(val nombre: String, val edad: Int)",
      "Persona(nombre: String, edad: Int)",
      "define class Persona(nombre: String, edad: Int)"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras una lista inmutable en Kotlin?",
    options: [
      "val numeros = listOf(1, 2, 3)",
      "val numeros: ArrayList = [1,2,3]",
      "const numeros = [1, 2, 3]"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras una lista mutable en Kotlin?",
    options: [
      "val lista = mutableListOf(1, 2, 3)",
      "val lista = listOfMutable(1,2,3)",
      "mutable val lista = [1,2,3]"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la forma correcta de crear un bucle for en Kotlin?",
    options: [
      "for (i in 1..5) { println(i) }",
      "for (i = 1; i <= 5; i++) { println(i) }",
      "loop (i in 1 to 5) { println(i) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras un if en Kotlin?",
    options: [
      "if (x > 5) { println(\"Mayor\") } else { println(\"Menor\") }",
      "if x > 5: println(\"Mayor\") else println(\"Menor\")",
      "if (x > 5) then println(\"Mayor\") else println(\"Menor\")"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras un when en Kotlin?",
    options: [
      "when (x) { 1 -> println(\"Uno\") 2 -> println(\"Dos\") else -> println(\"Otro\") }",
      "switch (x) { case 1: println(\"Uno\"); case 2: println(\"Dos\"); default: println(\"Otro\"); }",
      "select (x) { 1: println(\"Uno\"); 2: println(\"Dos\"); default: println(\"Otro\"); }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras un objeto singleton?",
    options: [
      "object Config { val PI = 3.14 }",
      "singleton Config { val PI = 3.14 }",
      "static object Config { val PI = 3.14 }"
    ],
    answer: 0
  },
  {
    question: "¿Qué forma es correcta para crear un constructor secundario?",
    options: [
      "constructor(nombre: String) : this(nombre, 0)",
      "fun constructor(nombre: String) { this.nombre = nombre }",
      "init(nombre: String) { this.nombre = nombre }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una lambda en Kotlin?",
    options: [
      "{ x: Int -> x * 2 }",
      "lambda(x: Int) => x * 2",
      "(x) => x * 2"
    ],
    answer: 0
  },
  {
    question: "¿Qué sintaxis es correcta para un try-catch en Kotlin?",
    options: [
      "try { val x = 10/0 } catch(e: Exception) { println(e.message) }",
      "try: val x = 10/0 except Exception as e: println(e.message)",
      "try { val x = 10/0 } except(Exception e) { println(e.message) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un método de extensión?",
    options: [
      "fun String.saludo() = println(\"Hola $this\")",
      "extend String { fun saludo() = println(\"Hola\") }",
      "extension fun String.saludo() { println(\"Hola\") }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un data class?",
    options: [
      "data class Usuario(val id: Int, val nombre: String)",
      "class Usuario(val id: Int, val nombre: String) data",
      "data Usuario { val id: Int, val nombre: String }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un sealed class?",
    options: [
      "sealed class Figura",
      "class sealed Figura",
      "abstract sealed class Figura"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras una corrutina?",
    options: [
      "GlobalScope.launch { println(\"Hola\") }",
      "coroutine { println(\"Hola\") }",
      "startCoroutine { println(\"Hola\") }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras una función suspendida?",
    options: [
      "suspend fun cargarDatos() { delay(1000) }",
      "async fun cargarDatos() { delay(1000) }",
      "await fun cargarDatos() { delay(1000) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un getter personalizado?",
    options: [
      "val nombre: String get() = field.uppercase()",
      "get nombre(): String { return nombre.uppercase() }",
      "fun get(nombre: String): String = nombre.uppercase()"
    ],
    answer: 0
  },
  {
    question: "¿Qué sintaxis es correcta para null safety?",
    options: [
      "val longitud = nombre?.length",
      "val longitud = nombre.length?",
      "val longitud = nombre!!length"
    ],
    answer: 0
  },
  {
    question: "¿Qué sintaxis es correcta para Elvis operator?",
    options: [
      "val longitud = nombre?.length ?: 0",
      "val longitud = nombre?.length ? 0",
      "val longitud = nombre.length ?? 0"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una función inline?",
    options: [
      "inline fun aplicar(x: Int, f: (Int) -> Int) = f(x)",
      "fast fun aplicar(x: Int, f: (Int) -> Int) = f(x)",
      "in fun aplicar(x: Int, f: (Int) -> Int) = f(x)"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un lazy property?",
    options: [
      "val pi by lazy { 3.1416 }",
      "lazy val pi = 3.1416",
      "val pi = lazy { 3.1416 }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una función tailrec?",
    options: [
      "tailrec fun factorial(n: Int, acc: Int = 1): Int = if (n == 0) acc else factorial(n - 1, acc * n)",
      "recursive fun factorial(n: Int): Int = if (n == 0) 1 else n * factorial(n - 1)",
      "fun factorial(n: Int): Int { return factorial(n - 1) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un enum?",
    options: [
      "enum class Direccion { NORTE, SUR, ESTE, OESTE }",
      "class enum Direccion { NORTE, SUR, ESTE, OESTE }",
      "enum Direccion { NORTE, SUR, ESTE, OESTE }"
    ],
    answer: 0
  },
  {
    question: "¿Qué sintaxis define una interfaz?",
    options: [
      "interface Vehiculo { fun conducir() }",
      "Vehiculo: interface { fun conducir() }",
      "class interface Vehiculo { fun conducir() }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un companion object?",
    options: [
      "class Util { companion object { fun saludo() = println(\"Hola\") } }",
      "class Util { object companion { fun saludo() = println(\"Hola\") } }",
      "class Util companion { fun saludo() = println(\"Hola\") }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un generics en Kotlin?",
    options: [
      "class Caja<T>(val contenido: T)",
      "class Caja(val contenido: Generic)",
      "generic class Caja(val contenido: Any)"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una variable mutable en Kotlin?",
    options: [
      "val edad = 25",
      "var edad = 25",
      "let edad = 25"
    ],
    answer: 1
  },
  {
    question: "¿Qué código imprime correctamente una cadena interpolada?",
    options: [
      "println('Hola $nombre')",
      "println(\"Hola $nombre\")",
      "console.log(`Hola ${nombre}`)"
    ],
    answer: 1
  },
  {
    question: "¿Cómo declaras un parámetro opcional con valor por defecto?",
    options: [
      "fun saludar(nombre: String = \"Invitado\") { println(\"Hola $nombre\") }",
      "fun saludar(nombre: String?) { println(\"Hola $nombre\") }",
      "def saludar(nombre = \"Invitado\"): println(\"Hola $nombre\")"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es la sintaxis correcta para un bucle while?",
    options: [
      "while (x < 10) { println(x); x++ }",
      "loop while (x < 10) { println(x); x++ }",
      "do (x < 10) { println(x); x++ }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una interfaz con implementación por defecto?",
    options: [
      "interface Figura { fun area(): Int { return 0 } }",
      "interface Figura = { fun area() = 0 }",
      "Figura interface { fun area(): Int = 0 }"
    ],
    answer: 0
  },
  {
    question: "¿Qué código es correcto para usar 'is' en Kotlin?",
    options: [
      "if (obj is String) println(\"Es String\")",
      "if (obj typeof String) println(\"Es String\")",
      "if (obj instanceOf String) println(\"Es String\")"
    ],
    answer: 0
  },
  {
    question: "¿Qué forma es correcta para usar el operador !! en Kotlin?",
    options: [
      "val longitud = nombre!!.length",
      "val longitud = nombre!!",
      "val longitud = !!nombre.length"
    ],
    answer: 0
  },
  {
    question: "¿Qué bloque define correctamente un companion object?",
    options: [
      "object companion { fun crear() = println(\"OK\") }",
      "companion object { fun crear() = println(\"OK\") }",
      "static companion { fun crear() = println(\"OK\") }"
    ],
    answer: 1
  },
  {
    question: "¿Cómo defines una función lambda que recibe dos enteros?",
    options: [
      "{ x: Int, y: Int -> x + y }",
      "lambda(x: Int, y: Int) => x + y",
      "(x, y) -> x + y"
    ],
    answer: 0
  },
  {
    question: "¿Qué código es correcto para definir un Map en Kotlin?",
    options: [
      "val mapa = mapOf(1 to \"Uno\", 2 to \"Dos\")",
      "val mapa = {1: \"Uno\", 2: \"Dos\"}",
      "val mapa = map(1: \"Uno\", 2: \"Dos\")"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un bloque init en Kotlin?",
    options: [
      "constructor init { println(\"Iniciado\") }",
      "init { println(\"Iniciado\") }",
      "initialize { println(\"Iniciado\") }"
    ],
    answer: 1
  },
  {
    question: "¿Cuál es la forma correcta de usar una corrutina con async?",
    options: [
      "val resultado = async { 5 + 5 }",
      "val resultado = start { 5 + 5 }",
      "val resultado = coroutine { 5 + 5 }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras un setter personalizado en Kotlin?",
    options: [
      "var edad: Int = 0 set(value) { field = if (value > 0) value else 0 }",
      "set edad(value: Int) { this.edad = value }",
      "fun setEdad(value: Int) { edad = value }"
    ],
    answer: 0
  },
  {
    question: "¿Qué código es correcto para usar filter en una lista?",
    options: [
      "val pares = lista.filter { it % 2 == 0 }",
      "val pares = lista.where { it % 2 == 0 }",
      "val pares = lista.select { it % 2 == 0 }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines una función de orden superior?",
    options: [
      "fun operar(x: Int, y: Int, f: (Int, Int) -> Int) = f(x, y)",
      "fun operar(x: Int, y: Int, f: Int, Int -> Int) = f(x, y)",
      "def operar(x: Int, y: Int, f: function) { return f(x, y) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo declaras una función anónima en Kotlin?",
    options: [
      "fun(x: Int, y: Int): Int = x + y",
      "lambda(x: Int, y: Int): Int = x + y",
      "def(x, y): return x + y"
    ],
    answer: 0
  },
  {
    question: "¿Cuál es el código correcto para crear un Array?",
    options: [
      "val arr = arrayOf(1, 2, 3)",
      "val arr = [1, 2, 3]",
      "val arr: Array = {1, 2, 3}"
    ],
    answer: 0
  },
  {
    question: "¿Qué código define correctamente una sealed class?",
    options: [
      "sealed class Resultado { class Exito(val data: String): Resultado() }",
      "class sealed Resultado { class Exito(data: String): Resultado }",
      "Resultado sealed { Exito(String) }"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un bucle do-while en Kotlin?",
    options: [
      "do { println(x) } while (x < 10)",
      "loop { println(x) } while (x < 10)",
      "repeat { println(x) } until (x == 10)"
    ],
    answer: 0
  },
  {
    question: "¿Cómo defines un parámetro vararg?",
    options: [
      "fun imprimir(vararg numeros: Int) { for (n in numeros) println(n) }",
      "fun imprimir(...numeros: Int) { for (n in numeros) println(n) }",
      "fun imprimir(numeros: Array<Int>) { println(numeros) }"
    ],
    answer: 0
  }
];







  







// Función para obtener preguntas sin repetir
function obtenerPreguntaSinRepetir(nombreStorage, preguntas) {
  if (!Array.isArray(preguntas) || preguntas.length === 0) {
    console.error("No hay preguntas disponibles.");
    return null;
  }

  let preguntasUsadas = JSON.parse(localStorage.getItem(nombreStorage)) || [];

  // Si ya se usaron todas, reiniciar y limpiar almacenamiento
  if (preguntasUsadas.length >= preguntas.length) {
    preguntasUsadas = [];
    localStorage.removeItem(nombreStorage);
  }

  // Crear lista de índices disponibles
  const indicesDisponibles = preguntas
    .map((_, i) => i)
    .filter(i => !preguntasUsadas.includes(i));

  if (indicesDisponibles.length === 0) {
    console.warn("No hay más preguntas disponibles.");
    return null;
  }

  const indiceSeleccionado = indicesDisponibles[Math.floor(Math.random() * indicesDisponibles.length)];
  preguntasUsadas.push(indiceSeleccionado);
  localStorage.setItem(nombreStorage, JSON.stringify(preguntasUsadas));

  return preguntas[indiceSeleccionado] || null;
}

// ✅ Esta función debe estar fuera y sola
function continuarConNuevoTest() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("botonSiguienteTest").classList.add("hidden");
  iniciarTest(nivelSeleccionado); // Usa el mismo nivel y lenguaje actual
}

