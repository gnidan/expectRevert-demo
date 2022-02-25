// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

contract Reverts {
  function revert() public {
    require(false, "uh-oh!");
  }
}
