/*Presentacion personal */
document.write('Hola');
document.write('<br>');
document.write('Mi nombre es Yanin Valeria Yuen Torres');
document.write('<br>');
/*Titulo de la actividad */
document.write('<h2>Cálculo de Áreas y Perimetros</h2>');

/*Creacion de variables para almacenar los datos solicitados*/
/*CIRCULO*/
var radio;
/*CUADRADO*/
var ladoC;
/*RECTANGULO*/
var baseR;
var alturaR;

/*Conversion de datos de entrada a FLOAT para aceptar numeros decimales  */
radio=parseFloat(radio);
ladoC=parseFloat(ladoC);
baseR=parseFloat(baseR);
alturaR=parseFloat(alturaR);

/*Solicitud de datos para cada figura */
radio=prompt('Ingresa el radio del circulo:','');
var areaCir=((Math.PI)*radio*radio);
var perCir=((Math.PI)*(radio*2));
/*Impresion de los datos usando codigo HTML con document.write(); */
document.write('<br>');
document.write('<h4>CIRCULO</h4>');
document.write('Área:')
document.write(areaCir);
document.write('<br>');
document.write('Perímetro:')
document.write(perCir);
document.write('<br>');

ladoC=prompt('Ingresa el tamaño del lado del cuadrado:','');
var areaC=(ladoC*ladoC);
var perC=(ladoC*4);
document.write('<br>');
document.write('<h4>CUADRADO</h4>');
document.write('Área:')
document.write(areaC);
document.write('<br>');
document.write('Perímetro:')
document.write(perC);
document.write('<br>');

baseR=prompt('Ingresa la base del rectángulo:','');
alturaR=prompt('Ingresa la altura del rectángulo:','');
var areaR=(baseR*alturaR);
var perR=((baseR*2)+(alturaR*2));
document.write('<br>');
document.write('<h4>RECTÁNGULO</h4>');
document.write('Área:')
document.write(areaR);
document.write('<br>');
document.write('Perímetro:')
document.write(perR);
document.write('<br>');
