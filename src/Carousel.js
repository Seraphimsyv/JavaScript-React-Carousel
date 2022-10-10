import React from 'react';
import './Carousel.css';

function CarouselElement( props ) {
  return (
    <div className='carousel_element' style={ props.style }>
      { props.children }
    </div>
  );
}

function CarouselDot( props ) {
  return (
    <div className={ props.className }></div>
  )
}

function CarouselArrow( props ) {
  return (
    <div className={ props.className } onClick={ props.handle }></div>
  )
}

class Carousel extends React.Component {
  constructor( props ) {
    super( props );
    this.animationFade = this.animationFade.bind( this );
    this.animationScroll = this.animationScroll.bind( this );
    this.handleArrowPrev = this.handleArrowPrev.bind( this );
    this.handleArrowNext = this.handleArrowNext.bind( this );
    this.default = {
      width: 400,
      height: 240,
      animation: 'scroll',
      autoPlay: false,
      elementsRender: 1,
      seconds: 1000,
      secondsFade: 500,
      dots: false,
      arrows: false
    }
    this.state = {
      current: 1,
      translateX: 0,
      elements: [],
      styles: {},
      settings: undefined
    };
  }

  generateId() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  fadeHide() {
    this.timeoutFadeHide = setTimeout( () => {
      document.querySelector(`.carousel_${this.state.settings.id}`).style.opacity = "0";
    }, this.state.settings.seconds - this.state.settings.secondsFade);
    if(this.timeoutFadeHide) {
      document.querySelector(`.carousel_${this.state.settings.id}`).style.opacity = "0";
    }
  }

  fadeShow() {
    this.timeoutFadeShow = setTimeout( () => {
      document.querySelector(`.carousel_${this.state.settings.id}`).style.opacity = "1";
    }, this.state.settings.seconds + this.state.settings.secondsFade * 3);
    if(this.timeoutFadeShow) {
      setTimeout( () => {
        document.querySelector(`.carousel_${this.state.settings.id}`).style.opacity = "1";
      }, this.state.settings.secondsFade * 3);  
    }
  }

  animationFade(mode="next") {
    this.fadeHide();
    this.fadeShow();
    
    let new_current;
    let new_translateX;

    if(this.state.settings.autoPlay === true) {
      if(this.state.current < (this.state.elements.length - this.state.settings.elementsRender) + 1) {
        new_current = this.state.current + this.state.settings.elementsRender;
        new_translateX = this.state.translateX - (this.state.settings.width * this.state.settings.elementsRender);
      } else {
        new_current = 1;
        new_translateX = 0;
      }
    } else {
      if(mode==='next') {

      } else {
        
      }
    }
    
    let new_styles = {
      inner: {
        width: this.state.settings.width * this.state.settings.elementsRender,
        height: this.state.settings.height
      },
      wrapper: {
        width: this.state.settings.width * this.state.elements.length,
        height: this.state.settings.height,
        transform: `translateX(${new_translateX}px)`,
        transition: '.5s ease-in-out'
      },
      elements: {
        width: this.state.settings.width,
        height: this.state.settings.height
      }
    };

    setTimeout(() => {
      this.setState({
        current: new_current,
        translateX: new_translateX,
        styles: new_styles
      });
    }, this.state.settings.secondsFade)
  }

  animationScroll(mode="next") {
    let new_current;
    let new_translateX;

    if(this.state.settings.autoPlay === true) {
      if(this.state.current < (this.state.elements.length - this.state.settings.elementsRender)) {
        new_current = this.state.current + this.state.settings.elementsRender;
        new_translateX = this.state.translateX - (this.state.settings.width * this.state.settings.elementsRender);
      } else {
        new_current = 1;
        new_translateX = 0;
      }
    } else {
      if(mode==='next') {
        if(this.state.current < this.state.elements.length) {
          new_current = this.state.current + this.state.settings.elementsRender;
          new_translateX = this.state.translateX - (this.state.settings.width * this.state.settings.elementsRender);
        } else {
          new_current = 1;
          new_translateX = 0;
        }
      } else {

        new_current = this.state.current - 1;

        if(new_current === 0) {
          new_current = this.state.elements.length;
          new_translateX = Number(`-${this.state.settings.width * (this.state.elements.length - 1)}`)
        } else {
          new_translateX = this.state.translateX + (this.state.settings.width * this.state.settings.elementsRender);
        }
      }
    }
    
    let new_styles = {
      inner: {
        width: this.state.settings.width * this.state.settings.elementsRender,
        height: this.state.settings.height
      },
      wrapper: {
        width: this.state.settings.width * this.state.elements.length,
        height: this.state.settings.height,
        transform: `translateX(${new_translateX}px)`,
        transition: '.5s ease-in-out'
      },
      elements: {
        width: this.state.settings.width,
        height: this.state.settings.height
      }
    };

    this.setState({
      current: new_current,
      translateX: new_translateX,
      styles: new_styles
    });
  }

  handleArrowPrev() {
    if(this.state.settings.animation === 'scroll') {
      this.animationScroll('prev');
      if(this.state.settings.autoPlay === true) {
        clearInterval(this.interval)
        this.interval = setInterval(this.animationScroll('prev'), this.state.settings.seconds);
      }
    }
    if(this.state.settings.animation === 'fade') {
      this.animationFade('prev');
      if(this.state.settings.autoPlay === true) {
        clearInterval(this.interval)
        this.interval = setInterval(this.animationFade('prev'), this.state.settings.seconds);
      }
    }
  }
  
  handleArrowNext() {
    if(this.state.settings.animation === 'scroll') {
      this.animationScroll();
      if(this.state.settings.autoPlay === true) {
        clearInterval(this.interval);
        this.interval = setInterval(this.animationScroll, this.state.settings.seconds);
      }
    }
    if(this.state.settings.animation === 'fade') {
      this.animationFade();
      if(this.state.settings.autoPlay === true) {
        clearInterval(this.interval);
        this.interval = setInterval(this.animationFade, this.state.settings.seconds);
      }
    }
  }

  componentDidMount() {    
    let new_settings;
    if('settings' in this.props && this.state.settings === undefined) {
      new_settings = {
        id: 'id' in this.props.settings ? this.props.settings : this.generateId(),
        width: 'width' in this.props.settings ? this.props.settings.width : this.default.width,
        height: 'height' in this.props.settings ? this.props.settings.height : this.default.height,
        animation: 'animation' in this.props.settings ? this.props.settings.animation : this.default.animation,
        autoPlay: 'autoPlay' in this.props.settings ? this.props.settings.autoPlay : this.default.autoPlay,
        elementsRender: 'elementsRender' in this.props.settings ? this.props.settings.elementsRender : this.default.elementsRender,
        seconds: 'seconds' in this.props.settings ? this.props.settings.seconds : this.default.seconds,
        secondsFade: 'secondsFade' in this.props.settings ? this.props.settings.secondsFade : this.default.secondsFade,
        dots: 'dots' in this.props.settings ? this.props.settings.dots : this.default.dots,
        arrows: 'arrows' in this.props.settings ? this.props.settings.arrows : this.default.arrows
      };
    } else {
      new_settings = this.default;
    }

    let new_styles;
    if(Object.keys(this.state.styles).length === 0 && this.props.elements.length > 0) {
      new_styles = {
        inner: {
          width: this.props.settings.width * this.props.settings.elementsRender,
          height: this.props.settings.height
        },
        wrapper: {
          width: this.props.settings.width * this.props.elements.length,
          height: this.props.settings.height,
        },
        elements: {
          width: this.props.settings.width,
          height: this.props.settings.height
        }
      };
    } else {
      new_styles = {};
    }

    this.setState({
      elements: 'elements' in this.props ? this.props.elements : [],
      styles: new_styles,
      settings: new_settings
    });
  }

  componentWillUnmount() {
    if(this.state.autoPlay === true)
    clearInterval( this.animation );
  }

  renderContent() {
    let styleElement;
    if('elements' in this.state.styles) {
      styleElement = this.state.styles.elements;
    }

    if(this.state.elements.length > 0) {

      return this.state.elements.map( ( value, key ) => (
        <CarouselElement key={ key } style={ styleElement }>
          <h1>{ value.title }</h1>
          <p>{ value.text }</p>
        </CarouselElement>
      ))

    }
  }

  renderDots() {
    if(this.state.settings !== undefined && this.state.settings.dots === true) {
      return (
        <div className='carousel_dots'>
          {
            this.state.elements.map((value, key) => (
              <CarouselDot
                key={key}
                className={
                  (
                    this.state.settings.elementsRender > 1 &&
                    key+1 >= this.state.current &&
                    key+1 <= this.state.current + this.state.settings.elementsRender-1
                  )
                  ||
                  (
                    this.state.settings.elementsRender === 1 &&
                    key+1 === this.state.current
                  )
                  ? 'carousel_dot active'
                  : 'carousel_dot'
                }
              />
            ))
          }
        </div>
      );
    } else {
      return <div></div>
    }
  }

  renderArrows() {
    if(this.state.settings !== undefined && this.state.settings.arrows) {
      return {
        left: <CarouselArrow className='carousel_arrow carousel_arrow_left' handle={this.handleArrowPrev} />,
        right: <CarouselArrow className='carousel_arrow carousel_arrow_right' handle={this.handleArrowNext} />
      };
    } else {
      return {
        left: undefined,
        right: undefined
      };
    };
  }

  render() {
    if(this.state.settings !== undefined && !this.interval) {
      if(this.state.settings.autoPlay === true) {
        if(!this.interval) {
          if(this.state.settings.animation === 'scroll') {
            this.interval = setInterval(this.animationScroll, this.state.settings.seconds);
          }
          if(this.state.settings.animation === 'fade') {
            this.interval = setInterval(this.animationFade, this.state.settings.seconds);
          }
        }
      }
    }

    let styleInner = {};
    let styleWrapper = {};

    if('inner' in this.state.styles) styleInner = this.state.styles.inner;
    if('wrapper' in this.state.styles) styleWrapper = this.state.styles.wrapper;

    let content = this.renderContent();
    let dots = this.renderDots();
    let arrows = this.renderArrows();

    return (
      <div className='carousel'>
        <div style={ styleInner } className='carousel_inner'>
          <div style={ styleWrapper } className={`carousel_wrapper carousel_${this.state.settings !== undefined ? this.state.settings.id : ''}`}>
            { content }
          </div>
        </div>
        <div className='carousel_menu'>
          { arrows.left }
          { dots }
          { arrows.right }
        </div>
      </div>
    )
  }
}

export default Carousel