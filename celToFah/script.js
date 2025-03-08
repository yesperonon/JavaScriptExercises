function convert() {
    var celsius = document.getElementById('celsiusBox').value;
    
    //ChatGPT said to add this. will learn more about it later.
    if (isNaN(celsius) || celsius === '') {
    alert("Please enter a valid number!");
    return;
    }
    
    var fahrenheit = (9 / 5 * parseFloat(celsius)) + 32;
    document.getElementById('fahrenheitBox').value = fahrenheit;
    
    }