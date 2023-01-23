import { FC, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import { useGetPokemonByNameQuery } from './services/pokemon';
import { Button } from '@mui/material';
import authURI from './utils/authURI';
interface AppProps { }

const App: FC<AppProps> = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
// console.log(data)
  return (
    <>
    <Button href={authURI.toString()} variant='contained' color='primary'>
      Login
    </Button>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}

      <Outlet />
    </>
  );
}

export default App
