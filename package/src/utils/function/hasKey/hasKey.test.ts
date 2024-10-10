import { hasKey } from "./hasKey";

describe("hasKey function", () => {
  it("should return true if the key exists in the object", () => {
    const obj = { name: "John", age: 30 };
    expect(hasKey(obj, "name")).toBe(true);
    expect(hasKey(obj, "age")).toBe(true);
  });

  it("should return false if the key does not exist in the object", () => {
    const obj = { name: "John", age: 30 };
    expect(hasKey(obj, "gender")).toBe(false);
  });

  it("should return true for a symbol key if it exists in the object", () => {
    const symbolKey = Symbol("key");
    const obj = { [symbolKey]: "value" };
    expect(hasKey(obj, symbolKey)).toBe(true);
  });

  it("should return false for a symbol key if it does not exist in the object", () => {
    const obj = {};
    const symbolKey = Symbol("key");
    expect(hasKey(obj, symbolKey)).toBe(false);
  });

  it("should return false if the key exists in the prototype chain but not as own property", () => {
    const obj = Object.create({ inheritedProp: "value" });
    obj.ownProp = "ownValue";
    expect(hasKey(obj, "inheritedProp")).toBe(false); // Inherited, not own property
    expect(hasKey(obj, "ownProp")).toBe(true); // Own property
  });

  it("should throw a TypeError if the first argument is not an object", () => {
    expect(() =>
      hasKey(null as unknown as object, "name")
    ).toThrow(TypeError);
    expect(() =>
      hasKey(42 as unknown as object, "name")
    ).toThrow(TypeError);
    expect(() =>
      hasKey("string" as unknown as object, "name")
    ).toThrow(TypeError);
  });

  it("should throw a TypeError if the key is not a string or symbol", () => {
    const obj = { name: "John" };
    expect(() =>
      hasKey(obj, null as unknown as symbol)
    ).toThrow(TypeError);
    expect(() =>
      hasKey(obj, undefined as unknown as symbol)
    ).toThrow(TypeError);
    expect(() =>
      hasKey(obj, 123 as unknown as string)
    ).toThrow(TypeError);
  });
});
