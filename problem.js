
function passwordCheck(password, userInput) {

    if (userInput === password) {
        console.log("Access Granted!");

    } else if (userInput === "forgot") {
        console.log("Here is a hint");
    } else if (userInput === "reset") {
        console.log("Let's reset your account");
    } else {
        console.log("Access Denied!");
    }

    if (password.length < 5) {
        console.log("Your password is too short!");
        return;
    }

    if (password === "forgot" || password === "reset") {
        console.log("This password you set should not be used because it glitches the system");
    }
}