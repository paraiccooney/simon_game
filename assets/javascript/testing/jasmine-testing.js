describe("Loop Test", function() {
    it("should return green flash", function() {
        expect(ifTest(1)).toBe("green flash");
    })
});


describe("Disable Buttons", function() {
    it("should disable all Simon buttons", function() {
        expect(disableButtons()).toBe(document.getElementById("green").disabled = true);
    })
});

describe("Game Over Alert", function() {
    it("should trigger an alert", function() {
        spyOn(window, "alert");
            gameOver();
            expect(window.alert).toHaveBeenCalledWith("Game Over");
    })
});

describe("Reset Game", function() {
    it("should result in score arrays being reset", function() {
        expect(resetGame()).toBeTruthy("computerScore = []","playerScore = []" );
    })
});


describe("Computer Score Generator", function() {
    it("should return a random value greater than 0", function() {
        expect(compScore()[0]).toBeGreaterThan(0);
        expect(compScore()[1]).toBeLessThan(5);
    })
});
