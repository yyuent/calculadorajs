
/* FUNCION CALCULAR */
function calcular(){
    /*Obtener el valor de los input identificandolos por si ID en el archivo HTML*/
    var radioCir=document.getElementById('radio').value;
    var ladoC=document.getElementById('ladoC').value;
    var baseR=document.getElementById('baseR').value;
    var alturaR=document.getElementById('alturaR').value;

    /*Convertir los valores ingresados en FLOAT (números con decimales) */
    /*en caso de que ingresen decimales como valor inicial*/
    radio=parseFloat(radioCir);
    ladoC=parseFloat(ladoC);
    baseR=parseFloat(baseR);
    alturaR=parseFloat(alturaR);

    /*Realizar las operaciones correspondientes para cada figura*/
    /*Operaciones del circulo*/
    /*Se crean las variables donde se almacenará el valor de la operacion */
    var areaCir=((Math.PI)*radio*radio);/*Area*/
    var perCir=((Math.PI)*(radio*2));/*Perimetro*/

    /*Operaciones del cuadrado*/
    var areaC=(ladoC*ladoC); /*Area */
    var perC=(ladoC*4);/*Perimetro */

    /*Operaciones del rectangulo*/
    var areaR=(baseR*alturaR); /*Area*/
    var perR=((baseR*2)+(alturaR*2)); /*Perimetro */

    /*Se muestra el div donde se despliegan los resultados de las operaciones usando estilos de CSS en JavaScript */
    document.getElementById('resultados').style.display='block';

    /*Se asigna el valor de la operacion en el input del resultado de cada figura */
    document.getElementById('areaCirculo').value=areaCir;
    document.getElementById('perCirculo').value=perCir;
    document.getElementById('areaCuad').value=areaC;
    document.getElementById('perCuad').value=perC;
    document.getElementById('areaRec').value=areaR;
    document.getElementById('perRec').value=perR;

}

/*FUNCION LIMPIAR */
function limpiar(){
    /*Se pone el valor de los input donde se solicita los valores en VACIO (sin texto)*/
    document.getElementById('radio').value = '';
    document.getElementById('ladoC').value = '';
    document.getElementById('baseR').value = '';
    document.getElementById('alturaR').value = '';

    /*Al igual que los input en donde aparece el resultado*/
    document.getElementById('areaCirculo').value= '';
    document.getElementById('perCirculo').value= '';
    document.getElementById('areaCuad').value='';
    document.getElementById('perCuad').value='';
    document.getElementById('areaRec').value='';
    document.getElementById('perRec').value='';

    /*Se vuelve a ocultar el div donde aparecen los resultados*/
    document.getElementById('resultados').style.display='none';
}

