import { useState } from "react"
/*
Build a reading queue.
 There's a text input for a book title and two buttons: "Add to Front" and "Add to Back".
  "Add to Back" appends the book to the end of the list (spread at the end),
   while "Add to Front" prepends it (spread at the beginning). 
   Render the queue as a numbered list. This directly tests that they understand where the spread goes.

*/
export default function ReadingQueue() {
    const [input, setInput] = useState("");
    const [queue, setQueue] = useState<String[]>([])

    function handleAddToFront() {
        setQueue([input, ...queue]);
        setInput(" ")
    }


    function handleAddToBack() {
         setQueue([...queue, input]);
        setInput(" ")
    }
    return (
        <>
            <input className="border-2" name="book" value={input} onChange={e => setInput(e.target.value)}/>

            <button onClick={handleAddToBack}>Add to back</button>
            <button onClick={handleAddToFront}>Add to front</button>

            <div>
                <ol>
                {queue.map((q, i) => (
                    <li key={i}>{q}</li>
                ))}
                </ol>
            </div>
        
        </>
    )
}