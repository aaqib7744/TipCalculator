import React,{useState} from 'react';
import Header from './components/Header/Header';
import Output from './components/Output/Output';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';

function Main() {

 



  const [Bill,setBill] = useState('');
  const [select,setSelect] = useState('');
  const [Customername,setCustomername] = useState('');
  const [PrTip,setPrTip] = useState('');
  const [arr,setArr] = useState([]);
  



  // functionss

  const changeHandler = (event) =>{
    setBill(event.target.value);
    console.log(Bill);
    
  }

  const selectHandler = (event) => {
    setSelect(event.target.value);
    console.log(select);
  }

  const gtName = (event) => {
    setCustomername(event.target.value);
    console.log(Customername);

  }



  const sendtoArr = () => {
    let obj = {
      amount:Bill,
      percentage:select,
      Customername:Customername,
     
    }

    let tip = Number(select)/100 * Number(Bill);
    obj.niceTip = tip;

    
    setArr([...arr,obj])
    console.log(arr)
    
  
  }



  const tipCal = () => {
    let tip = Number(select)/100 * Number(Bill);
    setPrTip(Number(PrTip)+tip)



  }


  








  return (
    <div>
        <Header></Header>
        <Input send = {sendtoArr} getName = {gtName} selectHandler = {selectHandler}  changeHandler = {changeHandler}></Input>
        <Output   given = {arr} PrTip={PrTip}></Output>
        <button onClick={tipCal}>Calculate customer and tip</button>
        <Footer ></Footer>
    </div>
  )
}

export default Main