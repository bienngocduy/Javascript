function myfunc (a){
  a.make = 'xxx';
}
let c;
let  b = {make: 'Honda', model: 'Accord', year: 1998};
myfunc(b);
c= b.make;
console.log(c);