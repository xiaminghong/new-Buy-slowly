var productid=getSearch('productid');
console.log(productid);


$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getdiscountproduct',
  data:{
    productid :productid 
  },
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr=template('discount_tpl',info);
    $('.mmm_container').html(htmlStr);
    
  }
})