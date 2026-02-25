
import { useState } from 'react';

/*



Build a grocery list app. 
There's a text input and an "Add Item" button. 
Typing in the input and clicking the button adds the item to a list rendered below. 
The button should be disabled if the input is empty. Bonus: show a message like "Your list is empty!" when there are no items yet.
*/

export default function GroceryList() {
    const [listItem, setlistItem] = useState<string[]>([]);
    const [curValue, setValue] = useState(" ");
    const [buttonState, setButtonState] = useState(true);

    function addItem(item: string) {
        setlistItem([
            ...listItem,
            item
        ])
    }

    function handleClick() {
        addItem(curValue);
        setValue(" ");
    }

    return (
        <>
            <input
            className='border-2'
                value={curValue}
                onChange={e => {
                    setValue(e.target.value)
                    setButtonState(e.target.value.toString().length === 0) }
                }
            />
            <button disabled={buttonState} onClick={handleClick}>Add Item</button>
            <div>
                <ul>
                    {listItem.length > 0 && listItem.map(item => (
                        <li>{item}</li>
                    )
                    )}

                    {listItem.length === 0 && <div>No items</div>}
                </ul>

            </div>
        </>
    )

}