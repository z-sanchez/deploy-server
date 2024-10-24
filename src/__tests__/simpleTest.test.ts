import { sum } from "../utils/sum";
import { numOne } from "../utils/numOne";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(2, numOne().value)).toBe(3);
  // expect(1 + numOne().value).toBe(3);
});
