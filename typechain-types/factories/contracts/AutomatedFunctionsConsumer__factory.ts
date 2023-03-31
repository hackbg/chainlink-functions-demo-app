/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  AutomatedFunctionsConsumer,
  AutomatedFunctionsConsumerInterface,
} from "../../contracts/AutomatedFunctionsConsumer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "_subscriptionId",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_fulfillGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_updateInterval",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "RequestIsAlreadyPending",
    type: "error",
  },
  {
    inputs: [],
    name: "RequestIsNotPending",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderIsNotRegistry",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "OCRResponse",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum Functions.Location",
            name: "codeLocation",
            type: "uint8",
          },
          {
            internalType: "enum Functions.Location",
            name: "secretsLocation",
            type: "uint8",
          },
          {
            internalType: "enum Functions.CodeLanguage",
            name: "language",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "source",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "secrets",
            type: "bytes",
          },
          {
            internalType: "string[]",
            name: "args",
            type: "string[]",
          },
        ],
        internalType: "struct Functions.Request",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "gasLimit",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
    ],
    name: "estimateCost",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fulfillGasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "source",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "secrets",
        type: "bytes",
      },
      {
        internalType: "enum Functions.Location",
        name: "secretsLocation",
        type: "uint8",
      },
      {
        internalType: "string[]",
        name: "args",
        type: "string[]",
      },
    ],
    name: "generateRequest",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getDONPublicKey",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpkeepTimeStamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRequestId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestResponse",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestCBOR",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "responseCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subscriptionId",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_fulfillGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_updateInterval",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "newRequestCBOR",
        type: "bytes",
      },
    ],
    name: "setRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    name: "updateOracleAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upkeepCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002250380380620022508339810160408190526200003491620001d5565b600080546001600160a01b0319166001600160a01b038616178155339081906001600160a01b038216620000af5760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600280546001600160a01b0319166001600160a01b0384811691909117909155811615620000e257620000e28162000128565b5050506009556008805463ffffffff90921668010000000000000000026001600160601b03199092166001600160401b03909316929092171790555042600a556200024d565b6001600160a01b038116331415620001835760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401620000a6565b600380546001600160a01b0319166001600160a01b03838116918217909255600254604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60008060008060808587031215620001ec57600080fd5b84516001600160a01b03811681146200020457600080fd5b60208601519094506001600160401b03811681146200022257600080fd5b604086015190935063ffffffff811681146200023d57600080fd5b6060959095015193969295505050565b611ff3806200025d6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806379ba5097116100d8578063d4b391751161008c578063f7023bb611610066578063f7023bb61461030b578063fd2c80ae1461031e578063fffeb84e1461032757600080fd5b8063d4b39175146102b5578063eb197c77146102e5578063f2fde38b146102f857600080fd5b8063a3d3c0d2116100bd578063a3d3c0d21461029c578063bef3a2f0146102a5578063d328a91e146102ad57600080fd5b806379ba5097146102795780638da5cb5b1461028157600080fd5b8063381fc4b51161012f5780635b58d52d116101145780635b58d52d14610230578063688ecfd1146102505780636e04ff0d1461025857600080fd5b8063381fc4b5146102145780634585e33b1461021d57600080fd5b80630ca76175116101605780630ca76175146101c55780631aa46f59146101da57806324b93e3e146101e357600080fd5b8063089ea02e1461017c57806309c1ba2e14610198575b600080fd5b610185600a5481565b6040519081526020015b60405180910390f35b6008546101ac9067ffffffffffffffff1681565b60405167ffffffffffffffff909116815260200161018f565b6101d86101d3366004611780565b61032f565b005b61018560055481565b6008546101ff9068010000000000000000900463ffffffff1681565b60405163ffffffff909116815260200161018f565b610185600c5481565b6101d861022b3660046117ed565b6103d5565b61024361023e3660046118db565b6105fb565b60405161018f9190611baf565b610243610757565b61026b61026636600461182f565b6107e5565b60405161018f929190611b94565b6101d8610802565b6002546040516001600160a01b03909116815260200161018f565b610185600b5481565b6102436108b7565b6102436108c4565b6102c86102c33660046119b9565b610962565b6040516bffffffffffffffffffffffff909116815260200161018f565b6101d86102f3366004611acb565b6109fa565b6101d861030636600461172d565b610a51565b6101d861031936600461172d565b610a65565b61018560095481565b610243610a8b565b60008381526001602052604090205483906001600160a01b03163314610381576040517fa0c5ec6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526001602052604080822080546001600160a01b03191690555182917f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e691a26103cf848484610a98565b50505050565b60006103ef604051806020016040528060008152506107e5565b509050806104445760405162461bcd60e51b815260206004820152601560248201527f54696d6520696e74657276616c206e6f74206d6574000000000000000000000060448201526064015b60405180910390fd5b42600a55600b54610456906001611d6c565b600b55600080546008546040517f28242b040000000000000000000000000000000000000000000000000000000081526001600160a01b03909216916328242b04916104c69167ffffffffffffffff8216916004916801000000000000000090910463ffffffff16908201611c23565b602060405180830381600087803b1580156104e057600080fd5b505af11580156104f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105189190611767565b905060008054906101000a90046001600160a01b03166001600160a01b0316635ab1bd536040518163ffffffff1660e01b815260040160206040518083038186803b15801561056657600080fd5b505afa15801561057a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059e919061174a565b60008281526001602052604080822080546001600160a01b0319166001600160a01b039490941693909317909255905182917f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db891a2600555505050565b60606106376040805160c08101909152806000815260200160008152602001600081526020016060815260200160608152602001606081525090565b61067e6000808b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087959493925050610b129050565b851561072757600085600181111561069857610698611f66565b14156106e5576106e087878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508593925050610ba69050565b610727565b61072787878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508593925050610bea9050565b82156107415761074161073a8486611ea5565b8290610c14565b61074a81610c54565b9998505050505050505050565b6004805461076490611ede565b80601f016020809104026020016040519081016040528092919081815260200182805461079090611ede565b80156107dd5780601f106107b2576101008083540402835291602001916107dd565b820191906000526020600020905b8154815290600101906020018083116107c057829003601f168201915b505050505081565b60006060600954600a54426107fa9190611e8e565b119150915091565b6003546001600160a01b0316331461085c5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015260640161043b565b600280546001600160a01b0319808216339081179093556003805490911690556040516001600160a01b03909116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6006805461076490611ede565b60008054604080517fd328a91e00000000000000000000000000000000000000000000000000000000815290516060936001600160a01b039093169263d328a91e9260048082019391829003018186803b15801561092157600080fd5b505afa158015610935573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261095d9190810190611864565b905090565b600080546001600160a01b031663d227d2458561097e88610c54565b86866040518563ffffffff1660e01b815260040161099f9493929190611be7565b60206040518083038186803b1580156109b757600080fd5b505afa1580156109cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ef9190611b3a565b90505b949350505050565b610a02610eea565b60098390556008805463ffffffff861668010000000000000000026bffffffffffffffffffffffff1990911667ffffffffffffffff881617179055610a4960048383611486565b505050505050565b610a59610eea565b610a6281610f46565b50565b610a6d610eea565b600080546001600160a01b0319166001600160a01b03831617905550565b6007805461076490611ede565b8151610aab90600690602085019061150a565b508051610abf90600790602084019061150a565b50600c54610ace906001611d6c565b600c5560405183907f7bab0ec163b5c132c72b8146ac4d6e067e82ed58f8b131150aa71c925891156290610b059085908590611bc2565b60405180910390a2505050565b8051610b4a576040517f22ce3edd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83836001811115610b5d57610b5d611f66565b90816001811115610b7057610b70611f66565b90525060408401828015610b8657610b86611f66565b90818015610b9657610b96611f66565b9052506060909301929092525050565b8051610bc55760405163e889636f60e01b815260040160405180910390fd5b6020820160005b90816001811115610bdf57610bdf611f66565b905250608090910152565b8051610c095760405163e889636f60e01b815260040160405180910390fd5b602082016001610bcc565b8051610c4c576040517ffe936cb700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a090910152565b6060610c73604051806040016040528060608152602001600081525090565b610c7f81610100610ff1565b5060408051808201909152600c81527f636f64654c6f636174696f6e00000000000000000000000000000000000000006020820152610cbf90829061105c565b8251610cdd906001811115610cd657610cd6611f66565b8290611078565b60408051808201909152600881527f6c616e67756167650000000000000000000000000000000000000000000000006020820152610d1c90829061105c565b6040830151610d33908015610cd657610cd6611f66565b60408051808201909152600681527f736f7572636500000000000000000000000000000000000000000000000000006020820152610d7290829061105c565b6060830151610d8290829061105c565b60a08301515115610e315760408051808201909152600481527f61726773000000000000000000000000000000000000000000000000000000006020820152610dcc90829061105c565b610dd5816110a2565b60005b8360a0015151811015610e2757610e158460a001518281518110610dfe57610dfe611f7c565b60200260200101518361105c90919063ffffffff16565b80610e1f81611f13565b915050610dd8565b50610e31816110ad565b60808301515115610ee35760408051808201909152600f81527f736563726574734c6f636174696f6e00000000000000000000000000000000006020820152610e7b90829061105c565b610e9483602001516001811115610cd657610cd6611f66565b60408051808201909152600781527f73656372657473000000000000000000000000000000000000000000000000006020820152610ed390829061105c565b6080830151610ee39082906110b8565b5192915050565b6002546001600160a01b03163314610f445760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015260640161043b565b565b6001600160a01b038116331415610f9f5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640161043b565b600380546001600160a01b0319166001600160a01b03838116918217909255600254604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b604080518082019091526060815260006020820152611011602083611f2e565b1561103957611021602083611f2e565b61102c906020611e8e565b6110369083611d6c565b91505b506020808301829052604080518085526000815283019091019052815b92915050565b61106982600383516110c1565b61107382826111d0565b505050565b67ffffffffffffffff8111156110965761109282826111fe565b5050565b611092826000836110c1565b610a62816004611235565b610a62816007611235565b61106982600283515b60178167ffffffffffffffff16116110e6576103cf8360e0600585901b168317611246565b60ff8167ffffffffffffffff16116111245761110d836018611fe0600586901b1617611246565b506103cf8367ffffffffffffffff8316600161126b565b61ffff8167ffffffffffffffff16116111635761114c836019611fe0600586901b1617611246565b506103cf8367ffffffffffffffff8316600261126b565b63ffffffff8167ffffffffffffffff16116111a45761118d83601a611fe0600586901b1617611246565b506103cf8367ffffffffffffffff8316600461126b565b6111b983601b611fe0600586901b1617611246565b506103cf8367ffffffffffffffff8316600861126b565b6040805180820190915260608152600060208201526111f783846000015151848551611291565b9392505050565b6112098260c2611246565b50611092828260405160200161122191815260200190565b6040516020818303038152906040526110b8565b61107382601f611fe0600585901b16175b6040805180820190915260608152600060208201526111f7838460000151518461137b565b6040805180820190915260608152600060208201526109f28485600001515185856113d7565b60408051808201909152606081526000602082015282518211156112b457600080fd5b60208501516112c38386611d6c565b11156112f6576112f6856112e6876020015187866112e19190611d6c565b611458565b6112f1906002611e6f565b61146f565b6000808651805187602083010193508088870111156113155787860182525b505050602084015b602084106113555780518252611334602083611d6c565b9150611341602082611d6c565b905061134e602085611e8e565b935061131d565b51815160001960208690036101000a019081169019919091161790525083949350505050565b604080518082019091526060815260006020820152836020015183106113b0576113b084856020015160026112f19190611e6f565b8351805160208583010184815350808514156113cd576001810182525b5093949350505050565b60408051808201909152606081526000602082015260208501516113fb8584611d6c565b111561140f5761140f856112e68685611d6c565b6000600161141f84610100611dc7565b6114299190611e8e565b905085518386820101858319825116178152508051848701111561144d5783860181525b509495945050505050565b600081831115611469575081611056565b50919050565b815161147b8383610ff1565b506103cf83826111d0565b82805461149290611ede565b90600052602060002090601f0160209004810192826114b457600085556114fa565b82601f106114cd5782800160ff198235161785556114fa565b828001600101855582156114fa579182015b828111156114fa5782358255916020019190600101906114df565b5061150692915061157e565b5090565b82805461151690611ede565b90600052602060002090601f01602090048101928261153857600085556114fa565b82601f1061155157805160ff19168380011785556114fa565b828001600101855582156114fa579182015b828111156114fa578251825591602001919060010190611563565b5b80821115611506576000815560010161157f565b600067ffffffffffffffff808411156115ae576115ae611f92565b8360051b60206115bf818301611d13565b8681529350808401858381018910156115d757600080fd5b60009350835b88811015611612578135868111156115f3578586fd5b6115ff8b828b01611688565b84525091830191908301906001016115dd565b5050505050509392505050565b600082601f83011261163057600080fd5b6111f783833560208501611593565b60008083601f84011261165157600080fd5b50813567ffffffffffffffff81111561166957600080fd5b60208301915083602082850101111561168157600080fd5b9250929050565b600082601f83011261169957600080fd5b81356116ac6116a782611d44565b611d13565b8181528460208386010111156116c157600080fd5b816020850160208301376000918101602001919091529392505050565b8035600181106116ed57600080fd5b919050565b8035600281106116ed57600080fd5b803563ffffffff811681146116ed57600080fd5b803567ffffffffffffffff811681146116ed57600080fd5b60006020828403121561173f57600080fd5b81356111f781611fa8565b60006020828403121561175c57600080fd5b81516111f781611fa8565b60006020828403121561177957600080fd5b5051919050565b60008060006060848603121561179557600080fd5b83359250602084013567ffffffffffffffff808211156117b457600080fd5b6117c087838801611688565b935060408601359150808211156117d657600080fd5b506117e386828701611688565b9150509250925092565b6000806020838503121561180057600080fd5b823567ffffffffffffffff81111561181757600080fd5b6118238582860161163f565b90969095509350505050565b60006020828403121561184157600080fd5b813567ffffffffffffffff81111561185857600080fd5b6109f284828501611688565b60006020828403121561187657600080fd5b815167ffffffffffffffff81111561188d57600080fd5b8201601f8101841361189e57600080fd5b80516118ac6116a782611d44565b8181528560208385010111156118c157600080fd5b6118d2826020830160208601611eb2565b95945050505050565b60008060008060008060006080888a0312156118f657600080fd5b873567ffffffffffffffff8082111561190e57600080fd5b61191a8b838c0161163f565b909950975060208a013591508082111561193357600080fd5b61193f8b838c0161163f565b909750955085915061195360408b016116f2565b945060608a013591508082111561196957600080fd5b818a0191508a601f83011261197d57600080fd5b81358181111561198c57600080fd5b8b60208260051b85010111156119a157600080fd5b60208301945080935050505092959891949750929550565b600080600080608085870312156119cf57600080fd5b843567ffffffffffffffff808211156119e757600080fd5b9086019060c082890312156119fb57600080fd5b611a03611cea565b611a0c836116f2565b8152611a1a602084016116f2565b6020820152611a2b604084016116de565b6040820152606083013582811115611a4257600080fd5b611a4e8a828601611688565b606083015250608083013582811115611a6657600080fd5b611a728a828601611688565b60808301525060a083013582811115611a8a57600080fd5b611a968a82860161161f565b60a0830152509550611aad91505060208601611715565b9250611abb60408601611701565b9396929550929360600135925050565b600080600080600060808688031215611ae357600080fd5b611aec86611715565b9450611afa60208701611701565b935060408601359250606086013567ffffffffffffffff811115611b1d57600080fd5b611b298882890161163f565b969995985093965092949392505050565b600060208284031215611b4c57600080fd5b81516bffffffffffffffffffffffff811681146111f757600080fd5b60008151808452611b80816020860160208601611eb2565b601f01601f19169290920160200192915050565b82151581526040602082015260006109f26040830184611b68565b6020815260006111f76020830184611b68565b604081526000611bd56040830185611b68565b82810360208401526118d28185611b68565b67ffffffffffffffff85168152608060208201526000611c0a6080830186611b68565b63ffffffff949094166040830152506060015292915050565b67ffffffffffffffff84168152600060206060818401526000855481600182811c915080831680611c5557607f831692505b858310811415611c7357634e487b7160e01b85526022600452602485fd5b6060880183905260808801818015611c925760018114611ca357611cce565b60ff19861682528782019650611cce565b60008c81526020902060005b86811015611cc857815484820152908501908901611caf565b83019750505b50505063ffffffff88166040880152509193506109f292505050565b60405160c0810167ffffffffffffffff81118282101715611d0d57611d0d611f92565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611d3c57611d3c611f92565b604052919050565b600067ffffffffffffffff821115611d5e57611d5e611f92565b50601f01601f191660200190565b60008219821115611d7f57611d7f611f50565b500190565b600181815b80851115611dbf578160001904821115611da557611da5611f50565b80851615611db257918102915b93841c9390800290611d89565b509250929050565b60006111f78383600082611ddd57506001611056565b81611dea57506000611056565b8160018114611e005760028114611e0a57611e26565b6001915050611056565b60ff841115611e1b57611e1b611f50565b50506001821b611056565b5060208310610133831016604e8410600b8410161715611e49575081810a611056565b611e538383611d84565b8060001904821115611e6757611e67611f50565b029392505050565b6000816000190483118215151615611e8957611e89611f50565b500290565b600082821015611ea057611ea0611f50565b500390565b60006111f7368484611593565b60005b83811015611ecd578181015183820152602001611eb5565b838111156103cf5750506000910152565b600181811c90821680611ef257607f821691505b6020821081141561146957634e487b7160e01b600052602260045260246000fd5b6000600019821415611f2757611f27611f50565b5060010190565b600082611f4b57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610a6257600080fdfea264697066735822122097450707cee9d4be7b015595a4b39a5ced88cd07b8397ae48c06969483e11d5564736f6c63430008070033";

type AutomatedFunctionsConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutomatedFunctionsConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutomatedFunctionsConsumer__factory extends ContractFactory {
  constructor(...args: AutomatedFunctionsConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    oracle: PromiseOrValue<string>,
    _subscriptionId: PromiseOrValue<BigNumberish>,
    _fulfillGasLimit: PromiseOrValue<BigNumberish>,
    _updateInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AutomatedFunctionsConsumer> {
    return super.deploy(
      oracle,
      _subscriptionId,
      _fulfillGasLimit,
      _updateInterval,
      overrides || {}
    ) as Promise<AutomatedFunctionsConsumer>;
  }
  override getDeployTransaction(
    oracle: PromiseOrValue<string>,
    _subscriptionId: PromiseOrValue<BigNumberish>,
    _fulfillGasLimit: PromiseOrValue<BigNumberish>,
    _updateInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      oracle,
      _subscriptionId,
      _fulfillGasLimit,
      _updateInterval,
      overrides || {}
    );
  }
  override attach(address: string): AutomatedFunctionsConsumer {
    return super.attach(address) as AutomatedFunctionsConsumer;
  }
  override connect(signer: Signer): AutomatedFunctionsConsumer__factory {
    return super.connect(signer) as AutomatedFunctionsConsumer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutomatedFunctionsConsumerInterface {
    return new utils.Interface(_abi) as AutomatedFunctionsConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutomatedFunctionsConsumer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AutomatedFunctionsConsumer;
  }
}