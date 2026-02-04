# app 模块 - 马年3D壁纸生成器前端应用

> [根目录](../CLAUDE.md) > **app**

---

## 变更记录 (Changelog)

| 日期 | 版本 | 变更内容 |
|------|------|----------|
| 2026-02-04 | 1.0.0 | 初始文档生成 |

---

## 模块职责

本模块是 **3D Horse Chinese** 项目的前端应用，基于 Vite + React + TypeScript 构建。核心功能是使用 HTML5 Canvas API 动态生成基于色立体错觉（Chromostereopsis）原理的裸眼3D手机壁纸。

### 核心功能

1. **3D壁纸生成** - 使用Canvas绘制前后景错位文字+马图案
2. **祝福语随机切换** - 200+马年祝福语库
3. **马图案展示** - 50款AI生成传统风格骏马图案
4. **历史记录管理** - 保存最近生成的5张壁纸
5. **一键下载** - 生成1080×1920高清PNG

---

## 入口与启动

### 应用入口
- **文件**: `src/main.tsx`
- **根组件**: `src/App.tsx`
- **HTML模板**: `index.html`

### 启动命令
```bash
npm run dev      # 开发服务器
npm run build    # 生产构建
npm run preview  # 预览构建结果
```

---

## 对外接口

### 核心Hook: `useHorseYear3D`

**文件**: `src/hooks/useHorseYear3D.ts`

```typescript
function useHorseYear3D(): {
  currentPhrase: HorsePhrase;           // 当前祝福语
  currentHorseImage: string;            // 当前马图案路径
  canvasRef: RefObject<HTMLCanvasElement>;
  generatedImages: GeneratedImage[];    // 历史记录
  isGenerating: boolean;                // 生成状态
  canvasSize: { width: 1080, height: 1920 };
  generateRandom: () => void;           // 随机生成
  generateImage: () => GeneratedImage | null;
  downloadImage: (id: string) => void;  // 下载历史图片
  downloadCurrent: () => void;          // 下载当前图片
  deleteImage: (id: string) => void;    // 删除历史图片
  renderCanvas: () => string | null;    // 渲染Canvas
}
```

### 数据接口: `horsePhrases`

**文件**: `src/data/horsePhrases.ts`

```typescript
interface HorsePhrase {
  foreground: string;  // 前景主文字（2-4字）
  background: string;  // 后景辅助文字
}

// 导出函数
getRandomPhrase(): HorsePhrase;
getRandomHorseImage(): string;
getAllHorseImages(): string[];
```

### 类型定义

**文件**: `src/types/index.ts`

```typescript
interface Stereo3DConfig {
  foregroundText: string;
  backgroundText: string;
  foregroundColor: string;  // 默认: #ff0192 (玫红)
  backgroundColor: string;  // 默认: #00009b (深蓝)
  middleColor: string;      // 默认: #0500fc (标准蓝)
  fontSize: number;
  fontFamily: string;
  blurAmount: number;       // 后景模糊度
  shadowOffset: number;     // 前景投影偏移
  canvasWidth: number;      // 1080
  canvasHeight: number;     // 1920
}

interface GeneratedImage {
  id: string;
  dataUrl: string;
  config: Stereo3DConfig;
  createdAt: number;
}
```

---

## 关键依赖与配置

### 生产依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| react | ^19.2.0 | UI框架 |
| react-dom | ^19.2.0 | DOM渲染 |
| @radix-ui/* | ^1.x | 无头UI组件基座 |
| tailwindcss | ^3.4.19 | CSS框架 |
| lucide-react | ^0.562.0 | 图标库 |
| sonner | ^2.0.7 | Toast通知 |
| zod | ^4.3.5 | 数据校验 |

### 开发依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| vite | ^7.2.4 | 构建工具 |
| typescript | ~5.9.3 | 类型系统 |
| eslint | ^9.39.1 | 代码检查 |
| @vitejs/plugin-react | ^5.1.1 | React插件 |

### 配置文件

- **`vite.config.ts`** - Vite配置，含路径别名 `@/`
- **`tsconfig.json`** - TypeScript项目引用配置
- **`tailwind.config.js`** - Tailwind主题扩展
- **`eslint.config.js`** - ESLint规则配置
- **`components.json`** - shadcn/ui配置

---

## 数据模型

### 祝福语分类结构

**文件**: `src/data/horsePhrases.ts`

共200个祝福语，分为13个类别：

| 分类 | 数量 | 示例 |
|------|------|------|
| 经典四字成语 | 30 | 马到成功、龙马精神 |
| 新年祝福 | 25 | 新春快乐、恭喜发财 |
| 事业财运 | 25 | 财源滚滚、生意兴隆 |
| 马上系列 | 20 | 马上有钱、马上有福 |
| 爱情婚姻 | 15 | 百年好合、永结同心 |
| 学业进步 | 15 | 学业有成、金榜题名 |
| 家庭幸福 | 15 | 家和万事兴、天伦之乐 |
| 健康平安 | 15 | 身体健康、平安喜乐 |
| 励志向上 | 15 | 乘风破浪、勇往直前 |
| 现代流行语 | 15 | 2026暴富、好运爆棚 |

### 马图案资源

**路径**: `public/horse-*.png` (50张)

风格涵盖：
- 中国传统剪纸艺术
- 中国传统年画风格
- 中国传统皮影戏风格
- 中国水墨画风格
- 中国传统刺绣风格
- 金箔烫金风格
- 中国传统木雕风格
- 唐卡艺术风格
- 中国传统陶瓷风格
- 现代国潮插画风格
- 中国传统漆器风格
- 中国传统玉雕风格
- 中国传统青铜器风格
- 中国传统壁画风格
- 中国传统织锦风格

---

## 测试与质量

### 当前状态
- **单元测试**: 未配置
- **组件测试**: 未配置
- **E2E测试**: 未配置

### 建议添加
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### 代码检查
```bash
npm run lint  # ESLint检查
```

---

## 常见问题 (FAQ)

### Q: 如何修改3D效果的强度？
A: 编辑 `src/hooks/useHorseYear3D.ts` 中的 `EFFECTS` 常量，调整 `blurAmount`（模糊度）和 `shadowOffset`（投影偏移）。

### Q: 如何添加新的祝福语？
A: 在 `src/data/horsePhrases.ts` 的 `horsePhrases` 数组中添加新对象：
```typescript
{ foreground: '新祝福语', background: '辅助说明\n第二行' }
```

### Q: 如何更换配色方案？
A: 修改 `src/hooks/useHorseYear3D.ts` 中的 `COLORS` 常量：
```typescript
const COLORS = {
  foreground: '#ff0192',  // 前景色
  background: '#00009b',  // 后景色
  middle: '#0500fc',      // 中间色
};
```

### Q: Canvas尺寸是多少？
A: 固定为 1080×1920（9:16手机壁纸比例），定义在 `useHorseYear3D.ts` 的 `MOBILE_WIDTH` 和 `MOBILE_HEIGHT`。

---

## 相关文件清单

### 核心文件
| 文件路径 | 说明 |
|----------|------|
| `src/main.tsx` | React应用入口 |
| `src/App.tsx` | 根组件，页面布局 |
| `src/hooks/useHorseYear3D.ts` | 核心3D渲染Hook |
| `src/hooks/useStereo3D.ts` | 通用3D效果Hook |
| `src/hooks/use-mobile.ts` | 移动端检测Hook |
| `src/data/horsePhrases.ts` | 祝福语与马图案数据 |
| `src/types/index.ts` | TypeScript类型定义 |
| `src/lib/utils.ts` | 工具函数（cn合并） |

### Section组件
| 文件路径 | 说明 |
|----------|------|
| `src/sections/HorsePreview.tsx` | 主预览区域（Canvas+控制按钮） |
| `src/sections/HorseGallery.tsx` | 历史壁纸图库 |
| `src/sections/HorseInfo.tsx` | 3D原理说明Accordion |
| `src/sections/Header.tsx` | 页面头部（未使用） |

### UI组件（部分）
| 文件路径 | 说明 |
|----------|------|
| `src/components/ui/button.tsx` | 按钮组件 |
| `src/components/ui/card.tsx` | 卡片组件 |
| `src/components/ui/accordion.tsx` | 手风琴组件 |
| `src/components/ui/sonner.tsx` | Toast通知组件 |

### 配置文件
| 文件路径 | 说明 |
|----------|------|
| `package.json` | 项目依赖与脚本 |
| `vite.config.ts` | Vite构建配置 |
| `tsconfig.json` | TypeScript配置 |
| `tsconfig.app.json` | 应用TS配置 |
| `tsconfig.node.json` | NodeTS配置 |
| `tailwind.config.js` | TailwindCSS配置 |
| `postcss.config.js` | PostCSS配置 |
| `eslint.config.js` | ESLint配置 |
| `components.json` | shadcn/ui配置 |
| `index.html` | HTML入口模板 |

### 静态资源
| 文件路径 | 说明 |
|----------|------|
| `public/horse-*.png` | 50张马图案（horse-1.png ~ horse-50.png） |
| `public/horses/prompts.txt` | AI生成马图案的提示词 |

---

*文档生成时间: 2026-02-04*
