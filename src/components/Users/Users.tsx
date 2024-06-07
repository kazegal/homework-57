import React from 'react';
import {IProfile} from "../../types";
import UserItem from "./UserItem";

interface Props {
    users: IProfile[];
}

const Users: React.FC<Props> = ({users}) => {

    return (
        <>
            <h4>Users:</h4>
            {users.map((item) => (
                <UserItem key={item.id} user={item}/>
            ))}
        </>
    );
};

export default Users;