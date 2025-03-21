import { ObjectId } from "mongodb";

export type MongoProfile = {
    _id?: ObjectId;
    name: string;
    locale: string;
    email: string;
    pass: string;
};

