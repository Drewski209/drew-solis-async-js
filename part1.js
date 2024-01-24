// Declares the string is called name 
const name = "Miriam"

//Declares another string that uses name above
const greeting = `Hello, my name is ${name}!`;

//Outputs the greeting to the Javascript console
console.log(greeting);

// Sets the max prime number to 1000000
const MAX_PRIME = 1000000;

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n === 0 ) {
            return false;
        }
        return n > 1;
    }
}

//This function chooses a random number out of the prime
const random = (max) => Math.floor(Math.random() * max);

//Function generates the prime numbers
function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

const quota = document.querySelectorAll("#quota");
const output = document.querySelectorAll("#output");

//Outputs the text and the generated prime numbers 
document.querySelector("#generate").addEventListener("click". ()=> {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes`;
});

//Reloads the program when the button is clicked 
document.querySelector("#reload").addEventListener("click", () => {
    document.location.reload();
});

const log = document.querySelector(".event-log");

// When the button is clicked, the function preforms a xhr request
document.querySelector("#xhr").addEventListener("click", ()=> {
    log.textContent = "";

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("#loadend", () => {
        log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
    });
    
    xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");

    xhr.send();
    log.textContent =`${log.textContent}STARTED XHR REQUEST\n`
});

// When the reload button is clicked, the program reloads 
document.querySelector("#reload").addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
});

//Adds one to the input
function doStep1(init) {
    return init + 1;
} 

//Adds two to the input
function doStep2(init) {
    return init + 2;
} 

//Adds three to the input
function doStep3(init) {
    return init + 3;
} 

//Adds all previous functions together to output a result 
function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep1(result);
    result = doStep1(result);
    console.log(`result: ${result}`);
}

doOperation();

function doStep1(init,callback) {
    const result = init + 1;
    callback(result;)
}
function doStep2(init,callback) {
    const result = init + 2;
    callback(result;)
}
function doStep3(init,callback) {
    const result = init + 3;
    callback(result;)
}

function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1,(result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            })
        })
    })
}