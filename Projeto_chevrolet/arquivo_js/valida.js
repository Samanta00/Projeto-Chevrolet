export
/* nesse trecho o código faz uma fução chamando um input dessa forma ele pega o tipo do dataset desse input*/
function valida(input) {
  const validaInput = input.dataset.tipo;
  /* agora faz uma condição, se o tipo do dataset desse input for verdadeiro passando pelo objeto validadores */
  /*o objeto validadores tem um atributo chamado dataNascimento que tem como valor um input esse valor vai passar pela
  funcao validaData, o mesmo input de dataNascimento vai para a funcao validaData*/

  /*Assim que a condição for verdadeira ele vai pegar o input passado pelo objeto e ja verificado */

  /* agora ele vai para uma nova condição de validação para saber qual é o nome de erro dele */

  if (validadores[validaInput]) {
    validadores[validaInput](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
  } else {
    input.parentElement.classList.add('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(validaInput, input);

  }
}
/* no primeiro if se for valido ele remove a mensagem de erro e não exibe nada, já no else vai adicionar o erro e chamar
a funcao mostraMensagemErro, que passa como parametro o tipo do dataset e o input dele*/

const tipoErro = ['typeMismatch', 'valueMissing', 'customError']

/*nesse array tem todos os tipos de erros aceitos para o input, eles vao ser percorridos por um forEach na funcao
mostraMensagemErro e se o erro for algum deles, a funcao armazenara o erro e a descricao dele*/
const mensagensErros = {

  nome: {
    valueMissing: 'O campo de Nome não pode ser enviado vázio'
  },
  email: {
    valueMissing: 'O campo de Email não pode ser enviado vázio',
    typeMismatch: 'O campo de Email não está preenchido no padrão de email corretamente'
  },
  dataNascimento: {
    valueMissing: 'O campo de Data não pode ser enviado vázio',
    customError: 'Você deve ser maior de idade para enviar este formulário',

  },
  cep: {
    valueMissing: 'O campo de cep não pode ser enviado vázio'
  },
  cpf: {
    valueMissing: 'O campo de cpf não pode ser enviado vázio',
    customError: 'O cpf informado não é válido'
  },

}
/*aqui é um objeto chamado validadores, os nomes dos atributos de validadores tem que estarem de acordo com os nomes
dos dataset do html, ex:nome,cpf,dataNascimento, pois eles estão passando pelo objeto mensagensErros pela funcao valida*/
const validadores = {
  dataNascimento: input => validaData(input),
  cpf: input => validaCPF(input)
}

function mostraMensagemErro(tipoInput, input) {
  let mensagem = '';

  tipoErro.forEach(erro => {
    if (input.validity[erro]) {

      mensagem = mensagensErros[tipoInput][erro]
    }

  })
  return mensagem;
}

function validaData(input) {

  const dataRecebida = new Date(input.value);

  let mensagem = '';


  if (!maiorDe18(dataRecebida)) {
    mensagem = 'Você deve ser maior de idade para enviar este formulário';
  }
  input.setCustomValidity(mensagem)

}

function maiorDe18(valor) {

  const dataAtual = new Date();

  const ValidaDataMaior18 = new Date(valor.getUTCFullYear() + 18, valor.getUTCMonth(), valor.getUTCDate());

  return ValidaDataMaior18 < dataAtual;
}

function validaCPF(input) {
  const cpfFormatado = input.value.replace(/\D/g, '')
  let mensagem = ''

  if (!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
    mensagem = 'O CPF digitado não é válido.'
  }

  input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
  const valoresRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ]
  let cpfValido = true

  valoresRepetidos.forEach(valor => {
    if (valor == cpf) {
      cpfValido = false
    }
  })

  return cpfValido
}

function checaEstruturaCPF(cpf) {
  const multiplicador = 10

  return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
  if (multiplicador >= 12) {
    return true
  }

  let multiplicadorInicial = multiplicador
  let soma = 0
  const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
  const digitoVerificador = cpf.charAt(multiplicador - 1)
  for (let contador = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
    soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
    contador++
  }

  if (digitoVerificador == confirmaDigito(soma)) {
    return checaDigitoVerificador(cpf, multiplicador + 1)
  }

  return false
}

function confirmaDigito(soma) {
  return 11 - (soma % 11)
}