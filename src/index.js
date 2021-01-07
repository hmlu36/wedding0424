const { router, text } = require('bottender/router');
const InvitationCard = require('./actions/InvitationCard');
const InvitationCard2 = require('./actions/InvitationCard2');
const InvitationCard3 = require('./actions/InvitationCard3');
const Location = require('./actions/Location');
const DialogflowBot = require('./actions/DialogflowBot');

module.exports = function App(context) {
  return router([
    text('電子喜帖', InvitationCard),
    text('電子喜帖2', InvitationCard2),
    text('電子喜帖3', InvitationCard3),
    text(/(婚禮|婚宴)地點/i, Location),
    //text(/^婚紗輪播.*$/i, Rain),
    //text(/^報名頁面.*$/i, Satellite),
    //text(/^留言板.*$/i, Temperature),
    text(/^.*$/i, DialogflowBot)
    /*text(/^.*$/i, () => {
      context.sendText(context.event.text);
    })*/ 
  ]);
};