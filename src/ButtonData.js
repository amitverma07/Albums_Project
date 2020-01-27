import { useState } from 'react'

//To provide functionality to counter button using custom hooks
function useCustom() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return {
    count,
    handleClick
  };
}
export default useCustom;