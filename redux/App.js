import { Provider } from "react-redux"
import Store from "./Store/Store"
import Home from "./Home"

const App = ()=>{
  return(
    <Provider store={Store}>
        <Home/>
    </Provider>
  )
}
export default App