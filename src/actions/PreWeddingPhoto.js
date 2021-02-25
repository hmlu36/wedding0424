const URL = require('../settings/url');


module.exports = async function getPreWeddingPhoto(context) {
    // 產生imageCarousel格式
    const imageCarousel = [
        {
            imageUrl: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto1.jpg',
            action: {
                type: 'uri',
                label: '放大',
                uri: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto1.jpg'
            }
        },
        {
            imageUrl: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto2.jpg',
            action: {
                type: 'uri',
                label: '放大',
                uri: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto2.jpg'
            }
        },
        {
            imageUrl: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto3.jpg',
            action: {
                type: 'uri',
                label: '放大',
                uri: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto3.jpg'
            }
        },
        {
            imageUrl: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto4.jpg',
            action: {
                type: 'uri',
                label: '放大',
                uri: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto4.jpg'
            }
        },
        {
            imageUrl: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto5.jpg',
            action: {
                type: 'uri',
                label: '放大',
                uri: 'https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto5.jpg'
            }
        }
    ];
    await context.imageCarousel('婚紗照', imageCarousel);
}
