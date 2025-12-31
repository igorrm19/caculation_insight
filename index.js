const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const span3 = document.querySelector('#span3');
const button = document.getElementById('button');
const insight = document.getElementById('insight');
const stat = document.getElementById('#status');

range1.addEventListener('input', function () {
    span1.textContent = this.value;
});

range2.addEventListener('input', function () {
    span2.textContent = this.value;
});


button.addEventListener('click', function () {
    span3.textContent = ((range2.value / range1.value) * 100).toFixed(3);
    const porcentagem = span3.textContent;

    if (porcentagem < 2.999) {
        insight.style.backgroundColor = 'red';
        stat.innerText = 'Baixo';
    } else if (porcentagem > 10.999) {
        insight.style.backgroundColor = 'green';
        stat.innerText = 'Alto';
    }
});