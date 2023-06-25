const https = require('https'); 

function cleanJSON(obj) {
  const claves = Object.keys(obj);

                                                  // Bucle para recorrer las claves del objeto
  for (let i = 0; i < claves.length; i++) {
    const clave = claves[i];                      //Asignacion a var 'clave' el valor de claves en la posicion i
    const valor = obj[clave];                     //Asinacion a var 'valor' la clave actual

                                                  // Eliminar los valores no deseados  
    if (valor === "N/A" || valor === "" || valor === "-") { 
      delete obj[clave];                          //Elimina valores
    } else if (Array.isArray(valor)) {            // Limpieza del arreglo en el objeto
      const array_1 = valor.filter(item => item !== "" && item !== "-" && item !== "N/A");
      obj[clave] = array_1;                       // Asigna el valor del arreglo filtrado en el obj
                                                  //Limpieza de elementos con JSON.
    } else if (typeof valor === 'object') { 
      obj[clave] = cleanJSON(valor);
    }
  }

  return obj;
}

function fetchData() {
  const url = 'https://coderbyte.com/api/challenges/json/json-cleaning';

  https.get(url, function(resp) {                 // Solicitud HTTP
    resp.on("data", function(data) { 
      const obj = JSON.parse(data.toString());
      const Objlimpio = cleanJSON(obj);           //Limpiar objeto JSON
      console.log(JSON.stringify(Objlimpio));     //Mostrar objeto JSON limpio
    });
  });
}

fetchData();
