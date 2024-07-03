const askPrompt = require("./index");
const prompt = require("prompt");

jest.mock("prompt", () => ({
    start: jest.fn(),
    get: jest.fn(),
}));

describe("The returned user prompt should be log after user input", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should log user input", () => {
        console.log = jest.fn();

        prompt.get.mockImplementationOnce((_, callback) => {
            callback(null, { data: "test input" });
        });

        askPrompt();

        expect(console.log).toHaveBeenCalledWith("test input");
    });
});
