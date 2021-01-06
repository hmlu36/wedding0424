const URL = require('../settings/url');


module.exports = async function getInvitationCard(context) {
    const imageObjects = [
        { label: '封面', fileName: 'invitation_cover.jpg' },
        { label: '內頁', fileName: 'invitation_content.jpg' }
    ];
    const boxMessage = imageObjects.map((item) => {
        return {
            type: 'bubble',
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'image',
                        url: URL.INVITATION_CARD.replace('${item}', item.fileName),
                        size: 'full',
                        aspectMode: 'cover',
                        aspectRatio: '2:3',
                        gravity: 'top'
                    }
                ],
                paddingAll: '0px'
            },
            footer: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'button',
                        color: "#ffffff",
                        action: {
                            type: 'uri',
                            label: item.label,
                            uri: URL.INVITATION_CARD.replace('${item}', item.fileName)
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
