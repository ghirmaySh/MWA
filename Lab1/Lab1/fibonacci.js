const fibonacci = function (num) {
    if (num < 0)
        return 0;

    if (num <= 2)

        return 1;

    else
        return fibonacci(num - 1) + fibonacci(num - 2);

}
console.log("Fibonacci of 30 is ", fibonacci(30));
console.log("Fibonacci of -10 is ", fibonacci(-10));

