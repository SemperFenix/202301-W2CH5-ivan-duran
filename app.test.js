import * as condition from "./app";

describe("Given the createGrid function", () => {
  describe("When we give it a number of rows", () => {
    test("Then it should return an object with the size indicated", () => {
      const r = condition.createGrid(2);
      const result = typeof r.row2.column2;
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

describe("Given the checkPrevRowFinalColumn function", () => {
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
      const result = condition.checkPrevRowFinalColumn(rowCheck, 2, 5);
      expect(result).toBe(3);
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
