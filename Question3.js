function minwindowsubstring(strarr){


const N = strarr[0];                               // Se asigna el primer elemento de strarr a var 'N'
const N_combinations = [];                         //Arreglo para almacenar las combinaciones
const K = strarr[1];                               // Se asigna el segundo elemento de strarr a var 'K'
const K_array = K.split("");                       //Arreglo de caracteres en K_array


N_combinations.push(N[0]);                         //Inicia desde el primer caracter de N a N_combinations

                                                   //Verifica la inclusion de caracteres en combinacion 1.
if (K_array.every(item => N_combinations[0].includes(item))) {
    return N_combinations[0]; 
}

                                                    //Bucle para recorrer desde el segundo caracter hasta el ultimo
for (let i = 1; i < N.length; i++) {
   N_combinations.push(N_combinations[i-1]+ N[i]);  //Crea la nueva combinación

                                                    //Verifica la inclusion de los caracteres de la combinacion en K_array
   if (K_array.every(item => N_combinations[i].includes(item))) { 
    return N_combinations[i];
        }
  }
}
                                                    //Datos de prueba dados
console.log(minwindowsubstring(["aaabaaddae","aed"])); 
console.log(minwindowsubstring(["aabdcdbcacd","aad"]));