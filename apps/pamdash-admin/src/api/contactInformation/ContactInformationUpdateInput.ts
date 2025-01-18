import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactInformationUpdateInput = {
  lga?: string;
  lgaOfResidence?: string;
  phoneNumber?: string;
  residentialAddress?: string;
  stateOfOrigin?: string;
  stateOfResidence?: string;
  users?: UserWhereUniqueInput | null;
};
