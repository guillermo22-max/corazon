function imprimirCorazonConDelay(array, ms) {
    let i = 0, j = 0;
  
    /*function imprimir() {
      if (i < array.length) {
        if (j < array[i].length) {
          process.stdout.write(array[i][j]); 
          j++;
          setTimeout(imprimir, ms); 
        } else {
          console.log(); 
          i++;
          j = 0; 
          setTimeout(imprimir, ms); 
        }
      }
    }
  
    imprimir();*/

    const interval = setInterval(() => { //se añade setInterval: Esto simplifica el flujo de ejecución al evitar múltiples llamadas anidadas a setTimeout.
      if (i < array.length) {
          if (j < array[i].length) {
              process.stdout.write(array[i][j]);
              j++;
          } else {
              console.log(); 
              i++;
              j = 0;
          }
      } else {
          clearInterval(interval); // Limpiar intervalo cuando se ha terminado
      }
  }, ms);

}
  
  const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];
  
  
  imprimirCorazonConDelay(asciiHeart, 200);