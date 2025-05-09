import {useState} from 'react'; 

const Body2 = () => {
  const [intext, setIntext] = useState("");
  const handleOnChange = (event)=>{
    //console.log(event.target.value);
    setIntext(event.target.value);
  }
  return(
    <div>
      {/* <input type="text" onChange={handleOnChange} /> */}
      <input type="text" value={intext} onChange={handleOnChange} />
      <div>{intext}ㅋㅋㅋㅋㅋㅋ</div>
    </div>
  );
}
export default Body2;
