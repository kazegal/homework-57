export interface IProfile {
    id: string;
    name: string;
    email: string;
    activity: boolean;
    image: string;
    role: string;
}

export interface IProfileMutation {
    name: string;
    email: string;
    activity: boolean;
    image: string;
    role: string;
}
