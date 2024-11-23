
//const multiplier = {name: '', symbol: '', base: '', exponent: ''};
//const unit = {name: '', symbol: '', multipliers: []};
//const quantity = {name: '', units: []};
const yoctoMultiplier = {name: 'yocto', symbol: 'y', base: 10, exponent: -24};
const zeptoMultiplier = {name: 'zepto', symbol: 'z', base: 10, exponent: -21};
const attoMultiplier = {name: 'atto', symbol: 'a', base: 10, exponent: -18};
const femtoMultiplier = {name: 'femto', symbol: 'f', base: 10, exponent: -15};
const picoMultiplier = {name: 'pico', symbol: 'p', base: 10, exponent: -12};
const nanoMultiplier = {name: 'nano', symbol: 'n', base: 10, exponent: -9};
const microMultiplier = {name: 'micro', symbol: '\u03BC', base: 10, exponent: -6};
const milliMultiplier = {name: 'milli', symbol: 'm', base: 10, exponent: -3};
const centiMultiplier = {name: 'centi', symbol: 'c', base: 10, exponent: -2};
const deciMultiplier = {name: 'deci', symbol: 'd', base: 10, exponent: -1};
const dekaMultiplier = {name: 'deka', symbol: 'da', base: 10, exponent: 1};
const hectoMultiplier = {name: 'hecto', symbol: 'h', base: 10, exponent: 2};
const kiloMultiplier = {name: 'kilo', symbol: 'k', base: 10, exponent: 3};
const megaMultiplier = {name: 'mega', symbol: 'M', base: 10, exponent: 6};
const gigaMultiplier = {name: 'giga', symbol: 'G', base: 10, exponent: 9};
const teraMultiplier = {name: 'tera', symbol: 'T', base: 10, exponent: 12};
const petaMultiplier = {name: 'peta', symbol: 'P', base: 10, exponent: 15};
const exaMultiplier = {name: 'exa', symbol: 'E', base: 10, exponent: 18};
const zettaMultiplier = {name: 'zetta', symbol: 'Z', base: 10, exponent: 21};
const yottaMultiplier = {name: 'yotta', symbol: 'Y', base: 10, exponent: 24};

const quantities = [];

//Ininitializing the list of quantities

//creating the temperature quantity and adding it to the list of quantities
const temperature = {
	name: 'temperature', 
	units: [{
				name: 'celcius', 
				symbol: '\u00B0'+'C', 
				multipliers: [],
				isSIUnit: false,
				toSIUnit: value => value + 273, //returns the kelvin temperature from the celcius temperature passed as argument to the parameter 'value'
				fromSIUnit: value => value - 273 //returns the celcius temperature from the kelvin temperature passed as argument to the parameter 'value'
			}, 
			{
				name: 'kelvin', 
				symbol: 'K', 
				multipliers: [],
				isSIUnit: true
			}, 
			{
				name: 'fahrenheit', 
				symbol: '\u00B0'+'F', 
				multipliers: [],
				isSIUnit: false,
				toSIUnit: value => 273 + 5*(value-32)/9, //returns the kelvin temperature from the fahrenheit temperature passed as argument to the parameter 'value'
				fromSIUnit: value => 32 + 1.8*(value-273) //returns the fahrenheit temperature from the kelvin temperature passed as argument to the parameter 'value'
			}]
	};
quantities.push(temperature);

//creating the mass quantity and adding it to the list of quantities
const mass = {
	name: 'mass', 
	units: [{
				name: 'grams', 
				symbol: 'g', 
				multipliers: [milliMultiplier, centiMultiplier, kiloMultiplier],
				isSIUnit: true
			}, 
			{
				name: 'tons', 
				symbol: 't', 
				multipliers: [kiloMultiplier, megaMultiplier, gigaMultiplier, teraMultiplier],
				isSIUnit: false,
				toSIUnit: value => 1000000*value,
				fromSIUnit: value => value/1000000
			},
			{
				name: 'pounds',
				symbol: 'lbm',
				multipliers: [],
				isSIUnit: false,
				toSIUnit: value => value*0.45359237,
				fromSIUnit: value => value/0.45359237
			}]
	};
quantities.push(mass);

//creating the time quantity and adding it to the list of quantities
const time = {
	name: 'time',
	units: [{
			name: 'seconds',
			symbol: 's',
			multipliers: [nanoMultiplier, microMultiplier, milliMultiplier],
			isSIUnit: true
		}, 
		{
			name: 'minutes',
			symbol: 'min',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*60,
			fromSIUnit: value => value/60
		}, 
		{
			name: 'hours',
			symbol: 'h',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*3600,
			fromSIUnit: value => value/3600
		},
		{
			name: 'days',
			symbol: 'd',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*86400,
			fromSIUnit: value => value/86400
		},
		{
			name: 'sidereal-days',
			symbol: 'd',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*86164,
			fromSIUnit: value => value/86164
		},
		{
			name: 'year',
			symbol: 'yrs',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*31556926,
			fromSIUnit: value => value/31556926
		},
		{
			name: 'sidereal-year',
			symbol: 'yrs',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*31558150,
			fromSIUnit: value => value/31558150
		}]
};
quantities.push(time);

//create and add length to the quantities array
const length = {
	name: 'length',
	units: [{
			name: 'meters',
			symbol: 'm',
			multipliers: [femtoMultiplier, picoMultiplier, nanoMultiplier, microMultiplier, milliMultiplier, centiMultiplier, deciMultiplier, dekaMultiplier, kiloMultiplier],
			isSIUnit: true
		},
		{
			name: 'inches',
			symbol: 'in',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*0.0254,
			fromSIUnit: value => value/0.0254
		},
		{
			name: 'feet',
			symbol: 'ft',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*0.3048,
			fromSIUnit: value => value/0.3048
		},
		{
			name: 'miles',
			symbol: 'mi',
			multipliers: [],
			isSIUnit: false,
			toSIUnit: value => value*1609.34,
			fromSIUnit: value => value/1609.34
		}]
};
quantities.push(length);

//create and add current to the quantities array
const current = {
	name: 'current',
	units: [{
			name: 'amperes',
			symbol: 'A',
			multipliers: [microMultiplier, milliMultiplier],
			isSIUnit: true
	}]
};
quantities.push(current);

//create and add force to the quantities array
const force = {
	name: 'force',
	units: [{
		name: 'newtons',
		symbol: 'N',
		multipliers: [dekaMultiplier, kiloMultiplier],
		isSIUnit: true
	},
	{
		name: 'pounds',
		symbol: 'lbf',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*4.44822,
		fromSIUnit: value => value/4.44822
	},
	{
		name: 'dyne',
		symbol: 'dyn',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*Math.pow(10, -5),
		fromSIUnit: value => value*Math.pow(10, 5)
	}]
};
quantities.push(force);

//create and add pressure to the quantities array
const pressure = {
	name: 'pressure',
	units: [{
		name: 'pascals',
		symbol: 'Pa',
		multipliers: [milliMultiplier, centiMultiplier, kiloMultiplier, megaMultiplier, gigaMultiplier],
		isSIUnit: true
	},
	{
		name: 'atmoshpheres',
		symbol: 'atm',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*101325,
		fromSIUnit: value => value/101325
	},
	{
		name: 'millimeters-of-mercury',
		symbol: 'mmHg',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*101325/760,
		fromSIUnit: value => value*760/101325
	},
	{
		name: 'bars',
		symbol: 'Ba',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*100000,
		fromSIUnit: value => value/100000
	},
	{
		name: 'pounds-per-squared-inch',
		symbol: 'psi',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*6894.76,
		fromSIUnit: value => value/6894.76
	}]
};
quantities.push(pressure);

//create and add energy to the quantities array
const energy = {
	name: 'energy',
	units: [{
		name: 'joules',
		symbol: 'J',
		multipliers: [milliMultiplier, kiloMultiplier, megaMultiplier, gigaMultiplier, teraMultiplier],
		isSIUnit: true
	},
	{
		name: 'calories',
		symbol: 'Cal',
		multipliers: [kiloMultiplier],
		isSIUnit: false,
		toSIUnit: value => value*4.184,
		fromSIUnit: value => value/4.184
	},
	{
		name: 'electron-volt',
		symbol: 'eV',
		multipliers: [kiloMultiplier, megaMultiplier, gigaMultiplier],
		isSIUnit: false,
		toSIUnit: value => value*1.6*Math.pow(10, -19),
		fromSIUnit: value => value/(1.6*Math.pow(10, -19))
	},
	{
		name: 'watt-hour',
		symbol: 'Wh',
		multipliers: [milliMultiplier, kiloMultiplier, megaMultiplier, gigaMultiplier],
		isSIUnit: false,
		toSIUnit: value => value*3600,
		fromSIUnit: value => value/3600
	},
	{
		name: 'erg',
		symbol: 'erg',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*Math.pow(10, -7),
		fromSIUnit: value => value*Math.pow(10, 7)
	}]
};
quantities.push(energy);

//create and add power to the quantities array
const power = {
	name: 'power',
	units: [{
		name: 'watt',
		symbol: 'W',
		multipliers: [milliMultiplier, kiloMultiplier, megaMultiplier, gigaMultiplier, teraMultiplier],
		isSIUnit: true
	},
	{
		name: 'horsepower',
		symbol: 'hp',
		multipliers: [],
		isSIUnit: false,
		toSIUnit: value => value*745.6996, // 1 hp = 33 000 lbf ft/min
		fromSIUnit: value => value/745.6996
	}]
};
quantities.push(power);

//create and add voltage to the quantities array

const voltage = {
	name: 'voltage',
	units: [{
		name: 'volt',
		symbol: 'V',
		multipliers: [milliMultiplier, kiloMultiplier, megaMultiplier],
		isSIUnit: true
	}]
};
quantities.push(voltage);

//create and add resistance to the quantities array
const resistance = {
	name: 'resistance',
	units: [{
		name: 'ohms',
		symbol: '\u03A9',
		multipliers: [milliMultiplier, kiloMultiplier, megaMultiplier, gigaMultiplier],
		isSIUnit: true
	}]
};
quantities.push(resistance);

//create and add capacitance to the quantities array
const capacitance = {
	name: 'capacitance',
	units: [{
		name: 'fahrads',
		symbol: 'F',
		multipliers: [picoMultiplier, nanoMultiplier, microMultiplier, milliMultiplier],
		isSIUnit: true
	}]
};
quantities.push(capacitance);




//sort the quantities array by name in ascending order
quantities.sort((a, b) => a.name.localeCompare(b.name));

//variable to store the html code for the quantity list box
let quantitiesHTML = '';

//variables to store the html elements for generating code dynamically
let quantityList = document.querySelector('.js-quantity-list');
let departureUnitList = document.querySelector('.js-departure-unit-list');
let destinationUnitList = document.querySelector('.js-destination-unit-list');
const convertButton = document.querySelector('.js-convert-button');
let userInputElement = document.querySelector('.js-input-field');
let outputFieldElement = document.querySelector('.js-output-field');
let inputValue ='';
let outputValue = '';

//generating html code for the quantity list box
quantities.forEach((quantityObject) =>{
	const htmlCode = `<option value=${quantityObject.name} class="quantity-list-item">${quantityObject.name}</option>`;
	quantitiesHTML += htmlCode;
});

//put the generated html code for the quantity list box unto the page
quantityList.innerHTML = quantitiesHTML;

//variable to store the html code for the unit list boxes
let departureUnitsHTML = '';
let destinationUnitsHTML = '';

//get the selected quantity from the quantity listbox and look for the quantity object corresponding to the selected quantity then extract the units of that quantity

let selectedQuantity = '';
let departureUnit = '';
let destinationUnit = '';
let destinationUnitSymbol = '';
fillDepartureUnitList(quantityList.value);

fillDestinationUnitList(departureUnitList.value);

userInputElement.value = 1;
convert();

function fillDepartureUnitList(selectedQuantityValue){
//find the selected quantity from the selected value given as argument
//since we need to end the search once the quantity with a matching name is found, let's use a normal for loop and not a forEach loop
	for(let i = 0; i < quantities.length; i++){
		if(quantities[i].name === selectedQuantityValue){
			selectedQuantity = quantities[i];
			break;
		}
	}

//generating html code for the depature unit list using the units array of the selected quantity object
	selectedQuantity.units.forEach((unit)=>{
		if(unit.multipliers.length === 0){
			const htmlCode = `<option value=${unit.name} class="unit-list-item">${unit.name} (${unit.symbol})</option>`;
			departureUnitsHTML += htmlCode;
		}else{
			const htmlCode = `<option value=${unit.name} class="unit-list-item">${unit.name} (${unit.symbol})</option>`;
			departureUnitsHTML += htmlCode;
			unit.multipliers.forEach((multiplier)=>{
				const htmlCode = `<option value=${multiplier.name + unit.name} class="unit-list-item">${multiplier.name + unit.name} (${multiplier.symbol + unit.symbol})</option>`;
				departureUnitsHTML += htmlCode;
			});
		}
	});
	
//put the generated html code unto the page
	departureUnitList.innerHTML = departureUnitsHTML;

//reset the unit list html variables once initialization is done
	departureUnitsHTML = '';
	
//reassign the departure unit list before filling the destination unit list so that the destination unit list uses the updated value of the departure unit list
	departureUnitList = document.querySelector('.js-departure-unit-list');
	
	departureUnit = getSelectedUnit(departureUnitList.value);

}

function fillDestinationUnitList(selectedDepartureUnitValue){
//generating html code for the destination unit list using the units array of the selected quantity object
//make sure that the selected unit in the departure list is not added to the destination unit list
	selectedQuantity.units.forEach((unit)=>{
		if(unit.multipliers.length === 0){
			if(unit.name !== selectedDepartureUnitValue){
				const htmlCode = `<option value=${unit.name} class="unit-list-item">${unit.name} (${unit.symbol})</option>`;
				destinationUnitsHTML += htmlCode;
			}
		}else{
			if(unit.name !== selectedDepartureUnitValue){
				const htmlCode = `<option value=${unit.name} class="unit-list-item">${unit.name} (${unit.symbol})</option>`;
				destinationUnitsHTML += htmlCode;
			}
			
			unit.multipliers.forEach((multiplier)=>{
				if(multiplier.name + unit.name !== selectedDepartureUnitValue){
					const htmlCode = `<option value=${multiplier.name + unit.name} class="unit-list-item">${multiplier.name + unit.name} (${multiplier.symbol + unit.symbol})</option>`;
					destinationUnitsHTML += htmlCode;
				}
			});
		}
	});
	
//put the generated html code unto the page
	destinationUnitList.innerHTML = destinationUnitsHTML;

//reset the unit list html variables once initialization is done
	destinationUnitsHTML = '';

//reassign the destination unit list and update the text of the convert button to match the selected destination unit	
	destinationUnitList = document.querySelector('.js-destination-unit-list');
	convertButton.innerText = `Convert to ${destinationUnitList.value}`;
	destinationUnit = getSelectedUnit(destinationUnitList.value);
	destinationUnitSymbol = getSelectedUnitSymbol(destinationUnitList.value);
}

function getSelectedUnit(selectedUnitValue){
	let i = 0;
	do{
		if(selectedQuantity.units[i].multipliers.length === 0){
			if(selectedQuantity.units[i].name === selectedUnitValue){
				return [selectedQuantity.units[i]];
			}
		}else{
			if(selectedQuantity.units[i].name === selectedUnitValue){
				return [selectedQuantity.units[i]];
			}
			for(let k = 0; k < selectedQuantity.units[i].multipliers.length; k++){
				if(selectedQuantity.units[i].multipliers[k].name + selectedQuantity.units[i].name === selectedUnitValue){
					return [selectedQuantity.units[i], selectedQuantity.units[i].multipliers[k]];
				}
			}
		}
		i++;
	}while(i < selectedQuantity.units.length);
}

function getSelectedUnitSymbol(selectedUnitValue){
	let i = 0;
	do{
		if(selectedQuantity.units[i].multipliers.length === 0){
			if(selectedQuantity.units[i].name === selectedUnitValue){
				return selectedQuantity.units[i].symbol;
			}
		}else{
			if(selectedQuantity.units[i].name === selectedUnitValue){
				return selectedQuantity.units[i].symbol;
			}
			for(let k = 0; k < selectedQuantity.units[i].multipliers.length; k++){
				if(selectedQuantity.units[i].multipliers[k].name + selectedQuantity.units[i].name === selectedUnitValue){
					return selectedQuantity.units[i].multipliers[k].symbol + selectedQuantity.units[i].symbol;
				}
			}
		}
		i++;
	}while(i < selectedQuantity.units.length);
}

quantityList.addEventListener('change', ()=>{
	quantityList = document.querySelector('.js-quantity-list');
	fillDepartureUnitList(quantityList.value);
	fillDestinationUnitList(departureUnitList.value);
	userInputElement.value = 1;
	convert();
});

departureUnitList.addEventListener('change', ()=>{
	departureUnitList = document.querySelector('.js-departure-unit-list');
	departureUnit = getSelectedUnit(departureUnitList.value);
	fillDestinationUnitList(departureUnitList.value);
	userInputElement.value = 1;
	convert();
});

destinationUnitList.addEventListener('change', ()=>{
	destinationUnitList = document.querySelector('.js-destination-unit-list');
	convertButton.innerText = `Convert to ${destinationUnitList.value}`;
	destinationUnit = getSelectedUnit(destinationUnitList.value);
	destinationUnitSymbol = getSelectedUnitSymbol(destinationUnitList.value);
	userInputElement.value = 1;
	convert();
});

function displayOutput(){
	outputFieldElement = document.querySelector('.js-output-field');
	outputFieldElement.innerHTML = `${outputValue} ${destinationUnitSymbol}`;
	//userInputElement.value = '';
}

function getConvertedValue(numb, depUnit, destUnit){
	if(depUnit.length === 1){
		if(depUnit[0].isSIUnit){
			if(destUnit.length === 1){
				return destUnit[0].fromSIUnit(numb);
			}else{
				if(destUnit[0].isSIUnit){
					return numb*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}else{
					return destUnit[0].fromSIUnit(numb)*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}
			}
		}else{
			if(destUnit.length === 1){
				if(destUnit[0].isSIUnit){
					return depUnit[0].toSIUnit(numb);
				}else{
					return destUnit[0].fromSIUnit(depUnit[0].toSIUnit(numb));
				}
			}else{
				if(destUnit[0].isSIUnit){
					return depUnit[0].toSIUnit(numb)*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}else{
					return destUnit[0].fromSIUnit(depUnit[0].toSIUnit(numb))*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}
			}
		}
	}else{
		if(depUnit[0].isSIUnit){
			if(destUnit.length === 1){
				if(destUnit[0].isSIUnit){
					return numb*Math.pow(depUnit[1].base, depUnit[1].exponent);
				}else{
					return destUnit[0].fromSIUnit(numb*Math.pow(depUnit[1].base, depUnit[1].exponent));
				}
			}else{
				if(destUnit[0].isSIUnit){
					return numb*Math.pow(depUnit[1].base, depUnit[1].exponent)*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}else{
					return destUnit[0].fromSIUnit(numb*Math.pow(depUnit[1].base, depUnit[1].exponent))*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}
			}
		}else{
			if(destUnit.length === 1){
				if(destUnit[0].isSIUnit){
					return depUnit[0].toSIUnit(numb*Math.pow(depUnit[1].base, depUnit[1].exponent));
				}else{
					return destUnit[0].fromSIUnit(depUnit[0].toSIUnit((numb*Math.pow(depUnit[1].base, depUnit[1].exponent))));
				}
			}else{
				if(destUnit[0].isSIUnit){
					return depUnit[0].toSIUnit(numb*Math.pow(depUnit[1].base, depUnit[1].exponent))*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}else{
					return destUnit[0].fromSIUnit(depUnit[0].toSIUnit(numb*Math.pow(depUnit[1].base, depUnit[1].exponent)))*Math.pow(destUnit[1].base, -destUnit[1].exponent);
				}
			}
		}
	}
}

function convert(){
	departureUnitList = document.querySelector('.js-departure-unit-list');
	departureUnit = getSelectedUnit(departureUnitList.value);
	
	destinationUnitList = document.querySelector('.js-destination-unit-list');
	destinationUnit = getSelectedUnit(destinationUnitList.value);
	destinationUnitSymbol = getSelectedUnitSymbol(destinationUnitList.value);
	
	userInputElement = document.querySelector('.js-input-field');
	inputValue = Number(userInputElement.value);
	
	//check if the input value converts to a number, if so calculate the temperature value else tell the user to enter a number
	//if the input value does not convert to a number, the function 'Number(userInputElement.value)' returns 'NaN' which is a falsy value
	//since the number '0' is also a falsy value, we need to ensure that it is not treated as a non-numeric input.
	
	if(inputValue || inputValue === 0){
		outputValue = getConvertedValue(inputValue,departureUnit, destinationUnit);
		displayOutput();
	}else{
		outputFieldElement = document.querySelector('.js-output-field');
		outputFieldElement.innerHTML = `Enter a number please!`;
		//userInputElement.value = '';
	}
}

convertButton.addEventListener('click', () => {
	convert();
});

userInputElement.addEventListener('keydown', event =>{
	if(event.key === 'Enter'){
		convert();
	}
});