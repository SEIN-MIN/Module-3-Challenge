function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_+=<>?";

    let allChars = "";

    if (document.getElementById("lowercaseCheckbox").checked) {
      allChars += lowercaseChars;
    }
    if (document.getElementById("uppercaseCheckbox").checked) {
      allChars += uppercaseChars;
    }
    if (document.getElementById("numbersCheckbox").checked) {
      allChars += numbers;
    }
    if (document.getElementById("specialCharsCheckbox").checked) {
      allChars += specialChars;
    }

    if (allChars === "") {
      alert("Please select at least one character type.");
      return "";
    }

    let passwordLength = parseInt(
      document.getElementById("passwordLength").value
    );

    if (passwordLength < 8 || passwordLength > 20) {
      alert("Password length must be between 8 and 20 characters.");
      return "";
    }

    let password = "";

    // Ensure at least one character type from each category
    if (document.getElementById("lowercaseCheckbox").checked) {
      const lowercaseChar = lowercaseChars.charAt(
        Math.floor(Math.random() * lowercaseChars.length)
      );
      password += lowercaseChar;
    }
    if (document.getElementById("uppercaseCheckbox").checked) {
      const uppercaseChar = uppercaseChars.charAt(
        Math.floor(Math.random() * uppercaseChars.length)
      );
      password += uppercaseChar;
    }
    if (document.getElementById("numbersCheckbox").checked) {
      const numberChar = numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
      password += numberChar;
    }
    if (document.getElementById("specialCharsCheckbox").checked) {
      const specialChar = specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      );
      password += specialChar;
    }

    // Generate remaining characters
    while (password.length < passwordLength) {
      const randomChar = allChars.charAt(
        Math.floor(Math.random() * allChars.length)
      );
      password += randomChar;
    }

    // Shuffle the password characters
    password = password
      .split("")
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join("");

    return password;
  }

  document
    .getElementById("generateButton")
    .addEventListener("click", function () {
      const passwordInput = document.getElementById("password");
      const generatedPassword = generatePassword();
      passwordInput.value = generatedPassword;
    });