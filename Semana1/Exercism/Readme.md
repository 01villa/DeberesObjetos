Exercim 1.
   export function hello(): string {
  return 'Hello, World!'
}


Este código establece una función llamada hello que retorna la frase "Hello, World!". 
Al utilizar la palabra clave export, la función se hace accesible para ser utilizada en otros archivos.

Exercim 2.
xport function twoFer(name: string = 'you'): string {
  return `One for ${name}, one for me.`;
}
este código define una función llamada twoFer que genera una frase indicando la compartición de algo. 
Si se proporciona un nombre como argumento, la función devuelve "One for [nombre], one for me.", donde 
[nombre] es el valor dado. Si no se proporciona ningún nombre, la función devuelve "One for you, one for me."


Exercim 3.

 export const colorCode = (color: string) => {
  return COLORS.indexOf(color.toLowerCase());
};
export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];


Este código exporta una función llamada colorCode y un array llamado COLORS.
La función colorCode toma un color como entrada y devuelve su índice en el array COLORS. 
El array COLORS contiene una lista de colores comúnmente utilizados en la codificación de resistencias. 

Exercim 4.

const COLORS_CODE: any = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
}
export function decodedValue(colors: Array<string>) {
  const firstColorCode = COLORS_CODE[colors[0]]
  const secondColorCode = COLORS_CODE[colors[1]]
  return (firstColorCode * 10) + secondColorCode
} 


El código define un objeto COLORS_CODE que asigna colores a sus valores numéricos correspondientes para codificar resistencias.
Luego, hay una función decodedValue que toma una lista de colores como entrada y devuelve el valor numérico decodificado basado
en los dos primeros colores de la lista.
La función accede al objeto COLORS_CODE para obtener los códigos numéricos de los colores y los combina para formar el valor decodificado,
que se devuelve como resultado.
