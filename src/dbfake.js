var livros={
    livros:[
        {
            titulo:'Jornalismo em Braille',
            imagem:'https://images-na.ssl-images-amazon.com/images/I/419aP0l6JOL._SX351_BO1,204,203,200_.jpg',
            descricao:'Livro "Jornalismo em Braille, da autora Alessandra Nascimento',
            mapa: "Link do site para compra"
        },{
            titulo:'Feche os olhos para ver melhor',
            imagem:'https://images-na.ssl-images-amazon.com/images/I/411wfknSpfL._SX359_BO1,204,203,200_.jpg',
            descricao:'Livro "Feche os olhos para ver melhor", do autor Sergio Sá',
            mapa:'Link do site para compra'
        },{
            titulo:'Era uma vez uma página em branco',
            imagem:'https://images-na.ssl-images-amazon.com/images/I/41OJp-RQuXL._SY496_BO1,204,203,200_.jpg',
            descricao:'Livro "Era uma vez uma página em branco", da autora Ana Carmen Franco Nogueira',
            mapa:'Link do site para compra'
        },{
            titulo:'Alfabeto Braille',
            imagem:'https://www.alfabeto.net.br/wp-content/uploads/2013/09/alfabeto-braille.gif',
            descricao:'Alfabeto em braille que está disponível no site abaixo',
            mapa:'Link do site: https://www.alfabeto.net.br/alfabeto-braille/'
        },
    ]
    }
var locais={
    locais:[
        {
            id:'1',
            nome:'PUC Minas Coração Eucarístico',
            foto:'https://lh5.googleusercontent.com/p/AF1QipNj-6GR75uY5vBquhe27Sqb2q3pnbqpokjjjSa4=w408-h306-k-no',
            endereço:'R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Ótima estrutura'
        },{
            id:'2',
            nome:'PUC Minas Barreiro',
            foto:'https://lh5.googleusercontent.com/p/AF1QipP_Ei9ZL1J_7GEqgpMBJQIQV3iyob1vnXBFyG6c=w426-h240-k-no',
            endereço:'Av. Afonso Vaz de Melo, 1200 - Barreiro, Belo Horizonte - MG',
            nota:'Bom',
            comentario:'Boa infraestrutura'
        },{
            id:'3',
            nome:'Casa do Baile',
            foto:'https://lh5.googleusercontent.com/p/AF1QipPt3dRFe_eqOg9w2mCayDxfUrvqY00epM4obt-P=w408-h306-k-no',
            endereço:'Av. Otacílio Negrão de Lima, 751 - Pampulha, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Possui visitas sensoriais e disponibiliza dispositivos táteis, sonoros e até gustativos.'
        },{
            id:'4',
            nome:'Museu de Arte da Pampulha',
            foto:'https://lh5.googleusercontent.com/p/AF1QipPKEssCdLAd6wk1fMDQUwz_rEQQ86FBQkOCcnm4=w408-h272-k-no',
            endereço:'Av. Otacílio Negrão de Lima, 16585 - Pampulha, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Possui visitas sensoriais e disponibiliza dispositivos táteis, sonoros e até gustativos.'
        },{
            id:'5',
            nome:'Museu de Artes e Ofícios',
            foto:'https://lh5.googleusercontent.com/p/AF1QipMl8UvD-_DVgE_T14jzVXNiKmT_cMvopwJtBFjC=w408-h272-k-no',
            endereço:'Praça Rui Barbosa, 600 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Promove a acessibilidade cultural por meio de visitas sensoriais para pessoas com deficiência visual e auditiva.'
        },{
            id:'6',
            nome:'Praça do Papa',
            foto:'https://lh5.googleusercontent.com/p/AF1QipPGXEkt9gXTPRJwk0PpwXFu4mOddB4vMxIvX1M_=w408-h248-k-no',
            endereço:'Av. Agulhas Negras, s/n - Mangabeiras, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações.'
        },{
            id:'7',
            nome:'Parque Municipal Américo Renné Giannetti',
            foto:'https://lh5.googleusercontent.com/p/AF1QipOognVNVohCg5KYP4VoNUQRK5sABfTAa7ppvHmb=w426-h240-k-no',
            endereço:'Av. Afonso Pena, 1377 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações.'
        },{
            id:'8',
            nome:'Mineirão',
            foto:'https://lh5.googleusercontent.com/p/AF1QipNxT7u33mBOWzYhykkJCRHPe4T9m4itUsIZBIWe=w408-h271-k-no',
            endereço:'Av. Antônio Abrahão Caram, 1001 - São José, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações'
        },{
            id:'9',
            nome:'A Pão de Queijaria',
            foto:'https://lh5.googleusercontent.com/p/AF1QipM7MZHcJv58dfpqXyh3_V_sqHL7w7MCJNtaaz2K=w408-h272-k-no',
            endereço:'R. Antônio de Albuquerque, 856 - Funcionários, Belo Horizonte - MG',
            nota:'Bom',
            comentario:'Boa acessibilidade'
        },{
            id:'10',
            nome:'Cine Theatro Brasil',
            foto:'https://lh5.googleusercontent.com/p/AF1QipOQCnvqcRdYRowFBt1RdXybJwaSz3JZy8YZiy2T=w408-h544-k-no',
            endereço:'Av. Amazonas, 315 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Todos os espetáculos próprios contam com, pelo menos, uma sessão em libras e audiodescrição e as exposições têm informações em braile.  No quesito estrutura, o teatro oferece assentos demarcados, elevadores com leitura em Braile, poltronas adaptadas, banheiros acessíveis e sinalização.'
        },{
            id:'11',
            nome:'Edifício Maleta',
            foto:'https://lh5.googleusercontent.com/p/AF1QipMEiBE6VQjlZ_capvL_ySebQHKM0ZcunxnhKvOc=w408-h864-k-no',
            endereço:'R. da Bahia, 1148 - Centro, Belo Horizonte - MG',
            nota:'Bom',
            comentario:'Várias opções de bares e restaurante, com local adaptado.'
        },{
            id:'12',
            nome:'Mercado Central',
            foto:'https://lh5.googleusercontent.com/p/AF1QipMmsPQqEdM0QjkML7OrtJbBOpKyTgBW3DEGGRuY=w408-h306-k-no',
            endereço:'Av. Augusto de Lima, 744 - Centro, Belo Horizonte - MG',
            nota:'Excelente',
            comentario:'Oferece espaços de fácil acesso e com adaptações.'
        }
    ]
}

function insertLocal(locais) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 13;
    if (db.data.length != 0) 
      novoId = locais.locais[locais.locais.length - 1].id + 1;
    let novolocal = {
        "id": novoId,
        "nome": locais.nome,
        "endereço" : locais.endereço,
        "nota": locais.nota,
        "comentario" : locais.comentario,
    };

    // Insere o novo objeto no array
    locais.locais.push(novolocal);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('locais', JSON.stringify(db));
}