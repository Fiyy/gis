# GIS Prefab House 專案

這是一個全端應用程式，由 Strapi 作為後端 CMS，Next.js 作為前端框架。

## 系統需求

在開始之前，請確保您的 Linux 系統上已安裝以下軟體：

*   **Git**: 用於複製專案倉庫。
*   **Node.js**: 建議版本 `v18.x` 或 `v20.x`。
*   **npm**: Node.js 的套件管理器 (通常會隨 Node.js 一起安裝)。

---

## 安裝與設定指南

請按照以下步驟在新的 Linux 機器上設定並執行此專案。

### 1. 複製專案倉庫

首先，使用 `git` 複製專案到您的本地機器：

```bash
git clone https://github.com/Fiyy/gis.git
cd gisprefabhouse
```

### 2. 設定後端 (Strapi)

後端應用程式位於 `backend` 目錄中。

a. **進入目錄並安裝依賴套件**：

```bash
cd backend
npm install
```

b. **設定環境變數**：

Strapi 需要一個 `.env` 檔案來存放資料庫設定和安全金鑰。您可以從範例檔案複製一份：

```bash
cp .env.example .env
```

接著，您**必須**編輯 `.env` 檔案，填入您的設定。一個基本的 SQLite 設定如下：

```env
# 資料庫設定 (預設使用 SQLite)
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=./data.db

# 安全金鑰 (請務必使用您自己產生的金鑰)
HOST=0.0.0.0
PORT=1337
APP_KEYS="your-app-key-1,your-app-key-2"
API_TOKEN_SALT="your-api-token-salt"
ADMIN_JWT_SECRET="your-admin-jwt-secret"
TRANSFER_TOKEN_SALT="your-transfer-token-salt"
JWT_SECRET="your-jwt-secret"
```

> **重要提示**: 請使用以下指令產生安全的隨機字串來替換上面 `..._SECRET` 和 `..._SALT` 的值：
> ```bash
> openssl rand -base64 32
> ```

c. **建立後端應用**：

這個指令會建立 Strapi 的管理介面。

```bash
npm run build
```

### 3. 設定前端 (Next.js)

前端應用程式位於 `startup-nextjs` 目錄中。

a. **進入目錄並安裝依賴套件**：

```bash
# 如果您目前在 backend 目錄，請先回到根目錄
cd ..

cd startup-nextjs
npm install
```

b. **設定環境變數**：

前端需要知道後端 API 的位址和存取權杖。請建立一個 `.env.local` 檔案：

```bash
touch .env.local
```

然後編輯這個檔案，加入以下內容：

```env
NEXT_PUBLIC_STRAPI_URL=http://127.0.0.1:1337
STRAPI_API_TOKEN=your_strapi_api_token
```

> **如何取得 `STRAPI_API_TOKEN`**:
> 1.  啟動後端 Strapi 應用程式 (參考下一步)。
> 2.  開啟瀏覽器進入 `http://127.0.0.1:1337/admin`。
> 3.  建立您的第一個管理員帳號。
> 4.  在左側選單進入 "Settings" -> "API Tokens"。
> 5.  點擊 "Create new API Token"，給它一個名稱，選擇 "Full access" 權限，然後儲存。
> 6.  **複製產生的權杖**，並貼到 `.env.local` 檔案中。這個權杖只會顯示一次。

---

## 執行專案

您需要開啟**兩個**終端機視窗來分別執行後端和前端。

### 終端機 1: 執行後端

```bash
cd /path/to/your/project/gisprefabhouse/backend
npm run develop
```

後端服務將會啟動在 `http://127.0.0.1:1337`。

### 終端機 2: 執行前端

```bash
cd /path/to/your/project/gisprefabhouse/startup-nextjs
npm run dev
```

前端開發伺服器將會啟動在 `http://localhost:3000`。

### 存取應用

*   **前端網站**: [http://localhost:3000](http://localhost:3000)
*   **後端管理介面**: [http://localhost:1337/admin](http://localhost:1337/admin)

現在，您的專案應該已經在新的 Linux 機器上成功執行了。
