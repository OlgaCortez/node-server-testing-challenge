const db = require("../data/dbConfig");

const { insert } = require("./dogsModel");

describe("dogs model", function() {
  describe("insert()", function() {
    beforeEach(async () => {
      await db("dogs").truncate();
    });

    it("should insert a dog", async function() {
      await insert({ name: "Pug" });

      const dogs = await db("dogs"); 
      expect(dogs).toHaveLength(1); 
    });

    it("should insert the provided dog", async function() {
      await insert({ name: "Cockapoo" });
      await insert({ name: "Husky" });

      const dogs = await db("dogs"); 

      expect(dogs).toHaveLength(2); 
      expect(dogs[0].name).toBe("Cockapoo"); 
      expect(dogs[1].name).toBe("Husky"); 
    });

    it("should return the inserted dogs", async function() {
      let dog = await insert({ name: "Cockapoo" });
      expect(dog.name).toBe("Cockapoo");
      expect(dog.id).toBeDefined(); 

      dog = await insert({ name: "Husky" });
      expect(dog.name).toBe("Husky");
      expect(dog.id).toBeDefined();
    });
  });
});
