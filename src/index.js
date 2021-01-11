const { router, text } = require('bottender/router');
const InvitationCard = require('./actions/InvitationCard');
const InvitationCard2 = require('./actions/InvitationCard2');
const InvitationCard3 = require('./actions/InvitationCard3');
const Location = require('./actions/Location');
const DialogflowBot = require('./actions/DialogflowBot');
const URL = require('./settings/url');
const { CronJob } = require('cron');

// 每天 7-23, 每30分鐘啟動crons, 避免heroku idle
try {
  console.log('Before job instantiation');
  const cronJob = new CronJob('* 1 8-23 * * *', () => {
    console.log("cron is running every 5 minutes prevent idle");
  });
  console.log('After cronJob instantiation');
  cronJob.start();
  console.log('is job running? ', cronJob.running);
} catch (e) {
  console.log('omg err', e);
}


module.exports = function App(context) {
  return router([
    text(/^([電子]?)喜帖$/i, InvitationCard),
    text(/^([電子]?)喜帖2$/i, InvitationCard2),
    text(/^([電子]?)喜帖3$/i, InvitationCard3),
    text(/([(婚禮|婚宴|喜宴)]?)地點/i, Location),
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