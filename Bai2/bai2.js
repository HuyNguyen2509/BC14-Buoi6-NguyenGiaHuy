document.getElementById('tinhSoMu').addEventListener('click', tinhSoMuXN);

function tinhSoMuXN() {
    var numX = +document.getElementById('numberX').value;
    var numN = +document.getElementById('numberN').value;

    var tong = 0;
    for (var i = 1; i <= numN; i++) {
        tong = tong + Math.pow(numX, i)
    }

    var pEL = document.createElement('p')
    var divHT = document.getElementById('divHienThi')

    divHT.innerHTML = "";
    pEL.innerHTML = tong;
    divHT.style.display = "block";
    divHT.appendChild(pEL)
}