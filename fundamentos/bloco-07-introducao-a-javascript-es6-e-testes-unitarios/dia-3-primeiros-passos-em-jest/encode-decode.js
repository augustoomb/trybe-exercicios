function encode(str) {

  str = str.split("")

  for(let i=0; i<str.length; i+=1){
    if(str[i] == "a"){
      str[i] = 1
    }
    else if(str[i] == "e"){
      str[i] = 2
    }
    else if(str[i] == "i"){
      str[i] = 3
    }
    else if(str[i] == "o"){
      str[i] = 4
    }
    else if(str[i] == "u"){
      str[i] = 5
    }
  }
  return str.join("")
}

function decode(strEnc) {
  strEnc = strEnc.split("")

  for(let i=0; i<strEnc.length; i+=1){
    if(strEnc[i] == "1"){
      strEnc[i] = "a"
    }
    else if(strEnc[i] == "2"){
      strEnc[i] = "e"
    }
    else if(strEnc[i] == "3"){
      strEnc[i] = "i"
    }
    else if(strEnc[i] == "4"){
      strEnc[i] = "o"
    }
    else if(strEnc[i] == "5"){
      strEnc[i] = "u"
    }
  }
  return strEnc.join("")
}

module.exports = {encode,decode}