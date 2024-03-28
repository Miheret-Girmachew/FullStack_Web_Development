// Question 1
const sample1Element = document.getElementById('sample1');
console.log(sample1Element);
console.log(sample1Element.textContent);

// Question 2
const techCompaniesElement = document.getElementById('techCompanies');
console.log(techCompaniesElement);

const techCompaniesElementQuery = document.querySelector('#techCompanies');
console.log(techCompaniesElementQuery);


const techCompaniesList = document.querySelectorAll('#techCompanies li');
console.log(techCompaniesList.length);


const redElementsQueryAll = document.querySelectorAll('.red');
console.log(redElementsQueryAll);

const redElementsGetByClass = document.getElementsByClassName('red');
console.log(redElementsGetByClass);

const newLiElement = document.createElement('li');
newLiElement.textContent = 'Facebook';
console.log(newLiElement);

newLiElement.classList.add('blue');

const sonyLiElement = document.querySelector('#techCompanies li:last-child');
sonyLiElement.parentNode.insertBefore(newLiElement, sonyLiElement.nextSibling);

const blueCompaniesCount = document.querySelectorAll('#techCompanies li.blue').length;
document.getElementById('blueCompanies').textContent = blueCompaniesCount;

// Question 3

const yesBackground = document.getElementById('yesBackground');
const noBackground = document.getElementById('noBackground');

function changeToLightBlue() {
    document.body.style.backgroundColor = '#99ecff';
}

function removeBackgroundColor() {
    document.body.style.backgroundColor = '';
}

yesBackground.addEventListener('click', changeToLightBlue);
noBackground.addEventListener('click', removeBackgroundColor);


// Question 4

const form = document.getElementById('adder');
const resultDisplay = document.getElementById('sum');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const num1 = parseFloat(document.querySelector('input[name="first-value"]').value);
    const num2 = parseFloat(document.querySelector('input[name="second-value"]').value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = 'Please enter numerical values only';
    } else {
        const sum = num1 + num2;
        console.log(sum);
        resultDisplay.textContent = `Sum: ${sum}`;
    }
});



