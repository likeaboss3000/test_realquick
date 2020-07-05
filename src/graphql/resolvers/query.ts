import { fetchProfile } from './query/fetchProfile';
import { fetchProfileTimeline } from './query/fetchProfileTimeline';
import { fetchPromoTimeline } from './query/fetchPromoTimeline';
import { fetchStore } from './query/fetchStore';
import { fetchStoreTimeline } from './query/fetchStoreTimeline';
import { fetchUser } from './query/fetchUser';

const Query = {
  fetchProfile,
  fetchProfileTimeline,
  fetchPromoTimeline,
  fetchStore,
  fetchStoreTimeline,
  fetchUser,
};

export default Query;
