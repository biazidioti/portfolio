
/* For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234) */
import {PRIVATE_KEY, PUBLIC_KEY} from '../services/keys'
const CryptoJS = require("crypto-js");

const createHash = (timestamp) => {
  return CryptoJS.MD5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
}

export default createHash;
