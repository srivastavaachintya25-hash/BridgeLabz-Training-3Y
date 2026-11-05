// try catch finally

try {
    console.log("program started");
    let result = x + 10;
    console.log(result);
}
catch(error) {
    //throw new exception
    throw new Error("Password is not valid");
    console.log(error.message);
}
console.log("program ended");