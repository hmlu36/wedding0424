const URL = require('../settings/url');


module.exports = async function getInvitationCard(context) {
    // 產生flex message格式
    const flexMessage = {
        type: 'bubble',
        hero: {
            type: "image",
            url: URL.INVITATION_CARD.replace('${item}', 'invitation_card.jpg'),
            size: "full",
            aspectRatio: "1:1",
            aspectMode: "cover"
        },
        body: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "text",
                    text: "🤵泓民佳恩👰 婚禮💒",
                    weight: "bold",
                    size: "22px"
                },
                {
                    type: "separator"
                },
                {
                    type: "text",
                    text: "📅 2021.04.24",
                    weight: "bold",
                    margin: "lg",
                    decoration: "underline",
                },
                {
                    type: "text",
                    text: "🕒 10:30 (10:00可入場)",
                    weight: "bold",
                    margin: "lg",
                    decoration: "underline",
                },
                {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        {
                            type: "text",
                            text: "📍 徠歸仁飯店",
                            align: "start",
                            gravity: "center",
                            decoration: "underline",
                        },
                        {
                            type: "button",
                            action: {
                                "type": "uri",
                                "label": "定位",
                                "uri": "https://g.page/laihotelguiren?share"
                            },
                            margin: "none",
                            height: "sm",
                            style: "secondary",
                            position: "relative"
                        }
                    ]
                }
            ]
        },
        "footer": {
            type: "box",
            layout: "horizontal",
            contents: [
                {
                    type: "button",
                    action: {
                        type: "uri",
                        "label": "訂票提醒",
                        "uri": "https://calendar.google.com/calendar/gp#~calendar:view=e&bm=1&text=泓民佳恩婚宴_訂票提醒&dates=20210323T020000Z/20210323T040000Z&details=&location=徠歸仁飯店"
                    },
                    height: "sm",
                    style: "primary",
                    gravity: "top",
                    position: "relative",
                    margin: "xs"
                },
                {
                    type: "button",
                    action: {
                        type: "uri",
                        "label": "加入行事曆",
                        "uri": "https://calendar.google.com/calendar/gp#~calendar:view=e&bm=1&text=泓民佳恩婚宴&dates=20210424T020000Z/20210424T040000Z&details=&location=徠歸仁飯店"
                    },
                    color: "#70BAFB",
                    height: "sm",
                    style: "primary",
                    gravity: "top",
                    position: "relative",
                    margin: "xs"
                }
            ]
        }
    };
    await context.sendFlex('電子喜帖', flexMessage);
}

