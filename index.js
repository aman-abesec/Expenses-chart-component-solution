"use strict";
var reqData=new Request('./data.json');
fetch(reqData).then((data)=>{
  return data.json();
}).then((data)=>{
  alert(data);
})
// alert(0);
// fetch("data.json")
//   .then(response => response.json())
//   .then(json => console.log(json));
