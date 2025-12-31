const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const span3 = document.querySelector('#span3');
const button = document.getElementById('button');

range1.addEventListener('input', function () {
    span1.textContent = this.value;
});

range2.addEventListener('input', function () {
    span2.textContent = this.value;
});

button.addEventListener('click', function () {
    span3.textContent = range1.value * range2.value / 100;
});