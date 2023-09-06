// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string public value = "Hello, Blockchain!";

    function setValue(string memory _value) public {
        value = _value;
    }
}
