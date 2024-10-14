testArray = [1, 20, 22, 24, 5];
testArray2 = ['John', 'Mary', 'Phill'];

function arraySwap(inputArray){

    const lastValue = inputArray[inputArray.length - 1];
    const firstValue = inputArray[0];

    inputArray[0] = lastValue;
    inputArray[inputArray.length - 1] = firstValue;

    console.log(inputArray);
}

arraySwap(testArray);

arraySwap(testArray2);

