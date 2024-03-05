import '../buton.css'


export default function ButtonComponent ({color,texto,callback}){
    const myStyles = {
        backgroundColor: color,
    };

    return (
        <>
        <button onClick={callback}style={myStyles} className="buttonNav">
            {texto}
        </button>
        
        </>
    )
};