describe "A suite", ->
  it "contains spec with an expectation", ->
    add = (x, y) ->
      x + y
    expect(true).toBe true
    expect(1).toBe 1
    expect(add(2, 2)).toBe 4