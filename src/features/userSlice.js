//{} so many fns in @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";
//obj:
const userSlice = createSlice({
  name: "user", //name
  initialState: {
    //¡object// four properties:
    isSignedIn: false,
    userData: null,
    searchInput: "tech",
    blogData: null,
  },
  //reduceer: set get data!! manipulate the initial State.
  reducers: {//obj//declare reducer;// defined reducer functions(export using the userSlice.actions)! to changes state;
    setSignedIn: (state, action) => {// when usersigned in, reducer hlp to set initada, state= action.payload;
      state.isSignedIn = action.payload;// set state'isSignedIn to action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
  },
});
//user actions: export them using slice actions: spread to action
// create constant to export reducer's methods!!!!!=userSlice.actions;
export const { setSignedIn, setUserData, setInput, setBlogData } =
  userSlice.actions;
//change state value:
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;
//default export
// export default userSlice.reducer;
const reducer = userSlice.reducer
export default reducer;