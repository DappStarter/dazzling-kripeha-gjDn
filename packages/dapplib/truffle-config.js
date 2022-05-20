require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember hour harvest lobster foam seminar'; 
let testAccounts = [
"0xfbfda86fa1225681debd46d816b9f05f507f15b8f975c1b8fabe15556c35abfe",
"0x9676bdf15e45290054ab9784aeea68719b1debe21902f89f2cb74a8f0009f232",
"0x8987965488a55dcf1dcf1d582ec1f82a231dad5ca0d9a8f9ef24b673985292ee",
"0xd69fe655509346a11055cc54012efd7a075f8364c17bd44b443fd63ec2984f63",
"0xae0fedec91af5a791896c501c12862e42a21305650591e895de746feb67d7c14",
"0xf988f6bf19a3bd34fd01fef299d25b99f4d696af58e7c2857514f493f2e7acfc",
"0xd40bc4477d699f8b46d0df65758a6fee2f61342bf7790ff03ac7c9c6f3c1e1b8",
"0x17ca53e39d1b0ba933d5a3baa28a4a36d5b56c1a11aecdc512af54bac05686a9",
"0x78b7dcb7364436f7563cd5bdce55b59198f34030936aa13b82aa70f316eaaac6",
"0xd68d67b648015a6c53676bae660fbf6a417b39d17af823bacac507e5957fbbaa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


