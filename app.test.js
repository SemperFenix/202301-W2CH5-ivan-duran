import * as condition from "./app";

describe("Given the checkPreviousRow function", () => {
  describe("When there are an active position surrounding the checked one", () => {
    test("Then it should return the number of active positions surrounding it", () => {
      const prevRow = [0, 0, 1, 1, 0, 0];
      const rowCheck = [0, 0, 0, 0, 0, 0];
      const r = condition.checkPreviousRow(rowCheck[3], prevRow);
      expect(r).toBe(2);
    });
  });
});
