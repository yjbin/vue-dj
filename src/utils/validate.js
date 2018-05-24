/*大于0小于100数字*/
export function validateNumber(val) {
  const reg = /^\d\.([1-9]{1,2}|[0-9][1-9])$|^[1-9]\d{0,1}(\.\d{1,2}){0,1}$|^100(\.0{1,2}){0,1}$/;
  return reg.test(val)
}

export function validdateMobile(val) {
  const length = val.length;
  var mobile = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  return length == 11 && mobile.test(val)
}


export function validPassword(val) {
  const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
  return reg.test(val)
}
//联系方式
export function validContact(val){  
  var reg =/(^[0-9]{3,20}$)/;  
  return reg.test(val);  
}  
// export function validContact(val){  
//   var reg =/(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/;  
//   return reg.test(val);  
// }  
//身份证
export function card(val){  
  var reg =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val);  
} 
//验证数字包括浮点数
export function validNumber(val){  
  var reg=/^[0-9]+\.?[0-9]*$/;
  return reg.test(val);  
}  
//金额验证，保留两位小数
export function validMoney(val){  
  var reg=/^([1-9]\d{0,8}|0)(\.\d{1,6})?$/;
  return reg.test(val);  
}  
//验证合法的姓名 
export function validName(val){  
  var reg=/^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/;
  return reg.test(val);  
}