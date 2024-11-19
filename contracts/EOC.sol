// MerkleTreeRoot: 0x49be6fa1855831dd749f4714f42e248caaed8f7a13205d31f45b33ca38dc0c00
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract ExtraordinaryCherries is ERC721A, Ownable {
    using Strings for uint256;

    // #### States and variables ####
    bool public paused = false;
    bool public whitelistSale = true;
    bool public publicSale = false;

    uint256 public maxSupply = 10000;
    uint256 public whitelistMaxSupply = 3000;

    string public baseURI = "ipfs://bafybeiab7me5mhu2aw64nzdef7kkpq2z3mrxdaox7tiq4wlm3kdrryij4e/";
    string public hiddenURI = "ipfs://CID/";

    bool public revealed = true;

    bytes32 public merkleTreeRoot;

    uint256 public maxWhitelistMintLimitPerWallet = 3;
    mapping(address => uint256) public walletWhitelistMintCount;

    uint256 public maxMintLimitPerWallet = 3;
    mapping(address => uint256) public walletMintCount;

    uint256 public whitelistPrice = 0.01 ether;
    uint256 public price = 0.015 ether;
    // ## x ## States and variables ## x ##

    // #### Constructor ####
    constructor(address _initialOwner, bytes32 _merkleTreeRoot) ERC721A("Extraordinary Cherries", "EOC") Ownable(_initialOwner) {
        merkleTreeRoot = _merkleTreeRoot;
    }
    // ## x ## Constructor ## x ##

    // #### Whitelist mint functions ####
    function whitelistMint(uint256 _quantity, bytes32[] memory _merkleTreeProof) public payable whitelistMintCompliance(_quantity, _merkleTreeProof) {
        require(msg.value == whitelistPrice * _quantity, "You sent invalid value");

        _safeMint(msg.sender, _quantity);

        for(uint256 i = 0; i < _quantity; i++) {
            walletMintCount[msg.sender]++;
        }
    }

    modifier whitelistMintCompliance(uint256 _quantity, bytes32[] memory _merkleTreeProof) {
        require(!paused, "The contract is paused");
        require(whitelistSale, "The whitelist sale is not live yet");
        require(totalSupply() + _quantity <= whitelistMaxSupply, "Exceeds the whitelist max supply limit");
        require(totalSupply() + _quantity <= maxSupply, "Exceeds the max supply limit");

        uint256 mintCount = walletWhitelistMintCount[msg.sender];
        require(mintCount + _quantity <= maxWhitelistMintLimitPerWallet, "Exceeds the max whitelist mint limit per wallet");

        require(isValidMerkleTreeProof(_merkleTreeProof, keccak256(abi.encodePacked(msg.sender))), "You are not whitelisted");

        _;
    }
    // ## x ## Whitelist mint functions ## x ##

    // #### Mint functions ####
    function mint(uint256 _quantity, bytes32[] memory _merkleTreeProof) public payable mintCompliance(_quantity, _merkleTreeProof) {
        require(msg.value == whitelistPrice * _quantity, "You sent invalid value");

        _safeMint(msg.sender, _quantity);

        for(uint256 i = 0; i < _quantity; i++) {
            walletMintCount[msg.sender]++;
        }
    }

    modifier mintCompliance(uint256 _quantity, bytes32[] memory _merkleTreeProof) {
        require(!paused, "The contract is paused");
        require(publicSale, "The public sale is not live yet");
        require(totalSupply() + _quantity <= maxSupply, "Exceeds the max supply limit");

        uint256 mintCount = walletMintCount[msg.sender];
        require(mintCount + _quantity <= maxMintLimitPerWallet, "Exceeds the max mint limit per wallet");

        _;
    }
    // ## x ## Mint functions ## x ##

    // #### Mint helper functions ####
    function isValidMerkleTreeProof(bytes32[] memory _proof, bytes32 _leaf) public view returns(bool) {
        return MerkleProof.verify(_proof, merkleTreeRoot, _leaf);
    }
    // ## x ## Mint helper functions ## x ##

    // #### Owner mint functions ####
    function ownerMint(uint256 _quantity) public onlyOwner ownerMintCompliance(_quantity) {
        _safeMint(msg.sender, _quantity);
    }

    function ownerMintForOthers(address _to, uint256 _quantity) public onlyOwner ownerMintCompliance(_quantity) {
        _safeMint(_to, _quantity);
    }

    modifier ownerMintCompliance(uint256 _quantity) {
        require(!paused, "The contract is paused");
        require(totalSupply() + _quantity <= maxSupply, "Exceeds the max supply limit");

        _;
    }
    // ## x ## Owner mint functions ## x ##

    // #### Setter functions ####
    function setPaused(bool _state) public onlyOwner {
        paused = _state;
    }

    function setWhitelistSale(bool _state) public onlyOwner {
        whitelistSale = _state;
    }

    function setPublicSale(bool _state) public onlyOwner {
        publicSale = _state;
    }

    function setMaxSupply(uint256 _supply) public onlyOwner {
        maxSupply = _supply;
    }

    function setWhitelistMaxSupply(uint256 _supply) public onlyOwner {
        whitelistMaxSupply = _supply;
    }

    function setBaseURI(string memory _uri) public onlyOwner {
        baseURI = _uri;
    }

    function setHiddenURI(string memory _uri) public onlyOwner {
        hiddenURI = _uri;
    }

    function setRevealed(bool _state) public onlyOwner {
        revealed = _state;
    }

    function setMerkleTreeRoot(bytes32 _root) public onlyOwner {
        merkleTreeRoot = _root;
    }

    function setMaxWhitelistMintLimitPerWallet(uint256 _limit) public onlyOwner {
        maxWhitelistMintLimitPerWallet = _limit;
    }

    function setMaxMintLimitPerWallet(uint256 _limit) public onlyOwner {
        maxMintLimitPerWallet = _limit;
    }

    function setWhitelistPrice(uint256 _price) public onlyOwner {
        whitelistPrice = _price;
    }

    function setPrice(uint256 _price) public onlyOwner {
        price = _price;
    }
    // ## x ## Setter functions ## x ##

    // #### Getter functions ####
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "Token doesn't exists");

        if(revealed) {
            string memory currentBaseURI = _baseURI();
            return bytes(currentBaseURI).length > 0 ? string(abi.encodePacked(currentBaseURI, _tokenId.toString(), ".json")) : "";
        } else {
            return hiddenURI;
        }
    }

    function walletOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
        uint256 currentTokenId = _startTokenId();
        uint256 ownedTokenIndex = 0;
        address latestOwnerAddress;

        while (ownedTokenIndex < ownerTokenCount && currentTokenId <= maxSupply) {
            TokenOwnership memory ownership = _ownershipOf(currentTokenId);

            if (!ownership.burned && ownership.addr != address(0)) {
                latestOwnerAddress = ownership.addr;
            }

            if (latestOwnerAddress == _owner) {
                ownedTokenIds[ownedTokenIndex] = currentTokenId;

                ownedTokenIndex++;
            }

            currentTokenId++;
        }

        return ownedTokenIds;
    }
    // ## x ## Getter functions ## x ##

    // #### Other functions ####
    function withdraw() public payable onlyOwner {
        (bool _owner, ) = payable(owner()).call{value: address(this).balance}("");
        require(_owner);
    }
    // ## x ## Other functions ## x ##
}
