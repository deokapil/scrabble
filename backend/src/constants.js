const BOARD_EXTRAS = {
  tripleWord: ["0X0", "0X14", "0X7", "7X0", "14X0", "14X7", "7X14", "14X14"],
  doubleWorld: [
    "1X1",
    "2X2",
    "3X3",
    "4X4",
    "10X10",
    "11X11",
    "12X12",
    "13X13",
    "14X1",
    "13X2",
    "12X3",
    "11X4",
    "1X14",
    "2X13",
    "3X12",
    "4X11",
  ],
  doubleLetter: [
    "0X3",
    "3X0",
    "11X0",
    "0X11",
    "6X2",
    "7X3",
    "8X2",
    "14X3",
    "3X14",
    "2X6",
    "2X8",
    "3X7",
    "13X6",
    "12X7",
    "13X8",
    "14X11",
    "11X14",
    "6X12",
    "7X11",
    "8X12",
    "6X6",
    "6X8",
    "8X6",
    "8X8",
  ],
  tripleLetter: [
    "5X1",
    "1X5",
    "9X1",
    "1X9",
    "5X5",
    "9X5",
    "5X9",
    "9X9",
    "13X5",
    "13X9",
    "5X13",
    "9X13",
  ],
  center: ["7X7"],
};

const ALPHABET_NUMS = [
  9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1,
];

const ALPHABET_POINTS = [
  1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4,
  10,
];

module.exports = {
  BOARD_EXTRAS,
  ALPHABET_NUMS,
  ALPHABET_POINTS,
};
