import React from "react";

const Base64ToPngConvertor = (base64Code?: string) => {
  return `data:image/png;base64,${base64Code}`;
};

export default Base64ToPngConvertor;
