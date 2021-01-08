const { router, text } = require('bottender/router');
const InvitationCard = require('./actions/InvitationCard');
const InvitationCard2 = require('./actions/InvitationCard2');
const InvitationCard3 = require('./actions/InvitationCard3');
const Location = require('./actions/Location');
const DialogflowBot = require('./actions/DialogflowBot');
const URL = require('./settings/url');
const { CronJob } = require('cron');


// 每天 7-23, 每30分鐘啟動crons, 避免heroku idle
const scheduleOne = new CronJob(
  '0 0/30 7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 * * *', // cron time
  () => {
    console.log("cron is running every 5 minutes prevent idle");
  }
);



module.exports = function App(context) {
  return router([
    text(/^([電子]?)喜帖$/i, InvitationCard),
    text(/^([電子]?)喜帖2$/i, InvitationCard2),
    text(/^([電子]?)喜帖3$/i, InvitationCard3),
    text(/([(婚禮|婚宴)]?)地點/i, Location),
    //text(/^婚紗輪播.*$/i, Rain),
    text(/^(報名([(頁面|表)]?)).*$/i, () => {
      context.sendText(URL.WEDDINGFORM);
    }),
    //text(/^留言板.*$/i, Temperature),
    text(/^.*$/i, DialogflowBot)
    /*text(/^.*$/i, () => {
      context.sendText(context.event.text);
    })*/
  ]);
};