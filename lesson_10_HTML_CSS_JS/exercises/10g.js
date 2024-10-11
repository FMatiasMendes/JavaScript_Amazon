function turnOnOff(x){
    const turn = document.querySelector(`.js-button-${x}`);
/* 
		//checking js-button-1
		const check1 = document.querySelector(`.js-button-1`);
		const test1 = check1.classList.contains(`is-toggled`);
		console.log(test1);

		//checking js-button-2
		const check2 = document.querySelector(`.js-button-2`);
		const test2 = check2.classList.contains(`is-toggled`);
		console.log(test1);

		//checking js-button-3
		const check3 = document.querySelector(`.js-button-3`);
		const test3 = check3.classList.contains(`is-toggled`);
		console.log(test1);

		if (test1 || test2 || test3){
			turn.classList.remove('is-toggled');
		}
		else{
			turn.classList.add('is-toggled');
		}		 */

		
		
		//different solution but turning the previous light off before turns on the choosen one
		const check = document.querySelector('.is-toggled');
		console.log(check);

		if (check){
			check.classList.remove('is-toggled');
		}

		turn.classList.add('is-toggled');

};