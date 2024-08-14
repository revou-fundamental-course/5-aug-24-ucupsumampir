// ini javascript

console.log('linked sucsses');

function formValidate() {
    
    let inputTinggi = document.getElementById('input-tinggi').value;
    let inputBerat = document.getElementById('input-berat').value;

   
    console.log(`isi inputan tinggi: ${inputTinggi}`);
    console.log(`isi inputan berat: ${inputBerat}`);

    (inputTinggi == '' || inputBerat == '')
        ? alert('Inputan Tinggi Badan Kosong!')
        : result(inputTinggi, inputBerat);
    console.log('form submitted');
}

function result(inputTinggi, inputBerat) {
    let convertCmToM = inputTinggi * 100;
    let resultTinggi = Math.pow(convertCmToM, 2);
    console.log(inputBerat / resultTinggi);
}