import { User } from "../user/User";

export type PersonalInformation = {
  createdAt: Date;
  dateOfBirth: Date;
  firstName: string;
  gender?: "Male" | "Female";
  id: string;
  lastName: string;
  middleName: string | null;
  nin: string;
  updatedAt: Date;
  user?: User | null;
};
