
module.exports = async function getLocation(context) {

    const flexMessage = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": "https://www.atanews.net/upload_edit/images/201902/20190213145019_68eb562c.JPG",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
                {
                    "type": "text",
                    "text": "徠歸仁飯店",
                    "weight": "bold",
                    "size": "xl",
                    "wrap": true,
                    "contents": []
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [
                        {
                            "type": "text",
                            "text": "台南市歸仁區中山路三段465號",
                            "weight": "bold",
                            "size": "md",
                            "flex": 0,
                            "wrap": true,
                            "contents": []
                        }
                    ]
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "定位",
                        "uri": "https://g.page/laihotelguiren?share"
                    },
                    "style": "primary"
                }
            ]
        }
    };

    await context.sendFlex('地點', flexMessage);
    /*
    await context.sendLocation({
        title: '徠·歸仁飯店 LAI HOTEL GUIREN',
        address: '台南市歸仁區中山路三段455號',
        latitude: 22.9688974,
        longitude: 120.2749901,
    });
    */
}