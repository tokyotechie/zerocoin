//var stateChannelApiRoutes = require('express').Router();
var tokenApiRoutes = require('express').Router();
const Tx = require('ethereumjs-tx')



var Web3 = require('web3');
var config = require('../config/config');
//var Accounts=require('web3-eth-accounts');
////added adrress key
/*var address = '0x2cCA38e92976aB262F4e833Fa688cb1D5AeB69a7';
var key = '10a363b829f40cf21927d763a2acbb378a08080b83ab9d2dc8bb6d7117ab79de';
var bytecode='60606040526b042f32eaab1ea6116f000000600055619470600255615dc06003556007805460ff191690556b0282b82666abfd3da9000000601055341561004557600080fd5b60018054600160a060020a03191633600160a060020a039081169190911780835581166000908152601160205260408082206b01ac7ac44472a8d3c600000090556013805460ff1916905592549091168082528282205490927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91905190815260200160405180910390a3610f42806100df6000396000f3006060604052600436106101325763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302c3d7f6811461038f57806306fdde03146103a2578063095ea7b31461042c57806318160ddd1461046257806323b872dd14610487578063274db4d6146104af578063313ce567146104c2578063405df338146104eb57806364e8d682146104fe57806370a0823114610511578063807d2da3146105305780638666107c146105435780638da5cb5b1461055657806395d89b41146105855780639890220b14610598578063a393dc44146105ab578063a9059cbb146105be578063c040e6b8146105e0578063cd7a2c3b14610617578063cf5ae5161461062a578063d44aecb01461063d578063db8ee69214610650578063dd62ed3e14610663575b600460135460ff16600481111561014557fe5b141561015057600080fd5b60075460ff16158015610172575060015433600160a060020a03908116911614155b151561017d57600080fd5b600160135460ff16600481111561019057fe5b14801561019f5750600e544211155b1561022f57600f54685150ae84a8cdf000009011156101bd57600080fd5b600f546101d0903463ffffffff61068816565b600f556002546101e790349063ffffffff6106a216565b60048190556102109060649061020490603a63ffffffff6106a216565b9063ffffffff6106cd16565b60058190556004540160068190556102299033906106e4565b5061038d565b600260135460ff16600481111561024257fe5b1480156102515750600d544211155b1561038857600a544210156102b05760035461027490349063ffffffff6106a216565b60048190556102919060649061020490600f63ffffffff6106a216565b60058190556004540160068190556102aa9033906106e4565b50610383565b600a5442101580156102c35750600b5442105b156102f9576003546102dc90349063ffffffff6106a216565b60048190556102919060649061020490600a63ffffffff6106a216565b600b54421015801561030c5750600c5442105b156103425760035461032590349063ffffffff6106a216565b60048190556102919060649061020490600563ffffffff6106a216565b600c5442101580156103555750600d5442105b156103835760035461036e90349063ffffffff6106a216565b600481905560068190556102299033906106e4565b61038d565b600080fd5b005b341561039a57600080fd5b61038d6107dc565b34156103ad57600080fd5b6103b5610897565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156103f15780820151838201526020016103d9565b50505050905090810190601f16801561041e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561043757600080fd5b61044e600160a060020a03600435166024356108ce565b604051901515815260200160405180910390f35b341561046d57600080fd5b61047561094e565b60405190815260200160405180910390f35b341561049257600080fd5b61044e600160a060020a0360043581169060243516604435610954565b34156104ba57600080fd5b610475610ad4565b34156104cd57600080fd5b6104d5610ada565b60405160ff909116815260200160405180910390f35b34156104f657600080fd5b61038d610adf565b341561050957600080fd5b610475610b86565b341561051c57600080fd5b610475600160a060020a0360043516610b8c565b341561053b57600080fd5b61038d610ba7565b341561054e57600080fd5b610475610c84565b341561056157600080fd5b610569610c8a565b604051600160a060020a03909116815260200160405180910390f35b341561059057600080fd5b6103b5610c99565b34156105a357600080fd5b61038d610cd0565b34156105b657600080fd5b610475610d26565b34156105c957600080fd5b61044e600160a060020a0360043516602435610d2c565b34156105eb57600080fd5b6105f3610e25565b6040518082600481111561060357fe5b60ff16815260200191505060405180910390f35b341561062257600080fd5b61038d610e2e565b341561063557600080fd5b61038d610e55565b341561064857600080fd5b610475610e7f565b341561065b57600080fd5b610475610e85565b341561066e57600080fd5b610475600160a060020a0360043581169060243516610e8b565b60008282018381101561069757fe5b8091505b5092915050565b6000808315156106b5576000915061069b565b508282028284828115156106c557fe5b041461069757fe5b60008082848115156106db57fe5b04949350505050565b6000600160a060020a03831615156106fb57600080fd5b600160a060020a0330166000908152601160205260409020548290108015906107245750600082115b151561072f57600080fd5b600160a060020a033016600090815260116020526040902054610758908363ffffffff610ee416565b600160a060020a03308116600090815260116020526040808220939093559085168152205461078d908363ffffffff61068816565b600160a060020a038085166000818152601160205260409081902093909355913090911690600080516020610ef78339815191529085905190815260200160405180910390a350600192915050565b60015433600160a060020a039081169116146107f757600080fd5b60028060135460ff16600481111561080b57fe5b1461081557600080fd5b600d54421161082357600080fd5b6013805460ff1916600417905530600160a060020a0316600090815260116020526040812054905461085491610ee4565b6000908155600160a060020a03301680825260116020526040808320839055600080516020610ef78339815191529083905190815260200160405180910390a350565b60408051908101604052600881527f5a45524f436f696e000000000000000000000000000000000000000000000000602082015281565b6000600160a060020a03831615156108e557600080fd5b600160a060020a03338116600081815260126020908152604080832094881680845294909152908190208590557f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60005490565b6000600160a060020a038316151561096b57600080fd5b600160a060020a0384166000908152601160205260409020548290108015906109bb5750600160a060020a0380851660009081526012602090815260408083203390941683529290522054829010155b80156109c8575060008210155b15156109d357600080fd5b600160a060020a0384166000908152601160205260409020546109fc908363ffffffff610ee416565b600160a060020a0380861660009081526011602090815260408083209490945560128152838220339093168252919091522054610a3f908363ffffffff610ee416565b600160a060020a0380861660009081526012602090815260408083203385168452825280832094909455918616815260119091522054610a85908363ffffffff61068816565b600160a060020a0380851660008181526011602052604090819020939093559190861690600080516020610ef78339815191529085905190815260200160405180910390a35060019392505050565b60025481565b601281565b60015433600160a060020a03908116911614610afa57600080fd5b60008060135460ff166004811115610b0e57fe5b14610b1857600080fd5b6013805460ff1990811660011790915560078054909116905560105430600160a060020a03166000818152601160205260408082209384554260088190556215180001600e55925491929091600080516020610ef7833981519152915190815260200160405180910390a350565b60085481565b600160a060020a031660009081526011602052604090205490565b60015433600160a060020a03908116911614610bc257600080fd5b60018060135460ff166004811115610bd657fe5b14610be057600080fd5b600e54421180610bfb5750685150ae84a8cdf00000600f5410155b1515610c0657600080fd5b6013805460ff199081166002179091556007805490911690554260098190556213c6808101600a5562278d008101600b55623b53808101600c55624f1a0001600d5530600160a060020a031660008181526011602052604080822054600080516020610ef7833981519152915190815260200160405180910390a350565b600f5481565b600154600160a060020a031681565b60408051908101604052600481527f5a45524f00000000000000000000000000000000000000000000000000000000602082015281565b60015433600160a060020a03908116911614610ceb57600080fd5b600154600160a060020a039081169030163180156108fc0290604051600060405180830381858888f193505050501515610d2457600080fd5b565b60005481565b6000600160a060020a0383161515610d4357600080fd5b600160a060020a033316600090815260116020526040902054829010801590610d6d575060008210155b1515610d7857600080fd5b600160a060020a033316600090815260116020526040902054610da1908363ffffffff610ee416565b600160a060020a033381166000908152601160205260408082209390935590851681522054610dd6908363ffffffff61068816565b600160a060020a038085166000818152601160205260409081902093909355913390911690600080516020610ef78339815191529085905190815260200160405180910390a350600192915050565b60135460ff1681565b60015433600160a060020a03908116911614610e4957600080fd5b6007805460ff19169055565b60015433600160a060020a03908116911614610e7057600080fd5b6007805460ff19166001179055565b60095481565b60035481565b6000600160a060020a03831615801590610ead5750600160a060020a03821615155b1515610eb857600080fd5b50600160a060020a03918216600090815260126020908152604080832093909416825291909152205490565b600082821115610ef057fe5b509003905600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820afdc6565a016a3f14f5a5d3b213e10d99ef2376139fdec557805e742dfb5de3e0029';


function sendRaw(rawTx) {
    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}



var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)),
    gasLimit: web3.toHex(800000),
    gasPrice: web3.toHex(20000000000),
    data: '0x' + bytecode + '0000000000000000000000000000000000000000000000000000000000000005'
};*/


// function ZEROCoin() {
//         owner = msg.sender;
//         balances[owner] = 518000000 * 10 **18; // 518 million to owner
//         stage = Stages.NOTSTARTED;
// }
///





var web3;
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/5y4gCnQ6rlruWl1m32jE"));
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));



if (web3.version.network != 3) {
  error("Wrong network detected. Please switch to the Ropsten test network.");
} else {
  console.log("Connected to the Ropsten test network.");
}

 //console.log(web3.net.peerCount);
}

web3.eth.defaultAccount = "0x2cCA38e92976aB262F4e833Fa688cb1D5AeB69a7";



//web3.eth.defaultAccount = web3.eth.accounts.privateKeyToAccount("10a363b829f40cf21927d763a2acbb378a08080b83ab9d2dc8bb6d7117ab79de");
//web3.eth.personal.newAccount('').then(console.log);

//var stateChannelContractAddress = config.stateChannelContractAddress;
var tokenContractAddress = config.tokenContractAddress;


//contract interface
// var stateChannelContractABI =
// [{"constant":false,"inputs":[{"name":"channelId","type":"bytes32"},{"name":"sequenceNumber","type":"uint256"},{"name":"state","type":"bytes"},{"name":"signature0","type":"bytes"},{"name":"signature1","type":"bytes"}],"name":"updateState","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"sig","type":"bytes"},{"name":"signer","type":"address"}],"name":"ecverify","outputs":[{"name":"b","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"channelId","type":"bytes32"},{"name":"address0","type":"address"},{"name":"address1","type":"address"},{"name":"state","type":"bytes"},{"name":"challengePeriod","type":"uint256"},{"name":"signature0","type":"bytes"},{"name":"signature1","type":"bytes"}],"name":"newChannel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"sig","type":"bytes"}],"name":"ecrecovery","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"channelId","type":"bytes32"}],"name":"tryClose","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"channelId","type":"bytes32"}],"name":"getChannel","outputs":[{"name":"address0","type":"address"},{"name":"address1","type":"address"},{"name":"phase","type":"uint8"},{"name":"challengePeriod","type":"uint256"},{"name":"closingBlock","type":"uint256"},{"name":"state","type":"bytes"},{"name":"sequenceNumber","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"channelId","type":"bytes32"},{"name":"signature","type":"bytes"},{"name":"signer","type":"address"}],"name":"startChallengePeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"Error","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"message","type":"string"}],"name":"LogString","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"message","type":"bytes"}],"name":"LogBytes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"message","type":"bytes32"}],"name":"LogBytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"num","type":"uint256"}],"name":"LogNum256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"num","type":"uint8"}],"name":"LogNum","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"b","type":"bool"}],"name":"LogBool","type":"event"}];


var tokenContractABI =[
                      	{
                      		"anonymous": false,
                      		"inputs": [
                      			{
                      				"indexed": true,
                      				"name": "owner",
                      				"type": "address"
                      			},
                      			{
                      				"indexed": true,
                      				"name": "spender",
                      				"type": "address"
                      			},
                      			{
                      				"indexed": false,
                      				"name": "value",
                      				"type": "uint256"
                      			}
                      		],
                      		"name": "Approval",
                      		"type": "event"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [
                      			{
                      				"name": "_spender",
                      				"type": "address"
                      			},
                      			{
                      				"name": "_amount",
                      				"type": "uint256"
                      			}
                      		],
                      		"name": "approve",
                      		"outputs": [
                      			{
                      				"name": "success",
                      				"type": "bool"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [],
                      		"name": "drain",
                      		"outputs": [],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"anonymous": false,
                      		"inputs": [
                      			{
                      				"indexed": true,
                      				"name": "from",
                      				"type": "address"
                      			},
                      			{
                      				"indexed": true,
                      				"name": "to",
                      				"type": "address"
                      			},
                      			{
                      				"indexed": false,
                      				"name": "value",
                      				"type": "uint256"
                      			}
                      		],
                      		"name": "Transfer",
                      		"type": "event"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [],
                      		"name": "end_ICO",
                      		"outputs": [],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [],
                      		"name": "PauseICO",
                      		"outputs": [],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [],
                      		"name": "ResumeICO",
                      		"outputs": [],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [],
                      		"name": "start_ICO",
                      		"outputs": [],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [],
                      		"name": "start_PREICO",
                      		"outputs": [],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [
                      			{
                      				"name": "_to",
                      				"type": "address"
                      			},
                      			{
                      				"name": "_amount",
                      				"type": "uint256"
                      			}
                      		],
                      		"name": "transfer",
                      		"outputs": [
                      			{
                      				"name": "success",
                      				"type": "bool"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"constant": false,
                      		"inputs": [
                      			{
                      				"name": "_from",
                      				"type": "address"
                      			},
                      			{
                      				"name": "_to",
                      				"type": "address"
                      			},
                      			{
                      				"name": "_amount",
                      				"type": "uint256"
                      			}
                      		],
                      		"name": "transferFrom",
                      		"outputs": [
                      			{
                      				"name": "success",
                      				"type": "bool"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "function"
                      	},
                      	{
                      		"inputs": [],
                      		"payable": false,
                      		"stateMutability": "nonpayable",
                      		"type": "constructor"
                      	},
                      	{
                      		"payable": true,
                      		"stateMutability": "payable",
                      		"type": "fallback"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "_price_tokn_ICO",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "_price_tokn_PRE",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "_totalsupply",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [
                      			{
                      				"name": "_owner",
                      				"type": "address"
                      			},
                      			{
                      				"name": "_spender",
                      				"type": "address"
                      			}
                      		],
                      		"name": "allowance",
                      		"outputs": [
                      			{
                      				"name": "remaining",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [
                      			{
                      				"name": "_owner",
                      				"type": "address"
                      			}
                      		],
                      		"name": "balanceOf",
                      		"outputs": [
                      			{
                      				"name": "balance",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "decimals",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint8"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "eth_received",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "ico1_startdate",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "name",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "string"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "owner",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "address"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "pre_startdate",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "stage",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "uint8"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "symbol",
                      		"outputs": [
                      			{
                      				"name": "",
                      				"type": "string"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	},
                      	{
                      		"constant": true,
                      		"inputs": [],
                      		"name": "totalSupply",
                      		"outputs": [
                      			{
                      				"name": "total_Supply",
                      				"type": "uint256"
                      			}
                      		],
                      		"payable": false,
                      		"stateMutability": "view",
                      		"type": "function"
                      	}
                      ];

//contract initiation
//var stateChannelContract = web3.eth.contract(stateChannelContractABI).at(stateChannelContractAddress);

var tokenContract = web3.eth.contract(tokenContractABI).at(tokenContractAddress);
var privateKey = '10a363b829f40cf21927d763a2acbb378a08080b83ab9d2dc8bb6d7117ab79de';

const rawTransaction = {
  "from": "0x2cCA38e92976aB262F4e833Fa688cb1D5AeB69a7",
  "gas": 50000
};

function sendSigned(txData, cb) {

 privateKey = new Buffer(privateKey, 'hex')
  const transaction = new Tx(rawTransaction)
  transaction.sign(privateKey)
  const serializedTx = transaction.serialize().toString('hex')

  web3.eth.sendSignedTransaction('0x' + serializedTx, cb)
  }

tokenApiRoutes.get('/', function(req, res) {

    res.send("token API server");

});





//balanceOf

tokenApiRoutes.get('/balanceOf', function(req, res) {

    var address = req.query._address;

    tokenContract.balanceOf.call(address, function(err, result) {
        console.log(result);
        if (!err) {

           // console.log(response);
            res.json({
                "balance" : result
                


            });
        } else
            res.status(401).json("Error" + err);
    });

});




//transfer

tokenApiRoutes.get('/transfer', function(req, res) {
    var to = req.query._to;
    var amount = req.query._amount;



    tokenContract.transfer.sendTransaction(to, amount, /*serializedTx*/ function(err, result) {
        console.log(result);
        if (!err) {

            //console.log(response);
            res.json(result);
        } else
            res.status(401).json("Error" + err);
    });
});







/*//getChannel
stateChannelApiRoutes.post('/getChannel', function(req, res) {

    var channelId = req.body._channelId;

    stateChannelContract.getChannel.call(channelId, function(err, result) {
        console.log(result);
        if (!err) {

            //console.log(response);
            res.json({
                "address0" : result[0],
                "address1" : result[1],
                "phase" : result[2],
                "closingBlock" : result[3],
                "state" : result[4],
                "sequenceNumber" : result[5]


            });
        } else
            res.status(401).json("Error" + err);
    });

});





//new channel

stateChannelApiRoutes.post('/newChannel', function(req, res) {

            var channelId = req.body._channelId;
            var address0= req.body._address0;
            var address1 = req.body._address1;
            var state = req.body._state;
            var challengePeriod = req.body._challengePeriod;
            var signature0 = req.body._signature0;
            var signature1 = req.body._signature1;


    stateChannelContract.newChannel.sendTransaction(channelId, address0, address1, state, challengePeriod, signature0, signature1, {
        from: web3.eth.defaultAccount,
        gas: 400000
    }, function(err, result) {
        console.log(result);
        if (!err) {

            //console.log(response);
            res.json(result);
        } else
            res.status(401).json("Error" + err);
    });
});


// update State

stateChannelApiRoutes.post('/updateState', function(req, res) {

            var channelId = req.body._channelId;
            var sequenceNumber = req.body._sequenceNumber;
           // var address0= req.body._address0;
           // var address1 = req.body._address1;
            var state = req.body._state;
           // var challengePeriod = req.body._challengePeriod;
            var signature0 = req.body._signature0;
            var signature1 = req.body._signature1;



    stateChannelContract.newChannel.sendTransaction(channelId, sequenceNumber, state, signature0, signature1, {
        from: web3.eth.defaultAccount,
        gas: 400000
    }, function(err, result) {
        console.log(result);
        if (!err) {

            //console.log(response);
            res.json(result);
        } else
            res.status(401).json("Error" + err);
    });
});


//startChallengePeriod

stateChannelApiRoutes.post('/startChallengePeriod', function(req, res) {

            var channelId = req.body._channelId;
            var signature = req.body._signature;
            var signer = req.body._signer;



    stateChannelContract.startChallengePeriod.sendTransaction(channelId, signature, signer, {
        from: web3.eth.defaultAccount,
        gas: 400000
    }, function(err, result) {
        console.log(result);
        if (!err) {

            //console.log(response);
            res.json(result);
        } else
            res.status(401).json("Error" + err);
    });
});


//try Close

stateChannelApiRoutes.post('/tryClose', function(req, res) {

            var channelId = req.body._channelId;


    stateChannelContract.startChallengePeriod.sendTransaction(channelId, {
        from: web3.eth.defaultAccount,
        gas: 400000
    }, function(err, result) {
        console.log(result);
        if (!err) {

            //console.log(response);
            res.json(result);
        } else
            res.status(401).json("Error" + err);
    });
});








*/
//sendRaw(rawTx);



//module.exports = stateChannelApiRoutes;
module.exports = tokenApiRoutes;



//module.exports = stateChannelApiRoutes;



//get evemts

/*,
"_address0": "17",
"_address1": "17",
"_state": "17",
"_challengePeriod": "17",
"_signature0": "17",
"_signature1": "17"
*/