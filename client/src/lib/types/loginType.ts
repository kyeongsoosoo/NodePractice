interface loginType {
  name: String;
  email: String;
  password: String;
}

interface userType {
  _id: string;
  idAdmin?: boolean;
  isAuth: boolean;
  email: string;
  name: string;
  lastname?: string;
  role?: string;
  image?: string;
}
