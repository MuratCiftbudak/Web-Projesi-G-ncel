// main.js dosyası, web projesinin işlevselliğini sağlamak için kullanılacaktır.

// DOM içeriği yüklendiğinde çalışacak bir olay dinleyicisi ekleyelim
document.addEventListener('DOMContentLoaded', function() {
    // Örnek: Bir butona tıklandığında bir mesaj göster
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Butona tıkladınız!');
        });
    }
});