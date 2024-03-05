import '../items.css'


export default function ItemListContainer({greeting}){

    return(
        <>
        <section className="itemsContainer">
            <h2>{greeting}</h2>
        </section>
        </>
    )
}