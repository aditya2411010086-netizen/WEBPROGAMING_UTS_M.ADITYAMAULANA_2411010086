function hitung() {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    const operasi = document.getElementById('operasi').value;
    const hasilDiv = document.getElementById('hasil');

    if (isNaN(angka1) || isNaN(angka2)) {
        hasilDiv.innerHTML = "Harap masukkan angka yang valid!";
        hasilDiv.style.color = "#d9534f";
        hasilDiv.style.background = "#fdecea";
        return;
    }

    let hasil = 0;
    switch (operasi) {
        case 'tambah':
            hasil = angka1 + angka2;
            break;
        case 'kurang':
            hasil = angka1 - angka2;
            break;
        case 'kali':
            hasil = angka1 * angka2;
            break;
        case 'bagi':
            if (angka2 === 0) {
                hasilDiv.innerHTML = "Tidak dapat membagi dengan nol!";
                hasilDiv.style.color = "#d9534f";
                hasilDiv.style.background = "#fdecea";
                return;
            }
            hasil = angka1 / angka2;
            break;
    }

    hasilDiv.style.color = "#00796b";
    hasilDiv.style.background = "#e0f7fa";
    hasilDiv.innerHTML = `Hasil: ${hasil}`;
}