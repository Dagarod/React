/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/*eslint no-undef: "error"*/
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState([]);
    let urlres = "";

    const pagina = async (url) => {
        if (!url) {
            urlres = 'https://reqres.in/api/users';
        } else {
            urlres = 'https://reqres.in/api/users?page=' + url;
        }
        const res = await fetch(urlres);
        const json = await res.json();

        console.log(urlres);

        setUsers(json.data);
        setPages(json.total_pages);
    }

    useEffect( () => {
        pagina();
    }, []);
    return (
        <div className='div-contenedor'>
            <button onClick={() => pagina(1) }>1</button>
            <button onClick={() => pagina(pages) }>{ pages }</button>
            {users.map(user => {
                return (
                    <article key={user.id} className='div-user'>
                        <img src={user.avatar} alt={user.first_name.toString()} />
                        <div>
                            <h4>{user.first_name.toString()} {user.last_name.toString()}</h4>
                            <p>{user.email} </p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

ReactDOM.render(< App />, document.getElementById('root'));