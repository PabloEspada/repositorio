

//function mensaje() {
 
//        alert("hola ");       
    
//}

//pàra datatables

function muestratexto() {
        
        var elem = document.getElementById("parrafo1");  
        alert(elem);
        elem.innerHTML = "Texto cambiado";
        
}

function concatena() {
        var nombre = document.getElementById("nombre").innerHTML;
        var apellidos = document.getElementById("apellidos").innerHTML;
        
        document.getElementById("nombrecompleto").innerHTML =  nombre + " " + apellidos ;
}



function suma(){
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;
      var suma = parseInt(num1) + parseInt(num2);
      document.getElementById("resultado").innerHTML = suma ;
}

function resta(){
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;
      var resta = parseInt(num1) - parseInt(num2);
      document.getElementById("resultado").innerHTML = resta ;
            
}


function multiplica(){
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;
      var multiplica = parseInt(num1) * parseInt(num2);
      document.getElementById("resultado").innerHTML = multiplica ;
        
}

function divide(){
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;
      var divide = parseInt(num1) / parseInt(num2);
      var resto =parseInt(num1) % parseInt(num2);
      document.getElementById("resultado").innerHTML = divide + "  el resto es " + resto ;     
}

function exponente(){
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;
      var exponente = Math.pow(num1,num2);
      document.getElementById("resultado").innerHTML =  exponente ;     
}


function parimpar(){
      var num1 = document.getElementById("num1").value;
      var num2 = document.getElementById("num2").value;
      
     
        if ( num1 % 2 == 0 ){
                document.getElementById("resultado1").innerHTML =  "El numero " + num1 + " es par" ;
        }
        else {
                document.getElementById("resultado1").innerHTML =  "El numero " + num1 + " es impar" ;       
        }
        
        if ( num2 % 2 == 0 ){
                document.getElementById("resultado").innerHTML =  "El numero " + num2 + " es par" ;      
        }
        else {
                document.getElementById("resultado").innerHTML =  "El numero " + num2 + " es impar" ;       
        }
        
}


//ARRAYS

function muestracoches(){
        var coches = ["renault", "peugot", "citroen", "ford"] ;
        var texto = "<ul>";

        for (i=0; i < coches.length; i++){
        
                  texto=texto + "<li>" + coches[i] + "</li>";
         }

        texto += "</ul>";
        document.getElementById("listadocoches").innerHTML = texto;
}


function pesomax(){
        
        var peso = [80, 100, 73, 67, 93, 89, 81];
        var contador = 0;
        for (i=0; i< peso.length; i++){
                
                if (peso[i] > 80){
                        contador++;
                }
                
        }
        document.getElementById("peso").innerHTML = "El numero de los que pesan  más de 80 kilos es " + contador;
        
}



function total(){
        var notas = [3, 8, 7, 5, 4.5, 9, 8, 7, 3.5, 6, 10, 7, 7.5];
        var susp = 0;
        var aptos = 0;
        var bien = 0;
        var nt = 0;
        var sb = 0;
        var mh = 0;
        for (i=0; i< notas.length; i++){
                
                if (notas[i] > 0 && notas[i] < 5){
                        susp++;
                }
                if (notas[i] > 5 && notas[i] <= 6){
                        aptos++;
                }
                if (notas[i] >= 6 && notas[i] < 7){
                        bien++;
                }
                if (notas[i] >= 7 && notas[i] <= 8.5){
                        nt++;
                }
                if (notas[i] >= 8.5 && notas[i] < 10){
                        sb++;
                }
                if (notas[i] >= 10){
                        mh++;
                }
        }
                document.getElementById("calificaciones").innerHTML = "Supensos: " + susp +"<br>"+ "Aptos: " + aptos +"<br>"+ "Bien: " +
                bien +"<br>"+ "Notable: " + nt +"<br>"+ "Sobresaliente: " + sb +"<br>"+ "Matricula de Honor: " + mh;
             
        
}





function objetoarray(){
        
        
        var empleados = [
                          {nombre:"Marta", sueldo:1000, horas:50},
                          {nombre:"Javier", sueldo:3500, horas:100},
                          {nombre:"Pepe", sueldo:800, horas:100},
                          {nombre:"Sandra", sueldo:950, horas:95},
                          {nombre:"Teresa", sueldo:2700, horas:90} ];
        
         var sueldomenor= empleados[0].sueldo ;
         var nombremenor;
        for (i=0; i< empleados.length; i++){
                
              if (  empleados[i].sueldo < sueldomenor ){
                         sueldomenor = empleados[i].sueldo;
                         nombremenor = empleados[i].nombre;
                        }
        }
        
        
        
        
        
        
          var mastrabaja= empleados[0].horas ;
          var nombremastrabaja; 
        for (i=0; i< empleados.length; i++){
                
              if (  empleados[i].horas > mastrabaja ){
                         mastrabaja = empleados[i].horas;
                         nombremastrabaja = empleados[i].nombre;
                        }
        
                
                
        }
       
        
        
        
        
        
           var totalsueldos=0;
         for (i=0; i< empleados.length; i++){
                totalsueldos += empleados[i].sueldo;
         }
          numerototal= totalsueldos / empleados.length;
        
 
         document.getElementById("empleados").innerHTML = "La persona que menos cobra es: " + nombremenor ;
         document.getElementById("empleados1").innerHTML = "La persona que mas trabaja es: " + nombremastrabaja ;
         document.getElementById("empleados2").innerHTML = "La persona que mas trabaja es: " + numerototal ;
         
}


























