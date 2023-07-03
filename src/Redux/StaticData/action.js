import * as type from "./actionType";

export const changeDarkMode = (isDark) => (
  console.log("acton is called"),
  {
    type: type.CHANGE_DARK_MODE,
    payload: isDark,
  }
);
