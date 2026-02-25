import { useState } from "react"
/*
Build a quick idea capture tool. 
There's a textarea (not a regular input) and a "Save Idea" button. 
Each idea gets added to a list of idea "cards" (just styled divs) below. 
Each card should show the idea text and the order number it was added (e.g. "Idea #1", "Idea #2").
 Clear the textarea after each submission.


*/



export default function IdeaBoard() {
    const [idea, setIdea] = useState("");
    const [cards, setCards] = useState<String[]>([]);
    const [count, setCount] = useState(0);


    function handleSaveIdea() {
        if(idea.length === 0) {
            return;
        }
        setCount(n => n + 1);
        setCards([...cards, idea])
        setIdea(" ")
    } 

    return (
        <>
        <textarea
            value={idea}
            onChange={e => setIdea(e.target.value)}


        />
        <button onClick={handleSaveIdea}>Save Idea</button>

            <div id="idea-cards">
                {
                    cards.map(card => (
                        <div className="card">  
                            {card} #{count}
                        </div>
                    ))
                }

            </div>
        </>
    )
}