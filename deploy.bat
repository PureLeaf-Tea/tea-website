@echo off
cd /d C:\Users\Administrator\Desktop\tea-website
git remote set-url origin https://PureLeaf-Tea:ghp_UwfMzFBkPtDSgOd5kbCAH4g8EYHADC2h1DsJ@github.com/PureLeaf-Tea/tea-website.git
git add .
git commit -m "Auto update: %date% %time%"
git push origin main 2>nul || git push origin master
echo Push finished! Cloudflare deploy in 1min
pause