// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//testing if it can recognize a false phone phone number
test('passes 123456 into the isPhoneNumber function', () => {
  expect(isPhoneNumber(123456)).toBe(false);
});
test('passes (805)43623 into the isPhoneNumber function', () => {
  expect(isPhoneNumber("(805)43623")).toBe(false);
});

//testing if it can recognize a true phone number
test('passes 805-624-1653 into the isPhoneNumber function', () => {
  expect(isPhoneNumber("805-624-1653")).toBe(true);
});
test('passes (805)624-1653 into the isPhoneNumber function', () => {
  expect(isPhoneNumber("(805)624-1653")).toBe(true);
});

//testing if it can recogonize a false email
test('passes tearreola@ into the isEmail function', () => {
  expect(isEmail("tearreola@")).toBe(false);
});
test('passes tearreola@ucsd into the isEmail function', () => {
  expect(isEmail("tearreola@ucsd")).toBe(false);
});

//testing if it can recognize a true email
test('passes tearreola@ucsd.edu into the isEmail function', () => {
  expect(isEmail("tearreola@ucsd.edu")).toBe(true);
});
test('passes thomasarreola2001@gmail.com into the isEmail function', () => {
  expect(isEmail("thomasarreola2001@gmail.com")).toBe(true);
});

//testing to see if it can verify a strong password
test('tests the strong password ABC12_aso', ()=>{
  expect(isStrongPassword("ABC12_aso")).toBe(true);
});
test('tests the strong password passwordsad', ()=>{
  expect(isStrongPassword("passwordsad")).toBe(true);
});

//testing to see if can verify a weak password
test('tests the weak password abc', ()=>{
  expect(isStrongPassword("abc")).toBe(false);
});
test('tests the weak password lol', ()=>{
  expect(isStrongPassword("lol")).toBe(false);
});

//testing to see if can verify a not valid date
test('tests the not valid date 4/26', ()=>{
  expect(isDate("4/26")).toBe(false);
});
test('tests the not valid date 6/9', ()=>{
  expect(isDate("6/9")).toBe(false);
});

//testing to see if it can verify a valid data
test('tests the valid date 1/22/1999', ()=>{
  expect(isDate("1/22/1999")).toBe(true);
});
test('tests the valid date 4/26/2004', ()=>{
  expect(isDate("4/26/2004")).toBe(true);
});

//testing to see if it can verify a valid hex code
test('tests the valid hex code 1234FA', ()=>{
  expect(isHexColor("1234FA")).toBe(true);
});
test('tests the valid hex code FFFFFF', ()=>{
  expect(isHexColor("FFFFFF")).toBe(true);
});

//testing to see if it can verify a not valid hex code
test('tests the not valid hex code FFFFFFA', ()=>{
  expect(isHexColor("FFFFFFA")).toBe(false);
});
test('tests the not valid hex code lol', ()=>{
  expect(isHexColor("lol")).toBe(false);
});