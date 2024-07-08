import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Headnav from '../components/Headnav';
import Input from '../components/Inputs';
import Select from '../components/select';
import graph from '../assets/graph.svg';
import point from '../assets/point.svg';
import line from '../assets/line.svg';
import plan from '../assets/plan.svg';
import target from '../assets/target.svg';
import interest from '../assets/interest.svg';
import { questionsData } from '../datas/QueData';
import { interestData } from '../datas/IntData';

const Interest = () => {
  const [formData, setFormData] = useState({
    frequency: '',
    amount: '',
    duration: '',
  });
  
  const [errors, setErrors] = useState({
    frequency: '',
    amount: '',
    duration: '',
  });

  const handleChange = (name: any, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleValidation = (name: any, errorMessage: any) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (!hasErrors) {
      console.log('Form data submitted:', formData);
      // Mock JSON submission
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    }
  };

  const IntData = ["Monthly", "Weekly", "Yearly"];

  return (
    <div>
      <Headnav
        bgColor="bg-[#10001F]" 
        textColor="text-white"
        buttonColor="bg-[#FFFFFF]" 
        buttonTextColor="text-[#240053]" 
        buttonClassName="border border-[#3D0072] hover:bg-[#8807F7] hover:text-[#FFFFFF]" 
      />

      <div className='bg-[#10001F] py-10'>
        <div className="max-w-6xl mx-auto text-white flex justify-between">
          <div className="flex flex-col items-start">
            <h2 className='leading-[49.6px] text-[#FFFFFF] font-bold text-[40px] mb-10'>Calculate Your Interests</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <Select
                label="How often are you saving?"
                name="frequency"
                onChange={handleChange}
                value={formData.frequency}
                data={IntData}
                validationHandler={handleValidation}
                error={errors.frequency}
                required
              />
              <Input
                label="How much are you saving?"
                name="amount"
                onChange={handleChange}
                value={formData.amount}
                validationHandler={handleValidation}
                error={errors.amount}
                required
              />
              <Input
                label="How long are you saving for? (In months)"
                name="duration"
                onChange={handleChange}
                value={formData.duration}
                validationHandler={handleValidation}
                error={errors.duration}
                required
              />
              
            </form>
          </div>

          <div className='bg-[#FFFFFF] p-10 w-full md:w-[500px] mt-10 rounded-lg shadow-lg'>
            <div className="mb-6">
              <p className='text-[#9CA3AF] text-xs font-medium'>Total Balance</p>
              <p className='text-[#3D0072] text-2xl font-bold'>N6,600</p>
              <p className='text-[#6B7280] font-normal text-[15px] leading-[26px]'>Saving <span className='font-normal text-lg leading-[22px]'>₦2,000</span> monthly for 3 months will result in a balance of <span>₦6,600</span></p>
            </div>
            <div className="mb-6">
              <p className='text-[#9CA3AF] text-xs font-medium'>Interest</p>
              <p className='text-[#3D0072] text-2xl font-bold'>N600 <span className='font-normal text-lg leading-[22px]'>(2%)</span></p>
            </div>
            <div className="mb-6">
              <p className='text-[#9CA3AF] text-xs font-medium'>Total Savings</p>
              <p className='text-[#3D0072] text-2xl font-bold'>N6,000 <span className='font-normal text-lg leading-[22px]'>(2%)</span></p>
              <img src={graph} alt="graph" className="mt-4" />
            </div>
            <Button type="submit" title="Start Saving Now" className='bg-[rgb(136,7,247)] text-[#FFFFFF] py-3 rounded' />
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className="max-w-6xl mx-auto text-[#3D0072] flex flex-col justify-between my-14">
          <h1 className='w-[789px] font-bold text-6xl leading-[70px]'>Interest you can count on</h1>
          <div className='flex relative gap-6'>
            <div className='absolute top-[74px]'>
              <img src={point} alt="" />
              <img src={line} alt="" className='ml-2'/>
              <img src={point} alt="" />
            </div>
            <div className='absolute top-[74px] right-[650px]'>
              <img src={point} alt="" />
              <img src={line} alt="" className='ml-2'/>
              <img src={point} alt="" />
            </div>
            <div className='p-10 grid grid-rows-2 grid-flow-col gap-14'>
              {interestData.map((item) => (
                <div key={item.id} className='flex flex-col gap-1'>
                  <h4 className='w-[295px] font-bold text-[22px] leading-[80px]'>{item.title}</h4>
                  <p className='w-[429px] h-[98px] font-normal text-sm leading-[34px]'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white'>
        <div className="max-w-6xl mx-auto text-[#3D0072] flex flex-col justify-between my-24 gap-20">
          <h1 className='w-[333px] h-[70px] text-[50px] font-bold leading-[70px]'>How It Works</h1>
          <div className='flex justify-between'>
            <img src={plan} alt="" />
            <img src={target} alt="" />
            <img src={interest} alt="" />
          </div>
        </div>
      </div>
      
      <div className='bg-white'>
        <div className="max-w-6xl mx-auto text-[#3D0072] flex flex-col justify-between my-24 gap-20 mb-80">
          <h1 className='w-[652px] text-[40px] font-bold leading-6'>Questions We Have Been Asked</h1>
          <div className='flex flex-col gap-8'>
            {questionsData.map((question) => (
              <div key={question.id} className='flex justify-between bg-[#F9FAFB] rounded-lg h-[88px] items-center px-10'>
                <p className='text-base font-medium leading-6'>{question.question}</p>
                <FaPlus />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Interest;
