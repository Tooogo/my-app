import { ObjectId } from 'mongodb';

type SelfIntroduction = {
    id: string;
    type: string;
    content: string;
};

export type Profile = {
    name: string;
    locale: string;
    hobby: string;
    area: string;
    club: string;
    part_time_job: string;
    self_introduction: SelfIntroduction[];
};


export type MongoProfile = Profile & { _id?: ObjectId | null } //TODO #1
