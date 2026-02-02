function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]<>?/";

  let chars = "";
  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  if (chars === "") {
    alert("Select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * chars.length);
    password += chars[rand];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passField = document.getElementById("password");
  passField.select();
  passField.setSelectionRange(0, 99999); // for mobile
  navigator.clipboard.writeText(passField.value);
  alert("Password copied!");
}
