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
Settings -> Buildpacks -> add buildpacks
https://github.com/buyersight/heroku-google-application-credentials-buildpack.git

Settings ->
1. Create Config Vars key GOOGLE_CREDENTIALS and paste the content of service account credential JSON file as is.
2. Create a key under Config Vars GOOGLE_APPLICATION_CREDENTIALS and set a value as google-credentials.json.

Deploy to heroku
The script with generate a file called google-credentials.json which holds the key from the step #1 above.