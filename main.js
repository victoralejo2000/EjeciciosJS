// const boton =()=>{
//     alert("hola chicos")
// }

function callMenu() {
  let nro_ejercicio = parseInt(
    prompt(
      "Ingrese el numero de ejercicio que quiere ejecutar:\r\n 1.Suma de Valores \r\n 2.Promedio de examenes \r\n 3.Area de Rectangulo \r\n 4.Area de Triangulo \r\n 5.Area de Circunferencia \r\n 6.Sueldo Semanal \r\n 7.Medida de Vestido \r\n 8.Cambio de Dolares \r\n 9.Entrevista"
    )
  );
  if (isNaN(nro_ejercicio)) {
    alert("Ingrese un valor");
  } else {
    MenuEjercicios(nro_ejercicio);
  }
}

function MenuEjercicios(nro_ejercicio) {
  switch (nro_ejercicio) {
    case 1:
      let valor1 = parseInt(prompt("Ingrese el valor 1"));
      let valor2 = parseInt(prompt("Ingrese el valor 2"));
      alert(ej1_sumarValores(valor1, valor2));
    case 2:
      let nota1 = parseInt(prompt("Ingrese el nota 1"));
      let nota2 = parseInt(prompt("Ingrese el nota 2"));
      let nota3 = parseInt(prompt("Ingrese el nota 3"));
      let nota4 = parseInt(prompt("Ingrese el nota 4"));
      alert(promedio(nota1, nota2, nota3, nota4));
    case 3:
      let base = parseInt(prompt("Ingrese el base"));
      let altura = parseInt(prompt("Ingrese el altura"));
      alert(areaRectangulo(base, altura));
    case 4:
      let base1 = parseInt(prompt("Ingrese el base"));
      let altura1 = parseInt(prompt("Ingrese el altura"));
      alert(areaTriangulo(base1, altura1));
    case 5:
      let radio = parseInt(prompt("Ingrese el radio"));
      alert(areaCircunferencia(radio));
    case 6:
      let sueldo = parseInt(prompt("Ingrese el sueldo"));
      let horas = parseInt(prompt("Ingrese el horas"));
      let dias = parseInt(prompt("Ingrese el dias"));
      alert(sueldoSemanal(sueldo, horas, dias));
    case 7:
      let metros = parseInt(prompt("Ingrese cantidad de tela"));
      alert(medidaVestido(metros));
    case 8:
      let cantidad = parseInt(prompt("Ingrese cantidad de dolares"));
      let tipo_cambio = parseInt(prompt("Ingrese tipo de cambio"));
      alert(cambioDolares(cantidad, tipo_cambio));
    case 9:
      let nombre = parseInt(prompt("Ingrese nombre"));
      let anio_nacimiento = parseInt(prompt("Ingrese año nacimiento"));
      alert(entrevista(nombre, anio_nacimiento));
  }
}

function ej1_sumarValores(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "oye ingresa datos";
  } else {
    return a + b;
  }
}

function promedio(nota1, nota2, nota3, nota4) {
  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    return "oye ingresa datos";
  } else {
    return (nota1 + nota2 + nota3 + nota4) / 4;
  }
}

function areaRectangulo(base, altura) {
  if (isNaN(base) || isNaN(altura)) {
    return "oye ingresa datos";
  } else {
    return base * altura;
  }
}

function areaTriangulo(base1, altura1) {
  if (isNaN(base1) || isNaN(altura1)) {
    return "oye ingresa datos";
  } else {
    return (base1 * altura1) / 2;
  }
}

function areaCircunferencia(radio) {
  if (isNaN(radio)) {
    return "oye ingresa datos";
  } else {
    const pi = 3.1416;
    return (area3 = pi * radio);
  }
}

function sueldoSemanal(sueldo, horas, dias) {
  if (isNaN(sueldo) || isNaN(horas) || isNaN(dias)) {
    return "oye ingresa datos";
  } else {
    return sueldo * horas * dias;
  }
}

function medidaVestido(metros) {
  if (isNaN(metros)) {
    return "oye ingresa datos";
  } else {
    const pulgadas = 0.0254;
    return metros / pulgadas;
  }
}

function cambioDolares(cantidad, tipo_cambio) {
  if (isNaN(cantidad) || isNaN(tipo_cambio)) {
    return "oye ingresa datos";
  } else {
    return cantidad * tipo_cambio;
  }
}

function entrevista(nombre, anio_nacimiento) {
  if (isNaN(nombre) || isNaN(anio_nacimiento)) {
    return "oye ingresa datos";
  } else {
    const fecha = new Date();
    const anioActual = fecha.getFullYear();
    return anioActual - anio_nacimiento;
  }
}
