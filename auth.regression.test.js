const { login } = require("./auth");

describe("Regression Test - Login", () => {

    test("Dang nhap dung", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Mat khau sai", () => {
        expect(login("admin", "999")).toBe(false);
    });

    test("Username sai", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Username rong", () => {
        expect(login("", "123")).toBe(false);
    });

    test("Mat khau rong", () => {
        expect(login("admin", "")).toBe(false);
    });

    test("Username va mat khau rong", () => {
        expect(login("", "")).toBe(false);
    });

    test("Mat khau co ky tu dac biet", () => {
        expect(login("admin", "@#$")).toBe(false);
    });

    test("Tai khoan khong ton tai", () => {
        expect(login("user123", "123")).toBe(false);
    });

});
