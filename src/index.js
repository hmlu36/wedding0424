const { router, text } = require('bottender/router');
const InvitationCard = require('./actions/InvitationCard');
const InvitationCard2 = require('./actions/InvitationCard2');
const Location = require('./actions/Location');

module.exports = function App(context) {
  return router([
    text('電子喜帖', InvitationCard),
    text('電子喜帖2', InvitationCard2),
    text('(婚禮|婚宴)地點', Location),
    //text(/^婚紗輪播.*$/i, Rain),
    //text(/^報名頁面.*$/i, Satellite),
    //text(/^留言板.*$/i, Temperature),
    text(/^.*$/i, () => {
      context.sendText(context.event.text);
    }) // 
  ]);
};