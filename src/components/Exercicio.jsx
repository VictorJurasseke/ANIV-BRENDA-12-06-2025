import React, { useState } from 'react';
import formQuiz from './quiz';


const Exercicio = ({acerto, proximoEx,quiz, respostaSelecionada, setRespostaSelecionada,confirmado, setConfirmado}) => {
  const pergunta = formQuiz[quiz];
 


  const selecionarResposta = (letra) => {
    if (!confirmado) {  // só pode mudar se não confirmou ainda
      setRespostaSelecionada(letra);
    }
  };

  function ChecarResposta() {
    setConfirmado(true);
    if (pergunta.verificar(respostaSelecionada)) {
      console.log("Ele acertou");
      acerto()
    } else {
      console.log("Errou");
    }
  }

  return (
    <>
      <h2 className='display-6'>{pergunta.question}</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {Object.entries(pergunta.respostas).map(([letra, texto]) => {
          // Definir a classe baseada no estado confirmado e na resposta selecionada
          let classe = 'quiz';

          if (confirmado) {
            if (letra === pergunta.correta) {
              classe += ' correta';    // verde
            } else if (letra === respostaSelecionada) {
              classe += ' errada';     // vermelho
            }
          } else if (respostaSelecionada === letra) {
            classe += ' selecionado';  // destaque antes de confirmar
          }

          return (
            <li
              key={letra}
              onClick={() => selecionarResposta(letra)}
              className={classe}
              style={{ cursor: confirmado ? 'default' : 'pointer' }}
            >
              <strong>{letra}:</strong> {texto}
            </li>
          );
        })}
      </ul>
      <div className='col-12 d-flex justify-content-end'>
        <button
          className='btn btn-success col-4'
          onClick={ChecarResposta}
          hidden={!respostaSelecionada || confirmado}
        >
          Confirmar
        </button>
          <button
          className='btn btn-info text-light col-4'
          onClick={proximoEx}
          hidden={!confirmado}
        >
          Próximo
        </button>
      </div>
    </>
  );
};

export default Exercicio;
