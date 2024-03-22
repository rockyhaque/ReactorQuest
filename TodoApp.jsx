import { useState } from "react";

const UseStateArray = () => {
    
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    const AddToList = () => {
        list.push(item);
        setList([...list])
    }

    const RemoveItem = (index) => {
        list.splice(index, 1)
        setList([...list])
    }


    return (

        <div>
            
            <input onChange={(e) => setItem(e.target.value)} type="text" placeholder="Item" className="border-4 border-sky-900 rounded"/>
            <button onClick={AddToList} className="btn btn-accent ml-4">Add</button>
            
            <hr />
            
            <table>
                <tbody>
                    {
                        list.length!== 0 ? (
                            list.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element}</td>
                                        <td><button onClick={() => {RemoveItem(index)}} className="btn btn-sm btn-warning ml-4">Remove</button></td>
                                    </tr>
                                )
                            })
                        )
                        :
                        (<tr></tr>)
                    }
                </tbody>
            </table>

            <p>{item}</p>
        </div>
    );
};

export default UseStateArray;
