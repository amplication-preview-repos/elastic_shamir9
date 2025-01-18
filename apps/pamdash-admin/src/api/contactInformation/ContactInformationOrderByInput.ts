import { SortOrder } from "../../util/SortOrder";

export type ContactInformationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lga?: SortOrder;
  lgaOfResidence?: SortOrder;
  phoneNumber?: SortOrder;
  residentialAddress?: SortOrder;
  stateOfOrigin?: SortOrder;
  stateOfResidence?: SortOrder;
  updatedAt?: SortOrder;
  usersId?: SortOrder;
};
