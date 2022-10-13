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
    {id:1, title:'FIFA 23', price:'70usd', image: fifa23 , categoria:'juegos'},
    {id:2, title:'Call of Duty: Modern Warfare II', price:'70usd', image: codMW , categoria:'juegos'},
    {id:3, title:'God of War: Ragnarok', price:'70usd', image: ragnarok , categoria:'juegos'},
    { id: 4, title: 'NBA 2K23', price: '70usd', image: nba23, categoria: 'juegos' },
    
    {id:5, title:'Playstation 5 Standard Edition', price:'500usd', image: playStandard , categoria:'consolas'},
    {id:6, title:'Playstation 5 Digital Edition', price:'400usd', image: playDigital , categoria:'consolas'},
    {id:7, title:'Xbox Series X', price:'500usd', image: xbox , categoria:'consolas'},
    { id:8, title: 'Nintendo Switch', price: '300usd', image: nSwitch, categoria: 'consolas' },
    
    {id:9, title:'Playstation 5 Controller', price:'70usd', image: playController  , categoria:'accesorios'},
    {id:10, title:'Xbox Series X Controller', price:'60usd', image: xboxController  , categoria:'accesorios'},
    {id:11, title:'Nintendo Switch Pro Controller', price:'70usd', image: nSwitchController  , categoria:'accesorios'},
]