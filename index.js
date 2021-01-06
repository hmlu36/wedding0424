const { router, text } = require('bottender/router');


module.exports = function App() {
    return router([
      //text(/電子喜帖.*$/i, RadarEcho),
      //text(/^婚禮地點.*$/i, AQI),
      //text(/^婚紗輪播.*$/i, Rain),
      //text(/^報名頁面.*$/i, Satellite),
      //text(/^留言板.*$/i, Temperature),
      text('*', () => {
        context.sendText(context.event.text);
      }) // echo
    ]);
  };