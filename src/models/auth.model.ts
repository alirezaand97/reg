export interface CaptchaModel {
  captchaExpireDate: string;
  captcha: string;
}

export interface RequestLeadReqModel {
  phone: string;
  userCaptchaCode: string;
}

export interface RequestLeadResModel {
  expireDate: string;
  codeLength: number;
}

export interface CreateLeadReqModel {
  phone: string;
  verificationCode: string;
}

export interface CreateLeadResModel {
  token?: string;
}

export interface CreateOpportunityReqModel {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword?: string;
  nationalCode: string;
}
