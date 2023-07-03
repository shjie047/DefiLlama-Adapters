const { staking } = require("../helper/staking");

const STAKING_CONTRACT = "0xee710f79aa85099e200be4d40cdf1bfb2b467a01";
const ARPA = "0xBA50933C268F567BDC86E1aC131BE072C6B0b71a";

module.exports = {
  methodology: "ARPA can be staked in the protocol",
  ethereum: {
    staking: staking(STAKING_CONTRACT, ARPA),
    tvl: () => ({}),
  },
};
