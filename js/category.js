$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getcategorytitle',
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr=template('category_outer',info);
    $('.mmm_category .uls').html(htmlStr);
  }
})

$('.mmm_category').on('click','li',function(){

var titleid= $(this).data('id');
console.log(titleid);
var $this=$(this);


  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcategory',
    data:{
      titleid:titleid
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('category_inner',info);
      
      
      $this.find('.mmm_category_O').html(htmlStr);
      $this.find('.mmm_category_O').slideToggle(500);
     
      
    }
  })
 
  
})


