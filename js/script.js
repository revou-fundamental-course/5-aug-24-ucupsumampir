document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('bmiForm');
    var output = document.getElementById('output');
    var resetButton = document.getElementById('resetButton');
    
    // Event listener untuk form submit
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari submit default
        main();
    });

    // Event listener untuk tombol reset
    resetButton.addEventListener('click', function() {
        // Mengembalikan nilai input ke kosong
        document.getElementById('Height').value = '';
        document.getElementById('Weight').value = '';
        output.innerHTML = 'Berhasil di Reset'; // Menghapus hasil output
    });
});

function main() {
    var height = parseFloat(document.getElementById('Height').value);
    var weight = parseFloat(document.getElementById('Weight').value);
    var output = document.getElementById("output");

    // Check if the input values are valid numbers and positive
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        output.innerHTML = 'Tolong isi form Tinggi dan Berat badan kamu';
        return false;
    }

    // Calculate BMI
    var bmi = weight / (height / 100) ** 2;
    bmi = bmi.toFixed(2);

    // Determine the BMI category
    var message = 'BMI kamu : <b>' + bmi + '</b><br>';
    if (bmi > 0 && bmi <= 15) {
        message += 'Kamu <span>Sangat Kekurangan Berat Badan</span>.';
    } else if (bmi > 15 && bmi <= 16) {
        message += 'Kamu <span>Kekurangan Berat Badan</span>.';
    } else if (bmi > 16 && bmi <= 18.5) {
        message += 'Kamu <span>Hampir Memenuhi Berat Badan</span>.';
    } else if (bmi > 18.5 && bmi <= 25) {
        message += 'Kamu <span>Telah Memenuhi Berat Badan Normal</span>.';
    } else if (bmi > 25 && bmi <= 30) {
        message += 'Kamu <span>Kelebihan Berat Badan Sangat Sedikit</span>.';
    } else if (bmi > 30 && bmi <= 35) {
        message += 'Kamu <span>Kelebihan Berat Badan Sedikit</span>.';
    } else if (bmi > 35 && bmi <= 40) {
        message += 'Kamu <span>Kelebihan Berat Badan Agak Banyak</span>.';
    } else if (bmi > 40 && bmi <= 45) {
        message += 'Kamu <span>Kelebihan Berat Badan Banyak</span>.';
    } else if (bmi > 45 && bmi <= 50) {
        message += 'Kamu <span>Kelebihan Berat Badan Agak Banyak</span>.';
    } else if (bmi > 50 && bmi <= 60) {
        message += 'Kamu <span>Kelebihan Berat Badan Sangat Banyak</span>.';
    } else if (bmi > 60) {
        message += 'Kamu <span>Kelebihan Berat Badan Super Banyak</span>.';
    }

    output.innerHTML = message;
}
