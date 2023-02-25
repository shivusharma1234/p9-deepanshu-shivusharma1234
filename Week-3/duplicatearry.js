const arr1 = ['a', 'a'];
const arr2 = ['a', 'b'];

function containsDuplicates(array) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

console.log(containsDuplicates(arr1)); // 👉️ true

console.log(containsDuplicates(arr2)); // 👉️ false
