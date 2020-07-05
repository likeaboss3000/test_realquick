import { ReadModel } from '..';

export async function fetchUserByEmail(this: ReadModel, { email }) {
  return this.usersColl.findOne({ email });
}
