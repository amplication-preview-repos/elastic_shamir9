import { SortOrder } from "../../util/SortOrder";

export type PersonalInformationOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  middleName?: SortOrder;
  nin?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
