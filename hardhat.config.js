
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.GOERLI_PROJECT_ID,
      // url: `https://eth-goerli.g.alchemy.com/v2/I_miv0scgsWRoSmqci2kEupz9mHoIfOs`,
      accounts: [process.env.PRIVATE_KEY],
      // accounts: [`0x28e070d527afe9d293079b864aaaebcffec52b060a458a269fbe7e87eab13126`]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_TOKEN
    // apiKey: "NF2NF8B964M8YA5P8P1R25K9TPBHI9MQWR"
  }
};