export var arrSpread = (suppress) => {
  var arr1 = [1, 2, 3];
  var tmp = [2, 3];
  var arr2 = [1, ...tmp];
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    suppress && console.error("Does not support Array Spread Operator");
    return false;
  }
};

export var objSpread = (suppress) => {
  var obj1 = { a: 1, b: 2, c: 3 };
  var tmp = { b: 2, c: 3 };
  var obj2 = { a: 1, ...tmp };
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  } else {
    suppress && console.error("Dose not support Object Spread Operator");
    return false;
  }
};

export function runAll() {
  return {
    arrSpread: arrSpread(true),
    objSpread: objSpread(true),
  };
}
