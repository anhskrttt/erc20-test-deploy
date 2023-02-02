require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_ENDPOINT,
      accounts: [process.env.ADMIN_PRIVATE_KEY],
    },
    fantom: {
      url: process.env.CHAINSTACK_ENDPOINT,
      accounts: [process.env.ADMIN_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      ftmTestnet: process.env.FTMSCAN_API_KEY,
    },
  },
};
