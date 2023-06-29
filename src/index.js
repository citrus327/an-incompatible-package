export const arrSpread = (suppress) => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, ...[2, 3]];
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    suppress && console.error("Does not support Array Spread Operator");
    return false;
  }
};

export const objSpread = (suppress) => {
  const arr1 = { a: 1, b: 2, c: 3 };
  const arr2 = { a: 1, ...{ b: 2, c: 3 } };
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
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
