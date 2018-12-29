pragma solidity ^0.5.0;

contract Election {
  // model a candidate
  struct Candidate {
    uint id;
    string name;
    uint voteCount;
  }

  // store candidates
  mapping (uint => Candidate) public candidates;
  // keep a counter to track the number of candidates
  uint public candidatesCount;

  // constructor is called once the smart contract is deployed/migrated
  constructor () public {
    addCandidate("Candidate 1");
    addCandidate("Candidate 2");
  }

  // function to add canditate
  function addCandidate (string memory _name) private {
    candidatesCount++;
    candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
  }
}
