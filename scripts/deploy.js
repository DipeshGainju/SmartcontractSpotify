const main = async()=>{

  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();


  console.log("Deploying the contract with account ",deployer.address);
  console.log(accountBalance.toString());

  const waveContractFactory= hre.ethers.getContractFactory("Spotify");

  const waveContract = waveContractFactory.deploy()

  // deploying the contract
  await waveContract.deployed();

  console.log("Wavecontract add", waveContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }   catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

