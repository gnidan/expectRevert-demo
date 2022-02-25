const Reverts = artifacts.require("Reverts");

const { expectRevert } = require("@openzeppelin/test-helpers");

contract("Reverts", function () {
  it("reverts", async function () {
    const instance = await Reverts.deployed();

    await expectRevert(
      instance.revert(),
      "uh-oh!"
    );

  });
});
