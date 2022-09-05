export interface SejamIdentityInfoModel<B> {
  gender?: string;
  fatherName?: string;
  identityCode?: string;
  identitySerialNo?: {
    character?: string;
    number?: string;
    serialNo?: string;
  };
  birthDate: B;
  placeOfBirth?: string;
  placeOfIssue?: string;
}

export interface BirthDate {
  year: string;
  month: string;
  day: string;
}
