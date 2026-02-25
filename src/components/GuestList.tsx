import { useState } from 'react'
/*
Build a party guest list. There's a name input and an "Invite" button.
 When clicked, the name is added to the list. 
 Above the list, display "X guests invited" where X updates as guests are added. 
 If someone tries to add an empty name, don't add it and show a small red warning message instead.


*/
export default function GuestList() {
    const [input, setInput] = useState('');
    const [count, setCount] = useState(0);
    const [list, setList] = useState<String[]>([]);
    const [error, setError] = useState("")

    function handleInvite() {
        if(input.length === 0) {
            setError("Name cannot be empty silly")
        } else {
            setError("")
            setCount(n => n +1);
            setInput(" ")
            setList(
                [...list, input]
            )
        }
    }


    return (
        <>
            <input
                className=' border-2'
                name='name'
                value={input}
                onChange={e => {setInput(e.target.value)}}
            />

            <button onClick={handleInvite}>Invite</button>
            <div id="error">{error}</div>
            <div id="invite-list">
                {count} guests invited.

                <ol>
                {list.map(guest => (
                    <li>{guest}</li>
                ))}
                </ol>
            </div>
        
        </>

    )
}