import './style.css';

window.checkAge = function () {
  const input = document.getElementById('yearInput').value;
  const result = document.getElementById('result');
  const currentYear = new Date().getFullYear();
  const year = parseInt(input);

  if (isNaN(year) || year < 1000 || year > 3000) {
    result.innerText = 'Tahun tidak valid!';
    return;
  }

  const age = currentYear - year;
  if (age < 0) {
    result.innerText = `Kamu akan lahir dalam ${Math.abs(age)} tahun lagi.`;
  } else if (age === 0) {
    result.innerText = 'Kamu lahir tahun ini!';
  } else {
    result.innerText = `Umurmu sekitar ${age} tahun.`;
  }
};
