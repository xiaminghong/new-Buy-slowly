var productId=getSearch('productId');
console.log(productId);

$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
  data:{productid:productId},
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr=template('moneyproduct',info);
    $('.mmm_container').html(htmlStr);
    
  }
})
