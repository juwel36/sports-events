<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Explanation: In the code provided, there is a typographical error. The variable is declared as "greeting," but it is assigned a value under the name "greetign." Due to this misspelling, when you try to log the variable "greetign," JavaScript will throw a ReferenceError because "greetign" is not defined..</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

<i>Explanation: JavaScript is a weakly typed language, so when you use the + operator to add values, it performs type coercion if the operands are of different types. In this case, 1 is a number, and "2" is a string. JavaScript will attempt to convert the string to a number and then add them together, result in 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>In this code, we first create an array food containing four emoji elements. Then, we create an object info with a property favoriteFood that initially references the first element of the food array, which is "🍕".Later in the code, we change the value of info.favoriteFood to "🍝", but this does not affect the food array in any way. The food array remains unchanged, and when we log it to the console, it will still contain the original elements "🍕", "🍫", "🥑", "🍔".</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Explanation: In the sayHi function, there is a parameter name which is expected to be passed when calling the function. However, when sayHi() is called without passing any argument, name is undefined. The template string includes this undefined value, resulting in "Hi there, undefined" being returned and logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Explanation:  The forEach method iterates over each element in the nums array. In this case, the callback function inside the forEach checks if num is truthy (i.e., not equal to 0). For the elements 1, 2, and 3 in the array, this condition is true, so the count variable is incremented for each of these elements. As a result, count becomes 3, and that value is logged to the console..</i>

</p>
</details>
