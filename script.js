const length = document.getElementById("length")
const password = document.getElementById("password")
const message = document.getElementById("message")

const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const number = document.getElementById("number")
const symbols = document.getElementById("symbols")

const generate = document.getElementById("generate")
const copy = document.getElementById("copy")

//Generate Password
generate.onclick = function () 
{
    let chars = ""
    if (uppercase.checked) 
        {
           chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }

    if (lowercase.checked) 
        {
           chars += "abcdefghijklmnopqrstuvwxyz"
        }

    if (number.checked) 
        {
           chars += "0123456789"
        }

    if (symbols.checked) 
        {
          chars += "!@#$%^&*"
        }

    // Check if any option is selected
    if (chars === "") 
        {
          message.innerText = "Please select at least one option!"
          password.value = ""
        return
        }

    let result = ""
    let passLength = Number(length.value)

    // Validate password length
    if (passLength < 4 || passLength > 32) 
        {
        message.innerText = "Password length must be between 4 and 32!"
        return
        }

    // Generate random password
    for (let i = 0; i < passLength; i++) 
        {
        let random = Math.floor(Math.random() * chars.length)
        result += chars[random]
        }

    password.value = result
    message.innerText = ""
}

// Copy Password
copy.onclick = function () 
{

    if (password.value === "") 
        {
        message.innerText = "Generate a password first!"
        return
        }

    navigator.clipboard.writeText(password.value)
        .then(function () 
        {
            message.innerText = "Password copied successfully!";
        })
        .catch(function () 
        {
            message.innerText = "Copy failed. Please copy manually.";
        })
}