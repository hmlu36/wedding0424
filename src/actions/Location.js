
module.exports = async function getLocation(context) {

    const flexMessage = {
        "type": "bubble",
        "hero": {
            "type": "image",
            "url": context.event.text.includes("婚禮") ? "https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-0/p640x640/88136510_515237099421628_4841336734333534208_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8024bb&_nc_ohc=lhp5B73qrlkAX9j4_s8&_nc_ht=scontent.fkhh1-1.fna&tp=6&oh=48bfb73b94a98af74022760ba20033cb&oe=601F4257" : "https://www.atanews.net/upload_edit/images/201902/20190213145019_68eb562c.JPG",
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
                    "text": "徠歸仁飯店 " + (context.event.text.includes("婚禮") ? "5F 嘉德麗雅園" : "2F 琥珀廳"),
                    "weight": "bold",
                    "size": "lg",
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