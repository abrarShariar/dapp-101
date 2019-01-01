var Election = artifacts.require("./Election.sol");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

// Must install Chai as Promised last - https://github.com/domenic/chai-as-promised/#node
chai.use(chaiAsPromised);

// Disable object truncating - https://stackoverflow.com/a/23378037/1828637
chai.config.truncateThreshold = 0;

global.expect = chai.expect;

contract("Election", (accounts) => {

  // it("initializes with two candidates", () =>{
  //   return Election.deployed().then((instance) => {
  //     return instance.candidatesCount();
  //   }).then((count) => {
  //     assert.equal(count, 2);
  //   });
  // })
  //
  // it("checking candidate 1 name", () => {
  //   return Election.deployed().then((app) => {
  //     return app.candidates(0);
  //   }).then((candidate1) => {
  //     assert.equal(candidate1.name, 'Candidate 1');
  //   });
  // });

  // it("Checking for promises", () => {
  //   return Election.deployed().then(app => {
  //     return app.candidates(1);
  //   }).then(candidate => {
  //     // expect(candidate.id()).to.equal(1);
  //     console.log(candidate);
  //   })
  // });


  // it("Checking the properties for candidates", async () => {
  //   expect(Election.deployed()).to.eventually.satisfy(app => app.candidates(1).id === 0)
  //       and.satisfy(app => app.candidates(2).id === 1);
  //     });

  it("Checking the properties for candidates", async () => {
    expect(Election.deployed()).to.eventually.satisfy(async app => {
        expect(app.candidates(1)).to.eventually.be.an('object').that.has.property('id', 0);
        expect(app.candidates(2)).to.eventually.be.an('object').has.property('id', 1);
      });
  });


  // it("Checking the properties for candidates", () => {
  //   return Election.deployed().then((app) => {
  //     return [app.candidates(1), app];
  //   }).then(params => {
  //     const [candidate1, app] = params;
  //     assert.equal(candidate1.id, 0);
  //     return [app.candidates(1), app];
  //   }).then(params => {
  //     const [candidate2, app] = params;
  //     assert.equal(candidate2.id, 1);
  //   });
  // });

});
