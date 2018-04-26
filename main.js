function main() {
    number = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    while (!repetido(number)) {
        number = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    }
    console.log(number)
    

}
var intento = 0
function fijas() {
    var user = $("input").val().split("");
    var num = number.split("")
    fija = 0;
    pica = 0;
    for (var i = 0; i < user.length; i++) {
        if (user[i] == num[i]) {
            fija += 1;
            user.splice(i, 1)
            num.splice(i, 1)
            i--
        }
    }

    for (var x = 0; x < user.length; x++) {
        for (var y = 0; y < num.length; y++) {
            if (user[x] == num[y]) {
                pica += 1;
                user.splice(x, 1)
                num.splice(y, 1)
                x--
                y--
            }

        }

    }

    if (fija == 4) {
        swal({
            title: "Good job!",
            text: "You won the game! " +intento,
            icon: "success",
        }).then((value) => {
            $("#tbody").empty()
            location.reload();
        });
    }

    return [fija, pica]
}



$("#input").keyup(function (e) {
    if (e.keyCode == 13) {
        intento++
        $('#input').siblings('.repetido').html('');
        if (repetido($(this).val()) && $(this).val().length == 4) {

            $("#tbody").prepend(" <tr> <th>" + $(this).val() + "</th> <th>" + fijas()[1] + "</th> <th>" + fijas()[0] + "</th>  </tr>")
            $("#input").val("");
        } else {
            $('#input').siblings('.repetido').html(intento+'No puedes ingresar todas las cifras repetidas ni mas de 4 dijitos');
            $('.repetido').addClass("rojo");
        }
    }
});

function repetido(value) {

    var cont = 0;
    var arr = value.split("");
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                cont += 1
            }
        }
    }
    if (cont != 0) {
        return false
    } else {
        return true
    }
}

window.onload = main;
