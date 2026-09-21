const { login } = require("./auth");

test("Smoke Test - Login dung", () => {
    expect(login("admin", "123")).toBe(true);
});
