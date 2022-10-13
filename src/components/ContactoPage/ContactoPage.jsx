import { useEffect, useState } from "react";

export const ContactoPage = () => {

    

    const hacerClick = () => {
        console.log('hiciste click')
    }

    // esto se va a ejecutar despues del primer renderizado
   /*  useEffect(() => {
        window.addEventListener('click', hacerClick);
        return () => {
            window.removeEventListener('click', hacerClick)
        }
    }, []) */
    
    useEffect(() => {
        const verificarResolucion = () => {
            console.log(window.innerWidth);
            // if (window.innerWidth) {
            //     setIsMobile(true);
            // } else {

            // }
        }
        window.addEventListener('load', verificarResolucion);
        return () => {
            window.removeEventListener('load', verificarResolucion)
        }
    }, [])
    

    const [statusForm, setStatusForm] = useState("");

    const sendForm = (event) => {
        // no se recarga la pagina
        event.preventDefault();

        console.log('formulario enviado')
        setStatusForm('formulario enviado')
    }




    return (
        <div style={{background:'pink'}}>
            {/* <p onClick={hacerClick}>pagina de contacto</p> */}
            <p>pagina de contacto</p>
            <form onSubmit={sendForm}>
                <input type="text" placeholder="nombre" />
                <button type="sumbit">Enviar Formulario</button>
            </form>
            <h1>{ statusForm }</h1>
        </div>
    )
}