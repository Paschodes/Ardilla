
import Button from '../components/Button';
import Footer from '../components/Footer';
import Headnav from '../components/Headnav';
import Input from '../components/Inputs';
import Select from '../components/select';
import graph from '../assets/graph.svg'

const Interest = () => {
    const handleChange = () => {
      console.log("i am tired ooooo")
    } 

    const IntData = ["Monthly", "Weekly", "Yearly"]
  return (
    <div>
        <Headnav
            bgColor="bg-[#10001F]" // Adjusted background color to match screenshot
            textColor="text-white"
            buttonColor="bg-[#FFFFFF]" // Button background color
            buttonTextColor="text-[#240053]" // Button text color
            buttonClassName="border border-[#3D0072] hover:bg-[#8807F7] hover:text-[#FFFFFF]" // Additional button styles
        />

        <div className='bg-[#10001F]'>
        <div className="flex items-center justify-between py-10 max-w-6xl mx-auto text-white">
            <div > 
                <h2 className='w-[470px] leading-[49.6px] text-[#FFFFFF] font-bold text-[40px] '>Calculate Your Interests</h2>
                <div>
                    <Select label="How often are you saving?" name="louis" onChange={() => console.log("working")} value="genz" data={IntData}/>
                    <Input label="How much are you saving?" name="Lois" onChange={handleChange} value={""}/>
                    <Input label="How long are yousaving for? (In months)" name="Lois" onChange={handleChange} value={""}/>               
                </div>
            </div>

            <div className='bg-[#FFFFFF] p-10 w-[500px]'>
                <div>
                    <div>
                        <p className='text-[#9CA3AF] text-xs font-medium'>Total Balance</p>
                        <p className='text-[#3D0072] text-2xl font-bold'>N6,600</p>
                    </div>
                    <p className='text-[#6B7280] font-normal text-[15px] leading-[26px] w-[518px]'>Saving <span className='font-normal text-lg leading-[22px]'>₦2,000</span> monthly for 3 months will result in a balance of <span>₦6,600</span></p>
                    <div>
                        <p className='text-[#9CA3AF] text-xs font-medium'>Interest</p>
                        <p className='text-[#3D0072] text-2xl font-bold'>N600 <span className='font-normal text-lg leading-[22px]'>(2%)</span></p>
                    </div>
                </div>
                <div>
                    <div >
                        <p className='text-[#9CA3AF] text-xs font-medium'>Total Savings</p>
                        <p className='text-[#3D0072] text-2xl font-bold'>N6,000 <span className='font-normal text-lg leading-[22px]'>(2%)</span></p>
                    </div>
                    <img src={graph} alt="graph" />
                </div>
                <Button title='Start Saving Now' className='bg-[#8807F7] text-[#FFFFFF]'/>
            </div>
        </div>
        </div>

      <div></div>
      <div></div>
      <div></div>
      <Footer />
    </div>
  );
};

export default Interest;
