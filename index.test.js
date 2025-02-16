const helloWorld = require("./index");

test("Debe retornar 'Hola, Mundo!'", () => {
    expect(helloWorld()).toBe("Hola, Mundo!");
});
