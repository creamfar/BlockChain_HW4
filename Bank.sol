pragma solidity ^0.4.23;

contract Bank {
	// 此合約的擁有者
    address private owner;

	// 儲存所有會員的餘額
    mapping (address => uint256) private balance;
    mapping (address => uint256) private cdmoney;
    mapping (address => uint256) private cdtime;

	// 事件們，用於通知前端 web3.js
    event DepositEvent(address indexed from, uint256 value, uint256 timestamp);
    event WithdrawEvent(address indexed from, uint256 value, uint256 timestamp);
    event TransferEvent(address indexed from, address indexed to, uint256 value, uint256 timestamp);
    event CDEvent(address indexed from, uint256 value,uint256 times,uint256 timestamp);
    event CDcompleteEvent(address indexed from, uint256 value, uint256 timestamp);
    event CDcancelEvent(address indexed from, uint256 value, uint256 timestamp);
    
    modifier isOwner() {
        require(owner == msg.sender, "you are not owner");
        _;
    }
    
	// 建構子
    constructor() public payable {
        owner = msg.sender;
    }

	// 存錢
    function deposit() public payable {
        balance[msg.sender] += msg.value;

        emit DepositEvent(msg.sender, msg.value, now);
    }

	// 提錢
    function withdraw(uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        msg.sender.transfer(weiValue);

        balance[msg.sender] -= weiValue;

        emit WithdrawEvent(msg.sender, etherValue, now);
    }

	// 轉帳
    function transfer(address to, uint256 etherValue) public {
        uint256 weiValue = etherValue * 1 ether;

        require(balance[msg.sender] >= weiValue, "your balances are not enough");

        balance[msg.sender] -= weiValue;
        balance[to] += weiValue;

        emit TransferEvent(msg.sender, to, etherValue, now);
    }
    
    //定存購買
    function CDbuy(uint256 time) public payable{
        cdmoney[msg.sender] += msg.value;
        cdtime[msg.sender] += time;
        require(cdtime[msg.sender] <= 12 && cdtime[msg.sender] >=0, "期數最多12期，最少0期!");
        emit CDEvent(msg.sender, msg.value,time,now);
    }
    //定存期滿
    function CDcomplete() public payable{
        uint256 weiValue = cdmoney[msg.sender];
        
        msg.sender.transfer(weiValue+weiValue*cdtime[msg.sender]*1/100);
        
        emit CDcompleteEvent(msg.sender,weiValue+weiValue*cdtime[msg.sender]*1/100, now);
        cdmoney[msg.sender] = 0;
        cdtime[msg.sender] = 0;
    }
    //定存解約
    function CDcancel(uint256 releasetime) public payable{
        uint256 weiValue = cdmoney[msg.sender];
        require(releasetime <=  cdtime[msg.sender], "期數超過購買定存之期數");
        require(releasetime <= 12 && releasetime >=0, "期數最多12期，最少0期!");
        msg.sender.transfer(weiValue+weiValue*releasetime*1/100);
        
        emit CDcancelEvent(msg.sender,weiValue+weiValue*releasetime*1/100, now);
        cdmoney[msg.sender] = 0;
        cdtime[msg.sender] = 0;
    }

	// 檢查銀行帳戶餘額
    function getBankBalance() public view returns (uint256) {
        return balance[msg.sender];
    }
    function getCertificateDeposit() public view returns (uint256) {
        return cdmoney[msg.sender];
    }
          
    function kill() public isOwner {
        selfdestruct(owner);
    }
}