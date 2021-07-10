document.getElementById('nhanN').addEventListener('click', tinhNhan);

function tinhNhan() {
    var N = +document.getElementById('numberN').value;
    var tong = 1;
    for (var i = 1; i <= N; i += 1) {
        tong = tong * i;
    }

    var divHT = document.getElementById('divHienThi');
    var pEL = document.createElement('p');

    divHT.innerHTML = "";
    pEL.innerHTML = tong;
    divHT.style.display = "block"
    divHT.appendChild(pEL);
}