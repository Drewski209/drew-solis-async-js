//This makes a request to the API 
const fetchPromise = fetch ("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

//When and if the fetch operation is successful, the promise will call our handler passing a response object containing the servers response from he request 
fetchPromise.then((Response) => {
    //Logs a message of when the response is received
    console.log(`Received response: ${response.status}`);
});

// There are five responses classes that can be received after a request
//Informational Responses (100-199)
//Successful Responses (200-299)
//Redirection Messages (300-399)
//Client Error Responses (400-499)
//Server Error Responses (500-599)

//Makes a request to the API
const fetchPromiseOne = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

//After the data from the API is requested the JSON handler logs the data from the API
fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
        console.log(data[0].name);
    });
});

const fetchPromiseTwo = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

//A rewriting of the previous function, 
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });
  
// The catch() function at the end of is called if the asynchronous function fails. 
//This allows you call several consecutive functions and a single place to handle errors should they come
    fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });

// Promises can be in three states:

  // Pending: This the call that is made while the asynchronous function is being called. 
  //As the name implies the function has not succeeded or failed yet 

  //Fulfilled: The asynchronous function succeeded and it then() handler is called
  
  //Rejected: The asynchronous function failed and its catcher() handler was called

//The Promise.all() function is to take a array of promise and group them into a single promise 
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });

// If all promises in the array are fulfilled, the then() handler is called with an array of responses, 
//in the same order that the promises were passed in the Promise.all() function

//If any of the promises were rejected in the array, the catch() handler is called with the error thrown by the 
//promise(s) that were rejected


//When a certain amount of promises need to be fulfilled, the Promise.any() function is better to use.
//Unlike the Promise.all(), promises are fulfilled as soon as any of the array of the promises are fulfilled or rejects if ALL of them are rejected  
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });


// The "async" keyword at the front of a function makes into an async function
async function myFunction() {
  //Place code here
}


//The "await" keyword placed before a call to a function makes the code wait until the promise is settled, then the value is thrown  
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}
fetchProducts();
