export type Profile = {
    username: string;
    email: string;
    pass: string;
};

export type AdminProfile = Profile & { _id: string }