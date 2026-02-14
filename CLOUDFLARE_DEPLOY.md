# Cloudflare Pages 部署指南

本文档记录如何将前端项目部署到 Cloudflare Pages，适用于 React/Vite 项目。

---

## 前置条件

1. 代码已推送到 GitHub 仓库
2. 拥有 Cloudflare 账号（免费注册）

---

## 部署步骤

### 第一步：准备 Git 仓库

```bash
# 在项目根目录执行
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库（替换用户名和仓库名）
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送代码
git push -u origin main
# 如果分支是 master，用：git push -u origin master
```

### 第二步：创建 Cloudflare Pages 项目

1. 访问 [dash.cloudflare.com](https://dash.cloudflare.com) 登录
2. 左侧菜单找到 **Pages** → 点击 **Create a project**
3. 选择 **Connect to Git**（连接到 Git）
4. 授权 GitHub 访问，选择要部署的仓库

### 第三步：配置构建设置

| 设置项 | 填写内容 |
|--------|----------|
| Project name | 你的项目名（自动生成 xxx.pages.dev 域名） |
| Production branch | `main` 或 `master`（与你推送的分支一致） |
| Framework preset | 选择 `Vite`（如果是 Vite 项目） |
| Build command | `cd app && npm install && npm run build` |
| Build output directory | `app/dist` |
| Root directory | 留空 |

> **注意**：如果你的项目不在 `app` 子目录，构建命令改为 `npm install && npm run build`，输出目录改为 `dist`

### 第四步：部署

点击 **Save and Deploy**，等待构建完成（约 1-2 分钟）

部署成功后，会获得一个 `https://你的项目名.pages.dev` 的免费域名。

---

## 常见问题

### 1. 分支推送失败
```
error: src refspec main does not match any
```
**解决**：检查本地分支名
```bash
git branch  # 查看当前分支
# 如果是 master，推送时用：git push -u origin master
```

### 2. 构建失败：找不到 package.json
**解决**：检查 Build command 是否包含正确的子目录路径
- 如果项目在根目录：`npm install && npm run build`
- 如果在 `app` 子目录：`cd app && npm install && npm run build`

### 3. 构建成功但页面空白
**解决**：检查 Build output directory 是否正确
- Vite 默认输出到 `dist`
- 如果项目在子目录，填 `app/dist`

### 4. 域名访问问题
- 无需备案，`.pages.dev` 域名可直接访问
- 国内访问速度较好（Cloudflare 有国内节点）

---

## 后续更新

代码推送到 GitHub 后，Cloudflare Pages 会自动重新部署：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

等待约 30 秒 - 1 分钟，网站自动更新。

---

## 绑定自定义域名（可选）

1. 在 Pages 项目设置中找到 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名（如 `yourdomain.com`）
4. 按提示在域名服务商处添加 DNS 记录

> 注意：使用自定义域名且面向国内用户时，需要备案

---

## 参考

- Cloudflare Pages 官方文档：https://developers.cloudflare.com/pages/
- 免费额度：无限带宽、无限请求、每月 500 次构建
