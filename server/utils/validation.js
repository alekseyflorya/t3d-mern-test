import check from 'express-validator';
const {body} = check;

export const validation = [
  body('firstname', 'Name will be min 3 symbols').isAlpha().trim(),
  body('email', 'Enter the correct Email').isEmail().normalizeEmail()
]