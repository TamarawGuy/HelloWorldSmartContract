import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello World", function () {
  it('should return "Hello World', async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    expect(await helloWorld.hello()).to.equal("Hello World!");
  });
});
