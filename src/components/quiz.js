class Pergunta {
    constructor(question, respostas, correta) {
        this.question = question;
        this.respostas = respostas;
        this.correta = correta;
    }

    verificar(respostaUsuario) {
        console.log(respostaUsuario)
        return respostaUsuario === this.correta;

    }
}

const formQuiz = [
    new Pergunta(
        "Qual foi a primeira vez que nos vimos presencialmente?",
        {
            A: "13/02/2024",
            B: "17/02/2024",
            C: "18/02/2024",
            D: "15/02/2024"
        },
        "A"
    ),
    new Pergunta(
        "Qual foi a primeira mensagem que eu te enviei?",
        {
            A: "Oiii",
            B: "voce é menina?",
            C: "Toda linda pá, mas cadê o dinheiro q tá me devendo?",
            D: "slv bb, gostosa!"
        },
        "C"
    ),
    new Pergunta(
        "Qual foi a data que te pedi em namoro?",
        {
            A: "12/06/2024",
            B: "12/06/2025",
            C: "12/06/2023",
            D: "12/06/2022"
        },
        "A",
    ),

    new Pergunta(
        "Qual foi a primeira coisa que te dei?",
        {
            A: "carregador rs",
            B: "ouvo de pascoa",
            C: "produto de beleza",
            D: "nexstage bb"
        },
        "B",
    ),
    new Pergunta(
        "Quando foi nosso primeiro beijinho",
        {
            A: "18/02/2024",
            B: "17/02/2024",
            C: "13/06/2025",
            D: "13/2025"
        },
        "B",
    ),
    new Pergunta(
        "Aonde foi que a gente se viu primeiro bb",
        {
            A: "Buracão",
            B: "Sua casa ver valorant",
            C: "Comer no tuti",
            D: "Carro do churros"
        },
        "A",
    ),
     new Pergunta(
        "Qual foi a comida que a gnt mais comeu junto",
        {
            A: "7Burguer",
            B: "Batata do tutti",
            C: "Pizza do noquinha",
            D: "Temaki"
        },
        "A",
    ),
     new Pergunta(
        "Onde foi nosso primeiro 'eu te amo'",
        {
            A: "Rolêzinho bb, nexstage poggers",
            B: "Sua casa",
            C: "Minha casa",
            D: "Não sei"
        },
        "B",
    ),
     new Pergunta(
        "Qual foi a primeira coisa que tentamos cozinhar juntos?",
        {
            A: "bolo",
            B: "macarrão",
            C: "sequilhos",
            D: "pizza"
        },
        "C",
    ),
];

export default formQuiz;