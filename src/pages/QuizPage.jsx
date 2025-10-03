import React, { useEffect, useState } from 'react';
import formQuiz from '../components/quiz';
import Exercicio from '../components/Exercicio';
import CardFimQuiz from '../components/CardFimQuiz';

const Quiz_component = () => {
    const [pontos, setpontos] = useState(0);
    const [quiz, setquiz] = useState(0)
    const [respostaSelecionada, setRespostaSelecionada] = useState(null);
    const [confirmado, setConfirmado] = useState(false);

    function aumentarPonto() {
        setpontos(pontos + 1)
    }

    function proximoEx() {
        setRespostaSelecionada(null)
        setConfirmado(false)
        setquiz(quiz + 1)

    }

    function resetarCaixas() {

    }

    return (
        <div className="min-vh-100 bg-dark d-flex justify-content-center align-items-center">
            <div className="container col-12 p-3">
                <div className="bg-light shadow-lg rounded p-3">
                    {quiz < 9 ? <Exercicio acerto={aumentarPonto} quiz={quiz} proximoEx={proximoEx} respostaSelecionada={respostaSelecionada} setRespostaSelecionada={setRespostaSelecionada} confirmado={confirmado} setConfirmado={setConfirmado} ></Exercicio> :<CardFimQuiz pontos={pontos} total={formQuiz.length}/>}
                </div>
            </div>
        </div>
    );
};

export default Quiz_component;
