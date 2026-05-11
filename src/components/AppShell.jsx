import { useMemo, useState } from 'react';
import { Brain, ChevronRight, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { moduleById, modules, navigation, toneStyles } from '../data/knowledgeBase';
import { useTheme } from './themeContext';

function NavItem({ module, active, onClick }) {
  const style = toneStyles[module.tone] || toneStyles.indigo;

  return (
    <button
      className={`group flex w-full items-start gap-3 rounded px-3 py-2 text-left transition ${
        active ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-foreground'
      }`}
      onClick={onClick}
      type="button"
    >
      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${active ? 'bg-primary-foreground' : style.soft}`} />
      <span className="min-w-0">
        <span className="block truncate text-sm font-medium">{module.title}</span>
        <span className={`mt-0.5 block truncate text-[11px] ${active ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{module.eyebrow}</span>
      </span>
    </button>
  );
}

function Sidebar({ activeId, onActiveChange, onClose }) {
  const [query, setQuery] = useState('');

  const filteredModules = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return [];
    }

    return modules.filter((item) => {
      const haystack = [item.title, item.eyebrow, item.subtitle, ...item.summaryCards.map((card) => `${card.title} ${card.text}`)]
        .join(' ')
        .toLowerCase();

      return haystack.includes(keyword);
    });
  }, [query]);

  function selectModule(id) {
    onActiveChange(id);
    onClose();
  }

  return (
    <aside className="flex h-full w-80 flex-col border-r border-border bg-card">
      <div className="border-b border-border p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold leading-tight text-foreground">Second Brain</div>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Knowledge OS</div>
            </div>
          </div>
          <button className="rounded p-2 text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden" onClick={onClose} type="button" aria-label="关闭导航">
            <X className="h-5 w-5" />
          </button>
        </div>

        <label className="mt-5 flex items-center gap-2 rounded border border-border bg-background px-3 py-2 text-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            className="min-w-0 flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索模块"
            type="search"
            value={query}
          />
        </label>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        {query.trim() ? (
          <div className="space-y-1">
            <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">搜索结果</div>
            {filteredModules.map((item) => (
              <NavItem key={item.id} active={activeId === item.id} module={item} onClick={() => selectModule(item.id)} />
            ))}
            {filteredModules.length === 0 ? <div className="px-3 py-8 text-sm text-muted-foreground">没有找到匹配模块。</div> : null}
          </div>
        ) : (
          <div className="space-y-6">
            {navigation.map((group) => (
              <div key={group.label}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{group.label}</div>
                <div className="space-y-1">
                  {group.items.map((id) => (
                    <NavItem key={id} active={activeId === id} module={moduleById[id]} onClick={() => selectModule(id)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export function AppShell({ activeId, children, onActiveChange }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeModule = moduleById[activeId];

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <div className="hidden lg:block">
        <Sidebar activeId={activeId} onActiveChange={onActiveChange} onClose={() => setSidebarOpen(false)} />
      </div>

      {sidebarOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} type="button" aria-label="关闭导航遮罩" />
          <div className="relative z-10 h-full">
            <Sidebar activeId={activeId} onActiveChange={onActiveChange} onClose={() => setSidebarOpen(false)} />
          </div>
        </div>
      ) : null}

      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-card/95 px-4 backdrop-blur sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button className="rounded p-2 text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden" onClick={() => setSidebarOpen(true)} type="button" aria-label="打开导航">
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
              <span className="hidden font-medium sm:inline">百科全书</span>
              <ChevronRight className="hidden h-3.5 w-3.5 sm:inline" />
              <span className="truncate font-semibold text-foreground">{activeModule.title}</span>
            </div>
          </div>

          <button className="rounded border border-border bg-background p-2 text-muted-foreground transition hover:bg-accent hover:text-foreground" onClick={toggleTheme} type="button" aria-label="切换主题">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
