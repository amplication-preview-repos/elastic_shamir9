import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  contactInformationId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  personalInformationId?: SortOrder;
  roles?: SortOrder;
  signUpCredentials?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  verificationInformationId?: SortOrder;
};
