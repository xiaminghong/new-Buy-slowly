
var productid=getSearch('productid');
console.log(productid);



$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getproduct',
  data:{
    productid:productid 
  },
  dataType:'json',
  success:function(info){
    console.log(info);
   var htmlStr=template('bijia_tpl',info);
    $('.mmm_bigBOx').html(htmlStr);
  }
})


$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getproductcom',
  data:{
    productid:productid 
  },
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr=template('bijia_box',info);
    $('.web_product ul').html(htmlStr);
  }
})