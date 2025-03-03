// import { promises } from "dns";
// import { routing } from "../../i18n/routing"
// import { useLocale, useTranslations } from 'next-intl';
import client from "../../lib/mongodb";
import { MongoProfile } from "./type"
const DATABASE = "DATABASE_TEST1"
const COLLECTION = "COLLECTION_TEST1"
import { ObjectId } from 'mongodb'

function getDatabase() {
  return client.db(DATABASE);
}

function getCollection() {
  return getDatabase().collection<MongoProfile>(COLLECTION);
}

// locale に応じたプロフィールを取得する関数
export async function getProfiles(locale: string): Promise<MongoProfile[]> {
  return await getCollection().find({ locale }).toArray() as MongoProfile[];
}

export async function getProfileById(id: string): Promise<MongoProfile> {
  return await getCollection().findOne({ _id: new ObjectId(id) }) as MongoProfile;
}

// locale に応じた1件のプロフィールを取得する関数
export async function getProfile(locale: string, id: string): Promise<MongoProfile | null> {
  const profiles = await getProfiles(locale);  // profilesの取得
  console.log(profiles)
  return profiles.find(profile => profile._id.toString() === id) || null;  // _idで検索して一致するものを返す
}

export async function getProfileWithNameAndID(locale: string): Promise<{ _id: ObjectId, name: string }[]> {
  return await getCollection()
    .find({ locale: locale })
    .project({ _id: 1, name: 1 })
    .toArray() as { _id: ObjectId, name: string }[];
}


export async function WritingDataToMongoDB(data: FormData): Promise<{ insertedId: string }> {
  const name = data.get('name')?.toString() || '';
  const locale = data.get('locale')?.toString() || '';
  const hobby = data.get('hobby')?.toString() || '';
  const area = data.get('area')?.toString() || '';
  const club = data.get('club')?.toString() || '';
  const part_time_job = data.get('part_time_job')?.toString() || '';

  const collection = await getCollection();
  const result = await collection.insertOne({ name, locale, hobby, area, club, part_time_job });

  return { insertedId: result.insertedId.toString() };
}


/*
// TODO #3 refactor to shared db service
export async function getProfiles(): Promise<MongoProfile[]> {
    const profiles = await getCollection().find({}).toArray();
        return profiles as MongoProfile[];
    }


// TODO #2 Change to fetching from Mongo
export async function getProfile(index: number): Promise<MongoProfile> {
    const profiles = await getProfiles();
    return profiles[index];
}

getProfiles().then((profiles) => console.log(profiles)).catch(console.error);

// TODO #4 How to support multiple languages?
export function getProfile_eng(index: number) {
    return profiles_eng[index];
}

export function getProfiles_eng() {
    return profiles_eng;
}
*/

/*
// Function to get profiles based on locale from params
export function getProfile(index: number) {
    const locale = useLocale();
  
    if (locale === "ja") {
      return profiles[index];
    } else if (locale === "en") {
      return profiles_eng[index];
    } else {
      throw new Error("Unsupported locale");
    }
  }

  // Example usage
  export function getProfiles(
    index: number,
    params: { locale: string }
  ): Profile {
    const selectedProfiles = getProfile(index);
    return selectedProfiles[index];
  }
*/