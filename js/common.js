
var pageid=0;
var math=0;
render();
function render(){
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    data:{
      pageid:pageid
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('discount_tpl',info);
      $('.mmm_main .mmm_banner').html(htmlStr);
      math=Math.ceil(info.totalCount/info.pagesize);
      console.log(math);

      var list=[];
      for (let i = 0;  i< math; i++) {
        list.push(i);
      }
      console.log({list:list});
      
      var selectStr=template('select_tpl',{list:list});
      $('#select').html(selectStr)
      

      $('#select').val(pageid+1);
      
    }
  })
}
// 点击上一页
$('.page .mmm_prve').click(function(){
  if (pageid>0) {
    pageid--;
    render();
  }else{
    return;
  }
  console.log(pageid);
  
})
// 点击下一页
$('.page .mmm_next').click(function(){
  if (pageid<math-1) {
    pageid++;
    render();
    console.log(pageid);
    
  }
  // $('#select option').text(pageid)
})

//====
// 点击下拉菜单





$('#select').change(function(){
  var index=$(this).find('option:selected').val();
  console.log(index);
  
  pageid=index-1;
  render();
  
  
})