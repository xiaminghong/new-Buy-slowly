

var brandTitleId=getSearch('brandTitleId');
console.log(brandTitleId);

$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getbrand',
  data:{
    brandtitleid:brandTitleId
  },
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr=template('brand_tpl',info);
    $('.mmm_brand ul').html(htmlStr);
  }
})


// $.ajax({
//   type:'get',
//   url:'http://127.0.0.1:9090/api/getbrandproductlist',
//   data:{
//     brandtitleid :1, 
//     pagesize :10
//   },
//   dataType:'json',
//   success:function(info){
//     console.log(info);
//     // var htmlStr=template('bijia_box',info);
//     // $('.web_product ul').html(htmlStr);
//   }
// })