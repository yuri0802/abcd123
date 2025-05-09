//State : 현재 가지고 있는 형태나 모양을
//       동적으로 변화시킬 수 있는 값


const Body = ()=>{
  const handlerOnClick = ()=>{
    alert("버튼을 클릭하셨군요");
  }
  return (
    <div >
      <button onClick={()=>{
        alert("버튼이 클릭되었습니다.");}}
      >
        버튼 클릭1
      </button>
      {/* 함수 이름에 괄호()없음
      onClick */}
      <button onClick={handlerOnClick}>
        버튼 클릭2
      </button>
     </div>
  );
}
export default Body;