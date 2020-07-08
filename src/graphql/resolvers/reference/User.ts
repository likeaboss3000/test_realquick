const User = {
  __resolveType({ userType }) {
    if (userType == 'Regular') return 'RegularUser';
    return 'BusinessUser';
  },
};

export default User;
