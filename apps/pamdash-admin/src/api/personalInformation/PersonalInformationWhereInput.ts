import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PersonalInformationWhereInput = {
  dateOfBirth?: DateTimeFilter;
  firstName?: StringFilter;
  gender?: "Male" | "Female";
  id?: StringFilter;
  lastName?: StringFilter;
  middleName?: StringNullableFilter;
  nin?: StringFilter;
  user?: UserWhereUniqueInput;
};
