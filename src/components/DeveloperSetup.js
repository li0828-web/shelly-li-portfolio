import React from 'react';

function DeveloperSetup() {
  return (
    <section className="section">
      <h2>Developer Setup</h2>
      
      <div className="setup-section">
        <h3>💻 VS Code Configuration</h3>
        <div className="setup-content">
          <p><strong>Essential Extensions:</strong></p>
          <ul>
            <li>ES7+ React/Redux/React-Native snippets</li>
            <li>Prettier - Code formatter</li>
            <li>ESLint</li>
            <li>GitLens - Git supercharged</li>
            <li>Docker</li>
            <li>Thunder Client - API testing</li>
            <li>Material Icon Theme</li>
          </ul>
          
          <p><strong>Settings.json Configuration:</strong></p>
          <pre className="code-block">
            {`{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "files.autoSave": "onFocusChange"
}`}
          </pre>
        </div>
      </div>
      
      <div className="setup-section">
        <h3>🖥️ Terminal Setup</h3>
        <div className="setup-content">
          <p><strong>Shell:</strong> Zsh with Oh My Zsh</p>
          <p><strong>Theme:</strong> Powerlevel10k for beautiful prompt</p>
          <p><strong>Terminal:</strong> Windows Terminal (or iTerm2 on Mac)</p>
          <p><strong>Useful Aliases:</strong></p>
          <pre className="code-block">
            {`alias gs='git status'
alias gp='git push'
alias gl='git log --oneline --graph'
alias npm-start='npm start'
alias docker-clean='docker system prune -a'
alias ll='ls -la'
alias ..='cd ..'`}
          </pre>
        </div>
      </div>
      
      <div className="setup-section">
        <h3>✍️ Preferred Editor Font</h3>
        <div className="setup-content">
          <p><strong>Primary Font:</strong> Fira Code</p>
          <p><strong>Features:</strong> Programming ligatures, excellent readability</p>
          <p><strong>Alternative Fonts:</strong> JetBrains Mono, Cascadia Code, SF Mono</p>
          <p><strong>Font Size:</strong> 14px (adjustable based on preference)</p>
          <p><strong>Line Height:</strong> 1.6 for better readability</p>
        </div>
      </div>
      
      <div className="setup-section">
        <h3>🔧 Development Tools</h3>
        <div className="setup-content">
          <ul>
            <li><strong>Git:</strong> Version control with Git Flow workflow</li>
            <li><strong>Docker:</strong> Containerization for consistent environments</li>
            <li><strong>Postman:</strong> API testing and documentation</li>
            <li><strong>Chrome DevTools:</strong> Debugging and performance optimization</li>
            <li><strong>React DevTools:</strong> React component debugging</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSetup;
