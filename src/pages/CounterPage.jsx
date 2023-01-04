import produce from "immer";
import Button from "../components/Button";
import {useReducer} from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            break;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            break;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            break;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            break;
        default:
            throw new Error('Unexpected action type: '+ action.type);
    }
}

function CounterPage({initialCount}) {

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({type: INCREMENT_COUNT});
    }

    const decrement = () => {
        dispatch({type: DECREMENT_COUNT});
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({type: ADD_VALUE_TO_COUNT})
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button primary onClick={increment}>Increment</Button>
                <Button secondary onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd || ""} onChange={handleChange} type="number"
                       className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button success rounded outline>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;