# Objects

## Let's Study Object And Object Methods with me :smile: 

### object literal

```js
let feruz = {
    name: 'feruz',
    age: 50,
    city: ['Asmera', 'kortrijk']

}

console.log(feruz.name);  // using dot
console.log(feruz['age']);  // using bracket
let country = feruz.city;    // first declare then print
console.log(country);

feruz.job = 'web developer'; // add value
feruz.age = 60; // change the value
delete feruz.city; // delete value
console.log(feruz);

```

### new object syntax

```js
let ana = new Object();

ana.name = 'ana';
ana.age = 40;
ana.job = 'designer';
ana['city'] = 'Brussels';

console.log(ana);

```

### objects and methods

```js
// function which is create inside object called method.

let Dana = {
    name: 'dana',
   birthDate: 1994,
    city: ['Asmera', 'kortrijk'],
    calcAge : function(){
        const currentYear = 2020;
        return currentYear - this.birthDate; //use this syntax for calling value inside the object 
                                            //(this keyword means current value or value inside the object)
    }
}
console.log(Dana.calcAge());

let Hana = {
    name: 'dana',
    city: ['Asmera', 'kortrijk'],
    calcAge : function(birthDate){ // use the argument
        const currentYear = 2020;
        return currentYear - birthDate;
    }
}
console.log(Hana.calcAge(1992)); // give argument value

```


### function constructor 

```js

function Person(name, age , city ){ 
// function name of function constructor must be start in capital letter

    this.name = name;
    this.age = age;
    this.city = city;
    this.birthDate = function(){
        const currentYear = 2020;
        return currentYear - this.age
    };

}
let mike = new Person('mike', 30, 'London');
let daniel = new Person('daniel', 45, 'paris');

console.log(mike);
console.log(mike.birthDate()); // methods print
console.log(daniel);
console.log(daniel.birthDate());

```

### function constructor and prototype

```js

// prototype have inheritance behaviour it help us to avoid rewrite of many codes

function Women(name, age , city ){ 
    this.name = name;
    this.age = age;
    this.city = city;
    
};

Women.prototype.birthDate = function(){
        const currentYear = 2020;
        return currentYear - this.age;
}

let jenifer = new Person('jenifer', 30, 'London');
let wendy = new Person('wendy', 20, 'paris');


console.log(jenifer.birthDate()); 
console.log(wendy.birthDate());
 
 ```

### object.create

```js

let baby = {
     age: function(){ 
       return 2020 - this.birthDate ; 
    }
}

// create object inherited from prototype object

let baby1 = Object.create(baby);

baby1.name = "alex";
baby1.birthDate = 2017;

console.log(baby1);
console.log(baby1.age());

// create object directly as argument

let baby2 = Object.create(baby,{
    name: {value: 'merry' },
    birthDate :{value: 2019 }
    
})

console.log(baby2);
console.log(baby2.age());

```

### The “for…in” loop in object

```js

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    
   console.log( key );  
    
    console.log( user[key] ); // John, 30, true
  }

  let users = {
    name: "John",
    surname: "Smith"
  };
  users.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  
  for (let prop in users) {
    console.log( prop ); // name, surname, age
  }

  let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
  for (let code in codes) {
    console.log( +code ); // 49, 41, 44, 1
  }


  var person = {fname:"John", lname:"Doe", age:25}; 

    let text = ""
    for (x in person) {
      text += person[x] + " ";
    }
   console.log(text);

```

### convert object in array

```js

   // ES6 object.key()
   // we get only the property not value
   
   const Book = {
    Name : "Revolution 2020",
    Author : "Chethan Bhagat"
  };
  const propertyBook = Object.keys(Book);
  
  console.log(propertyBook);
  
  
  
  //ES7 Using Object.values()
  // get the value of object in the form of array
  
  const Books = {
    Name : "Revolution 2020",
    Author : "Chethan Bhagat"
  };
  
  const propertyBooks = Object.keys(Books);
  const propertyValues = Object.values(Books);
  
  console.log(propertyBooks);
  console.log(propertyValues);


  // ES7: Using Object.entries()
  // geting value of key and value
  
  const Booked = {
    Name : "Revolution 2020",
    Author : "Chethan Bhagat"
  };
  const entries = Object.entries(Booked);
  console.log(entries);
  for(i=0;i<entries.length;i++)
  {
    console.log(entries[i]);
  }

  // Using map function
  
  const Bok = {
    Name : "Revolution 2020",
    Author : "Chethan Bhagat"
  };
  var array = Object.keys(Bok)
        .map(function(key) {
          return [key,Bok[key]]
          });
  console.log(array);

  ```
