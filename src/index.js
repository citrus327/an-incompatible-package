export function arr_spread() {
  try {
    var arr1 = [1, 2, 3];
    var tmp = [2, 3];
    var arr2 = [1, ...tmp];
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  } catch (e) {
    console.error("Does not support Array Spread Operator");
    return false;
  }
}

export function obj_spread() {
  try {
    var obj1 = { a: 1, b: 2, c: 3 };
    var tmp = { b: 2, c: 3 };
    var obj2 = { a: 1, ...tmp };
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  } catch (e) {
    console.error("Dose not support Object Spread Operator");
    return false;
  }
}

export function promise() {
  if (
    typeof Promise !== "undefined" &&
    Promise.toString().indexOf("[native code]") !== -1
  ) {
    return true;
  } else {
    console.error("Dose not support Promise");
    return false;
  }
}

export function async_await() {
  let supportAsync = true;

  try {
    eval("async () => {}");
  } catch (e) {
    if (e instanceof SyntaxError) {
      supportAsync = false;
    }
  }

  return supportAsync;
}

export function runAll() {
  return {
    arrSpread: arr_spread(),
    objSpread: obj_spread(),
    Promise: promise(),
    asyncAwait: async_await(),
  };
}
