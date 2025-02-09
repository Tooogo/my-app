type SelfIntroduction = {
    id: string;
    type: string;
    content: string;
};

export type Profile = {
    name: string;
    hobby: string;
    area: string;
    club: string;
    part_time_job: string;
    self_introduction: SelfIntroduction[];
};


export type MongoProfile = Profile & { _id: string } //TODO #1
