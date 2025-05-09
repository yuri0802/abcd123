//State : 현재 가지고 있는 형태나 모양을
//       동적으로 변화시킬 수 있는 값
import {useState} from 'react';

const Body1 = ()=> {
//  const state = useState(2);
//  console.log(state);
const [count ,setCount] = useState(0);
  const countFun = ()=>{
    setCount(count+1);
 };
  return(
    <>
    <h1>{count}</h1>
    {/* <button onClick={()=>{
       setCount(count+1);
    }}>
      숫자 추가(1씩 증가)
    </button> */}
    <button onClick={countFun}>
      숫자 추가(1씩 증가)
      aaaaa
      aaaaaaaa
      aaaaaa
    </button>
    </>
  );
}
export default Body1;