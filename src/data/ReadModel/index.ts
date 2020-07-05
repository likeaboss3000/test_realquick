import { MongoClient, Db, Collection } from 'mongodb';

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
}
