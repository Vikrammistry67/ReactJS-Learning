import { useEffect, useState } from "react"

const Autosave = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (!text) return;

        let timer = setTimeout(() => {
            console.log('Saved : ', text);
        }, 2000);
        return () => clearTimeout(timer)
    }, [text]);

    return (
        <div>
            <h1>Auto Save</h1>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type Here..."
            />
        </div>
    )
}

export default Autosave