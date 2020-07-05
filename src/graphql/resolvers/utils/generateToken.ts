import * as jwt from 'jsonwebtoken';

export function generateToken(user: any) {
  const payload: CurrentUser = {
    sub: user.userId,
    userType: user.userType,
    iat: Date.now(),
    iss: 'PromoIn',
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

export interface CurrentUser {
  sub: string;
  userType: string;
  iat: number;
  iss: string;
}
