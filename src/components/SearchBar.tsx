import { useState } from "react"
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
        <div className="flex w-full max-w-sm items-center gap-2">
            <Input value={value} onChange={e => setValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="Card serach..." />

            <Button type="submit" variant="outline" onClick={handleClick}> Search</Button>
        </div>
    )
}