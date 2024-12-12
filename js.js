let kelime = "yazilim";
let gizliKelime = "_".repeat(kelime.length);

let hak = 10;

while (hak > 0 && gizliKelime !== kelime) {
    console.log(gizliKelime);
    let tahmin = prompt("Bir harf tahmin edin:").toLowerCase();

    if (kelime.includes(tahmin)) { // Not : İncludes değerin olup olmadığını kontrol eder.

        let yeniKelime = "";
        for (let i = 0; i < kelime.length; i++) {
            yeniKelime += kelime[i] === tahmin ? tahmin : gizliKelime[i];
        }
        gizliKelime = yeniKelime;
        console.log("Doğru tahmin!");
    } else {
        hak--;
        console.log("Yanlış tahmin!");
    }
}

if (gizliKelime === kelime) {
    console.log("Tebrikler, kelimeyi doğru tahmin ettiniz!");
} else {
    console.log("Haklarınız bitti. Kelime: " + kelime);
}
