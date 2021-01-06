const URL = require('../settings/url');


module.exports = async function getInvitationCard(context) {

    const invitations = ["invitation_cover.jpg", "invitation_content.jpg"].map((photo) => {
        return {
            "imageUrl": URL.INVITATION_CARD.replace("${item}", photo),
            "action": {
                "type": "message",
                "label": photo,
                "text": "1"
            }
        }
    });

    const template = {
        "type": "template",
        "altText": "電子喜帖",
        "template": {
            "type": "image_carousel",
            "columns": [
                ...invitations
            ]
        }
    };

    const altText = '電子喜帖';
    await context.sendTemplate(altText, template);
}

/*
module.exports = async function getInvitationCard(context) {

    const boxMessage = ["invitation_cover.jpg", "invitation_content.jpg"].map((photo) => {
        return {
            type: "bubble",
            body: {
                type: "box",
                layout: "vertical",
                contents: [
                    {
                        type: "image",
                        url: URL.INVITATION_CARD.replace("${item}", photo),
                        size: "full",
                        aspectMode: "cover",
                        aspectRatio: "2:3",
                        gravity: "top"
                    }
                ],
                paddingAll: "0px"
            }
        };
    });

    //console.log(JSON.stringify(boxMessage));

    sendCarouselMessage(context, boxMessage);
}

async function sendCarouselMessage(context, boxMessage) {
    // 產生flex message格式
    const flexMessage = {
        type: "carousel",
        contents: [...boxMessage]
    };

    //console.log(JSON.stringify(flexMessage));
    await context.sendFlex('電子喜帖', flexMessage);
}
*/