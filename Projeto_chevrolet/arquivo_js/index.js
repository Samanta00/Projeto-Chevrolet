const doces = [{
    name: 'rocambole',
    type: 'doce rechado com goiaba',
    valor: 3.40,
    quantidade: 60
  },
  {
    name: 'Piruluto',
    type: 'sabor morango',
    valor: 1.20,
    quantidade: 14
  },
  {
    name: 'Torta Maçã',
    type: 'Feito com maças',
    valor: 20.00,
    quantidade: 21
  },
  {
    name: 'Rapadura',
    type: 'recheio de granolas',
    valor: 2.50,
    quantidade: 80
  },
  {
    name: 'Biscoito de Chocolate',
    type: 'Feito com toddy',
    valor: 6.40,
    quantidade: 6
  }
]

const totalReduce = doces.reduce((total, doce) => {

  return {
    totalValor: total.totalValor + doce.valor,
    totalquantidade: total.totalquantidade + doce.quantidade
  }
}, {
  totalValor: 0,
  totalquantidade: 0
})

console.log(totalReduce)