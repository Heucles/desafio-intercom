# Itercom technical test - [Heucles Del Bianco Pelegia Junior](https://www.linkedin.com/in/heucles-del-bianco-pelegia-junior-00a25629/)

The challenge was: 

*"Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4]. While your job won’t be to write code like this, it’s important that you still have a strong grasp of the fundamentals. Please submit code as close as possible to what you’d commit to production or push to an open source project. Some test cases are expected. We’d recommend you use whatever language you feel strongest in (it doesn’t have to be one we use)."*

***

### Prerequisites
[Node.js](https://nodejs.org/en/download/ "Node.js download links")

### Validating the project

**1.** Go into the folder in with you´ve downloaded the project (It should be the folder where you will find a **package.json** file ) and type:
```bash
npm i
```
* Now hit **Enter**.

**2.** Now you are able to run the function, within the same directory type:
```bash
npm start
```
* Now hit **Enter**.

***Important Notes:*** 
1. *The output for the execution will be printed on your console.*
2. *You need to provide a array in a textual format, otherwise it will not work.*
3. *The array can be provided as a parameter or after the program start.*

****

### Running the unit tests

**1.** Go into the folder in with you´ve downloaded the project (It should be the folder where you will find a **package.json** file ) and type:
```bash
npm i
```
* Now hit **Enter**.

**2.** Now type:

```bash
npm test
```
* Now hit **Enter**.

**3.** To generate coverage reports, type:
```bash
npm run coverage
```
* Now hit **Enter**.
****
### Syle Guide Validation

For the matter of style guide, the **[standardjs](https://standardjs.com/)** was the tool and ruleset chose for this project.

#### To validate:

**1.** Go into the folder in with you´ve downloaded the project (It should be the folder where you will find a **package.json** file ) and type:
```bash
npm run static_test
```
* Now hit **Enter**.

*If there is anything wrong with the style of the files within the project you should receive a report of it over the console output, otherwise you should get a message informing that no issues were found.*


****
### Solving the challenge

To solve this challenge three approaches were considered: 

1. Recursion with a **[for...of](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of)** loop structure: 

```javascript
function flatIt (array, flatArray) {
  let flatArrayClone = flatArray && Array.isArray(flatArray) ? flatArray.slice(0) : []

  for (let element of array) {
    if (Array.isArray(element)) {
      flatArrayClone = flatIt(element, flatArrayClone)
    } else {
      flatArrayClone.push(element)
    }
  }

  return flatArrayClone
}
```

2. Recursion with a **[Array.prototype.reduce](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)** native prototype loop structure: 


```javascript
function flatIt (array) {
  return array.reduce((flatArray, element) => {
    const items = Array.isArray(element) ? flatIt(element) : [element]
    return flatArray.concat(items)
  }, [])
}
```

3. A simple **[while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)** loop whithout **recursion**, using **[Array.slice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)** and **[Array.prototype.shift](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)** to manage the changes that needed to occur within the array in order to make it flat.

```javascript
function flatIt (array) {
  let flatArray = []
  let arrayClone = array.slice(0)
  while (arrayClone.length) {
    let item = arrayClone.shift()
    if (Array.isArray(item)) {
      arrayClone = item.concat(arrayClone)
    } else {
      flatArray.push(item)
    }
  }
  return flatArray
}

```

##### Picking one of the approaches
Using [Benchmark](https://www.npmjs.com/package/benchmark "Benchmark npm download link") which is a node.js package which helps measuring some aspects of node.js applications, and those were the results obtained over the matter of speed: 

Approach | Result
------------ | -------------
**Recursion with for..of** | 248,234 ops/sec ±1.12% (87 runs sampled)
 **Recursion with Array.reduce** | 176,713 ops/sec ±1.12% (88 runs sampled)
 **No recursion** | 166,455 ops/sec ±1.18% (87 runs sampled)

What you see implemented is based upon an average of several tests took, and by those results, the conclusion was to use the first approach: **"Recursion with for..of loop structure"**.

