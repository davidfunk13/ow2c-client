import { FC, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from "react-router-dom";
interface AppProps { }

const App: FC<AppProps> = () => {

  return (
    <>
      fuck you
      <Outlet />
    </>
  );
}

export default App
