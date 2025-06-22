
# Playwright example instructions

## Installation

```bash
npm init -y
npm install --save-dev playwright @playwright/test typescript ts-node @types/node
npx playwright install // ※１
mkdir tests
```

> ※１）Linuxの場合(apt系)の場合で、
> ヘッドレスでブラウザを動かす場合は（ --whith-deps）をつけると依存ライブラリもaptでインストールしてくれるオプション。

```shell
npx playwright install --with-deps
```

>> Linuxで、dnf,yum（rpm系）の場合は手動でライブラリインストールが必要。
>> コンテナ内で動かす場合はImageに合わせてdokerfileに追加。

```bash
sudo dnf install -y \
  libXcomposite libXcursor libXdamage libXrandr libXss \
  gtk3 pango alsa-lib at-spi2-atk at-spi2-core cups-libs \
  libdrm libgbm libnss nss libxshmfence xorg-x11-server-Xvfb
```


## tsconfig.json 参考

```typescript
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "moduleResolution": "node",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["tests"]
}
```

## playwright.config.ts 参考

```typescript
import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'https://playwright.dev',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
});
```

## example test

```typescript
// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

```

## run test

- 実行できれば環境構築OK

  ```bash
  npx playwright test
  ```

## Directory structure

```shell



```