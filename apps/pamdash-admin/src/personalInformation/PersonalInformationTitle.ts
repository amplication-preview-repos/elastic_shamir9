import { PersonalInformation as TPersonalInformation } from "../api/personalInformation/PersonalInformation";

export const PERSONALINFORMATION_TITLE_FIELD = "firstName";

export const PersonalInformationTitle = (
  record: TPersonalInformation
): string => {
  return record.firstName?.toString() || String(record.id);
};
