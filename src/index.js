const { router, text } = require('bottender/router');
const InvitationCard = require('./actions/InvitationCard');
const InvitationCard2 = require('./actions/InvitationCard2');

module.exports = function App(context) {
  return router([
    text(/電子喜帖/i, InvitationCard),
    text(/電子喜帖2/i, InvitationCard),
    //text(/^婚禮地點.*$/i, AQI),
    //text(/^婚紗輪播.*$/i, Rain),
    //text(/^報名頁面.*$/i, Satellite),
    //text(/^留言板.*$/i, Temperature),
    text(/^.*$/i, () => {
      context.sendText(context.event.text);
    }) // 
  ]);
};