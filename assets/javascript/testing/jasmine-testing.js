// test loop
describe("Loop Test", function() {
    it("should return green flash", function() {
        expect(ifTest(1)).toBe("green flash");
    })
});

// test game over alert
describe("Game Over Alert", function() {
    it("should trigger an alert", function() {
        spyOn(window, "alert");
            gameOver();
            expect(window.alert).toHaveBeenCalledWith("Game Over");
    })
});

// test resetGame empties arrays
describe("Reset Game", function() {
    it("should result in score arrays being reset", function() {
        expect(resetGame()).toBeTruthy("computerScore = []","playerScore = []" );
    })
});

// test compScore generates random value between 1/4
describe("Computer Score Generator", function() {
    it("should return a random value greater than 0", function() {
        expect(compScore()[0]).toBeGreaterThan(0);
        expect(compScore()[1]).toBeLessThan(5);
    })
});

// test Simon-button
describe("Simon-button-testing", function() {

    beforeEach(function() {
        setFixtures(`<button id='green' class="simon-buton col-3 col-md-5 offset-3 offset-class green-button">`)
    });
    
    describe("Disable Buttons", function() {
   it("should disable all Simon buttons", function() {
                disableButtons();
                let res = document.getElementById('green').disabled;
                
                expect(res).toBe(true);
                
            })
});
});
