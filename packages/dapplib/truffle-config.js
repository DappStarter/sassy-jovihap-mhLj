require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stove dash super code gesture light army genre'; 
let testAccounts = [
"0xe01cec0485257813df449f30b03df43d4afaeb57d67f2ca9c97c7f17327c6e68",
"0x4c2fbdf0bcf17f78fb5a6c04ed0e7e2e9576c2bdc16c6239f7a1ec5414fa8781",
"0x48fb82226f1ac3f20c98428f5123dca2f9d783c71e177db9ef87bac243e572c1",
"0x5aa040f0cddb34ad6610f91c64babd3d9b9cf33a5fb674c69da0c4616eaa23e1",
"0x9ed961b61346a48b6bfd99f1b1d569211c01092b2f4420ffc68659b7f427b34f",
"0x86fbca468b7e4a5197b95b5f68d8fb36c33e03d6beefe180ebe3281ac2f1a06d",
"0x5bb30c6ebf13c053289f5b31904fe46d1bd9293e4ac5ea79db28f350004009bb",
"0x3c77842ea2463df247954ec6b99975f2228afd4b3c5a4039b164e27012711413",
"0x892c8e87760821f148d3417c72e2e93f130fbb327f086d08b3939e882059392e",
"0xc186a6931cf32a988adc820781fe284746990d827cc9e1454fd9c67b88d498e4"
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


