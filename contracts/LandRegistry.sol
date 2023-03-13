//SPDX-License-Identifier: Unlicense
pragma solidity >=0.5.0 <0.9.0;

contract LandRegistry{
    address payable owner;
    struct buyerReg{
        address id;
        string name;
        string nidNumber;
        string email;
    }

    struct sellerReg{
        address id;
        string name;
        string nidNumber;
        string email;
    }

    struct landInfo{
        address id;
        string city;
        uint area;
        uint price;
        uint property;
    }

    struct buyLand{
        address buyer;
        address seller;
        string city;
        uint area;
        uint price;
    }


    constructor() {
     owner = payable(msg.sender);
    }
 buyerReg[] buyers;
 sellerReg[] sellers;
 landInfo[] landDetails;
 buyLand[] buyLandDetails;
 
 function addBuyers(address _id, string memory _name, string memory _nidNumber, string memory email) external{
     buyers.push(buyerReg(_id, _name, _nidNumber, email));
 }
 function getBuyers() public view returns(buyerReg[] memory){
     return buyers;
 }
 
 function addSellers(address _id, string memory _name, string memory _nidNumber, string memory email) external{
     sellers.push(sellerReg(_id, _name, _nidNumber, email));
 }
 function getSellers() public view returns(sellerReg[] memory){
     return sellers;
 }

 function getSingleBuyer(address _userAccount) public view returns(buyerReg memory){
     for(uint i=0; i<buyers.length; i++){
         if(buyers[i].id == _userAccount){
             return buyers[i];
         }
     }
    revert("Struct not found");
 }

 function addlandDetails(address _id, string memory _city, uint _area, uint _price, uint _property) external{
     landDetails.push(landInfo(_id, _city, _area, _price, _property));
 }

 function getLandDetails() public view returns(landInfo[] memory){
     return landDetails;
 }

 function buyland(address _id1,address _id2, string memory _city, uint _area, uint _price) external{
     buyLandDetails.push(buyLand(_id1,_id2, _city, _area, _price));
 }

 function buyLandD() public view returns(buyLand[] memory){
     return buyLandDetails;
 }

}