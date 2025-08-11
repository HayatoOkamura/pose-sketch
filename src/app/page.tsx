'use client';

import dynamic from 'next/dynamic';

// VRMViewerを動的インポート（SSRを無効化）
const VRMViewer = dynamic(() => import('../components/VRMViewer'), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>VRM Viewer</h1>
        <p style={{ color: '#666' }}>Loading 3D viewer...</p>
      </div>
    </div>
  ),
});

export default function Home() {
  return <VRMViewer />;
}
