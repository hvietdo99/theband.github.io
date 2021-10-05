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
function myClass(id, color, image) {
    this.id = id;
    this.color = color;
    this.image = image;

    this.getId = function() {
        return id;
    }

    this.getColor = function() {
        return color;
    }

    this.getImage = function() {
        return image;
    }
}

myClass.prototype.name = 'Viet';

var obj1 = new myClass(1, '#fff', 'abc');
var obj2 = new myClass(2, '#aaa', 'def');
var obj3 = new myClass(3, '#ccc', 'ghi');
var obj4 = {
    id: 4,
    color: '#bbb',
    image: 'mno'
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
    5,
    6
];

// var n = myArray.length;
// for (var i=0; i<n; i++){
//     if(Array.isArray(myArray[i])){
//         var m = myArray[i].length;
//         for (var j=0; j<m; j++){
//             console.log(myArray[i][j]);
//         }
//     } else console.log(myArray[i]);
// }

// for (var key of myArray){
//     if(Array.isArray(key)){
//         for (var key1 of key){
//             console.log(key1);
//         } 
//     } else console.log(key);
// }

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

    for(var i=0; i<n; i++) {
        result = result.concat(callback(this[i], i));
    }

    return result;
}

var newCourses = courses.map2((item, cv) => `<h2>${item}<\\h2>`);
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
    n = this.length;
    
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
    n = this.length;

    for (var i=0; i<n; i++) {
        if (callback(this[i], i)) {
            return true;
        }
    }

    return false;
}

var some1 = courses.some2((item, cv) => {
    return typeof item === 'string';
})
console.log(some1);