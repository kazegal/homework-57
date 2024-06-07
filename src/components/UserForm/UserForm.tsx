import React, {useState} from 'react';
import {IProfile, IProfileMutation} from "../../types";
import {nanoid} from "nanoid";

enum EType {
    User = 'user',
    Editor = 'editor',
    Admin = 'admin',
}

interface Props {
    onSubmit: (name: IProfile) => void;
}


const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [user, setUser] = useState<IProfileMutation>({
        name: '',
        email: '',
        activity: false,
        image: '',
        role: '',
    });
    const onBooleanFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = e.target;

        setUser(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const onTextFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;

        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const getSelectOption = () => {
        return Object.keys(EType).map((key) => (
            <option key={key} value={EType[key as keyof typeof EType]}>{key}</option>
        ));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: nanoid(),
            ...user,
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>Add new Profile</h4>

            <div className="form-group mb-3">
                <label htmlFor="name">Name:</label>
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={user.name}
                    onChange={onTextFieldChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input
                    type='email'
                    name="email"
                    id="email"
                    className="form-control"
                    value={user.email}
                    onChange={onTextFieldChange}
                />
            </div>

            <div className="form-group mt-4 mb-4">
                <label htmlFor="activity">Activity:</label>
                <input
                    type="checkbox"
                    name="activity"
                    id="activity"
                    className="form-check-input ms-5"
                    checked={user.activity}
                    onChange={onBooleanFieldChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    className="form-control"
                    value={user.image}
                    onChange={onTextFieldChange}
                />
            </div>

            <div className="form-group mb-3">
                <select name="role"
                        required
                        id="role"
                        className="form-control mt-3"
                        value={user.role}
                        onChange={onTextFieldChange}
                >
                    <option value="" disabled defaultValue="">Select a Role!</option>
                    {getSelectOption()}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create new Profile</button>
        </form>
    );
};

export default UserForm;