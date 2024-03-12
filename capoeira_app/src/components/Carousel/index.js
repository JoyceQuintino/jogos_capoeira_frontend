import Slider from 'react-slick';

function Carousel({ children }) {
    const settings = {
        dots: false,
        infinite: false,
        centerMode: false,
        speed: 500,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            { children }
        </Slider>  
    )

}

export default Carousel;