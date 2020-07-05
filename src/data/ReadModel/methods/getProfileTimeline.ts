import { ReadModel } from '..';

export async function getProfileTimeline(this: ReadModel, pipeline: any) {
  try {
    return this.postsColl.aggregate(pipeline).next();
  } catch (e) {
    console.log(e);
    throw e;
  }
}
