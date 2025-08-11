# Pose Sketch - VRM Viewer

Next.js 15、TypeScript、Three.js、pixiv/three-vrmを使用したVRMファイル表示アプリケーションです。

## 特徴

- Next.js 15との完全な互換性
- TypeScriptによる型安全性
- Three.jsとpixiv/three-vrmを使用したVRMファイル表示
- SSR（サーバーサイドレンダリング）対応
- レスポンシブデザイン

## 技術スタック

- **Next.js 15**: Reactフレームワーク
- **TypeScript**: 型安全性
- **Three.js**: 3Dグラフィックスライブラリ
- **pixiv/three-vrm**: VRMファイルローダー
- **Tailwind CSS**: スタイリング

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ブラウザで `http://localhost:3000` を開く

## 使用方法

1. VRMファイルを `public/models/` ディレクトリに配置
2. `src/components/VRMViewer.tsx` の `modelPath` プロパティを更新
3. アプリケーションを起動してVRMモデルを表示

## ファイル構造

```
pose-sketch/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── VRMViewer.tsx
├── public/
│   └── models/
│       └── model.vrm
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 注意事項

- Next.js 15は比較的新しいバージョンですが、three.jsとpixiv/three-vrmとの互換性は良好です
- SSRの問題を回避するため、VRMViewerコンポーネントは動的インポートを使用しています
- VRMファイルは `public/models/` ディレクトリに配置する必要があります

## トラブルシューティング

### VRMファイルが表示されない場合

1. VRMファイルが正しいパスに配置されているか確認
2. ブラウザのコンソールでエラーメッセージを確認
3. VRMファイルが破損していないか確認

### TypeScriptエラーが発生する場合

1. `npm install` を再実行
2. `node_modules` を削除して `npm install` を実行
3. TypeScriptの設定ファイルを確認

## ライセンス

ISC
