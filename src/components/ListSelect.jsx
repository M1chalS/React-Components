import {useState} from "react";
import {GoX} from "react-icons/go";
import Button from "./Button";

const ListSelect = ({data}) => {
    const [list, setList] = useState(data);
    const [selected, setSelected] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAdd = (user) => {
        setList(list.filter((val) => {
            return val.id !== user.id
        }));

        setSelected([
            ...selected,
            {id: user.id, name: user.name}
        ]);
    }

    const handleRemove = (indexToRemove) => {

        const selectedToRemove = selected.filter((selected, index) => {
            return index === indexToRemove;
        });

        const updatedSelected = selected.filter((selected, index) => {
            return index !== indexToRemove;
        });

        setList([...list, selectedToRemove[0]])
        setSelected(updatedSelected);
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selected);
    }

    const filteredUsers = list.filter(user => {
        return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const renderedSelected = selected.map((user, index) =>
        <div key={index}>
            {user.name} <GoX onClick={() => handleRemove(index)}/>
        </div>
    );

    const renderedUsers = filteredUsers.map(val =>
        <li key={val.id}>
            <div onClick={() => handleAdd(val)}>{val.name}</div>
        </li>
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchTerm} onChange={handleChange}/>
                <Button>Submit</Button>
                <div>
                    Selected:
                    <div>
                        {renderedSelected}
                    </div>
                </div>
                <hr />
                <ul>
                    {renderedUsers}
                </ul>
            </form>
        </div>
    );
}

export default ListSelect;