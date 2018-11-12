
var couponid=getSearch('couponid');
console.log(couponid);

$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getcouponproduct',
  data:{
    couponid:couponid
  },
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr=template('couponproduct_tpl',info);
    $('.mmm_foodr').html(htmlStr);
    
  }
})