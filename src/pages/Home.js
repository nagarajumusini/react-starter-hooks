import React, {Fragment, useContext, useState} from 'react';
import { StateContext } from '../state';

function Home() {
const [{user}, dispatch] = useContext(StateContext);
const [name, setName] = useState(user.name);
const onChangeName = (ev) => {
    setName(ev.target.value);
}
  return (
    <Fragment>
        <h1>Welcome to {name}</h1>
        <input type="text" name="name" value={name} onChange={onChangeName}/>
        <button
            onClick={() => dispatch({
                type: 'changeName',
                payload: name
            })}
            >
            Change my name
            </button>
    </Fragment>
  );
}

export default Home;
