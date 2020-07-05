const User = {
  __resolveType({ userType }) {
    if (userType == 'Regular') return 'RegularUser';
    return 'BusinessRegular';
  },
};

export default User;
