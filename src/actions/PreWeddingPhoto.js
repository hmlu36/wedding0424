const URL = require('../settings/url');


module.exports = async function getPreWeddingPhoto(context) {
    // 產生flex message格式
    const boxMessage = [...Array(4).keys()].map(index => {
        return {
            type: 'bubble',
            size: 'giga',
            hero: {
                type: 'image',
                aspectRatio: '2:3',
                size: 'full',
                aspectMode: 'cover',
                url: `https://raw.githubusercontent.com/hmlu36/wedding0424/main/photos/PreWeddingPhoto${index + 1}.jpg`,

            }
        };
    });

    // 產生flex message格式
    const flexMessage = {
        type: 'carousel',
        contents: [...boxMessage]
    };

    //console.log(JSON.stringify(flexMessage));
    await context.sendFlex('婚紗照', flexMessage);
}
