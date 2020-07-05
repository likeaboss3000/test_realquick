export async function fetchUser(
  parent,
  { userId }: { userId: string },
  { ReadModel }
) {
  try {
    // Fetch User
    const user = await ReadModel.fetchUser({ userId });
    if (!user) {
      const err = new Error('User not found');
      err.name = 'QueryError';
      throw err;
    }
    return { status: 200, user, userError: [] };
  } catch (e) {
    console.log(e);
    return { status: 400, userErrors: [{ type: e.name, message: e.message }] };
  }
}
