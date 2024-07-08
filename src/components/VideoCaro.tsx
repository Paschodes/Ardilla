import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VideoCarouselProps {
  videos: { src: string; title: string; description: string }[];
}

const VideoCaro: React.FC<VideoCarouselProps> = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={video.src} alt={video.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCaro;
