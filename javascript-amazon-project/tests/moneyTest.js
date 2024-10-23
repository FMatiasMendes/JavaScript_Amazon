//to import from money.js
import {formatCurrency} from '../scripts/utils/money.js';

console.log('---test suite: formatCurrency---');

//test case
console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95'){
    console.log('passed');
}
else{
    console.log('FAILED!!!');
}

//edge case
console.log('works with 0');

if (formatCurrency(0) === '0.00'){
	console.log('passed');
}
else{
    console.log('FAILED!!');
}

//edge case
console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01'){
	console.log('passed');
}
else{
    console.log('FAILED!!!');
}

//edge case
console.log('rounds down to the nearest cent');

if (formatCurrency(2000.4) === '20.00'){
	console.log('passed');
}
else{
    console.log('FAILED!!!');
}
