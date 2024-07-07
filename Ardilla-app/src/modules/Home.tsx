
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import phone from '../assets/phone.svg';
import expect from '../assets/expect.svg';
import arrow from '../assets/arroww.svg';
import Carosel from '../components/Carousel';
import Caros from '../components/Caros';
import back from '../assets/back.svg';
import Access from '../components/Access';
import icon from '../assets/icon.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';

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
          <div className="text-white w-6xl items-center flex flex-col gap-10 relative mb-[440px]">
            <h1 className="w-[1000px] h-[110px] font-extrabold text-[95px] text-center leading-[110px]">Your Access To More</h1>
            <div className="w-[780px] items-center text-center">
              <p className="font-medium text-[15px] leading-8">Ardilla helps you save and invest in achieving your financial goals, we have the most flexible and seamless way to grow your funds.</p>
            </div>
            <Button title="Get Started" className="bg-white text-[#3D0072]" />
          </div>
          <img src={phone} alt="" className="absolute top-[500px]" />
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

      <div className=" inset-x-0 " style={{ backgroundImage: `url(${back})` }}>
        <div className="flex flex-col gap-8 max-w-6xl justify-center h-[1180px] mx-auto mt-10">
          <div className='w-[1093px] gap-6 flex flex-col mt-48'>
            <h1 className='w-[1093px] h-[100px] text-[#FFFFFF] text-[76px] font-extrabold leading-[100px]'>Access More With Your Money</h1>
            <p className='w-[836px] h-[64px] text-base text-[#FFFFFF] font-medium leading-[32px]'>Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than ever at your finger tips. Why not take advantage today?</p>
            <Button title='Learn more about savings' className='bg-[#1B0132] border text-[#FFFFFF]' />
          </div>
          <div className='grid grid-cols-2 md:grid-cols-2 mt-10'>
            <Access 
              icon={icon} 
              title="DIB" 
              description="Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund." 
              linkText="Learn More" 
              linkHref="/" 
              containerClassName="bg-[#2C0041] p-8 rounded-lg text-white"
              titleClassName="text-xl font-semibold mb-4"
              descriptionClassName="text-base mb-6"
              linkClassName="text-[#E8356D] font-medium"
            />
            <Access 
              icon={icon1} 
              title="Dreams" 
              description="Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well." 
              linkText="Learn More" 
              linkHref="/" 
              containerClassName="bg-[#2C0041] p-8 rounded-lg text-white"
              titleClassName="text-xl font-semibold mb-4"
              descriptionClassName="text-base mb-6"
              linkClassName="text-[#E8356D] font-medium"
            />
            <Access 
              icon={icon2} 
              title="Vault" 
              description="Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to." 
              linkText="Learn More" 
              linkHref="/" 
              containerClassName="bg-[#2C0041] p-8 rounded-lg text-white"
              titleClassName="text-xl font-semibold mb-4"
              descriptionClassName="text-base mb-6"
              linkClassName="text-[#E8356D] font-medium"
            />
            <Access 
              icon={icon3} 
              title="Grit" 
              description="Become a VIP when you save more money with us. Enjoy better benefits." 
              linkText="Learn More" 
              linkHref="/" 
              containerClassName="bg-[#2C0041] p-8 rounded-lg text-white"
              titleClassName="text-xl font-semibold mb-4"
              descriptionClassName="text-base mb-6"
              linkClassName="text-[#E8356D] font-medium"
            />
          </div>
        </div>
      </div>

      <div className="bg-white relative">
        <div className="flex flex-col justify-between py-10 max-w-6xl mx-auto">
          <div className="flex flex-col gap-11 mb-32">
            <h1 className="text-[#0D9488] font-extrabold text-[80px] leading-[100px] w-[1101px] h-[200px]"><span className="text-[#3D0072]">Unlimited</span> Investment Opportunities</h1>
            <p className="w-[789px] h-[100px] font-medium text-2xl leading-[50px] text-[#3D0072]">Plan towards your future by investing with ardilla, Grow your money confidently and securely with the available investment opportunities</p>
            <Button title="Invest with ardilla (Coming Soon)" className="bg-white text-[#8807F7] border border-purple-600" />
          </div>
          <img src={arrow} alt="arrow" className="absolute right-24 top-[155px]" />
        </div>
      </div>

      <div className="bg-[#F3F4F6]">
        <div className="flex flex-col justify-between py-10 max-w-6xl mx-auto mb-[150px] gap-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#3D0072] w-[1100px] h-[101px] font-extrabold text-[70px] leading-[100.72px]">Don’t Take Our <span className="text-[#E8356D]">Word</span> For It</h1>
            <p className="text-[#3D0072] text-base font-medium w-[505px]">Listen to testimonials from Ardilla users building wealth</p>
          </div>
          <div>
            <Caros />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
