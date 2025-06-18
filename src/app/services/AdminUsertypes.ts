export type Profile = {
    username: string;
    email: string;
    pass: string;
    role: 'admin'; // Optional role field
};

export type AdminProfile = Profile & { _id: string }