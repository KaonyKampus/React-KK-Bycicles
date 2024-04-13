import { useEffect } from "react";
import { useState } from "react";


export default function PointerMoveComponent (){
    const[position,setPosition] = useState({x: 0, y:0});

    useEffect(()=>{
        function handleMove(e) {
            setPosition({x: e.clientX, y: e.clientY});
        }
        window.addEventListener('pointermove', handleMove);
        return()=>{
         window.addEventListener('pointermove', handleMove);
        };
    }, []);
return(
    <div style={{
        position: 'absolute',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 30    ,
        height: 30,
    }} />
)

}