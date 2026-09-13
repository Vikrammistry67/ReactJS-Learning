import { useState } from "react"

const DynamicList = () => {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const addToList = () => {
        if (!input.trim()) return;
        setList(prev => [...prev, input]);
        setInput('');
    };
    return (
        <div>

            <input
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Item"
            />
            <button
                onClick={addToList}
                style={{ marginLeft: '10px' }}>Add Item</button>


            <div>
                {
                    list.map((item, idx) => {
                        return (
                            <div>{idx} -- {item}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DynamicList 