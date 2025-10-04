import React from 'react'
import HomeMain from '../pages/HomeMain'
import { Link } from 'react-router-dom'


const CardFimQuiz = ({ pontos, total }) => {
    return (
        <div>
            <h1 className='display-4 text-center'> {pontos}/{total} </h1>
            {pontos >= 5 ? (
                <>
                    <p className='lead fs-4 text-center' style={{ fontFamily: "fantasy" }}>
                        BOA BB SEMPRE CONFIEI, VOCÊ ACERTOU MAIS DE 50% DAS QUESTÕES, QUER VER SEU PRESENTE?
                    </p>
                    <div className='d-flex justify-content-center bg-light mb-2'>

                        <img
                            src={'/imgs/acerto.gif'}
                            alt="Imagem de acerto"
                            style={{
                                maxWidth: '200px',
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '12px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </div>
                    <div className='d-flex justify-content-center col-12 gap-4'>
                        <Link to="/home" className='btn btn-info col-4 text-light'>Sim</Link>
                        <a className='btn btn-danger col-4 text-light' href='https://i.pinimg.com/736x/93/11/28/931128f0bae7612689a663e613f53520.jpg'>Não</a>
                    </div>
                </>
            ) : (
                <>
                    <h1 className='display-4 text-center' style={{ fontFamily: "fantasy" }}>
                        VOCÊ FALHOU
                    </h1>

                    <div className='d-flex justify-content-center mb-4'>
                        <img
                            src={'/imgs/errou.png'}
                            alt="Imagem de erro"
                            style={{
                                maxWidth: '200px',
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '12px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                            }}
                        />
                    </div>

                    <div className='d-flex justify-content-center col-12'>
                        <a className='btn btn-info col-4 text-light' href='/'>Tentar Novamente</a>
                    </div>
                </>

            )}


        </div >
    )
}

export default CardFimQuiz