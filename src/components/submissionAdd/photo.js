// window.addEventListener(
//   "DOMContentLoaded",
//   function() {
//     // 获取元素，创建设置等等
//     var canvas = document.getElementById("canvas"),
//       context = canvas.getContext("2d"),
//       video = document.getElementById("video"),
//       videoObj = { video: true },
//       errBack = function(error) {
//         console.log("Video capture error: ", error.code);
//       };

//     // 添加video 监听器
//     if (navigator.getUserMedia) {
//       // 标准
//       navigator.getUserMedia(
//         videoObj,
//         function(stream) {
//           video.src = stream;
//           video.play();
//         },
//         errBack
//       );
//     } else if (navigator.webkitGetUserMedia) {
//       // WebKit 前缀
//       navigator.webkitGetUserMedia(
//         videoObj,
//         function(stream) {
//           video.src = window.webkitURL.createObjectURL(stream);
//           video.play();
//         },
//         errBack
//       );
//     } else if (navigator.mozGetUserMedia) {
//       // Firefox 前缀
//       navigator.mozGetUserMedia(
//         videoObj,
//         function(stream) {
//           video.src = window.URL.createObjectURL(stream);
//           video.play();
//         },
//         errBack
//       );
//     } else {
//       alert("浏览器不支持HTML5！");
//       //console.log('your browser not support getUserMedia');
//     }

//     document.getElementById("btn").addEventListener("click", function() {
//       context.drawImage(video, 0, 0, 200, 200);
//     });
//   },
//   false
// );
