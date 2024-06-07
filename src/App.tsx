import {useState} from 'react';
import {IProfile} from "./types";
import Toolbar from "./components/Toolbar/Toolbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import './App.css';


const App = () => {

    const [users, setUsers] = useState<IProfile[]>([
        {id: '1', name: 'Ulan', email: 'hamsta2502@gmail.com', activity: false, image: '', role: 'user'},
        {id: '2', name: 'Andrey', email: 'andrey9292@gmail.com', activity: false, image: '', role: 'editor'},
    ]);

    const addUser = (newUser: IProfile) => {
        setUsers(prevState => [...prevState, newUser]);
    };

    return (
        <>
            <header>
                <Toolbar/>
            </header>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <UserForm onSubmit={addUser}/>
                    </div>
                    <div className="col-6">
                        <Users users={users}/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;
