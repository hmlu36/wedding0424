### 本機console測試
npx bottender dev --console

### menu選單製作
參考 curl底下範例

## 強制清除cache
npm cache clear --force

## Google Cloud Platform設定   
Identity -> Service Accounts -> Create Service Account -> Permissions -> add gservice account  
and grant *Project Owner* role to this account  

## GOOGLE_APPLICATION_CREDENTIALS設定  
add this config in heroku  
Settings -> Buildpacks -> add buildpacks  https://github.com/buyersight/heroku-google-application-credentials-buildpack.git  

Settings ->  
1. Create Config Vars key GOOGLE_CREDENTIALS and paste the content of service account credential JSON file as is.  
2. Create a key under Config Vars GOOGLE_APPLICATION_CREDENTIALS and set a value as google-credentials.json.  

Deploy to heroku  
The script with generate a file called google-credentials.json which holds the key from the step #1 above.  

## heroku  
Free dyno hour pool => Personal accounts are given a base of 550 free dyno hours each month  
command: heroku ps -a <app name>

## Line Rich Menu  
Image format: JPEG or PNG  
Image width size (pixels): 800 to 2500  
Image height size (pixels): 250 or more  
Image aspect ratio (width/height): 1.45 or more  
Max file size: 1 MB

-- *新增選單*  
curl -v -X POST https://api.line.me/v2/bot/richmenu ^  
-H "Authorization: Bearer {access_token}" ^  
-H "Content-Type:application/json" ^   
-d "{\"size\":{\"width\":2500,\"height\":1686},\"selected\":false,\"name\":\"richmenu\",\"chatBarText\": \"點選開啟選單\",\"areas\":[{\"bounds\":{\"x\":0,\"y\":0,\"width\":833,\"height\":843},\"action\":{\"type\":\"message\",\"label\":\"喜帖\",\"text\":\"喜帖\"}},{\"bounds\":{\"x\":833,\"y\":0,\"width\":833,\"height\":843},\"action\":{\"type\":\"message\",\"label\":\"婚禮地點\",\"text\":\"婚禮地點\"}},{\"bounds\":{\"x\":1666,\"y\":0,\"width\":833,\"height\":843},\"action\":{\"type\":\"message\",\"label\":\"婚宴地點\",\"text\":\"婚宴地點\"}},{\"bounds\":{\"x\":0,\"y\":843,\"width\":833,\"height\":843},\"action\":{\"type\":\"message\",\"label\":\"報名表\",\"text\":\"報名表\"}},{\"bounds\":{\"x\":833,\"y\":843,\"width\":833,\"height\":843},\"action\":{\"type\":\"message\",\"label\":\"婚紗\",\"text\":\"婚紗\"}},{\"bounds\":{\"x\":1666,\"y\":843,\"width\":833,\"height\":843},\"action\":{\"type\":\"message\",\"label\":\"交通工具\",\"text\":\"交通工具\"}}]}"  


-- *上傳圖檔*  
curl -v -X POST https://api.line.me/v2/bot/richmenu/{richmenu-id}/content ^  
-H "Authorization: Bearer {access_token}" ^  
-H "Content-Type: image/png" ^  
-T menu.png  


-- *設定為default*  
-- 在postman上面執行, 用curl設定都會失敗  
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/{richmenu-id} ^  
-H "Authorization: Bearer {access_token}"  


-- *取得menu清單*  
curl -v -X Get https://api.line.me/v2/bot/richmenu/list ^  
-H "Authorization: Bearer {access_token}"   


-- *刪除選單*  
curl -v -X DELETE https://api.line.me/v2/bot/richmenu/{richmenu-id} ^  
-H "Authorization: Bearer {access_token}"   


-- *查看圖文選單*  
curl -v -X Get https://api.line.me/v2/bot/richmenu/{richmenu-id} ^  
-H "Authorization: Bearer {access_token}"  

-- *查看預設的圖文選單是哪組*  
curl -v -X GET https://api.line.me/v2/bot/user/all/richmenu ^  
-H "Authorization: Bearer {access_token}"   

## awake Heroku Idle dyno  
using https://cron-job.org/en/ setting crons job  