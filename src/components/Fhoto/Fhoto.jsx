// import React from 'react';

// import './Fhoto.scss';

// const Fhoto = () => {
//   return (
//     <div>
//       <div className="about">
//         <h1>Здравствуйте, меня зовут Юлия</h1>
//         <div>
//           Я закончила Минский государственный лингвистический институт и теперь
//           я преподаю польский язык для моих учеников. С 2020 года я работаю в
//           Минске. На сегодняшний день я готовлю 4-ех учеников в Минске.
//           Подготавливаю их для учебы или работы в Польше. Я очень люблю свою
//           работу. Ведь создавать фундамент для раскрытия языкового потенциала
//           моих учеников можно только тогда, когда ты получаешь удовольствие не
//           только от результата, но и от процесса! Каждый ученик для меня — это
//           новая история, новый мир.
//         </div>
//       </div>
//       <div className="fhotos">
//         <div>
//           <img className="fhoto1" src="./img/fhoto1.jpg" alt="dasd" />
//         </div>
//         <div className="ph">
//           <img className="fhoto2" src="./img/fhoto2.jpg" alt="dasd" />
//           <img className="fhoto2" src="./img/fhoto3.jpg" alt="dasd" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fhoto;

import React from 'react';
import Carousel from 'nuka-carousel';

class Fhoto extends React.Component {
  state = {
    slideIndex: 0,
  };

  render() {
    return (
      <Carousel
        slideIndex={this.state.slideIndex}
        afterSlide={(slideIndex) => this.setState({ slideIndex })}
      >
        <img
          className="fhoto1"
          width="1920px"
          height="1200px"
          src="./img/fhoto1.jpg"
          alt="dasd"
        />
        <img
          className="fhoto1"
          width="1920px"
          height="1200px"
          src="./img/fhoto2.jpg"
          alt="dasd"
        />
        <img
          className="fhoto1"
          width="1920px"
          height="1200px"
          src="./img/fhoto3.jpg"
          alt="dasd"
        />
        <img
          className="fhoto1"
          width="1920px"
          height="1200px"
          src="./img/fhoto4.jpg"
          alt="dasd"
        />
      </Carousel>
    );
  }
}
export default Fhoto;
