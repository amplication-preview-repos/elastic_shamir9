import { VerificationInformation as TVerificationInformation } from "../api/verificationInformation/VerificationInformation";

export const VERIFICATIONINFORMATION_TITLE_FIELD = "organisationName";

export const VerificationInformationTitle = (
  record: TVerificationInformation
): string => {
  return record.organisationName?.toString() || String(record.id);
};
