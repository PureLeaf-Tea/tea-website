const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const TOKEN = "ghp_7Wkq0tBR1utQFeeQHLuArtTg0gL5v5t19UT6C";
const USER = "PureLeaf-Tea";
const REPO = "tea-website";
const PROJECT_DIR = __dirname;
const REMOTE = `https://${USER}:${TOKEN}@github.com/${USER}/${REPO}.git`;

function log(m) {
    console.log(m);
    fs.appendFileSync(path.join(PROJECT_DIR, "auto-deploy.log"), m + "\n");
}

function saveFile(p, c) {
    const fp = path.join(PROJECT_DIR, p);
    const d = path.dirname(fp);
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(fp, c, 'utf8');
    log("File saved: " + p);
}

function pushIt() {
    for (let i = 0; i < 5; i++) {
        try {
            execSync('git push origin main', { stdio: 'inherit', timeout: 300000 });
            return true;
        } catch {
            log("Retry " + (i+1) + "/5");
            try { execSync('timeout /t ' + Math.pow(2,i) + ' /nobreak', { stdio: 'ignore' }); } catch {}
        }
    }
    return false;
}

const args = process.argv.slice(2);
if (args.length < 2) { process.exit(1); }

try {
    process.chdir(PROJECT_DIR);
    execSync('git remote set-url origin ' + REMOTE, { stdio: 'ignore' });
    saveFile(args[0], Buffer.from(args[1], 'base64').toString('utf8'));
    execSync('git add "' + args[0] + '"', { stdio: 'ignore' });
    execSync('git commit -m "Deploy: ' + args[0] + '"', { stdio: 'ignore' });
    if (pushIt()) { log("Push successful"); }
    else { log("Push failed"); }
} catch (err) { log("Error: " + err.message); }