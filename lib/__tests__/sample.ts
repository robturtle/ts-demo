const aVeryLooooooooooongName = {
  looooooooooooooooooooooooooooooooooooooooooooooooong() {
    return this;
  }
};

test("1 + 1 === 2", () => {
  expect(1 + 1).toBe(2);
  /* eslint max-len: ["error", { "code": 80 }] */
  aVeryLooooooooooongName
    .looooooooooooooooooooooooooooooooooooooooooooooooong()
    .looooooooooooooooooooooooooooooooooooooooooooooooong();
});
