cd  C:\site\
git pull live master


cd  C:\site\teamoneproject
npm run build

cd C:\site\teamoneproject\build
 Copy-Item * C:\inetpub\wwwroot\teamoneproject\ -Recurse -force -verbose

