import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <a href="https://github.com/urstrulyanushesh" target="_blank" rel="noreferrer" className="sidebar-icon" title="GitHub">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
    </a>
    <a href="https://www.figma.com/files/team/1511042129732890832/recents-and-sharing/recently-viewed?fuid=1511042125425998578" target="_blank" rel="noreferrer" className="sidebar-icon" title="Figma">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M15.332 8.668a3.333 3.333 0 000-6.663H8.668a3.333 3.333 0 000 6.663 3.333 3.333 0 000 6.665 3.333 3.333 0 103.332 3.332V8.668h3.332z"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/anusheshtharu/" target="_blank" rel="noreferrer" className="sidebar-icon" title="LinkedIn">
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM3.54 20.45H7.1V8.99H3.54v11.46zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
    </a>
  </div>
);

export default Sidebar;
