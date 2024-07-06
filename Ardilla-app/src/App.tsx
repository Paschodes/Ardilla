// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './styles/tailwind.css';

import Button from "./components/Button"
import Input from "./components/Inputs"
import Navbar from "./components/Navbar"
import Select from "./components/select"

function App() {

    const handleChange = () => {
      console.log("i am tired ooooo")
    } 

    const lois = ["dance"]

  return (
    <>
      <div>
        <Navbar />
        <Button title="login"/>
        <Input label="akrika papaya" name="Lois" onChange={handleChange} value={""}/>
        <Select label="gender" name="louis" onChange={() => console.log("ike agwulam")} value="genz" data={lois}/>
      </div>
      
    </>
  )
}

export default App
