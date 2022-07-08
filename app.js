//alert ("Mi archivo está bien linkeado")

//Tiempo de viaje

//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto 
//tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano 
//distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const distancia = prompt ('Ingresa tu distancia a recorrer en kilómetros');
const tiempoPie = (distancia / 5 );
const tiempoBici = (distancia / 10);
const tiempoBus = (distancia / 80)
const tiempoAuto = (distancia / 100);

alert ('El tiempo de viaje es: ' + tiempoPie + ' horas a pie, ' + tiempoBici + ' horas en bicicleta, ' + tiempoBus + ' horas en colectivo o' + tiempoAuto + ' horas en automóvil.');

console.log (alert);