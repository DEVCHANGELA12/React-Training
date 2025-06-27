import type { IUser } from "./UserModel";

let userArr: IUser[] = [
  {
    id: 1,
    userName: "Dev Changela",
    email: "dev123@gmail.com",
    dob: "2001-05-20",
  },
  {
    id: 2,
    userName: "Harsh Patel",
    email: "harsh123@gmail.com",
    dob: "2001-05-23",
  },
  {
    id: 3,
    userName: "Vasu Changela",
    email: "vasu123@gmail.com",
    dob: "2001-08-20",
  },
];

export class UserService {
  create = (userName: string, email: string, dob: string): boolean => {
    const isDuplicate = userArr.some(
      (user) => user.userName.toLowerCase() === userName.toLowerCase()
    );

    if (isDuplicate) {
      return false;
    }
    const newId = userArr.length + 1;
    userArr.push({ id: newId, userName: userName, email: email, dob: dob });
    return true;
  };

  allUsers = (): IUser[] => {
    return userArr;
  };

  getUserDetail = (id: number): IUser | undefined => {
    return userArr.find((x) => x.id === id);
  };

  updateUser = (
    id: number,
    newEmail: string,
    newUserName: string,
    newDob: string
  ): IUser => {
    let userIndex = userArr.findIndex((x) => x.id === id);
    if (userIndex >= 0) {
      userArr[userIndex] = {
        id,
        email: newEmail,
        userName: newUserName,
        dob: newDob,
      };
      return userArr[userIndex];
    }
    return userArr[userIndex];
  };

  deleteUser = (id: number) => {
    userArr = userArr.filter((x) => x.id !== id);
  };
}

const userService = new UserService();
export default userService;
