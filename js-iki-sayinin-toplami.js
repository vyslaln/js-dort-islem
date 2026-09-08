//Burada konsola uygulamayı tanıtıyoruz.
console.log("Bugün kullanıcıdan 2 sayı istediğimiz ve seçim menüsünde seçilen işlemlerden biriyle yapılacak olan matematiksel işlem yapma uygulaması yapıyoruz.");
//Gönder butonu
const islemYapBtn = document.getElementById("islemYapBtn");

islemYapBtn.addEventListener("click", function(){

    //1. sayı
    const s1 = document.getElementById("sayi1").value;

    //2. sayı
    const s2 = document.getElementById("sayi2").value;

    //işlem seçimi
    let dortIslem = document.getElementById("dortislem").value;

    //toplam
    let sonuc;

    //Burada inputların boş mu dolu mu kontrolü yapılıyor
    if(s1.trim()==="" || s2.trim()===""){
        alert("Lütfen 1. ve 2. Sayıları Giriniz!");
    } else {
            console.log("Buton çalışıyor")

            //Burada işlem seçimlerine göre ekrana yazdıracağımız sonucu tanımlıyoruz.

            //Toplama İşlemi
            if(dortIslem === "toplama"){
                sonuc = Number(s1) + Number(s2);
            }

            //Çıkarma İşlemi
            else if(dortIslem === "cikarma"){
                sonuc = Number(s1) - Number(s2);
            }

            //Çarpma İşlemi
            else if(dortIslem === "carpma"){
                sonuc = Number(s1) * Number(s2);
            }

            //Bölme İşlemi
            else if(dortIslem === "bolme"){
                sonuc = Number(s1) / Number(s2);
            }

            else{
                alert("İşleminiz seçmediniz veya değer girmediniz. Lütfen bu alanları kontrol ediniz.");
            }
        }
            //Burada kullanıcının girdiği sayılar, seçtiği işlem ve işlemin sonucunu ekrana yazdırıyoruz.
            document.getElementById("sonuc").innerHTML = "Girmiş Olduğunuz Sayılar : " + s1 + "<br>" + s2 + "<br>" + "<br> Seçmiş Olduğunuz İşlem : " + dortIslem + "<br> İşleminizin Sonucu : " + sonuc;
})

//TEST

