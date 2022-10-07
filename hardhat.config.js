
require("@nomiclabs/hardhat-waffle");

require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x` + process.env.PRIVATE_KEY],
    }
  }
};