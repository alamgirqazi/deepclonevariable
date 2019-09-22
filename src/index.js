
function clone(value) {
    if(!value){
        return null
    }
    return JSON.parse(JSON.stringify(value));
  }
  
  module.exports=clone;