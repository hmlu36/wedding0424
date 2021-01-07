
module.exports = async function getLocation(context) {
    await context.sendLocation({
        title: '徠·歸仁飯店 LAI HOTEL GUIREN',
        address: '台南市歸仁區中山路三段455號',
        latitude: 22.9688974,
        longitude: 120.2749901,
    });
}