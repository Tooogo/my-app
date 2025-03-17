import UserForm from './UserForm';
import { MongoProfile } from '../services/type';

const defaultProfile: MongoProfile = {
  _id: '',
  name: '',
  locale: 'en',
  hobby: '',
  area: '',
  club: '',
  part_time_job: '',
  self_introduction: [],
};

export default function ParentComponent({ userData }: { userData?: MongoProfile }) {
  // `userData` が `undefined` の場合は `defaultProfile` を使う
  const profile = userData ?? defaultProfile;

  return <UserForm data={profile} />;
}
