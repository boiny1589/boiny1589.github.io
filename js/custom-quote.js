document.addEventListener('DOMContentLoaded', function() {
  // 获取副标题元素
  const subtitle = document.getElementById('subtitle');
  if (!subtitle) return;
  
  // 清空原有内容
  subtitle.innerHTML = '';
  
  // 获取英文名言
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      const quote = `${data.content} - ${data.author}`;
      // 创建打字机效果
      const typed = new Typed('#subtitle', {
        strings: [quote],
        startDelay: 300,
        typeSpeed: 100,
        loop: true,
        backSpeed: 50
      });
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      // 如果API调用失败，显示默认名言
      const typed = new Typed('#subtitle', {
        strings: ['The best way to predict the future is to create it.'],
        startDelay: 300,
        typeSpeed: 100,
        loop: true,
        backSpeed: 50
      });
    });
});