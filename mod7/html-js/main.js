const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const descricao = document.getElementById('descricao');
    const mensagemSucesso = `Montante de: <b>R$${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;


    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.sucess-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
        descricao.value = '';
    } else {
        const containerMensagemError = document.querySelector('.error-form-message#nome-incompleto');
        containerMensagemError.style.display = 'block';
        nomeBeneficiario.style.border = '1px solid red';
    }
});

nomeBeneficiario.addEventListener('change', function (e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    formEValido = validaNome(nomeBeneficiario.value);
    if (!formEValido) {
        const containerMensagemError = document.querySelector('.error-form-message#nome-incompleto');
        containerMensagemError.style.display = 'block';
        nomeBeneficiario.classList.add('error');
    } else {
        const containerMensagemError = document.querySelector('.error-form-message#nome-incompleto');
        containerMensagemError.style.display = 'none';
        nomeBeneficiario.classList.remove('error');
    }
});