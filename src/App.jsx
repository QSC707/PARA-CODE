import { useState } from 'react';
import { AppShell } from './components/AppShell';
import { SectionView } from './components/SectionView';
import { ThemeProvider } from './components/ThemeProvider';
import { moduleById } from './data/knowledgeBase';

function SecondBrainApp() {
  const [activeId, setActiveId] = useState('overview');
  const activeModule = moduleById[activeId] || moduleById.overview;

  return (
    <AppShell activeId={activeModule.id} onActiveChange={setActiveId}>
      <SectionView module={activeModule} />
    </AppShell>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SecondBrainApp />
    </ThemeProvider>
  );
}
