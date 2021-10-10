var a = Math.random();
var b = Math.random();

// if (b > a) {
//     prompt('Xac nhan do tuoi: ');
//     console.log('Ok!');
// } else {
//     confirm('Ban da du 18 tuoi?');
//     console.log('Da xac nhan!');
// }

// setInterval(() => {
//     console.log(Math.random())
// }, 1500);

var c = ['Js', 'PHP', 'C++', 'Python'];
c.push('Python', 'Dart');
c.unshift('NodeJs');
c.splice(0,2,'Java');
for (var value of c) {
    console.log(value);
}

var string = 'ok dokey';
//  string.length;
//  string.indexOf;
//  string.replace();
//  string.search();
//  string.toLowerCase();
//  string.toUpperCase();


// Giong khai bao Class trong cac ngon ngu lap trinh OOP khac
function myClass() {
    this.id = arguments[0];
    this.color = arguments[1];
    this.image = arguments[2];
}

myClass.prototype.getId = function() {
    return this.id;
}

myClass.prototype.getColor = function() {
    return this.color;
}

myClass.prototype.getImage = function() {
    return this.image;
}

myClass.prototype.name = 'Viet';

var obj1 = new myClass(1, '#fff', 'abc');
var obj2 = new myClass(2, '#aaa', 'def');
var obj3 = new myClass(3, '#ccc', 'ghi');
obj1.getId = function() {
    return this.id;
}

var objlist = [];
objlist.push(obj1);
objlist.push(obj2);
objlist.push(obj3);
var objlist2 = objlist.slice(1);

// console.log trong Js = printf trong C
n = objlist.length;
for (var i=0; i<n; i++){
    console.log(objlist[i])
}

var myArray = [
    [1,2,3],
    [4,5],
    [6,7,8],
    [9,10,11,12],
    13,
    14
];
var myFlatA = myArray.reduce((result, cv) => result.concat(cv));

var formValues = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]


var monsters = [
    {
        name: 'Cá heo',
        attack: 50,
        speed: 100,
        hitpoint: 100,
    },
    {
        name: 'Khủng long',
        attack: 150,
        speed: 80,
        hitpoint: 180,
    },
]
var kq = monsters.filter(function(item) {
    return item.attack === 150;
})
console.log(kq)


var depthA = [[3, 4], 1, 2, [7, 8, 9], 5, 6];
n = depthA.length;
var flatA = [];
for (var i=0; i<n; i++) {
    flatA = flatA.concat(depthA[i]);
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby PHP',
    'C++',
    123
]

// Define a new map2() method for Array constructor !!
Array.prototype.map2 = function(callback) {
    n = this.length;
    var result = []; 

    for (var i=0; i<n; i++) {
        result.push(callback(this[i], i));
    }

    return result;
}

var newCourses = courses.map2(function(item, cv) {
    return `<h2>${item}</h2>`;
});
var myArray2 = [];
var x = myArray.map2((item, ci) => {
    myArray2 = myArray2.concat(item);
})
console.log(newCourses.join(''))

// Define a new filter2() method for Array constructor !!
Array.prototype.filter2 = function(callback) {
    n = this.length;
    var result = [];

    for (var i=0; i<n; i++){
        if (callback(this[i], i)){
            result.push(this[i]);
        }
    }

    return result;
}

var find = courses.filter2((item, cv) => {
    return typeof item === 'string' && item.includes('PHP');
})
console.log(find);

// Define a new find2() method for Array constructor !!
Array.prototype.find2 = function(callback) {
    n = this.length;
    var result = [];

    for (var i=0; i<n; i++){
        if (callback(this[i], i)){
            result.push(this[i]);
            return result;
        }
    }

    return undefined;
}

var find1 = courses.find2((item, cv) => {
    return typeof item === 'string' && item.includes('PHP');
})
console.log(find1);

// Define a new every2() method for Array constructor !!
Array.prototype.every2 = function(callback) {
    var n = this.length;
    
    for (var i=0; i<n; i++) {
        if (!callback(this[i], i)) {
            return false;
        }
    }

    return true;
}

var every1 = courses.every2((item, cv) => {
    return typeof item === 'string';
})
console.log(every1);

// Define a new some2() method for Array constructor !!
Array.prototype.some2 = function(callback) {
    var n = this.length;

    for (var i=0; i<n; i++) {
        if (callback(this[i], i)) {
            return true;
        }
    }

    return false;
}

var some1 = courses.some2((item, ci) => {
    return typeof item === 'string';
})
console.log(some1);

// Define a new forEach2() method for Array constructor !!
Array.prototype.forEach2 = function(callback) {
    var n = this.length;
    
    for (var i=0; i<n; i++) {
        callback(this[i], i);
    }

    return undefined;
}

var myArr = new Array(10, 20);
console.log(myArr);

// Define a new forEach2() method for Array constructor !!
Array.prototype.reduce2 = function(callback, result) {
    var i = 0;
    var n = this.length;
    if (arguments.length < 2) {
        var result = this[0];
        i = 1;
    }

    for (   ; i<n; i++) {
        result = callback(result, this[i], i, this);
    }
    
    return result;
}

var courseslist = [
    {
        name: 'Js',
        coin: 1000
    },
    {
        name: 'PHP',
        coin: 2000
    },
    {
        name: 'C++',
        coin: 400
    },
    {
        name: 'Python',
        coin: 700
    }
];
var coin = 'coin';

var totalcoin = courseslist.reduce2((result, item) => {
    if (item.hasOwnProperty(coin)) {
        return result + item.coin; 
    }   
}, 0);
console.log(totalcoin.toString());

var test = document.querySelector('h1#testcode');
test.setAttribute('title', 'OKEY!!')
console.log(test);

var test = document.querySelector('div');
console.log(test);

function Array2() {
    var n = arguments.length;
    this.array = [];

    for (var i=0; i<n; i++) {
        this.array.push(arguments[i]);
    }
}

var myA = new Array2('hello', 2, 3, 4);

// onclick is a method() that receives function as callback, and then put event object as a parameter of
// callback function !
var span = document.querySelector('span');
span.onclick = function(e) {
    console.log(e.target);
}

var anchor = document.querySelectorAll('.header > .nav > ul > li');
var ul = document.querySelector('ul');

function printf() {
    console.log('Hello! I\'m Viet');
}
ul.addEventListener('click', printf)

var json = '[{"name": "Js", "coin": 1000}, {"name": "PHP", "coin": 2000}, {"name": "Python", "coin": 700}]';

for (var i=0; i<anchor.length; i++) {
    anchor[i].onclick = function(e) {
        e.stopPropagation();
        if (e.target.href == "https://www.google.com/") {
            e.preventDefault();     
            console.log(typeof JSON.parse(json))
        }
        console.log(e.target);
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(Math.random())
        }, ms);
    })
}

sleep(1000)
    .then(function(data) { // Dinh nghia ham resolve
        console.log(data);
        return sleep(1000);
    }) 
    .then(function(data) {
        console.log(data);
        return sleep(1000);
    })
    .then(function(data) {
        console.log(data);
        return sleep(1000);
    })
    .catch() // Dinh nghia ham reject
    .finally(function() {
        console.log('DONE!!!');
    })