import { generateToken } from '../utils/generateToken';

export async function login(
  parent,
  { email, password }: { email: string; password: string },
  { ReadModel }
) {
  try {
    if (email !== password) {
      const err = new Error('Password is your email. They must be the same.');
      err.name = 'LoginError';
      throw err;
    }

    // Fetch User
    const user = await ReadModel.fetchUserByEmail({ email });
    if (!user) {
      const err = new Error('User not found.');
      err.name = 'LoginError';
      throw err;
    }

    // Create Token with UserInfo
    const token = generateToken(user);

    return { status: 200, token, user, userErrors: [] };
  } catch (e) {
    console.log(e);
    return { status: 400, userErrors: [{ type: e.name, message: e.message }] };
  }
}
