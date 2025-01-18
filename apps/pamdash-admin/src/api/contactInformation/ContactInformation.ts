import { User } from "../user/User";

export type ContactInformation = {
  createdAt: Date;
  id: string;
  lga: string;
  lgaOfResidence: string;
  phoneNumber: string;
  residentialAddress: string;
  stateOfOrigin: string;
  stateOfResidence: string;
  updatedAt: Date;
  users?: User | null;
};
