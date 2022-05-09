// function sum() {
//     const value1 = document.getElementById('value1').value;
//     const value2 = document.getElementById('value2').value;
//     if(value1 === '' || value2 === ''){
//       throw new Error(alert('Ambos os valores devem ser preenchidos'));
//     }
//     const result = parseInt(value1) + parseInt(value2);
//     document.getElementById('result').innerHTML = `Resultado: ${result}`;
//     document.getElementById('value1').value = '';
//     document.getElementById('value2').value = '';
//   }
//   window.onload = () => {
//     const button = document.getElementById('button');
//     button.addEventListener('click', sum);
//   }

// Usando try/catch
const holeCatcher = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (value1 === '' || value2 === '') {
    throw new Error(document.getElementById('result').innerHTML ='Ambos os valores devem ser preenchidos.');
  }
}
const numberTest = () => {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if(isNaN(value1) === false || isNaN(value2) === false){
    throw new Error('Ambos os valores devem ser números.');
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    try{
      holeCatcher();
      numberTest();
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      // document.getElementById('value1').value = '';
      // document.getElementById('value2').value = '';
    } catch (error) {
      document.getElementById('result').innerHTML = error.message;
    } finally {
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
  }
)};

