import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import frame1 from "../assets/frame1.svg"
import frame2 from "../assets/frame2.svg"
import frame3 from "../assets/frame3.svg"
import frame4 from "../assets/frame4.svg"
import frame5 from "../assets/frame5.svg"
import frame6 from "../assets/frame6.svg"
import frame7 from "../assets/frame7.svg"
import frame8 from "../assets/frame8.svg"

const Carosel = () => {
    return ( 
        <div >

        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 4,
                partialVisibilityGutter: 40
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
            <img src={frame1} alt="frame1" />
            <img src={frame2} alt="frame2" />
            <img src={frame3} alt="frame3" />
            <img src={frame4} alt="frame4" />
            <img src={frame5} alt="frame5" />
            <img src={frame6} alt="frame6" />
            <img src={frame7} alt="frame7" />
            <img src={frame8} alt="frame8" />
            
            
        </Carousel>
        </div>

     );
}
 
export default Carosel;
