import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactInformationWhereInput = {
  id?: StringFilter;
  lga?: StringFilter;
  lgaOfResidence?: StringFilter;
  phoneNumber?: StringFilter;
  residentialAddress?: StringFilter;
  stateOfOrigin?: StringFilter;
  stateOfResidence?: StringFilter;
  users?: UserWhereUniqueInput;
};
