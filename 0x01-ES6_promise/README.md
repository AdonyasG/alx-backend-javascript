<h1 align="center"> Promises </h1>

## Description
A *[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)* is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future 

----------------------------------------------------------------------------------------------------------

## Learning Objectives

> `At the end of this project, you are expected to be able to explain to anyone, without the help of Google:`
> - Promises (how, why, and what)
> - How to use the then, resolve, catch methods
> - How to use every method of the Promise object
> - Throw / Try
> - The await operator
> - How to use an async function
---------------------------------------------------------------------------------------------------------------

##  List Of Tasks

| TaskList | Description |
| -------- | ----------- |
| [0-promise.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/0-promise.js) | `Return a Promise using this prototype function getResponseFromAPI()` |
| [1-promise.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/1-promise.js) | `Using the prototype getFullResponseFromAPI(success), return a promise. The parameter is a boolean` |
| [2-then.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/2-then.js) | `Using the function prototype function handleResponseFromAPI(promise) Append three handlers to the function: When the Promise resolves, return an object with the following attributes status: 200, body: success. When the Promise rejects, return an empty Error object For every resolution, log Got a response from the API to the consol` |
| [3-all.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/3-all.js) | `In this file, import uploadPhoto and createUser from utils.js Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.` |
| [4-user-promise.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/4-user-promise.js) | `Using the following prototype function signUpUser(firstName, lastName) {} That returns a resolved promise with this object: { firstName: value, lastName: value }` |
| [5-project-reject.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/5-project-reject.js) | `Write and export a function named uploadPhoto. It should accept one argument fileName (string).The function should return a Promise rejecting with an Error and the string $fileName cannot be processed export default function uploadPhoto(filename)` |
| [6-final-user.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/6-final-user.js) | `Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js. Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array` |
| [7-load-balancer.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/7-load-balancer.js) | `Write and export a function named loadBalancer. It should accept two arguments chinaDownload (Promise) and USDownload (Promise). The function should return the value returned by the promise that resolved the first.` |
| [8-try.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/8-try.js) | `Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number). When the denominator argument is equal to 0, the function should throw a new error with the message cannot divide by 0. Otherwise it should return the numerator divided by the denominator.` |
| [9-try.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/9-try.js) | `Write a function named guardrail that will accept one argument mathFunction (Function). This function should create and return an array named queue. When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue.` |
| [100-await.js](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/100-await.js) | `Import uploadPhoto and createUser from utils.js Write an async function named asyncUploadUser that will call these two functions and return.` |
----------------------------------------------------------------------------------------------------------------------------

### Author

[Adonyas Getachew](https://github.com/AdonyasG)[![Adonyas Getachew](https://github.com/AdonyasG/alx-backend-javascript/blob/main/0x01-ES6_promise/github-mark.png)](https://github.com/AdonyasG)