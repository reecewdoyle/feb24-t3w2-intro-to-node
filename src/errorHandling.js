
try {
    let someBrokenNUmber = 10 / "banana";
    
    if (Number.isNaN(someBrokenNUmber)) {

        throw new Error("New error: not a number!");
        throw "Not a number, woops!";
    
    }

    console.log(someBrokenNUmber);
} catch (error) {
    console.log("Tried tp divide by zero");    
    console.log(error);
}