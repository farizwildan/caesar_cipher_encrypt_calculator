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

function caesarCipherDecrypt(ciphertext, key) {
  var plaintext = "";
  for (var i = 0; i < ciphertext.length; i++) {
    var c = ciphertext.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      plaintext += String.fromCharCode((c - 65 - key + 26) % 26 + 65);
    } else if (c >= 97 && c <= 122) {
      plaintext += String.fromCharCode((c - 97 - key + 26) % 26 + 97);
    } else {
      plaintext += ciphertext.charAt(i);
    }
  }
  return plaintext;
}

function encrypt() {
  var plaintext = document.getElementById("encrypt-plaintext").value;
  var key = parseInt(document.getElementById("encrypt-key").value);
  var ciphertext = caesarCipherEncrypt(plaintext, key);
  document.getElementById("encrypt-ciphertext").value = ciphertext;
}

function decrypt() {
  var ciphertext = document.getElementById("decrypt-ciphertext").value;
  var key = parseInt(document.getElementById("decrypt-key").value);
  var plaintext = caesarCipherDecrypt(ciphertext, key);
  document.getElementById("decrypt-plaintext").value = plaintext;
}
