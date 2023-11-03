    document.getElementById('hash').addEventListener('submit', function(e) {
        e.preventDefault(); // Zatrzyma odswiezanie strony
        
        // Pobiera liczbe dziesietna
        var liczbaDziesietna = document.getElementById('liczbaDziesietna').value;
        
        // Przelicza liczbe na hash MD5
        var hash = md5(liczbaDziesietna);
        
        // Oblicza sume cyfr w hashu
        var sum = 0;
        for (var i = 0; i < hash.length; i++) {
            if (!isNaN(hash[i])) {  // Sprawdza czy znak jest cyfra
                sum += parseInt(hash[i]);
            }
        }
        
        // Wypisuje wynik
        document.getElementById('wynik').textContent = "Suma cyfr: " + sum;

        // Zatrzymuje event bubbling
        e.stopPropagation();
    });