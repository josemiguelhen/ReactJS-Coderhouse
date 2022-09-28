import "./ItemListContainer.css"

export const ItemListContainer = ({productos, title}) => {
    return (
        <div className="contenedor">
            <p>{title} de {productos}</p>
        </div>
    )
}