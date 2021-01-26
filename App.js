import React, {useState} from 'react';
import {AppNavigation} from "./src/navigation/AppNavigation";
import AppLoading from "expo-app-loading";
import {bootstrap} from "./src/bootstrap";
import {Provider} from "react-redux";
import store from "./src/Redux/store";

export default function App() {

  const [loading, setLoading] = useState(true)

  if(loading){
    return (
        <AppLoading
          startAsync={bootstrap}
          onFinish={() => setLoading(false)}
          onError={e => console.log(e)}
        />
    )
  }

  return <Provider store={store}>
    <AppNavigation/>
  </Provider>
}
