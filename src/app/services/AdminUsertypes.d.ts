export type Profile = {
    username: string;
    email: string;
    pass: string;
    role: 'admin';
};

export type AdminProfile = Profile & { _id: string }