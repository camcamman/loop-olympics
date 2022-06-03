// # **Preliminaries**

// 1. Write a for loop that prints to the console the numbers 0 through 9.
// 2. Write a for loop that prints to the console 9 through 0.
// 3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`

for (let i = 0; i <= 9;i++){
    console.log(i)
}

for (let i = 9; i >= 0;i--){
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (let i = 0; i < fruit.length;i++){
    console.log(fruit[i])
}

// # **Bronze Medal**

// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// 3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`

var forLoopArr=[]


for (let i = 0; i <= 9;i++){
     console.log(i)
     forLoopArr.push(i)
}

console.log(forLoopArr)


for (let i = 0; i <= 100; i+=2 ){
    if(i)
    console.log(i)
}

const fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var evenfruit = []

for (let i = 0; i < fruit.length; i+=2){
    evenfruit.push(fruit1[i])
}

console.log(evenfruit)


// # **Silver Medal**

// 1. Write a loop that will print out all the names of the people of the people array
// 2. Write a loop that pushes the names into a `names` array, and the 
// occupations into an `occupations` array.
// 3. Write a loop that pushes every other name to an array starting 
//with the first person, in this case "Harrison Ford",
//and every other occupation to *another* array starting with, in this case, "Singer".

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
//   ["Harrison Ford", "Vladimir Putin"] // names
//   ["Singer", "Entertainer"] // occupations
  
for (let i = 0; i < peopleArray.length;i++) {
    console.log(peopleArray[i].name)
}

var nameArr = []
var occupationArr = []
var nameArr1 = []
var occupationArr1 = []
var forLoop = []

for (let i = 0; i < peopleArray.length;i++) {
    nameArr.push(peopleArray[i].name)
}

for (let i = 0; i < peopleArray.length;i++) {
    occupationArr.push(peopleArray[i].occupation)
}

for (let i = 0; i < peopleArray.length;i+=2) {
    nameArr1.push(peopleArray[i].name)
}

for (let i = 1; i < peopleArray.length;i+=2) {
    occupationArr1.push(peopleArray[i].occupation)
}

for (let i =0; i < 3; i++){
    forLoop[i]= []
    for (let j = 0; j < 3; j++){
        forLoop[i][j]=0
    }
}
console.log(forLoop)

for (let i =0; i < 3; i++){
    forLoop[i]= []
    for (let j = 0; j < 3; j++){
        forLoop[i][j]=i
    }
}

console.log(forLoop)

for (let i =0; i < 3; i++){
    forLoop[i]= []
    for (let j = 0; j < 3; j++){
        forLoop[i][j]=j
    }
}

console.log(forLoop)


console.log(occupationArr)
console.log(nameArr)
console.log(nameArr1)
console.log(occupationArr1)
console.log(forLoop)
