# erc20-test-deploy

This is a project aiming to test deploying ERC20 token smart contracts to different EVM-compatible networks.

## Techstack

- [Metamask](https://metamask.io/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.18/)
- [Hardhat](https://hardhat.org/)

---

Additional

- [Remix IDE](https://remix-project.org/)

---

Contract

- [OpenZeppelin](https://docs.openzeppelin.com/)

---

Contract features

- Mintable
- Burnable
- Pausable
- Upgradable (Implementing...)

## Supported Network

- Local network
- Ethereum (Goerli)
- [Fantom testnet](https://testnet.ftmscan.com/address/0xA77Ae502B6f6E36aE39DD7ac675b50E09D6FaCD6)
- Updating...

## Deployment Guideline

### Requirement

- Node
  - Ubuntu
    ```bash
    sudo apt update
    sudo apt install curl git
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
  - MacOS
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    nvm install 18
    nvm use 18
    nvm alias default 18
    npm install npm --global # Upgrade npm to the latest version
    ```

### Deployment

- Install dependencies
  ```
  npm i
  ```
- Create .env (See .env.example)
- Deploy contract to network

```

```

- Verify contract

  - Check network supported

  ```bash
  npx hardhat verify --list-networks
  ```

  - Add networkScan API

  ```javascript
  {
    ...
    etherscan: {
      apiKey: {
        ftmTestnet: 'your API key'
      }
    }
  }
  ```

  - Verify contract

  ```bash
  npx hardhat verify --network <network> <contract_address>
  ```

  or

  ```bash
  npx hardhat verify --contract contracts/YourContractFile.sol:YourContractName --constructor-args scripts/argument.js --network testnet {contract address}
  ```
