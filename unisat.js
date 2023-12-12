// Browser Detection
if (typeof window.unisat !== 'undefined') {
    console.log('UniSat Wallet is installed!');
  }
  
  // Connecting to UniSat Wallet
  async function connectUniSatWallet() {
    try {
      let accounts = await window.unisat.requestAccounts();
      console.log('connect success', accounts);
    } catch (e) {
      console.log('connect failed');
    }
  }
  
  // Get Accounts
  async function getUniSatAccounts() {
    try {
      let res = await window.unisat.getAccounts();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Get Network
  async function getUniSatNetwork() {
    try {
      let res = await window.unisat.getNetwork();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Switch Network
  async function switchUniSatNetwork(network) {
    try {
      let res = await window.unisat.switchNetwork(network);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Get Public Key
  async function getUniSatPublicKey() {
    try {
      let res = await window.unisat.getPublicKey();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Get Balance
  async function getUniSatBalance() {
    try {
      let res = await window.unisat.getBalance();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Get Inscriptions
  async function getUniSatInscriptions(cursor, size) {
    try {
      let res = await window.unisat.getInscriptions(cursor, size);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Send Bitcoin
  async function sendBitcoinUniSat(toAddress, satoshis, options) {
    try {
      let txid = await window.unisat.sendBitcoin(toAddress, satoshis, options);
      console.log(txid);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Send Inscription
  async function sendInscriptionUniSat(address, inscriptionId, options) {
    try {
      let { txid } = await window.unisat.sendInscription(address, inscriptionId, options);
      console.log("send Inscription", txid);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Sign Message
  async function signMessageUniSat(msg, type) {
    try {
      let res = await window.unisat.signMessage(msg, type);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Push Transaction
  async function pushTransactionUniSat(options) {
    try {
      let txid = await window.unisat.pushTx(options);
      console.log(txid);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Sign PSBT
  async function signPsbtUniSat(psbtHex, options) {
    try {
      let res = await window.unisat.signPsbt(psbtHex, options);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Sign Multiple PSBTs
  async function signPsbtsUniSat(psbtHexs, options) {
    try {
      let res = await window.unisat.signPsbts(psbtHexs, options);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
  // Push PSBT
  async function pushPsbtUniSat(psbtHex) {
    try {
      let res = await window.unisat.pushPsbt(psbtHex);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }
  
