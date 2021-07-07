import React, { useContext } from "react";
import ContextGlobal from 'components/contexts/globalContext'

export default function Number() {

    const {
        valor,
        setValor,
    } = useContext(ContextGlobal);

    return (
        <>
            <div id={"div"}>
                <h1>
                    {valor}
                </h1>
                <button onClick={() => setValor(valor+1)}>
                    ADD 1
                </button>
            </div>
        </>
    )
}