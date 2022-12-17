describe("pow", function() {

  it("3 в степени 2 = 9?", function() {
    assert.equal(pow(3, 2), 9);
  });

  it("5 в степени 4 = 100?", function() {
    assert.equal(pow(5, 4), 100);
  });

  it("10 в степени 3 = 1000?", function() {
    assert.equal(pow(10, 3), 1000);
  });
});