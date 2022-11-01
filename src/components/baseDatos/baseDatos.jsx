import fifa23 from '../../assets/productos/fifa23.webp'
import codMW from '../../assets/productos/codMW.webp'
import nba23 from '../../assets/productos/NBA23.webp'
import ragnarok from '../../assets/productos/Ragnarok.webp'
import playStandard from '../../assets/productos/playStandard.jpg'
import playDigital from '../../assets/productos/playDigital.png'
import xbox from '../../assets/productos/xbox.jpg'
import nSwitch from '../../assets/productos/switch.jpg'
import playController from '../../assets/productos/playController.webp'
import xboxController from '../../assets/productos/xboxController.jpg'
import nSwitchController from '../../assets/productos/nSwitchController.jpg'

export const arregloProductos = [
    { id: 1, title: 'FIFA 23', price: 70, image: fifa23, details: 'FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima y última entrega de la serie FIFA desarrollada por EA Sports.', stock: '10', platforms:'Disponible en: PS4, PS5, Xbox One, Xbox Series X, PC, Nintendo Switch.', categoria: 'juegos' },
    
    { id: 2, title: 'Call of Duty: Modern Warfare II', price: 70, image: codMW, details: 'Call of Duty: Modern Warfare II es un juego de disparos en primera persona de 2022, Es una secuela indirecta del juego lanzado en 2019 y sirve como la decimonovena entrega de la serie general de Call of Duty. ', stock: '6', platforms:'Disponible en: PS4, PS5, Xbox One, Xbox Series X, PC.', categoria: 'juegos' },
    
    { id: 3, title: 'God of War: Ragnarok', price: 70, image: ragnarok, details: 'God of War Ragnarök es un próximo videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Será la novena entrega de la serie God of War, la novena cronológicamente y la secuela de God of War de 2018. Basado libremente en la mitología nórdica. Sirviendo como el final de la era nórdica de la serie, el juego cubrirá Ragnarök, una serie de eventos que provocan el fin de los días y representa la muerte de algunos de los dioses nórdicos.', stock: '5', platforms:'Disponible en: PS4, PS5.', categoria: 'juegos' },
    
    { id: 4, title: 'NBA 2K23', price: 70, image: nba23, details: 'NBA 2K23 es un videojuego de baloncesto desarrollado por Visual Concepts y publicado por 2K Sports. Es la entrega número 24 de la franquicia NBA 2K y el sucesor de NBA 2K22.', stock: '10', platforms:'Disponible en: PS4, PS5, Xbox One, Xbox Series X|S, PC, Nintendo Switch.', categoria: 'juegos' },
    
    { id: 5, title: 'Playstation 5 Standard Edition', price: 500, image: playStandard, details:'La PlayStation 5 (PS5) es una consola de videojuegos para el hogar desarrollada por Sony Interactive Entertainment. Anunciado en 2019 como el sucesor de PlayStation 4.', stock:'10', categoria: 'consolas' },
    
    { id: 6, title: 'Playstation 5 Digital Edition', price: 400, image: playDigital, details:'La PlayStation 5 (PS5) es una consola de videojuegos para el hogar desarrollada por Sony Interactive Entertainment. Anunciado en 2019 como el sucesor de PlayStation 4. La PS5 edición digital es una versión completamente digital de la consola PS5 que no trae unidad de disco.', stock:'8', categoria: 'consolas' },
    
    { id: 7, title: 'Xbox Series X', price: 500, image: xbox, details:'La Xbox Series X es una consola de videojuegos para el hogar desarrollada por Microsoft. Es la cuarta generación de la familia de consolas Xbox, sucediendo a Xbox One.', stock:'10', categoria: 'consolas' },
    
    { id:8, title: 'Nintendo Switch', price: 300, image: nSwitch, details:'La Nintendo Switch es una consola de videojuegos desarrollada por Nintendo y lanzada en todo el mundo en la mayoría de las regiones el 3 de marzo de 2017. La consola en sí es una tableta que se puede acoplar para usar como consola doméstica o como dispositivo portátil, lo que la convierte en una consola híbrida.', stock:'15', categoria: 'consolas' },
    
    { id: 9, title: 'Playstation 5 Controller', price: 70, image: playController, details:'The DualSense wireless controller for PS5 offers immersive haptic feedback, dynamic adaptive triggers and a built-in microphone, all integrated into an iconic design.', stock:'20', categoria: 'accesorios' },
    
    { id: 10, title: 'Xbox Series X Controller', price: 60, image: xboxController, details:'The controller maintains the overall layout found in the Xbox 360 controller, but with various tweaks to its design, such as a revised shape, redesigned analog sticks, shoulder buttons, and triggers, along with new rumble motors within the triggers to allow for directional haptic feedback.', stock:'20', categoria: 'accesorios' },
    
    {id:11, title:'Nintendo Switch Pro Controller', price:70, image: nSwitchController, details:'The Nintendo Switch Pro Controller is a game controller manufactured and released by Nintendo for use with the Nintendo Switch video game console. It is an alternative controller to the Joy-Con. ', stock:'20',categoria:'accesorios'},
]