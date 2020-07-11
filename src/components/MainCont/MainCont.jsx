import React from 'react';
import Carousel from 'nuka-carousel';

class MainCont extends React.Component {
  state = {
    slideIndex: 0,
  };

  render() {
    return (
      <Carousel
        slideIndex={this.state.slideIndex}
        afterSlide={(slideIndex) => this.setState({ slideIndex })}
      >
        <img src="./img/main1.jpg" alt="dasd" />
        <img src="./img/main2.jpg" alt="dasd" />
        <img src="./img/main3.jpg" alt="dasd" />
        <img src="./img/main4.jpg" alt="dasd" />
        <img src="./img/main5.jpg" alt="dasd" />
      </Carousel>
    );
  }
}
export default MainCont;
