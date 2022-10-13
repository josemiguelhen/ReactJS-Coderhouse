import { useState, useEffect } from "react";
import './ItemCount.css'

export const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState(parseInt(initial));

    const incrementar = () => {
    setContador(contador + 1);
    };

    const disminuir = () => {
    setContador(contador - 1);
    };

    useEffect(() => {
        setContador(parseInt(initial))
    }, [initial])

    return (
        <div className="contador">
            <div className="contenedor_botones">
                <button disabled={contador <=1} className="menos" onClick={disminuir}>-</button>
                <button disabled={stock<=0} onClick={()=>onAdd(contador)} className="chango">Agregar al carrito {contador}</button>
                <button disabled={contador >= stock} className="mas" onClick={incrementar}>+</button>
            </div>
        </div>
    );
};
