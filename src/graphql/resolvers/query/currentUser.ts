export async function currentUser(parent, args, { ReadModel, currentUser }) {
  try {
    // Check whether user has signed in
    if (!currentUser) {
      const err = new Error('Login required');
      err.name = 'AuthenticationError';
      throw err;
    }
    // Fetch User
    const user = await ReadModel.fetchUserById({ userId: currentUser.id });
    if (!user) {
      const err = new Error('User not found');
      err.name = 'QueryError';
      throw err;
    }
    return { status: 200, user, userErrors: [] };
  } catch (e) {
    console.log(e);
    return { status: 400, userErrors: [{ type: e.name, message: e.message }] };
  }
}
