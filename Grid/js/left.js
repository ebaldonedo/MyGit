function myFunction1() {
    document.getElementById("cajon").style.textAlign= "left";
  }

  function myFunction2() {
    document.getElementById("cajon").style.textAlign= "center";
  }

  function myFunction3() {
    document.getElementById("cajon").style.textAlign = "right";
  }


  function compilar(){
    Limpiar();
    var texto = document.getElementById("cajon").value;
    texto = texto.replace(/ /g,"");
    var arreglo = [];
    var xy = false;
    var contador=[];
    var numeros=0;
    var arreglo2=[];
    var letras = 0;
    var  numeros= 0;
    var  separadores= 0;
    var operadores  = 0;
    var especiales = 0;
    
    
    for (var i = 0;  i < texto.length; i++ )
    {
       for (let n = 0; n < arreglo.length; n++) {
                   if (arreglo[n]==texto.charAt(i)) {  
                    arreglo2[i]= texto.charAt(i);
                      contador[n]++;
                      xy = true;
                   }
        } 
        if (xy == false) {
          arreglo2[i]= texto.charAt(i);
            arreglo[i]= texto.charAt(i);
            contador[i]= 1 ;
       }
        xy= false;
    }    
    

for (let i = 0; i < arreglo2.length; i++) {
  for (let n = 0; n < json.length; n++) {
    if (json[n].symbol==arreglo2[i] )
     {
          if (json[n].description=="letra") {
        letras++;
        
      }
       
          if (json[n].description=="numero") {
        numeros++;
      }
       
      if (json[n].description=="especial") {
        especiales++;
      }
       
          if (json[n].description=="separador") {
        separadores++;
      }


      if (json[n].description=="operador") {
        operadores++;
      }


    }

    
  
  }
  
}







     console.log("letras: "+letras+"\n numeros: "+numeros+"\n operadores: "+operadores+"\n separadores: "+ separadores+ "\n especiales \n "+ especiales);

     document.getElementById("parrafo").value += "Texto: "+texto+"\nLetras: ["+letras+"]\n Numeros: ["+numeros+"]\n Operadores: ["+operadores+"]\n Separadores: ["+ separadores+ "]\n Especiales: ["+ especiales +"]\n";

     document.getElementById("parrafo2").value +="TEXTO:["+texto+"]\n";


     for(x in arreglo){
        
   
      document.getElementById("parrafo").value +="  "+arreglo[x]+"["+ contador[x]+"]";
      document.getElementById("parrafo2").value +="  "+arreglo[x]+":["+ contador[x]+"]";
  }


    }


    function showtable(){
  
      var table = "<table class = 'table table-striped table-bordered'>"
            +   "<thead>"
            +     "<tr>"
            +       "<th style='padding-left:15%;'>Caracter</th>"
            +       "<th style='padding-left:15%;'>Descripcion</th>"
            +     "</tr>"
            +   "</thead>"
            +   "<tbody>"
           
                 
            
      for (let i = 0; i < json.length; i++) 
      {
        table += "<tr>"
                +  "<td  style='padding-left:20%;'>" + json[i].symbol + "</td>"
                +  "<td  style='padding-left:20%;'> " + json[i].description + "</td>"
                +"</tr>"
      }
    
      table += "</table></div></td></tr></tbody></table>"
    
      var tableDiv = document.getElementById("show");
    
      tableDiv.innerHTML = table;
      
    }












    function leer(){
        var x = document.getElementById("cajon").value.ignoreCase;
        alert("Su texto es: "+x+" y tiene "+x.length+" caracteres");
     }



     function Limpiar(){
        document.getElementById("parrafo").value = "";

     }