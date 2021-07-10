document.getElementById("xuat").addEventListener('click', xuatN)
function xuatN() {
    var N = +document.getElementById('numberN').value;
    var divHT = document.getElementById('divHT');
    divHT.innerHTML = "";
    for (var i = 1; i <= N; i += 1) {
        if (i % 2 === 0) {
            var pChan = document.createElement('p');
            divHT.appendChild(pChan);
            pChan.style.backgroundColor = "red";
            pChan.innerHTML = i;
        } else {
            var pLe = document.createElement('p');
            divHT.appendChild(pLe);
            pLe.style.backgroundColor = "blue";
            pLe.innerHTML = i;
        }
    }
}