function pyramid(height) {
    let output = "";
    for(let i = 1; i <= height; i++){
        for(let j = 0; j < height - i ; j++) {
           output += " "
        }
        for(let k = 0; k < i *2 -1; k++){
            output += "*";
        }
        output += '\n'
    }
    console.log(output);
}

pyramid(5);