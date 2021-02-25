const URL = require('../settings/url');


module.exports = async function getPreWeddingPhoto(context) {
    // 產生flex message格式
    const flexMessage = {
        type: 'template',
        altText: '婚紗照',
        template: {
            type: 'image_carousel',
            columns: [
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
                }
            ]
        }
    };
    await context.sendFlex('電子喜帖', flexMessage);
}

