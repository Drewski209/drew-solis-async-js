// The setTimeOut() function takes an argument on a function and starts a timer given a set delay
//When the time expires, it calls the given function and when the expires , it calls the given function
//This functions counts in milliseconds (1 second = 1000 milliseconds) 

//This function has a delay of 1000 milliseconds/ 1 second
function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

//The Promise() constructor takes a single function and makes it into an argument
//The function becomes an "executor" that takes two arguments: resolve and reject 
    //If the function throws ann error, the reject is called 
    //if the function succeeds, it calls resolve

// Inside the executor for this promise it looks for the conditions:
    //Checks the delay is not negative and throws an error if it is 
    //Passing the "Wake up!" message when the function is resolved in the setTimeout() function
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("Alarm delay must not be negative");
      }
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }

