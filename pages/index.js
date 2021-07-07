/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useContext } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Banner from 'components/Inicio/Banner'
import Outros from 'components/Inicio/Outros'
import Number from 'components/Inicio/Number'
import Footer from "components/Footers/Footer.js";
import ContextGlobal from 'components/contexts/globalContext'

export default function Index() {
  console.log('Rodei Index')

  // const [ valor, setValor ] = useState(0)
  // const [ carregando, setCarregando ] = useState(true)

  // useEffect(() => {
  //   window.setTimeout(function(){
  //     setCarregando(false)
  //   },2500)
  // }, [])

  // if(carregando === true){
  //   return (<h1 style={{textAlign:"center", fontSize: '48px'}}> Caregando... </h1>)
  // }

  return (
    <>
      {/* <ContextGlobal.Provider value={{
        valor, setValor
      }}> */}
        <IndexNavbar fixed />
        <Banner/>
        {/* <Number/> */}
        <Outros/>
        <Footer />
      {/* </ContextGlobal.Provider> */}
    </>
  );
}
