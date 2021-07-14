import React from "react";
import Movies from "./services/Movies";
import Shows from "./services/Shows"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  background-color:#000;
}
`


export default function App(){

  return(
    <div>
      <GlobalStyle/>
      <Movies/>
      <Shows/>
    </div>
  )
}