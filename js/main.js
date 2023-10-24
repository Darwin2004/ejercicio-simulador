function inversion(){

    // capturamos los elemnetos de html que se van a utilizar

    const cNombres = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value;
    const cMonto = document.getElementById("monto").value;
    const cTiempo = document.getElementById("tiempo").value;

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const showNombre = document.getElementById("nombres-show");
    const showEmail = document.getElementById("email-show");

    const showTiempo = document.getElementById("tiempo-show");
    const showInteres = document.getElementById("interes-show");

    const showGanancia = document.getElementById("ganancia-show")
    const showTotal = document.getElementById("total-show")


    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    showNombre.innerText = cNombres;
    showEmail.innerText = cEmail;

    switch(cTiempo) {
        case "1":   
        showTiempo.innerText = "12 meses";
        showInteres.innerText = "0.8%";
        showGanancia.innerText = cMonto * 0.096;
        showTotal.innerText = (cMonto * 0.096) + parseInt(cMonto);
          
          break;
      
        case "2":  
        showTiempo.innerText = "24 meses"
        showInteres.innerText = "1.3%";
        showGanancia.innerText = cMonto * 0.312;
        showTotal.innerText = (cMonto * 0.312) + parseInt(cMonto);
          
          break;
      
        case "3":  
        showTiempo.innerText = "36 meses"
        showInteres.innerText = "1.7%";
        showGanancia.innerText = cMonto * 0.612;
        showTotal.innerText = (cMonto * 0.612) + parseInt(cMonto);
       

          break;

          default:
      }
    

    
}