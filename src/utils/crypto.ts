import CryptoJS from "crypto-js";

const SECRET_KEY = "my-super-secret-key" //

export const encryptData = (data: object) => {
  const stringData = JSON.stringify(data)
  return CryptoJS.AES.encrypt(stringData, SECRET_KEY).toString()
}

export const decryptData = (cipherText: string) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY)
  const decrypted = bytes.toString(CryptoJS.enc.Utf8)
  return JSON.parse(decrypted)
}