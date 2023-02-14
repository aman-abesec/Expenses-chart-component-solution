var data=[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]
var middleChat=document.querySelector('.middle-chat');
for(let i=0;i<data.length;i++){
  if(data[i].day==='wed'){
    middleChat.innerHTML+='<div class=\'outer-wrape\'><span class=\'clicked\'>'+(data[i].amount)+'</span><div class=\'inner-wrape active\' style=height:'+(data[i].amount)*2+'px></div> <span class=\'day\' >'+data[i].day+'</span></div>';
  }
  else{
    middleChat.innerHTML+='<div class=\'outer-wrape\'><span class=\'clicked\'>'+(data[i].amount)+'</span><div class=\'inner-wrape\' style=height:'+(data[i].amount)*2+'px></div> <span class=\'day\' >'+data[i].day+'</span></div>';
  }
}
var mdlChat=document.querySelectorAll('.outer-wrape');
for(var i=0;i<mdlChat.length;i++){
  mdlChat[i].addEventListener(('mouseover'),function(){
    this.firstChild.style.display='block';
  })
}
for(var i=0;i<mdlChat.length;i++){
  mdlChat[i].addEventListener(('mouseleave'),function(){
    this.firstChild.style.display='none';
  })
}
// var reqData=new Request('./data.json');
// fetch(reqData).then((data)=>{
//   return data.json();
// }).then((data)=>{
//   alert(data);
// })
// <div class='wrape'>
//   <div class='{data[i].day}' style='height:{data[i].amount}''></div>
//   <span>{data[i].day}</span>
// </div>
