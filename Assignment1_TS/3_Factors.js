function DisplayFactors(val1) {
    var i = null;
    console.log("Factors of " + val1 + " are");
    for (i = 1; i <= val1 / 2; i++) {
        if (val1 % i == 0) {
            console.log(i);
        }
    }
}
DisplayFactors(14);
