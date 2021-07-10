document.getElementById('tinhTong').addEventListener('click', tinhTongN);
function tinhTongN() {
    var number = +document.getElementById('number').value;
    var tong = 0;
    for (var i = 1; i <= number; i++) {
        tong = tong + i;
    }

    var pEL = document.createElement('p');
    var divHT = document.getElementById('divHienThi');

    divHT.innerHTML = "";
    pEL.innerHTML = tong;
    divHT.appendChild(pEL);

    divHT.style.display = "block";
}