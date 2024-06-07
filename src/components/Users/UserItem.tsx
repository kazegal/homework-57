import React from 'react';
import {IProfile} from "../../types";

interface Props {
    user: IProfile;
}

const UserItem: React.FC<Props> = ({user}) => {

    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHglXXMjeEZRop50M4ngilGXIBJavNa_NgA&usqp=CAU';
    const image = user.image || imageUrl;

    const imageStyle: React.CSSProperties = {
        background: `url(${image}) center / cover no-repeat`,
    };

    let activity: string = '';

    if (user.activity) {
        activity = "Active";
    } else activity = 'Banned';

    return (
        <div className="card mb-2">
            <div className="row no-gutters">
                <div className="col-sm-4 rounded-start" style={imageStyle}/>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title"><b>{user.name}</b></h5>
                        <p className="card-text small"><b className="me-3">Email:</b>{user.email}</p>
                        <p className="card-text small"><b className="me-3">Activity:</b>{activity}</p>
                        <p className="card-text"><b className="me-3">Role:</b>{user.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserItem;