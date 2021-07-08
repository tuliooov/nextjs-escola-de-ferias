/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect, useContext } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Banner from 'components/Inicio/Banner'
import Outros from 'components/Inicio/Outros'
import Number1 from 'components/Inicio/Number1'
import Footer from "components/Footers/Footer.js";

export default function Index() {
  console.log('RENDERIZEI O COMPONENT')

  const [ valor, setValor ] = useState(0)

  return (
    <>
        <IndexNavbar fixed />
        <Banner/>
        <Number1 valor={valor} setValor={setValor}/>
        <Outros/>
        <Footer />
    </>
  );
}
