export interface SejamIdentityInfoModel {
  gender?: string;
  fatherName?: string;
  identityCode?: string;
  identitySerialNo?: {
    character?: string;
    number?: string;
    serialNo?: string;
  };
  birthDate?: string | BirthDate;
  placeOfBirth?: string;
  placeOfIssue?: string;
}

interface BirthDate {
  year?: string;
  month?: string;
  day?: string;
}
