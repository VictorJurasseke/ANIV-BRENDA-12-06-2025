import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import img from '../assets/imgs/1.jpg';
import ImageText from '../components/ImageText';
import ImageMain from '../components/ImageMain';
import Textos from '../components/texto';
import CardImage from '../components/CardImage';
import Confete from '../components/Confetti';



const HomeMain = () => {

  function img(n) {
    let img = `../assets/imgs/${n}.jpg`
    return img
  }

  let cardElement = []
  for (let i = 1; i <= 57; i++) {
    cardElement.push(<CardImage src={img(i)}></CardImage>)
  }


  return (
    <>
      <Confete></Confete>
      <NavBar />
      <div className='bg-dark fundochat'>

        <div className="container my-5 mb-5" >
          <div className="row justify-content-center align-items-center">
            <ImageMain img={img(4)} text={""}></ImageMain>

            <div className="col-12 col-md-10 d-flex flex-column flex-md-column align-items-center text-lg-start text-center gap-4 mb-5">
              {/* Imagem */}
              <ImageText title={"WOWW HAPPY BIRTHDAY"} text={Textos.parabens} img={img(8)} />
              <ImageText title={"12/06/2024"} text={Textos.dia12} img={img(24)} />
              <ImageText title={"PANTUFA DA HELLO KITTY BB"} text={Textos.pantufa} img={img("pantufa")} />
              <div className="col-12">
                <p className="mb-4 text-center" style={{ fontFamily: "fantasy", color: "purple", fontSize: '100px' }}>POGGERS PICTURES</p>

                <div className="d-flex flex-wrap w-100 gap-3 px-3 justify-content-center w-100">
                  {cardElement}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
