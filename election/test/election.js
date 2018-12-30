var Election = artifacts.require("./Election.sol");

contract("Election", (accounts) => {

  it("initializes with two candidates", () =>{
    return Election.deployed().then((instance) => {
      return instance.candidatesCount();
    }).then((count) => {
      assert.equal(count, 2);
    });
  })

  it("checking candidate 1 name", () => {
    return Election.deployed().then((app) => {
      return app.candidates(1);
    }).then((candidate1) => {
      assert.equal(candidate1.name, 'Candidate 1')
    });
  })

});
