/*

Build a color palette collector.
 There's a text input for a color name (e.g. "coral", "navy") and an "Add Color" button.
  Each added color renders as a small box with a backgroundColor set to that color name and the color's name as a label underneath.
   No duplicates allowed — if the color is already in the list, don't add it and show a brief "Already added!" notice.



*/

import { useState } from "react"
export default function ColorPaletePicker() {
    const [color, setColor] = useState("");
    const [palette, setPalette] = useState<string[]>([]);
    const [error, setError] = useState("");

    function handleColorButton() {
        if(color.length === 0) {
            return;
        }
        if(!palette.find(col => col === color)) {
            setError("")
            setPalette([...palette, color])
        } else {
            setError("Already added!")
        }
        setColor("")
    }

    return (
        <>
        <input className="border-2"
            name="color"
            value={color}
            onChange={e => setColor(e.target.value)}
        />

        <button onClick={handleColorButton}>Add color</button>

        <div id="palette-list" className="flex-col ">
            {error && <div className="text-red-500">{error}</div>}
            { 
                palette.map(color => (
                    <div className="p-4" style={{ backgroundColor: color }}>
                        {color}
                    </div>
                ))
            }

        </div>
        </>
    )
}