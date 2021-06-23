var matter = 0;
const consumers = [0, 0, 0, 0, 0, 0, 0, 0];

function GatherClicked(){
  matter = matter + 1;
}

function Tick(){
  document.getElementById("matterDisplay").innerHTML = "You Have " + matter + " Matter";
}

function Buy(type, mk){
  if(type == 1){
    consumers[mk] += 1;
  }
}

function Dbug(){
  var outer = "";
  for(var i = 0; i < 8; i++){
    outer += consumers[i] + " ";
  }
  console.log(outer);
}
