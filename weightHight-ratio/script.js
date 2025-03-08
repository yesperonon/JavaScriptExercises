function convert() {
    let weight = parseFloat(document.getElementById('weightBox').value);
    let height = parseFloat(document.getElementById('heightBox').value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter a valid number!");
        return;
    }

    height = height / 100; // converts cm to meters
    let BMI = weight / (height * height);
    document.getElementById('result').value = BMI.toFixed(2);
    
       if (BMI < 18) {
        alert("You are underweight, you must hit the gym and gain muscles!");
    }
    else if (BMI >= 18 && BMI <= 24.9) {
        alert("You have a normal weight, you can keep doing what you're doing.");
    }
    else if (BMI >= 25 && BMI <= 29.9){
        alert("You entered the overweight category, you need to pay attention to your weight.");
    }
    else if (BMI >= 30 && BMI <= 34.9) {
        alert("You've entered obesity class one. BMI recommends starting a workout.");
    }
    else if (BMI >= 35 && BMI <= 39.9){
        alert("You have entered obesity class two, BMI highly recommends starting a workout.");
    }
    else {
        alert("You have entered obesity class three, BMI highly urges swift weight management.");
    }
}
