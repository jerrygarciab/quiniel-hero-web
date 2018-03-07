export interface IUser {
  email: string;
  favTeam: string;
  lastname: string;
  name: string;
  profilePicture: string;
  username: string;
  userID: string;
  address: IAddress;
  terms: true;
  userkey: string;
}


interface IAddress {
  city: string;
  country: string;
  state: string;
}

export interface IQuiniela {
  active:boolean;
  idQuiniela:number;
  quinielaname:string;
  adminuser:IUser;
  quinielakey:string;
  usersid:Array<IUser>;
}

interface userIDlist{
  ulist:Array<IUser>;

}
export interface IQuinUser {
  idQuiniela:string;
  usersid:Array<IUser>;
}