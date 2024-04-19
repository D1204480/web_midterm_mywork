// 选择所有 img-gallary 元素
const imgGalleryElements = document.querySelectorAll('.img-gallary');

// 为每个 img-gallary 元素中的图片添加点击事件处理程序
imgGalleryElements.forEach((imgGallery, index) => {
    const img = imgGallery.querySelector('img'); // 获取图片元素
    const clickCountElement = imgGallery.querySelector('.click-count'); // 获取计数元素

    // 初始化点击计数
    let clickCount = parseInt(clickCountElement.textContent) || 0;

    // 添加点击事件处理程序
    img.addEventListener('click', () => {
        // 增加点击计数
        clickCount++;

        // 更新计数元素的内容
        clickCountElement.textContent = clickCount;
    });
});
