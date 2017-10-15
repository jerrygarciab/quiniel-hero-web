export interface IUser {
  email: string;
  favorite_team: string;
  last_name: string;
  name: string;
  profilePicture: string;
  username: string;
  user_id: string;
  address: IAddress;
}


interface IAddress {
  city: string;
  country: string;
  state: string;
}
