import { MongoProfile } from '@/app/services/type'; // 相対パスは適宜調整
import { ObjectId } from 'mongodb';

const mockMongoProfile: MongoProfile = {
  _id: new ObjectId(),
  name: 'テスト太郎',
  locale: 'ja',
  hobby: 'ハイキング',
  area: '関西',
  club: '探検部',
  part_time_job: 'スーパー',
  self_introduction: [
    {
      id: 's1',
      type: 'text',
      content: '自己紹介テキストです',
    },
  ],
};

describe('MongoProfile 型', () => {
  it('mockMongoProfile が MongoProfile 型と一致する', () => {
    // 実行時には何も起こらないが、型チェックされる
    const profile: MongoProfile = mockMongoProfile;

    // 実行時の振る舞いは空、あくまで型チェック目的
    expect(profile.name).toBe('テスト太郎');
    expect(profile.self_introduction[0].type).toBe('text');
  });
});
