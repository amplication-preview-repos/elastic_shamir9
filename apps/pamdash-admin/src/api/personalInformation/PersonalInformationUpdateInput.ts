import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PersonalInformationUpdateInput = {
  dateOfBirth?: Date;
  firstName?: string;
  gender?: "Male" | "Female";
  lastName?: string;
  middleName?: string | null;
  nin?: string;
  user?: UserWhereUniqueInput | null;
};
