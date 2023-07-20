import { useEffect, useState } from "react";
import SplashScreen from "./Components/SplashScreen";
import LoginPage from './Components/LoginPage';


function App() {
  const [loading, isLoading] = useState(false);
  const [component, setComponent] = useState(null);
  useEffect(()=>{
    const timer = setTimeout((isLoading(true)), 1000)
    return ()=>{clearTimeout(timer)}
  },
    []
  );

  useEffect(()=>{
    if(!(loading)){
      setComponent(<SplashScreen></SplashScreen>)
    }
    else{
      setTimeout(()=>{setComponent(<LoginPage></LoginPage>)}, 1000);
    }
  }, [loading])


  return (
    <div>
      {component}

    </div>
  );
}

export default App;
