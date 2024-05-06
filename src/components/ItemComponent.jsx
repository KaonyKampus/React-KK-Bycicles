

export default function ItemComponent ({cards}){


    return(
    <>
    <div>
    {
        cards.map((card) => (
        <image key={card.id}>
            {card.image}
        </image> 
        ))}
        {

        cards.map((card) => (
        <h4 key={card.id}>
            {card.name},{card.precio}
        </h4> 
        ))}
    </div>
    </>
)}