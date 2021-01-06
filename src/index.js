const { router, text } = require('bottender/router');
const InvitationCard = require('./actions/InvitationCard');

module.exports = function App(context) {
  return router([
    text(/電子喜帖.*$/i, InvitationCard),
    //text(/^婚禮地點.*$/i, AQI),
    //text(/^婚紗輪播.*$/i, Rain),
    //text(/^報名頁面.*$/i, Satellite),
    //text(/^留言板.*$/i, Temperature),
    text('*', (context) => {
      context.sendText(context.event.text);
    }) // echo
  ]);
};