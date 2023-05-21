
let resumen = document.querySelector("#resumen");
resumen.addEventListener("click", precioTotal);

let borrar = document.querySelector("#borrar");
borrar.addEventListener("click", borrarFormulario);

let cantidadDeTickets = document.querySelector(".cantidadDeTickets");


function precioTotal(evento) {
    evento.preventDefault();

    let cantidadDeTickets = document.querySelector(".cantidadDeTickets");

    if (Number(cantidadDeTickets.value)) {
        let categoriaTicket = document.querySelector(".categoriaTicket");
        let costoTotal;

        switch (categoriaTicket.value) {
            case "Estudiante": {
                costoTotal = 200 * cantidadDeTickets.value * 0.2;
                break;
            }
            case "Trainee": {
                costoTotal = 200 * cantidadDeTickets.value * 0.5;
                break;
            }
            case "Junior": {
                costoTotal = 200 * cantidadDeTickets.value * 0.85;
                break;
            }
        }

        document.querySelector(".resultado").textContent = `Total a Pagar: $${costoTotal}`;
        
        let nodoResultado = document.querySelector(".resultado");
        let nodoSpan = document.createElement("span");
        nodoSpan.className = 'comprarTickets';
        let nodoTexto = document.createTextNode("Comprar");
        nodoSpan.append(nodoTexto);
        nodoResultado.append(nodoSpan);

        let comprarTickets = document.querySelector(".comprarTickets");
        comprarTickets.addEventListener("click", ticketsSubmit);

    } else {
        document.querySelector(".cantidadDeTickets").style.border = "2px solid red";
        cantidadDeTickets.value = "";
        cantidadDeTickets.placeholder = "Ingrese una cantidad válida";
        alert("Ingrese una cantidad válida");
    }

}


function borrarFormulario() {

    document.querySelector(".resultado").textContent = "Total a Pagar: $";

    let form = document.querySelector(".ticketsForm");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className).style.border = "1px solid #dee2e6";
    }
}


function ticketsSubmit() {

    let form = document.querySelector(".ticketsForm");
    inputCheck(form);

    function inputCheck(form) {
        let arrayCheck = [];
        for (i = 0; i < 3; i++) {
            arrayCheck[i] = form[i].value;
            if (form[i].value == "") {
                document.querySelector("." + form[i].className).style.border = "2px solid red";
            } else {
                document.querySelector("." + form[i].className).style.border = "1px solid #dee2e6";
            }
        }


        if (arrayCheck.every(element => element != "")) {
            if (form[2].value.includes('@') && form[2].value.includes('.')) {
                alert("Formulario enviado");
                form.submit();
                document.querySelector("." + form[2].className).style.border = "1px solid #dee2e6";
            } else {
                alert("Debe ingresar un correo válido");
                document.querySelector("." + form[2].className).style.border = "2px solid red"
            }
        } else {
            alert("Completar los campos en rojo");
        }

    }
}



