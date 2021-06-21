function analizaCadena(cadena) {
  var mensaje = "Cadena: " + '"' + cadena + '"' + "\n";

  /*Palindromo*/
  cadena.replace(/ /g, "");
  var newCadena = cadena.toLowerCase().match(/[a-z]/gi).reverse();
    if (newCadena.join("") === newCadena.reverse().join("")) {
      mensaje += " -- Es un palindromo\n";
    } 
    else {
      mensaje += " -- No es un palindromo\n";
    }

  /* No. Palabras */
  cadena.replace(/(^\s*)|(\s*$)/gi, "");
  cadena.replace(/[ ]{2,}/gi, " ");
  cadena.replace(/\n /, "\n");
  mensaje += " -- Palabras: " + cadena.split(" ").length + "\n";
  
  var numLetras = 0;
  /* No. Letras */
  const letras = Array.from(cadena);
  for (let i = 0; i < letras.length; i++) {
    if (letras[i].match(/[a-z]/i)) {
      numLetras++;
    }
  }
  mensaje += "-> Letras: " + numLetras + "\n";

 /* No. Vocales */
  var numVocales = 0;
  for (let i = 0; i < letras.length; i++) {
    if (letras[i].match(/[aeiou]/i)) {
      numVocales++;
    }
  }
  mensaje += "-> Vocales: " + numVocales + "\n";

  /* No. Consonantes */
  var numConsonantes = 0;
  for (let i = 0; i < letras.length; i++) {
    if (letras[i].match(/[a-z]/i)) {
      if (!letras[i].match(/[aeiou]/i)) {
        numConsonantes++;
      }
    }
  }
  mensaje += "-> Consonantes: " + numConsonantes;

  return mensaje;
}

module.exports.analizaCadena = analizaCadena;
