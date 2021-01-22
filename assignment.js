//


//kilometer to meter convert project code

function kilometerToMeter(kilometer){
    var meter = kilometer* 1000;
    return meter;
}
var meterResult = kilometerToMeter(2);git 
console.log(meterResult);


//budget calculator project code

function budgetCalculator(watch, phone ,laptop){

    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var totalProduct = watchPrice + phonePrice +laptopPrice ;
    return totalProduct;
}
var totalCost = budgetCalculator(2,2,1);
    console.log(totalCost);
    

//hotel cost project code
function hotelCost(day){

    var  firstShift = 0 , secondShift = 0 ,thirdShift = 0;  
    if(day <=10){
         firstShift = day * 100;    
    }
    else if(day <= 20){
         secondShift = (10 *100) + (day - 10) * 80;
    }
    else{
         thirdShift = (10 *100) + (10 *80) + (day - 20) * 50;
    }
   return firstShift + secondShift + thirdShift;
}
var totalDayCost = hotelCost(10);
console.log(totalDayCost);


//mega friend project code

function megaFriend(longFriendName){

    var longFriend = friendList[0];
     for(var i = 0; i < friendList.length; i++){
        var element = friendList[i];
          if(longFriend.length < element.length){
            longFriend = element;
        }   
    }
    return longFriend;  
}
var friendList = ["Rahman","Tarek","Raju ahmed raj","Billal","salehuddin","Hamja"];
var result= megaFriend(friendList);
console.log(result);

