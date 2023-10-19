// // 添加监听
// document.addEventListener('wheel', showScrollbar);

// function showScrollbar() {
//   // 显示滚动条
//   document.body.style.overflow = 'auto';
  
//   // 延迟1秒后再隐藏
//   setTimeout(function(){
//     document.body.style.overflow = 'hidden';
//   }, 1000);
// }

// (function() {

//   // 首先使用 CSS 隐藏滚动条
//   document.body.style.overflow = 'hidden';

//   // 然后监听滚轮事件
//   document.addEventListener('wheel', showOnScroll);

//   function showOnScroll() {
//     document.body.style.overflow = 'auto';
//     setTimeout(function() {
//       document.body.style.overflow = 'hidden'; 
//     }, 1000);
//   }

// })();


document.addEventListener('scroll', function(e) {

  // 滚动中显示滚动条
  document.body.style.overflow = 'auto';

  // 100ms后隐藏滚动条
  setTimeout(function() {
    document.body.style.overflow = 'hidden';
  }, 1);

});