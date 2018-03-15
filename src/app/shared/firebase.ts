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
  userpicks?: IRoundPick;
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

export interface IRoundPick {
  roundname: string;
  m1_localScore: number;
  m2_localScore: number;
  m3_localScore: number;
  m4_localScore: number;
  m5_localScore: number;
  m6_localScore: number;
  m7_localScore: number;
  m8_localScore: number;
  m9_localScore: number;
  m1_visitorScore: number;
  m2_visitorScore: number;
  m3_visitorScore: number;
  m4_visitorScore: number;
  m5_visitorScore: number;
  m6_visitorScore: number;
  m7_visitorScore: number;
  m8_visitorScore: number;
  m9_visitorScore: number;
}

export interface ITournament {
  active: boolean;
  country: string;
  endDate: Date;
  startDate: Date;
  tourId: string;
}
