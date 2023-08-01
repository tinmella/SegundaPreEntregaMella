let pregunta=""
while (pregunta != "no"){
let  nombre= prompt("Ingresa tu nombre")
let apellido= prompt("Ingresa tu apellido")
let edad= prompt("Ingresa tu edad")
alert ("Su nombre y apellido fueron ingresados correctametne " + nombre +" "+ apellido+".")
let Nota01=Number(prompt("Primera nota"))
let Nota02=Number(prompt("Segunda nota"))
let Nota03=Number(prompt("Tercera nota"))

const promedio=(a,b,c) => (a+b+c)/3;

alert ("su promedio es:" + promedio(Nota01,Nota02, Nota03))




pregunta = prompt ("¿Desea continuar ingresando datos?(De lo contrario escriba no) ")

alert ("sus notas son: "+ Nota01 +" "+Nota02+" "+Nota03+" "+"lo que da como promedio: "+promedio(Nota01,Nota02,Nota03) )

const ResumenDeNotas = [Nota01, Nota02, Nota03, " y su promedio es: ", promedio]

console.log("Nombre completo: "+nombre+" "+apellido+"." + "    Edad:"+ " "+edad+" y su promedio es:".concat(promedio(Nota01,Nota02,Nota03)))

}

