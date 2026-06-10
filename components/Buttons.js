import { Button, Text } from "react-native"
import { useEffect, useState } from 'react';

const Buttons = ()=>{
    let [count, setCount] = useState(0)
    useEffect(()=>{
      console.log("Use Effect is Working")      
  },[count])
    return(
        <>
        <Button title="login" onPress={() => setCount(count + 1)}></Button>
        <Text>{count}</Text>
       </>
    )
}

export default Buttons