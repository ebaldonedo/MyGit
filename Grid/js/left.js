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
    console.log("sus letras  son "+ texto);
    for (var i = 0;  i < texto.length; i++ )
    {
       for (let n = 0; n < arreglo.length; n++) {
                   if (arreglo[n]==texto.charAt(i)) {   
                     contador[n]++;
                     xy = true;
                   }
        } 
        if (xy == false) {
            
            arreglo[i]= texto.charAt(i);
            contador[i]= 1 ;
       }
        xy= false;
    }    
    for(x in arreglo){
         console.log(arreglo[x] + "= " + contador[x]);
   
         document.getElementById("parrafo").value +="\n "+arreglo[x]+": "+ contador[x];
     }
  
    }


    function showtable(){
  
      var table = "<table class = 'table table-striped table-bordered'>"
                +   "<caption> Tabla de caracteres </caption>"
            +   "<thead>"
            +     "<tr>"
            +       "<th>Caracter</th>"
            +       "<th>Descripcion</th>"
            +     "</tr>"
            +   "</thead>"
            +   "<tbody><tr><td colspan='2'>"
                              
      for(x in json){
        table += "<tr>"
                +  "<td >" + json[x].letra + "</td>"
                +  "<td " + json[x].description + "</td>"
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