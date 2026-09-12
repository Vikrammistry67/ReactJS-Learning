import { useLayoutEffect, useRef, } from "react";

const Tooltip = () => {
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        const height = boxRef.current.getBoundingClientRect().height;

        console.log(height);
    }, []);

    return (
        <div ref={boxRef}>
            Hello
        </div>
    );
}


export default Tooltip