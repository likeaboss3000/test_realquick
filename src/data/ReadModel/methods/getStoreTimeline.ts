import { ReadModel } from '..';

export async function getStoreTimeline(this: ReadModel, pipeline: any) {
  try {
    return this.postsColl.aggregate(pipeline).next();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
