export async function fetchProfile(
  parent,
  { profileId }: { profileId: string },
  { ReadModel }
) {
  try {
    // Fetch profile
    const profile = await ReadModel.fetchProfile({ profileId });
    if (!profile) {
      const err = new Error('Profile not found');
      err.name = 'QueryError';
      throw err;
    }
    return { status: 200, profile, userErrors: [] };
  } catch (e) {
    console.log(e);
    return { status: 400, userErrors: [{ type: e.name, message: e.message }] };
  }
}
