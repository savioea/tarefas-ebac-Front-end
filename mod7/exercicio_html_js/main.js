const form = document.getElementById('validacao-numeros');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
const containerMensagemError = document.querySelector('.mensagem-erro');

function campoBMaiorQueCampoA(campoA, campoB) {
    if (campoA < campoB)
        return true;
    else
        return false;
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();

    formEValido = campoBMaiorQueCampoA(campoA.value, campoB.value)

    if (formEValido) {
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        containerMensagemError.style.display = 'block';
    }
});

campoA.addEventListener('change', function (e) {
    containerMensagemSucesso.style.display = 'none';
    containerMensagemError.style.display = 'none';
});

campoB.addEventListener('change', function (e) {
    containerMensagemSucesso.style.display = 'none';
    containerMensagemError.style.display = 'none';
});