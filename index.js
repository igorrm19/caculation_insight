const range1 = document.getElementById('range1');
const range2 = document.getElementById('range2');
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
const span3 = document.querySelector('#span3');
const button = document.getElementById('button');
const insight = document.getElementById('insight');
const stat = document.getElementById('status');

range1.addEventListener('input', function () {
    span1.textContent = this.value;
});

range2.addEventListener('input', function () {
    span2.textContent = this.value;
});

span1.addEventListener('click', function () {

    if (this.querySelector('input')) return;

    const valorAtual = this.textContent;
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.max = 10000000;
    input.value = valorAtual;

    this.textContent = '';
    this.appendChild(input);
    input.focus();

    input.addEventListener('blur', function () {
        const novoValor = input.value;
        range1.value = novoValor;
        span1.textContent = novoValor;
    });

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            input.blur();
        }
    });
})

span2.addEventListener('click', function () {

    if (this.querySelector('input')) return;

    const valorAtual = this.textContent;
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 0;
    input.max = 1000000;
    input.value = valorAtual;

    this.textContent = '';
    this.appendChild(input);
    input.focus();

    input.addEventListener('blur', function () {
        const novoValor = input.value;
        range2.value = novoValor;
        span2.textContent = novoValor;
    });

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            input.blur();
        }
    });
})

button.addEventListener('click', function () {
    span3.textContent = ((range2.value / range1.value) * 100).toFixed(3);
    const porcentagem = span3.textContent;

    if (porcentagem <= 2) {
        insight.style.backgroundColor = 'red';
        stat.textContent = 'Failure 😒';
        stat.style.color = 'red';

    } else if (porcentagem > 9.999) {
        insight.style.backgroundColor = 'green';
        stat.textContent = 'Viral 🤑';
        stat.style.color = 'green';
    } else if (porcentagem > 2 && porcentagem < 9.999) {
        insight.style.backgroundColor = 'var(--secondary-color)';
        stat.textContent = '';
    }
});