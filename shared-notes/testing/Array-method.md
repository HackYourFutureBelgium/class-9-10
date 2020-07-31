# Array Methods

## 17 array methods like :pizza: :pizza: 

> Try and learn what happen to your array :smile:

### Array.isArray



```js
const items = [1, 2, 3,4];
const object = {name: "feruz", age: 50}

console.log(Array.isArray(items));
console.log(Array.isArray(object));

```

### forEach

```js
[1,2,3].forEach(function(item, index){
  console.log(item, index); 
});
```

### map

```js
const numbers = [4, 5, 6];
const doubled = numbers.map(function(item){
    return item * 2;
})
console.log(doubled);
```

### filter

```js
const number = [1, 2, 3, 5, 7];

const odd = number.filter(function(item){
    return item % 2 === 1;
})
console.log(odd);

```

### reduce

```js
const arr = [1, 2, 3];

const sum = arr.reduce(function(item, currentArr){
    return item * currentArr;
})
console.log(sum);

```

### reduceRight

```js
const arr4 = [1, 2, 3];

const sum1 = arr4.reduceRight(function(item, currentArr){
    return item / currentArr; // it work from right to left
})
console.log(sum1);
```

### some

```js
const num = [1, 2, 3, 5, 7];

const even = number.some(function(item){
    return item % 2 === 0;
})
console.log(even);
```

### every

```js
const array = [1, 2, 3, 4, -5];

const positive = array.every(function(item){
    return item > 0;
})
console.log(positive);

```

### find

```js
const id = [{id:1}, {id: 2}, {id: -1}];

const findOut = id.find(function(item){
    return item.id < 0;
})
console.log(findOut);
```

### find index

```js
const index = [1, 2, 3, 4];

const arrindex = index.findIndex(function(item){
    return item > 3;
})
console.log(arrindex);
```

### sort 

```js
const array1 = [6,3,8,9,2,1];
let sorting = array1.sort();
console.log(sorting);


const letter = ["m", "f", "h", "s", "l"];
 letter.sort();
console.log(letter);


const obj = [{a: 2,},{b: 3}, {d: 7},{c: 0}]

const sorting1 = obj.sort(function(a, b){
    return a - b;
})
console.log(sorting1);

const letter1 = ["orange", "banana", "apple", "pear"]
const letter3 = letter1.sort((a, b) => a.localeCompare(b))

console.log(letter3);

```

### fill 

```js
const arr2 = [1, 2, 3, 4, 5,];

arr2.fill(0, 1, 4); // it fill from index 1 up to index 4

console.log(arr2);

```
 
 ### splice 

```js
const numb = [1,2,3,4,5,6];

numb.splice(2, 4);
console.log(numb);


const numb1 = [1,2,3,4,5,6];

numb1.splice(2, 0, 4, 5); // replace of array
console.log(numb1);

```

### slice

```js

const numb2 = [1, 2, 3, 4, 5]

const nun = numb2.slice(2, 4); // remove the first two item and index of 4
const nun1 = numb2.slice(-2); // you need to keep the last two item
const nun2 = numb2.splice(0, 3) // keep the three first item
console.log(nun2);

```

### concat

```js
const student = ["ana", "analice", "john"];
const teacher = ["mike"]
const school = ["hackYourFuture"]

const all = student.concat(teacher, school);
const all1 = teacher.concat(student, school); // make the teacher in the first then student and school
const all2 = student.concat(1, 2); // you can use concat to push new item
console.log(all2);

```

### find max and min

```js
const MaxNum = [1,2,3,4,5]

const array = [];
const min = Math.min.apply(Math, MaxNum );
const max = Math.max.apply(Math, MaxNum );
array.push(min);
array.push(max);
return array;

console.log(minMax);

```

### array from

```js
const item = "123456"

const item1 = Array.from(item);// change to array ["1", "2", "3", "4", "5", "6"]
console.log(item1);

const item2 = item1.map(function(x){ // change of string array to actual numbers
    return Number(x);
})
console.log(item2);
```
