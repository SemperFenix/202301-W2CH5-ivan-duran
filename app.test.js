import * as condition from "./app";

describe("Given the createGrid function", () => {
  describe("When we give it a number of rows", () => {
    test("Then it should return an object with the size indicated", () => {
      const r = condition.createGrid(2);
      const result = typeof r.row1.column1;
      expect(result).toBe("number");
    });
  });
});

describe("Given the checkPreviousRow function", () => {
  describe("When passed the actual position", () => {
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
  });
});

describe("Given the checkPrevRowColumnZero function", () => {
  describe("When the checked position is in column0", () => {
    test("Then it should  return the number of active positions surrounding it using the last column as previous", () => {
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
          column0: 1,
          column1: 1,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 1,
        },
      };
      const result = condition.checkPrevRowColumnZero(rowCheck, 2, 0);
      expect(result).toBe(3);
    });
  });
});

describe("Given the checkPrevRowLastColumn function", () => {
  describe("When the checked position is in last column", () => {
    test("Then it should  return the number of active positions surrounding it using the last column as previous", () => {
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
          column0: 1,
          column1: 0,
          column2: 0,
          column3: 0,
          column4: 1,
          column5: 1,
        },
      };
      const result1 = condition.checkPrevRowLastColumn(rowCheck, 2, 5);
      const result2 = condition.checkPrevRowLastColumn(rowCheck, 1, 5);
      expect(result1).toBe(3);
      expect(result2).toBe(0);
    });
  });
});

describe("Given the checkSameRowColumnZero function", () => {
  describe("When the checked position is in column0", () => {
    test("Then it should  return the number of active positions surrounding it using the last column as previous", () => {
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
          column1: 1,
          column2: 0,
          column3: 0,
          column4: 0,
          column5: 1,
        },
      };
      const result = condition.checkSameRowColumnZero(rowCheck, 1, 0);
      expect(result).toBe(2);
    });
  });
});
describe("Given the checkSameRow function", () => {
  describe("When passed the actual position", () => {
    test("Then it should return the number of active positions surrounding it in its row", () => {
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
          column2: 1,
          column3: 0,
          column4: 1,
          column5: 0,
        },
      };
      const result = condition.checkSameRow(rowCheck, 1, 3);
      expect(result).toBe(2);
    });
  });
});

describe("Given the checkNextRow function", () => {
  describe("When passed the actual position", () => {
    test("Then it should return the number of active positions surrounding it in the next row", () => {
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
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 0,
        },
      };
      const result = condition.checkNextRow(rowCheck, 0, 3);
      expect(result).toBe(3);
    });
  });
  describe("When the checked position is in finalRow", () => {
    test("Then it should  return the number of active positions surrounding it in the first row", () => {
      const rowCheck = {
        row0: {
          column0: 0,
          column1: 0,
          column2: 1,
          column3: 0,
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
      const result = condition.checkNextRow(rowCheck, 2, 3);
      expect(result).toBe(2);
    });
  });
});

describe("Given the checkPosition function", () => {
  describe("When given a position to check surrounded by less than 2 or more than 3 active", () => {
    test("Then it should return the position with value 0 and the new grid stringified", () => {
      const rowCheck = {
        row0: {
          column0: 0,
          column1: 1,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 1,
        },
        row1: {
          column0: 0,
          column1: 1,
          column2: 1,
          column3: 1,
          column4: 0,
          column5: 0,
        },
        row2: {
          column0: 1,
          column1: 1,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 1,
        },
      };
      const result = condition.checkPosition(rowCheck, 1, 2);
      const newValue = rowCheck.row1.column2;
      const r = JSON.stringify({
        row0: {
          column0: 0,
          column1: 1,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 1,
        },
        row1: {
          column0: 0,
          column1: 1,
          column2: 0,
          column3: 1,
          column4: 0,
          column5: 0,
        },
        row2: {
          column0: 1,
          column1: 1,
          column2: 1,
          column3: 1,
          column4: 1,
          column5: 1,
        },
      });
      expect(result).toEqual(r);
      expect(newValue).toBe(0);
    });
  });
  describe("When given a position to check surrounded by 3 active", () => {
    test("Then it should return the position with value 1 and the new grid stringified", () => {
      const rowCheck = {
        row0: {
          column0: 0,
          column1: 1,
          column2: 0,
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
          column0: 1,
          column1: 0,
          column2: 1,
          column3: 0,
          column4: 1,
          column5: 1,
        },
      };
      const result = condition.checkPosition(rowCheck, 1, 2);
      const newValue = rowCheck.row1.column2;
      const r = JSON.stringify({
        row0: {
          column0: 0,
          column1: 1,
          column2: 0,
          column3: 1,
          column4: 1,
          column5: 1,
        },
        row1: {
          column0: 0,
          column1: 0,
          column2: 1,
          column3: 0,
          column4: 0,
          column5: 0,
        },
        row2: {
          column0: 1,
          column1: 0,
          column2: 1,
          column3: 0,
          column4: 1,
          column5: 1,
        },
      });
      expect(result).toEqual(r);
      expect(newValue).toBe(1);
    });
  });
});

test("should my ass", () => {
  const row = { row0: { column0: 0 }, row1: { column0: 0 } };
  const result = condition.checkAllPositions(row);
  expect(result).toBe("ok");
});
