const bannedWords=[];

const reg=new RegExp(`(?:${bannedWords.jpin("|")})`);

function checkBannedWords(str){
  const match=String(str).match(reg);
  if(match)return true;
  else return false;
}

module.exports=checkBannedWords;
