import './App.css';
import Carousel from './Carousel';

const elements = [
  {img: false, title: "1 Elem title", text: "1 Elem text"},
  {img: false, title: "2 Elem title", text: "2 Elem text"},
  {img: false, title: "3 Elem title", text: "3 Elem text"},
  {img: false, title: "4 Elem title", text: "4 Elem text"},
  {img: false, title: "5 Elem title", text: "5 Elem text"},
  {img: false, title: "6 Elem title", text: "6 Elem text"},
  {img: false, title: "7 Elem title", text: "7 Elem text"},
  {img: false, title: "8 Elem title", text: "8 Elem text"},
  {img: false, title: "9 Elem title", text: "9 Elem text"}
];

const settings = {
  singleScrollCarousel: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
  },
  singleScrollCarouselDots: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
    dots: true
  },
  singleScrollCarouselArrows: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
    arrows: true
  },
  singleScrollCarouselDotsAndArrows: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
    dots: true,
    arrows: true
  },
  singleFadeCarousel: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
  },
  singleFadeCarouselDots: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
    dots: true
  },
  singleFadeCarouselArrows: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
    arrows: true
  },
  singleFadeCarouselDotsAndArrows: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 1,
    seconds: 3500,
    dots: true,
    arrows: true
  },
  moreScrollCarousel: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
  },
  moreScrollCarouselDots: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
    dots: true
  },
  moreScrollCarouselArrows: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
    arrows: true
  },
  moreScrollCarouselDotsAndArrows: {
    width: 400,
    height: 240,
    animation: 'scroll',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
    dots: true,
    arrows: true
  },
  moreFadeCarousel: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
  },
  moreFadeCarouselDots: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
    dots: true
  },
  moreFadeCarouselArrows: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
    arrows: true
  },
  moreFadeCarouselDotsAndArrows: {
    width: 400,
    height: 240,
    animation: 'fade',
    autoPlay: true,
    elementsRender: 3,
    seconds: 3500,
    dots: true,
    arrows: true
  }
};


function App() {
  return (
    <div className="App">
      <h1>singleScrollCarousel</h1>
      <Carousel settings={ settings.singleScrollCarousel } elements={ elements } />
      <h1>singleScrollCarouselDots</h1>
      <Carousel settings={ settings.singleScrollCarouselDots } elements={ elements } />
      <h1>singleScrollCarouselArrows</h1>
      <Carousel settings={ settings.singleScrollCarouselArrows } elements={ elements } />
      <h1>singleScrollCarouselDotsAndArrows</h1>
      <Carousel settings={ settings.singleScrollCarouselDotsAndArrows } elements={ elements } />
      <h1>singleFadeCarousel</h1>
      <Carousel settings={ settings.singleFadeCarousel } elements={ elements } />
      <h1>singleFadeCarouselDots</h1>
      <Carousel settings={ settings.singleFadeCarouselDots } elements={ elements } />
      <h1>singleFadeCarouselArrows</h1>
      <Carousel settings={ settings.singleFadeCarouselArrows } elements={ elements } />
      <h1>singleFadeCarouselDotsAndArrows</h1>
      <Carousel settings={ settings.singleFadeCarouselDotsAndArrows } elements={ elements } />
      <h1>moreScrollCarousel</h1>
      <Carousel settings={ settings.moreScrollCarousel } elements={ elements } />
      <h1>moreScrollCarouselDots</h1>
      <Carousel settings={ settings.moreScrollCarouselDots } elements={ elements } />
      <h1>moreScrollCarouselArrows</h1>
      <Carousel settings={ settings.moreScrollCarouselArrows } elements={ elements } />
      <h1>moreScrollCarouselDotsAndArrows</h1>
      <Carousel settings={ settings.moreScrollCarouselDotsAndArrows } elements={ elements } />
      <h1>moreFadeCarousel</h1>
      <Carousel settings={ settings.moreFadeCarousel } elements={ elements } />
      <h1>moreFadeCarouselDots</h1>
      <Carousel settings={ settings.moreFadeCarouselDots } elements={ elements } />
      <h1>moreFadeCarouselArrows</h1>
      <Carousel settings={ settings.moreFadeCarouselArrows } elements={ elements } />
      <h1>moreFadeCarouselDotsAndArrows</h1>
      <Carousel settings={ settings.moreFadeCarouselDotsAndArrows } elements={ elements } />
    </div>
  );
}

export default App;