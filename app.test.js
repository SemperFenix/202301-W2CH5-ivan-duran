import * as condition from "./app";

describe("Given the checkPreviousRow function", () => {
  describe("When there are active positions surrounding the checked one", () => {
    test("Then it should return the number of active positions surrounding it in the previous row", () => {
      const rowCheck = {
        row0: {
          column0: 0,
          column1: 0,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 0,
        },
        row1: {
          column0: 0,
          column1: 0,
          column2: 0,
          column3: 0,
          column4: 0,
          column5: 0,
        },
      };
      const result = condition.checkPreviousRow(rowCheck, 1, 3);
      expect(result).toBe(3);
    });
  });
  describe("When the checked position is in row0", () => {
    test("Then it should  return the number of active positions surrounding it in the last row", () => {
      const rowCheck = {
        row0: {
          column0: 0,
          column1: 0,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 0,
        },
        row1: {
          column0: 0,
          column1: 0,
          column2: 0,
          column3: 0,
          column4: 0,
          column5: 0,
        },
        row2: {
          column0: 0,
          column1: 0,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 0,
        },
      };
      const result = condition.checkPreviousRow(rowCheck, 0, 3);
      expect(result).toBe(3);
    });
    describe("When the checked position is in column0", () => {
      test("Then it should  return the number of active positions surrounding it in the last column", () => {
        const rowCheck = {
          row0: {
            column0: 0,
            column1: 0,
            column2: 1,
            column3: 1,
            column4: 1,
            column5: 1,
          },
          row1: {
            column0: 0,
            column1: 0,
            column2: 0,
            column3: 0,
            column4: 0,
            column5: 0,
          },
          row2: {
            column0: 0,
            column1: 0,
            column2: 1,
            column3: 1,
            column4: 1,
            column5: 0,
          },
        };
        const result = condition.checkPreviousRow(rowCheck, 1, 0);
        expect(result).toBe(1);
      });
    });
  });
});
