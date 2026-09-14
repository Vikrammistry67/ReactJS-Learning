import { useEffect } from "react";

const EventListner = () => {



    useEffect(() => {
        const handleKeyUp = (event) => {
            console.log(event.key, ' is pressed');
        };
        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, []);



    return (
        <div>EventListner</div>
    )
}

export default EventListner 