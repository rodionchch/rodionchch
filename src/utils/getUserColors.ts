import { UsersType } from "store/game/loginSlice";

const getUserColors = (users?: UsersType[]) => {
  if (users) {
    const colors = ["red", "blue", "green", "yellow"];
    return users?.map((user, color) => ({
      userId: user.id,
      color: colors[color],
    }));
  }
};

export default getUserColors;
