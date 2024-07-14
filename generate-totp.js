const otplib = require('otplib');
const dotenv = require('dotenv');

dotenv.config();

if (!process.env.AUTHY_KEY) {
  console.error('Error: AUTHY_KEY is not set in the environment variables.');
  process.exit(1);
}

const authyKey = process.env.AUTHY_KEY;
const totp = otplib.totp;
totp.options = { digits: 6, step: 30 };
const token = totp.generate(authyKey);
console.log(`Your TOTP is: ${token}`);
