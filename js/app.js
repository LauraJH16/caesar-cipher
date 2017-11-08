// Creamos las funciones de CIPHER y DECIPHER:
function cipher(phrase) {
  var output = '';
  
  // Bucle que recorra la variable phrase:
  for (var i = 0; i < phrase.length; i++) {
    // Convierte a ascii
    var ascii = phrase.charCodeAt(i);

    // Condición y covierte nuevamente en letra
    if (ascii > 64 && ascii < 91) // fórmula para mayúsculas
      output += String.fromCharCode(((ascii - 65) + 33) % 26 + 65);
    else if (ascii > 96 && ascii < 123) // fórmula para minúsculas
      output += String.fromCharCode(((ascii - 97) + 33) % 26 + 97);
  }
  
  // Cuando se llame la función, retornará la variable output:
  return output;
}
  
function decipher(phrase) {
  var output = '';

  // Bucle que recorra la variable phrase:
  for (var i = 0; i < phrase.length; i++) {
    // Convierte a ascii
    var ascii = phrase.charCodeAt(i);
    
    // Condición y covierte nuevamente en letra
    if (ascii > 64 && ascii < 91) // formula para mayusculas
      output += String.fromCharCode((((ascii - 65) - 33) + 26 * 2) % 26 + 65);
    else if (ascii > 96 && ascii < 123) // para minusculas
      output += String.fromCharCode((((ascii - 97) - 33) + 26 * 2) % 26 + 97);
  }
  
  // Cuando se llame la función, retornará la variable output:
  return output;
}

// Por medio de 'prompt' le pedimos al usuario que ingrese un frase:
var order = (prompt('INGRESE UNA FRASE: '));
  
// Condicional para que no puedan dejar el prompt vacio:
if (order !== '') {
  // Bucle que recorra la variable order:
  for (var j = 0; j < order.length; j++) {
    // Condicional para que no ingresen campos vacios:
    if (order[j] === ' ') {
      spaces = true;
      break; // Para que cuando spaces sea true, salga del bucle.
    } else {
      spaces = false;
    }
  }
  
  // Mensaje si ha ingresado espacios:
  if (spaces === true) {
    alert('No ingrese campos en blanco');
  } else {
    // Bucle que recorra la variable order:
    for (var re = 0; re < order.length; re++) {
      // Condicional para que no se pueda ingresar numeros:
      if (order.charCodeAt(re) >= 65 && order.charCodeAt(re) <= 90 || order.charCodeAt(re) > 96 && order.charCodeAt(re) < 123) {
        var value = true;
      } else {
        var value = false;
        break; // Para que cuando value sea true, salga del bucle.
      }
    }
  
    // Condicional si ha ingresado solo letras sin numeros:
    if (value === true) {
      // Preguntamos y llamamos a las funciones:
      do {
        var answer = prompt('INGRESE UNA OPCIÓN: \n \n 1. Cifrar \n 2. Descifrar \n 3. Salir');

        // Condicional si no ha ingresado nada
        if (answer !== '') {
          if (answer === '1') {
            document.write('Cifrado  ->    ' + cipher(order));
          } else if (answer === '2') {
            document.write('<p> Descifrado  ->    ' + decipher(order));
          } else if (answer === '3') {
            document.write('**** ADIÓS ****');
          } else {
            alert('Ingrese una opción válida');
          }
        }
      } while (answer === '' || (answer !== '1' && answer !== '2' && answer !== '3'));
    }
  
    // Mensaje si ha ingresado numeros:
    if (value === false) {
      alert('Ingrese solo letras');
    }
  }
  
  // Mensaje si no ingreso nada en el prompt: 
} else {
  alert('Ingrese una frase');
}