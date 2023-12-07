// Heap and Stack Memory

// Stack Memory

a = 123;
b = a;
b = 66;
console.log(a);
console.log(b);

// Heap Memory

let obj1 = {
    name : 'Rasel',
    address : 'Bhaktapur'
}

let obj2 = obj1;
obj2.address = 'Dhulikhel'

console.log(obj1);
console.log(obj2);