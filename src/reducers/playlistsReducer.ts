const playlistReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return state;
    case 'decrement':
      return state;
    default:
      throw new Error();
  }
};

export default playlistReducer;
