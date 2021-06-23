var matter = 0;
var ticker = 0;
const consumers = [0, 0, 0, 0, 0, 0, 0, 0];
const consumerPrices = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000];

function GatherClicked(){
  matter = matter + 1;
}

function Tick(){
  document.getElementById("matterDisplay").innerHTML = "You Have " + matter + " Matter";
  ticker += 1;
  if(ticker >= 100){
    UpdateValues();
    ticker = 0;
  }
}

function Buy(type, mk){
  if(type == 1){
    if(matter >= consumerPrices[mk]){
      consumers[mk] += 1;
      matter -= consumerPrices[mk];
    }
  }
}

function Dbug(){
  var outer = "";
  for(var i = 0; i < 8; i++){
    outer += consumers[i] + " ";
  }
  console.log(outer);
}

function UpdateValues(){
  for(var i = 0; i < 8; i++){
    if(consumers[i] > 1){
      matter += consumers[i] * ((10^i)/(7-i));
    }
  }
}
