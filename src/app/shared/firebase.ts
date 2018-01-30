export interface IUser {
  email: string;
  favorite_team: string;
  last_name: string;
  name: string;
  profilePicture: string;
  username: string;
  userID: string;
  address: IAddress;
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
}

interface userIDlist{
  ulist:Array<IUser>;

}
export interface IQuinUser {
  idQuiniela:number;
  usersid:userIDlist;
}