
    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsshop',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlStr = template('gsproduct_show_one', info);
        $('.mm_show .one').html(htmlStr);
      }
    })


    $.ajax({
      type: 'get',
      url: 'http://127.0.0.1:9090/api/getgsshoparea',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlStr = template('gsproduct_show_two', info);
        $('.mm_show .two').html(htmlStr);
  
      }
    })


    $('.mm_show .three').html('<li>全部价格</li>');
 



rander(0,0);
function rander(shopid,areaid){
  $.ajax({
    type: 'get',
    url: 'http://127.0.0.1:9090/api/getgsproduct',
    dataType: 'json',
    data: {
      shopid: shopid,
      areaid: areaid
    },
    success: function (info) {
      console.log(info);
      var htmlStr = template('ShoppingResult_tpl', info);
      $('.ShoppingResult ul').html(htmlStr);
  
    }
  })
}






var lis = $('.navShopping ul li');
var uls = $('.mm_show ul');
var shopid=0;
var areaid=0;

lis.click(function(){
  var index = $(this).data('id');
  uls.eq(index).toggleClass('hide').siblings().addClass('hide');
   
   
  })
  $('.mm_show ul').on('click','li',function(){
    if ($(this).data('shopid')) {
      shopid = $(this).data('shopid')
    }
    if ($(this).data('areaid')) {
      areaid= $(this).data('areaid');
       
    }
    // console.log(shopid);
    // console.log(areaid);
    rander(shopid,areaid);
    $(this).parent().find("i").remove();
    $(this).children("a").append('<i class="iconfont icon-gou"></i>');
})