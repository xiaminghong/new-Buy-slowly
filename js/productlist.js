
var categoryid=getSearch('categoryid');
// console.log(categoryid);
var category=getSearch('category');
// console.log(category);
var titleId=getSearch('titleId');
// console.log(titleId);


$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getcategorybyid',
  data:{
    categoryid:categoryid 
  },
  dataType:'json',
  success:function(info){
    // console.log(info);
    var htmlStr=template('productlistNav_tpl',info);
    $('.mmm_nav_strip ul').html(htmlStr);
    
  }
})
// 当前页数
var pageid=1;
// 最大页数
var math=0;


render();
function render(){
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getproductlist',
    data:{
      categoryid :categoryid,
      pageid :pageid  
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr=template('productlist_tpl',info);
      $('.mmm_productlist ul').html(htmlStr);
      math=Math.ceil(info.totalCount/info.pagesize)
      // console.log(math);
      
      var arr=[];
      for (let i = 0; i < math; i++) {
        arr.push(i);
      }
      // console.log(arr);
      // console.log({list:arr});
      var pullDown=template('pull-down',{list:arr});

      $('#select').html(pullDown);

      $('#select').val(pageid-1)
      
      
    }
  })
}

$('.mmm_prve').click(function(){
  if (pageid>=0) {
    pageid--;
    render();
  }else{
    return;
  }
  
})
$('.mmm_next').click(function(){
  if (pageid<math) {
    pageid++;
    render();
  }
})

$('#select').change(function(){
  var index=$(this).find('option:selected').val();
  // console.log(index);
  // 字符串不能加一，所以字符串转数字，在加一
  var index=parseInt(index);
  // console.log(index);
  
  pageid=index+1;
  
  render();
  // console.log(pageid);

  
  
})