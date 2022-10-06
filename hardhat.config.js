
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const Private_Key = "28e070d527afe9d293079b864aaaebcffec52b060a458a269fbe7e87eab13126"

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/I_miv0scgsWRoSmqci2kEupz9mHoIfOs`,
      accounts: [`0x${Private_Key}`]
    }
  }
};