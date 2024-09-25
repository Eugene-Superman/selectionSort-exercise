const numbers = [99, 44, 6, 2, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j
            }
        }
        const smallestValue = array[smallestIndex];
        array[smallestIndex] = array[i]
        array[i] = smallestValue
    }

    return array;
}

console.log(selectionSort(numbers));