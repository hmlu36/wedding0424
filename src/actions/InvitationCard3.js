const URL = require('../settings/url');



module.exports = async function getInvitationCard(context) {
    const boxMessage = ['invitation_cover.jpg', 'invitation_content.jpg'].map((photo) => {
        return {
            type: 'bubble',
            hero: {
                type: 'image',
                url: URL.INVITATION_CARD.replace('${item}', photo),
                size: 'full',
                aspectMode: 'cover',
                aspectRatio: '1:1.618',
                gravity: 'top'
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'button',
                        height: 'sm',
                        action: {
                            type: 'uri',
                            label: '放大看原圖',
                            uri: URL.INVITATION_CARD.replace('${item}', photo)
                        },
                    },
                ],
            },
            styles: {
                footer: {
                    backgroundColor: "#6FB5F3"
                }
            }
        };
    });

    //console.log(JSON.stringify(boxMessage));

    sendCarouselMessage(context, boxMessage);
}

async function sendCarouselMessage(context, boxMessage) {
    // 產生flex message格式
    const flexMessage = {
        type: 'carousel',
        contents: [...boxMessage]
    };

    //console.log(JSON.stringify(flexMessage));
    await context.sendFlex('電子喜帖', flexMessage);
}
