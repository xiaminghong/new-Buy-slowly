$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr=template('baicaijia_scroll',info);
    // console.log(htmlStr);
    
    $('.mmm_navs ul').html(htmlStr);
    
  }
})

// 区域滚动
window.addEventListener('load',function(){
  // new IScroll('.mmm_navs');
  new IScroll(".mmm_navs", {
    scrollX: true,      // 配置横向的区域滚动
    scrollY: false        // 配置纵向的区域滚动
  });
})


rander(0);
function rander(titleid){
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
    data:{
      titleid :titleid
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('baicaijia_main',info);
      // console.log(htmlStr);
      
      $('.mmm_main').html(htmlStr);
      
    }
  })
}


$('.mmm_navs').on('click','li',function(){
  var titleid=$(this).data('id')
  
  console.log(titleid);
  
  rander(titleid);
  
})