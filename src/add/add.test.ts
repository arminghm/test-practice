import add from "./add";

test("test add function", () => {
  const number1 = Math.random();
  const number2 = Math.random();
  const number3 = Math.random();
  expect(add(number1, number2)).toBe(add(number2, number1));
  expect(add(number1, 0)).toBe(number1);
  expect(add(add(number2, number3), number1)).toBe(add(add(number1, number2), number3));
});
