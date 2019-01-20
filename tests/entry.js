const { flags } = require("../src/entry");

test("Parsing flags as JSON", async () => {
  let isSuccess = true;

  try {
    JSON.parse(flags);
  } catch (_) {
    isSuccess = false;
  } finally {
    expect(isSuccess).toBeTruthy();
  }
});
