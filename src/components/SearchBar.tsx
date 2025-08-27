import { useState } from "react"

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {

    const [value, setValue] = useState('');
    function handleClick() {
        onSearch(value);
    }
    function handleKeyDown(event: any) {
        if (event.key === 'Enter') {
            onSearch(value);
        }
    }


    return (
        <>
            <input value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKeyDown} />

            <button style={{ margin: "20px" }} onClick={handleClick}>Search</button>
        </>
    )
}