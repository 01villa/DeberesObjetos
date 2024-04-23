Exercim 1.
Este código establece una función llamada hello que retorna la frase "Hello, World!". Al utilizar la palabra clave export, la función se hace accesible para ser utilizada en otros archivos.
Exercim 2.
este código define una función llamada twoFer que genera una frase indicando la compartición de algo. Si se proporciona un nombre como argumento, la función devuelve "One for [nombre], one for me.", donde [nombre] es el valor dado. Si no se proporciona ningún nombre, la función devuelve "One for you, one for me."
Exercim 3.
Este código exporta una función llamada colorCode y un array llamado COLORS. La función colorCode toma un color como entrada y devuelve su índice en el array COLORS. El array COLORS contiene una lista de colores comúnmente utilizados en la codificación de resistencias. 
Exercim 4.
El código define un objeto COLORS_CODE que asigna colores a sus valores numéricos correspondientes para codificar resistencias. Luego, hay una función decodedValue que toma una lista de colores como entrada y devuelve el valor numérico decodificado basado en los dos primeros colores de la lista. La función accede al objeto COLORS_CODE para obtener los códigos numéricos de los colores y los combina para formar el valor decodificado, que se devuelve como resultado.

Exercim 5.

La función decodedValue toma el color de una banda de resistencia como entrada y devuelve el valor numérico correspondiente según el estándar de codificación de colores para resistencias. Cada color tiene asignado un valor numérico específico.
La función decodedResistorValue toma un array de colores que representan las bandas de una resistencia y devuelve el valor de la resistencia en ohmios, kiloohmios, megaohmios o gigaohmios, según la magnitud del valor calculado. El código recorre los primeros dos colores del array para obtener el valor numérico de la resistencia, luego utiliza el tercer color para determinar la magnitud y ajusta el valor en consecuencia. También maneja la adición de ceros a la derecha del valor numérico según sea necesario

Exercim 6.

La función isLeap determina si un año dado es bisiesto o no, siguiendo las reglas del calendario gregoriano. Si el año es divisible por 4 pero no por 100, o si es divisible por 400, entonces se considera bisiesto y la función devuelve true. De lo contrario, devuelve false.

Exercim 7.

La función toRna convierte una secuencia de ADN en su equivalente en ARN. Divide la secuencia de ADN en caracteres individuales y luego los convierte uno por uno según las reglas establecidas: 'G' se convierte en 'C', 'C' se convierte en 'G', 'T' se convierte en 'A' y 'A' se convierte en 'U'. Si la secuencia contiene algún carácter no reconocido, se lanza un error. Finalmente, une los caracteres convertidos en una nueva cadena que representa la secuencia de ARN resultante.
