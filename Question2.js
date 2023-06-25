function LongestWord(sen) {

  const palabras = sen.split(" ");                    // Divide la cadena por palabras
  let longestWord = "";                               // Palabra más larga encontrada

  for (let i = 0; i < palabras.length; i++) {
                                                      // Elimina cualquier signo de puntuación de la palabra
    const palabra = palabras[i].replace(/[^\w\s]/gi, "");

                                                      // Comprueba si la palabra actual es más larga que la palabra más larga encontrada hasta ahora
    if (palabra.length > longestWord.length) {
      longestWord = palabra;
    }
  }

  return longestWord;
}

                                                      // Datos de prueba dados.
console.log(LongestWord("Hello world123 567"));       //Mostrar palabra mas larga

