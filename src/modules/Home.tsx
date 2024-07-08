import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import phone from '../assets/phone.svg';
import expect from '../assets/expect.svg';
import arrow from '../assets/arroww.svg';
import Carosel from '../components/Carousel';
import back from '../assets/back.svg';
import Access from '../components/Access';
import VideoCaro from '../components/VideoCaro';
import onyinye from '../assets/onyinye.svg';
import md from '../assets/md.svg';
import dallas from '../assets/dallas.svg';
import accessData from '../datas/AccessData';

const videos = [
  { src: onyinye, title: 'MD - Miss Oyinye Dallas', description: 'What is Ardilla and its benefits?' },
  { src: md, title: '', description: '' },
  { src: dallas, title: '', description: '' },
];

const Home = () => {
  return (
    <div>
      <Navbar
        bgColor="bg-[#240053]"
        textColor="text-white"
        buttonColor="bg-[#8807F7]"
        buttonTextColor="text-white"
        buttonClassName="rounded-full"
      />
      <div className="bg-[#240053]">
        <div className="flex flex-col items-center justify-between py-10 max-w-6xl mx-auto">
          <div className="text-white flex flex-col items-center gap-10 relative mb-40 md:mb-[440px]">
            <h1 className="text-center text-[40px] sm:text-[50px] md:text-[60px] lg:text-[95px] leading-tight md:leading-[110px] font-extrabold">
              Your Access To More
            </h1>
            <div className="text-center max-w-lg md:max-w-xl">
              <p className="font-medium text-[15px] leading-8">
                Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.
              </p>
            </div>
            <Button title="Get Started" className="bg-white text-[#3D0072] hover:bg-[#8807F7] hover:text-white" />
          </div>
          <img src={phone} alt="phone" className="absolute top-[442px] w-3/4 md:w-auto" />
        </div>
      </div>

      <div className="bg-white max-w-6xl mx-auto">
        <div className="max-w-screen-xl mt-20">
          <div>
            <img src={expect} alt="What you can expect" />
          </div>
          <div className="mt-20">
            <Carosel />
          </div>
        </div>
      </div>

      <div className="bg-cover bg-center inset-x-0" style={{ backgroundImage: `url(${back})` }}>
        <div className="flex flex-col gap-8 max-w-6xl justify-center h-auto md:h-[1520px] mx-auto mt-10">
          <div className="w-full md:w-[1093px] gap-6 flex flex-col mt-10 md:mt-48">
            <h1 className="text-white text-center text-4xl md:text-[76px] font-extrabold leading-tight md:leading-[100px]">
              Access More With Your Money
            </h1>
            <p className="text-white text-center text-base md:w-[836px] font-medium leading-8 md:leading-[32px]">
              Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than ever at your fingertips. Why not take advantage today?
            </p>
            <Link to="/interest" className="self-center md:self-start">
              <Button title='Learn more about savings' className='bg-[hsl(272,96%,10%)] hover:bg-[#8807F7] border text-white' />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 bg-[#29014B] p-8 md:p-24 gap-8 md:gap-16 rounded-lg text-white">
            {accessData.map((item, index) => (
              <Access
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                linkText={item.linkText}
                linkHref={item.linkHref}
                containerClassName="p-8 rounded-lg hover:bg-[#43027E]"
                titleClassName="text-xl font-semibold mb-4"
                descriptionClassName="text-base mb-6"
                linkClassName="text-white font-medium"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white relative">
        <div className="flex flex-col justify-between py-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-11 mb-32">
            <h1 className="text-[#0D9488] font-extrabold text-4xl md:text-[80px] leading-tight md:leading-[100px]">
              <span className="text-[#3D0072]">Unlimited</span> Investment Opportunities
            </h1>
            <p className="font-medium text-2xl leading-8 md:leading-[50px] text-[#3D0072] max-w-lg md:max-w-none">
              Plan towards your future by investing with Ardilla. Grow your money confidently and securely with the available investment opportunities.
            </p>
            <Button title="Invest with Ardilla (Coming Soon)" className="bg-white text-[#8807F7] border border-purple-600" />
          </div>
          <img src={arrow} alt="arrow" className="absolute right-24 top-[155px] hidden md:block" />
        </div>
      </div>

      <div className="bg-[#F3F4F6]">
        <div className="flex flex-col justify-between py-10 max-w-6xl mx-auto mb-10 md:mb-[150px] gap-8 md:gap-20">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <h1 className="text-[#3D0072] text-4xl md:text-[70px] font-extrabold leading-tight md:leading-[100.72px]">
              Don’t Take Our <span className="text-[#E8356D]">Word</span> For It
            </h1>
            <p className="text-[#3D0072] text-base font-medium max-w-lg md:max-w-none">
              Listen to testimonials from Ardilla users building wealth.
            </p>
          </div>
          <div>
            <VideoCaro videos={videos} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
