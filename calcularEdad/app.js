function age() {
    event.preventDefault();

    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
    

    if (d1 <= 0 || m1 <= 0 || y1 <= 0) {
        alert("Por favor ingresa valores numéricos mayores a 0 en los campos de fecha.");
        return false;
    }

    var yearLength = y1.toString().length;
    if (yearLength !== 4) {
        alert("El año debe tener una longitud de 4 dígitos.");
        return false;
    }

    if (y1 < 1900 ) {
        alert("Estas mas duro que walt disney")
    }
    
    var date = new Date();
    var d2 = date.getDate();
    console.log(d2)
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("age").innerHTML =
        "Tenes " + y + " años y " + m + " meses con " + d + " días de Edad.";

    return true;    
}
