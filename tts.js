const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
    pil.addEventListener('click', function () {
        let namebtn = pil.getAttribute('name');
        geserCek(namebtn);
    });
});

function geserCek(nbtn) {
    const table = document.querySelectorAll('.' + nbtn);
    if (table[0].disabled == true) {
        autoNext(0, nbtn);
    } else {
        table[0].select();
    }


    for (let i = 0; i < table.length; i++) {
        table[i].addEventListener('input', function () {
            if (i == table.length - 1) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
                alert("Maaf jawaban anda masih salah. Silahkan klik soal untuk mengganti jawaban");
                for (let k = 0; k < table.length; k++){
                    table[k].style.backgroundColor="red";
                    table[k].style.color="white";
                }
            } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
                

            } else {
                autoNext(i, nbtn);
                var concatString = catString(nbtn);
                submitString(concatString, nbtn, table);
            }
        });
        table[i].style.backgroundColor="white";
        table[i].style.color="black";
    }
}

function autoNext(i, cn) {
    let across = document.querySelectorAll('.' + cn);
    if (across[i + 1].disabled == true) {
        across[i + 2].select();
    }
    else {
        across[i + 1].select();
    }
}

// concat input to string
function catString(cn) {
    var concat = "";
    let across = document.querySelectorAll('.' + cn);
    for (let i = 0; i < across.length; i++) {
        concat += across[i].value;
    }
    return concat;
}

function submitString(concat, tipe, tabel, table1) {
    if (concat.toUpperCase() == "ASSEMBLY" && tipe == "across1") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "ANTIVIRUS" && tipe == "down1") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "JAVASCRIPT" && tipe == "across3") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "IOS" && tipe == "across5") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "ANDROID" && tipe == "across9") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "GAME" && tipe == "across10") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "KOTLIN" && tipe == "across11") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "SQL" && tipe == "across14") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "OPENSOURCE" && tipe == "across15") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "HTML" && tipe == "across16") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "WORD" && tipe == "down2") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "JAVA" && tipe == "down3") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "PASCAL" && tipe == "down4") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "SPREADSHEET" && tipe == "down6") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "PREMIERE" && tipe == "down7") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "LINUX" && tipe == "down8") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "VIRUS" && tipe == "down12") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }else if (concat.toUpperCase() == "EXCEL" && tipe == "down13") {
        pengulanganTabel(tabel);
        pengulanganTabel1(tabel1);
    }

}

function pengulanganTabel(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled = true;
        table[j].style.backgroundColor="green";
        table[j].style.color="white";
    }
    alert("Selamat Jawaban Anda Benar");
}
function pengulanganTabel1(table) {
    for (let j = 0; j < table.length; j++) {
        table[j].disabled= false;
    }
}
