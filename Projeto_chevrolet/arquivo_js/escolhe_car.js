let buttons = window.document.querySelectorAll('input[type="button"]');
let classes = window.document.querySelectorAll('div[type="carro"]')


buttons.forEach((item)=>{
    item.addEventListener('click',function(){
       
        var parent = this.parentNode;
  
        let selecao=parent.querySelector('h3[type="modelo"]')
        let imagem_selecao=parent.querySelector('img[type="imagem"]')

        console.log(selecao)
        console.log(imagem_selecao)

    

        recebeInput(selecao,imagem_selecao)
        
        })
        

    })





function recebeInput(valor0,valor1){

    const imagens=document.querySelectorAll('img');
        let valor3=document.getElementById('imagem3')
        let valor4=document.getElementById('imagem4')
        let valor5=document.getElementById('imagem5')

        let valor6=document.getElementById('imagem6')
        let valor7=document.getElementById('imagem7')
        let valor8=document.getElementById('imagem8')

        const TipoImagens={
            imagem1:{
              valor3
            },
            imagem2:{
                valor4
            },
            imagem3:{
                valor5
            },
            imagem4:{
                valor6
            },
            imagem5:{
                valor7
            },
            imagem6:{
                valor8
            }
    
            
        }
        valor0.forEach(valor1=>{
            valor1.imagens
            let array=[valor0,valor1,TipoImagens]

            return array

    })
console.log(array)
            
  }

    
    



