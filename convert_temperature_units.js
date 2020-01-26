function calculate_fahrenheit (num) {
    return num * (9/5);
}

function display_fahrenheit (num) {

    let fahrenheit = calculate_fahrenheit(num) + 32;
    
    return `In Fahrenheit: ${fahrenheit}`;
}

function calculate_celsius (num) {
    return (num - 32);
}

function display_celsius (num) {

    let celsius = calculate_celsius(num) * (5/9);

    return `In Celsius: ${celsius}`;
}

console.log(display_fahrenheit(10));    // In Fahrenheit: 50
console.log(display_fahrenheit(20));    // In Fahrenheit: 68
console.log(display_celsius(77));       // In Celsius: 25
console.log(display_celsius(50));       // In Celsius: 10