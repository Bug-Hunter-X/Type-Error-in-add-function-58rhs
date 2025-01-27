function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Both arguments must be numbers');
  }
}

let result1 = addSafe(1, 2); // Correct usage
let result2 = addSafe("hello", 2); // Error handling

//Type Assertion
let result3 = add(Number("1"), 2); //This works because the string is explicitly converted to a number.
console.log(result1,result3); //output:3 3 