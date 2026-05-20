const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ========== 你的仓库信息 ==========
const TOKEN = "ghp_UwfMzFBkPtDSgOd5kbCAH4g8EYHADC2h1DsJ";
const USER = "PureLeaf-Tea";
const REPO = "tea-website";
const PROJECT_DIR = __dirname; // 当前脚本所在目录即项目目录
// ==================================

const REMOTE = `https://${USER}:${TOKEN}@github.com/${USER}/${REPO}.git`;

// 获取命令行参数：node auto-update.js <文件名> <内容字符串>
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('用法: node auto-update.js <文件路径> <内容>');
  console.error('示例: node auto-update.js tea-detail/new-tea.html "<html>...</html>"');
  process.exit(1);
}

const filePath = args[0];        // 相对于项目目录的路径，如 tea-detail/longjing.html
const content = args[1];         // AI 生成的内容

// 1. 保存文件
const fullPath = path.join(PROJECT_DIR, filePath);
const dir = path.dirname(fullPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(fullPath, content, 'utf8');
console.log(`✅ 文件已保存：${filePath}`);

// 2. Git 推送
try {
  execSync(`git remote set-url origin ${REMOTE}`, { stdio: 'ignore' });
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "自动添加产品页面：${filePath}"`, { stdio: 'inherit' });
  try {
    execSync('git push origin main', { stdio: 'inherit' });
  } catch {
    execSync('git push origin master', { stdio: 'inherit' });
  }
  console.log('🚀 推送成功，Cloudflare 1分钟内自动上线');
} catch (err) {
  console.error('❌ Git 推送失败:', err.message);
}