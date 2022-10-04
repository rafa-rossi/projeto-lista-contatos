const form = document.getElementById('form-contato');
const nomeContato = document.getElementById('input-nome-contato');
const numeroContato = document.getElementById('input-numero-contato');

linhas = ``;
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    attLinha();
});

function addLinha() {
    
    if (nomes.includes(nomeContato.value)) {
        alert(`O nome "${nomeContato.value}", já foi cadastrado!`)

    } else if (numeros.includes(numeroContato.value)) {
        alert(`O numero "${numeroContato.value}", já foi cadastrado!`)

    } else {
        let linha = `<tr>`;
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `<td><a href="tel:${numeroContato.value}">Ligar</a></td>`;
        linha += `</tr>`;

        linhas += linha;
        nomes.push(nomeContato.value);
        numeros.push(numeroContato.value);
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function attLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}