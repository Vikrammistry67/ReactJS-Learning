import { useEffect, useState } from "react";

const ToggleButton = () => {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = theme ? "black" : "white";
    }, [theme]);

    return (
        <button onClick={() => setTheme(prev => !prev)}>
            {theme ? "White" : "Black"}
        </button>
    );
};

export default ToggleButton;