import {View,Text, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./Slice/Slice"

const Home = ()=>{
    const count = useSelector((state)=>state.counts.count)
    const dispatch = useDispatch()
    return(
        <View style={{marginTop:100}}>
            <Text style={{fontSize:30,textAlign:"center"}}>
                {count}
            </Text>
            <Button onPress={()=>dispatch(increment(1))} title="AddCount"></Button>
            <Button onPress={()=>dispatch(decrement(1))} title="Decrease"></Button>
            <Button onPress={()=>dispatch(reset())} title="reset"></Button>
        </View>
    )
}
export default Home