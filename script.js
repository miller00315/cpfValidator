console.log('Javascript carregado');

function validarCpf() {
  let cpf = document.getElementById('cpf_value').value;

  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';

  if (!cpf) return;

  let validationResult = cpfValidate(cpf);

  if (validationResult) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}

function cpfValidate(cpf) {
  if (cpf.length !== 11) return false;

  let numbers = cpf.substring(0, 9);
  let digits = cpf.substring(9);

  let sum = 0;

  for (let i = 10; i > 1; i--) {
    if (!isCharNumber(numbers.charAt(10 - i))) return false;
    sum += numbers.charAt(10 - i) * i;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result.toString() !== digits.charAt(0)) return false;

  sum = 0;
  numbers = cpf.substring(0, 10);

  for (let i = 11; i > 1; i--) {
    sum += numbers.charAt(11 - i) * i;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (result.toString() !== digits.charAt(1)) return false;

  return true;
}

function isCharNumber(c) {
  return c >= '0' && c <= '9';
}
