pragma solidity >=0.4.22 <0.6.0;
contract Owner{
    address[] public landsOwned;
    string public ownerName;
    string public ownerAdhaar;
    string public dob;
    address public ownerAddr;

    constructor(string name,string adhaarno,string dateob,address addr) public{
        ownerName = name;
        ownerAdhaar = adhaarno;
        dob = dateob;
        ownerAddr = addr;
    }
    function addLand(address newLand)public{
        landsOwned.push(newLand);
    }
    
    function getOwnedLands()public view returns(address[]){
        return landsOwned;
    }
    
    function delLandAddr(address soldLand) public{
        for (uint i = 0; i < landsOwned.length; i++) {
            if (soldLand == landsOwned[i]) {
                delete landsOwned[i];
                break;
            }
        }
        landsOwned.length--;
    }
}

contract Land{
    struct Buyer{
        address buyerAddr;
        bool isOwner;
    }

    address public owner;
    string public location;
    uint public landPrice;
    uint public tokenAmt;
    uint public landArea;
    bool public forsale;
    Buyer[] public buyers;
    address[] public pastOwners;

    constructor(uint price,string loc,uint area, address newOwner) public{
        landPrice = price;
        location = loc;
        landArea = area;
        owner = newOwner;
        pastOwners.push(newOwner);
    }
    
    function getBuyers() public view returns(address[],bool[]){
        address[] memory addrs = new address[](buyers.length);
        bool[] memory isOwn = new bool[](buyers.length);
        
        for (uint i = 0; i < buyers.length; i++) {
            Buyer storage buyer = buyers[i];
            addrs[i] = buyer.buyerAddr;
            isOwn[i] = buyer.isOwner;
        }
        
        return (addrs, isOwn);
    }
    
    function putForSAle(uint price,uint tkAmt) public{
        landPrice = price;
        tokenAmt = tkAmt;
        forsale = true;
    }

    function apply() public{
        Buyer memory newBuyer = Buyer({
            buyerAddr:msg.sender,
            isOwner:false
        });
        buyers.push(newBuyer);
    }

    function approve(address fixBuyer) public {
        for (uint i = 0; i < buyers.length; i++) {
            if (buyers[i].buyerAddr == fixBuyer) {
                buyers[i].isOwner = true;
                owner = fixBuyer;
                break;
            }
        } 
    }
    
    function delBuyers() public {
        for (uint i = 0; i < buyers.length; i++) {
            delete buyers[i];
        }
        buyers.length = 0;
    }

}

contract LandData{
    struct login {
        address userLogin;
        string password;
    }
    
    address[] public availLands;
    mapping(address => address) public users;
    
    login public loginData;
    
    function newLogin(address loginAddr, string pswd) public {
        loginData.userLogin = loginAddr;
        loginData.password = pswd;
    }
    
    function logout() public {
        loginData.userLogin = 0x0000000000000000000000000000000000000000;
        loginData.password = "";
    }
    
    function addForSale(address landForSale) public {
        availLands.push(landForSale);
    }
    
    function landSold(address soldLand) public{
        for (uint i = 0; i < availLands.length; i++) {
            if (availLands[i] == soldLand) {
                delete availLands[i];
                break;
            }
        }
        availLands.length--;
    }
    
    function insertUser(address userAdd, address contractAdd) public {
        users[userAdd] = contractAdd;
    }
    
    function getAvailLands() public view returns(address[]){
        return availLands;
    }
    
    function returnUser(address userAdd) public view returns(address) {
        return users[userAdd];
    }
}