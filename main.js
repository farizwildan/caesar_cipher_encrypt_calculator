function caesarCipherEncrypt(plaintext, key) {
  var ciphertext = "";
  for (var i = 0; i < plaintext.length; i++) {
    var c = plaintext.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      ciphertext += String.fromCharCode((c - 65 + key) % 26 + 65);
    } else if (c >= 97 && c <= 122) {
      ciphertext += String.fromCharCode((c - 97 + key) % 26 + 97);
    } else {
      ciphertext += plaintext.charAt(i);
    }
  }
  return ciphertext.toUpperCase();
}

function encrypt() {
  var plaintext = document.getElementById("plaintext").value;
  var key = parseInt(document.getElementById("key").value);
  var ciphertext = caesarCipherEncrypt(plaintext, key);
  document.getElementById("ciphertext").value = ciphertext;
}