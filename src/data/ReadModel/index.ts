import { MongoClient, Db, Collection } from 'mongodb';
import { fetchProfile } from './methods/fetchProfile';
import { fetchStore } from './methods/fetchStore';
import { fetchStores } from './methods/fetchStores';
import { fetchUserByEmail } from './methods/fetchUserByEmail';
import { fetchUserById } from './methods/fetchUserById';
import { getPromoTimeline } from './methods/getPromoTimeline';
import { getProfileTimeline } from './methods/getProfileTimeline';
import { getStoreTimeline } from './methods/getStoreTimeline';
import { hasFollowedUser } from './methods/hasFollowedUser';

export class ReadModel {
  private _db: Db;
  private _usersColl: Collection;
  private _profilesColl: Collection;
  private _storesColl: Collection;
  private _postsColl: Collection;
  constructor(private clinet: MongoClient) {
    this._db = this.clinet.db('test_realquick');
    this._usersColl = this._db.collection('usersColl');
    this._profilesColl = this._db.collection('profilesColl');
    this._storesColl = this._db.collection('storesColl');
    this._postsColl = this._db.collection('postsColl');
  }

  get usersColl(): Collection {
    return this._usersColl;
  }

  get profilesColl(): Collection {
    return this._profilesColl;
  }

  get storesColl(): Collection {
    return this._storesColl;
  }

  get postsColl(): Collection {
    return this._postsColl;
  }

  fetchProfile = fetchProfile;
  fetchStore = fetchStore;
  fetchStores = fetchStores;
  fetchUserByEmail = fetchUserByEmail;
  fetchUserById = fetchUserById;
  getPromoTimeline = getPromoTimeline;
  getProfileTimeline = getProfileTimeline;
  getStoreTimeline = getStoreTimeline;
  hasFollowedUser = hasFollowedUser;
}
