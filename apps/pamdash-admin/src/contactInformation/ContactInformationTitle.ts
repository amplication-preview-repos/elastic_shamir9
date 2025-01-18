import { ContactInformation as TContactInformation } from "../api/contactInformation/ContactInformation";

export const CONTACTINFORMATION_TITLE_FIELD = "lga";

export const ContactInformationTitle = (
  record: TContactInformation
): string => {
  return record.lga?.toString() || String(record.id);
};
