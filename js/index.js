$(function(){
  // 导航
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getindexmenu',
    dataType:'json',
    success:function(info){
      // console.log(info);
      var htmlStr=template('navId_tpl',info);
      $('.mmm_nav').html(htmlStr);
     
    }
  })

  // 商品折扣
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('discount_tpl',info);
      $('.mmm_main .mmm_banner').html(htmlStr);
      
      $('.mmm_nav li:nth-last-child(-n+4)').addClass('active')
    }
    
  })
  
 
  // 点击隐藏或者显示
  $('.mmm_nav').on('click','li:nth-child(8)',function(){
    // console.log(111);
    $('.mmm_nav li:nth-last-child(-n+4)').stop().slideToggle(500);
    
  })

})