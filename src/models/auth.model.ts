export interface Captcha {
  captchaExpireDate: string;
  captcha: string;
}

export interface RequestLeadReq {
  phone: string;
  userCaptchaCode: string;
}

export interface RequestLeadRes {
  expireDate: string;
  codeLength: number;
}

export interface CreateLeadReq {
  phone: string;
  verificationCode: string;
}
