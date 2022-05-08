function Adicionar(){
    
    var botao_enviar=document.getElementById('botao_inicial');

    botao_enviar.addEventListener('click',(evento)=>{

        evento.preventDefault();

        var formulario=document.forms['form1'];
        var nome=formulario.nome.value;
        var cartao=formulario.dados_cartao.value;
        var email=formulario.email.value;
        var estado=formulario.estado.value;
        var cpf=formulario.cpf.value;
        var telefone=formulario.telefone.value;
        var cidade=formulario.cidade.value;
    
        this.name=nome;
        this.Ncartao=cartao;
        this.email=email;
        this.estado=estado;
        this.cpf=cpf;
        this.Ntelefone=telefone;
        this.cidade=cidade
        
    
        let array=[this.nome,this.Ncartao,this.email,this.estado,this.cpf,this.Ntelefone,this.cidade]
    
        console.log('nome: ', nome);
        console.log('cartao : ', cartao);
        console.log('email: ',email);
        console.log('estado: ', estado);
        console.log('cpf: ', cpf); 
        console.log('telefone: ', telefone);
        console.log('cidade:', cidade);
        
         
        
        valor_persona(array)

    }

)}

    function valor_persona(valor){

        dados=valor
        dados.forEach(Persona_dados)

        class Persona_dados{
            constructor(name,Ncartao,email,estado,cpf,Ntelefone,cidade){
                this.name=name;
                this.Ncartao=cartao;
                this.email=email;
                this.estado=estado
                this.cpf=cpf;
                this.Ntelefone=telefone
                this.cidade=cidade;
        }
        
    }
    coletar_cor()
    }    


function coletar_cor(){
 var cores=document.getElementsByName('cor');
 var botao_enviar=document.getElementById('botao_inicial');

 botao_enviar.addEventListener('click', function(){



    var itens=['']
    for(var i = 0; i < cores.length; i++){
        if ( cores[i].checked ) {

            if(cores[i].value == "cor1"){
                var Pacote_i = "cor1";
                itens.push(Pacote_i);

                this.cor=itens;}
                
                
                else if (cores[i].value == "cor2") {
                var Pacote_ii = "cor2";
                itens.push(Pacote_ii);

                this.cor=itens;}
                
                
                else if (cores[i].value == "cor3") {
                var Pacote_iii = "cor3";
                itens.push(Pacote_iii);


                this.cor=itens;}

                else if (cores[i].value == "cor4") {
                var Pacote_iiii = "cor4";
                itens.push(Pacote_iiii);


                this.cor=itens;}

                else if (cores[i].value == "cor5") {
                var Pacote_iiiii = "cor5";
                itens.push(Pacote_iiiii);


                this.cor=itens;}
                console.log(this.cor);
    }
}

 })
}


 
    
    

