import "@nomiclabs/hardhat-waffle";
import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";

const AVALANCHE_FUJI_URL = process.env.AVALANCHE_FUJI_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    fuji: {
      url: AVALANCHE_FUJI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
