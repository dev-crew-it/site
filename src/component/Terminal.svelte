<script>
  import { onMount } from "svelte";

  // Cross-platform color system that works in all environments
  const colors = {
    green: '#50fa7b',
    pink: '#ff79c6',
    blue: '#8be9fd',
    yellow: '#f1fa8c',
    grey: '#6272a4',
    white: '#f8f8f2'
  };

  // Terminal color codes - built at runtime for cross-platform compatibility
  let termColors;

  let termPrefix = `➜ ~`;
  let prefix = `visitor@devcrew`;

  let currentPage = "home";
  let term;
  let commandHistory = [];
  let historyIndex = -1;

  // Enhanced page content with better formatting
  const pages = {
    home: {
      content: `
     ╭──────────────────────────────────────────────╮
     │                                              │  ${prefix}
     │      ██████╗ ███████╗██╗   ██╗ ██████╗       │
     │      ██╔══██╗██╔════╝██║   ██║██╔════╝       │  [pink]Host:[/pink] Italy
     │      ██║  ██║█████╗  ██║   ██║██║            │  [pink]Kernel:[/pink] Open Source Hakers
     │      ██║  ██║██╔══╝  ╚██╗ ██╔╝██║            │  [pink]Shell:[/pink] zsh 5.9
     │      ██████╔╝███████╗ ╚████╔╝ ╚██████╗       │  [pink]Theme:[/pink] Terminal Dark
     │      ╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝       │
     │                                              │
     │    ┌─────────────────────────────────────┐   │
     │    │ Open Source Developer               │   │
     │    └─────────────────────────────────────┘   │
     │                                              │
     ╰──────────────────────────────────────────────╯

[yellow][bold]Available commands:[/bold][/yellow]
  [blue]./about[/blue]     - Learn more about me
  [blue]./projects[/blue]  - View my projects
  [blue]./skills[/blue]    - Technical skills
  [blue]./contact[/blue]   - Get in touch
  [blue]./blog[/blue]      - Read my blog
  [blue]help[/blue]        - Show this help
  [blue]clear[/blue]       - Clear terminal
  [blue]ls[/blue]          - List files
  [blue]whoami[/blue]      - Current user info
`,
      files: ["about", "projects", "skills", "contact", "blog", "README.md"]
    },
    about: {
      content: `
[pink][bold]=== ABOUT ME ===[/bold][/pink]

[green]Name:[/green] DevCrew Developer
[green]Location:[/green] Italy 🇮🇹
[green]Role:[/green] Open Source Hacker & Terminal Enthusiast

[yellow]Bio:[/yellow]
Passionate developer who lives and breathes in the terminal. I believe
that the command line is the most powerful interface ever created.
When I'm not coding, you'll find me contributing to open source
projects or optimizing my dotfiles.

[yellow]Philosophy:[/yellow]
"The terminal is not just a tool, it's a way of life. Every problem
has an elegant command-line solution."

[yellow]Current Focus:[/yellow]
• Building developer tools
• Contributing to open source
• Terminal productivity workflows
• Minimalist software design

[blue]Type [bold]cd ~[/bold] to go back home[/blue]
`,
      files: ["../"]
    },
    projects: {
      content: `
[pink][bold]=== PROJECTS ===[/bold][/pink]

[green][bold]1. Terminal Portfolio[/bold][/green] [grey](This site!)[/grey]
   [yellow]→[/yellow] Interactive terminal-based portfolio
   [yellow]→[/yellow] Built with Svelte + xterm.js
   [yellow]→[/yellow] Responsive design with terminal aesthetics

[green][bold]2. DevCrew CLI Tools[/bold][/green]
   [yellow]→[/yellow] Collection of productivity scripts
   [yellow]→[/yellow] Git workflow automation
   [yellow]→[/yellow] Development environment setup

[green][bold]3. Open Source Contributions[/bold][/green]
   [yellow]→[/yellow] Various repositories on GitHub
   [yellow]→[/yellow] Terminal-focused tools
   [yellow]→[/yellow] Developer productivity enhancements

[green][bold]4. Terminal Themes[/bold][/green]
   [yellow]→[/yellow] Custom color schemes
   [yellow]→[/yellow] Optimized for long coding sessions
   [yellow]→[/yellow] Dark mode focused

[blue]Type [bold]cd ~[/bold] to go back home[/blue]
`,
      files: ["../"]
    },
    skills: {
      content: `
[pink][bold]=== TECHNICAL SKILLS ===[/bold][/pink]

[green][bold]Languages:[/bold][/green]
  [blue]●[/blue] JavaScript/TypeScript  [yellow]████████████[/yellow] [green]Advanced[/green]
  [blue]●[/blue] Python                [yellow]██████████[/yellow]   [green]Advanced[/green]
  [blue]●[/blue] Rust                  [yellow]████████[/yellow]     [green]Intermediate[/green]
  [blue]●[/blue] Go                    [yellow]██████[/yellow]       [green]Intermediate[/green]
  [blue]●[/blue] Shell Scripting       [yellow]████████████[/yellow] [green]Expert[/green]

[green][bold]Frontend:[/bold][/green]
  [blue]●[/blue] Svelte/SvelteKit      [yellow]████████████[/yellow] [green]Advanced[/green]
  [blue]●[/blue] React                 [yellow]██████████[/yellow]   [green]Advanced[/green]
  [blue]●[/blue] CSS/SCSS              [yellow]████████████[/yellow] [green]Advanced[/green]
  [blue]●[/blue] Terminal UIs          [yellow]████████████[/yellow] [green]Expert[/green]

[green][bold]Backend & DevOps:[/bold][/green]
  [blue]●[/blue] Node.js               [yellow]████████████[/yellow] [green]Advanced[/green]
  [blue]●[/blue] Docker                [yellow]██████████[/yellow]   [green]Advanced[/green]
  [blue]●[/blue] Linux Administration  [yellow]████████████[/yellow] [green]Expert[/green]
  [blue]●[/blue] Git                   [yellow]████████████[/yellow] [green]Expert[/green]

[blue]Type [bold]cd ~[/bold] to go back home[/blue]
`,
      files: ["../"]
    },
    contact: {
      content: `
[pink][bold]=== CONTACT INFO ===[/bold][/pink]

[green][bold]Get in touch:[/bold][/green]

[blue]📧 Email:[/blue]    dev@devcrew.terminal
[blue]🐙 GitHub:[/blue]   github.com/devcrew
[blue]💼 LinkedIn:[/blue] linkedin.com/in/devcrew
[blue]🐦 Twitter:[/blue]  @devcrew_dev

[green][bold]Preferred communication:[/bold][/green]
[yellow]→[/yellow] Email for professional inquiries
[yellow]→[/yellow] GitHub for technical discussions
[yellow]→[/yellow] Terminal/CLI for everything else 😄

[green][bold]Open for:[/bold][/green]
[yellow]●[/yellow] Open source collaboration
[yellow]●[/yellow] Terminal tool development
[yellow]●[/yellow] Code reviews and feedback
[yellow]●[/yellow] Developer tool discussions

[grey]// Note: I respond faster to well-formatted emails[/grey]
[grey]// and GitHub issues than social media DMs[/grey]

[blue]Type [bold]cd ~[/bold] to go back home[/blue]
`,
      files: ["../"]
    },
    blog: {
      content: `
[pink][bold]=== RECENT BLOG POSTS ===[/bold][/pink]

[green][bold]1.[/bold][/green] [blue]Why I Live in the Terminal[/blue] [grey](2024-01-15)[/grey]
   A deep dive into terminal productivity and why GUI tools
   often slow down development workflows.

[green][bold]2.[/bold][/green] [blue]Building Terminal UIs with JavaScript[/blue] [grey](2024-01-10)[/grey]
   How to create interactive command-line interfaces using
   modern web technologies.

[green][bold]3.[/bold][/green] [blue]My Minimal Development Setup[/blue] [grey](2024-01-05)[/grey]
   The tools and configurations that power my daily
   development workflow.

[green][bold]4.[/bold][/green] [blue]Contributing to Open Source: A Terminal Approach[/blue] [grey](2023-12-28)[/grey]
   Using command-line tools to efficiently contribute to
   open source projects.

[yellow]→[/yellow] [blue]./blog/read <number>[/blue] [yellow]to read a specific post[/yellow]
[yellow]→[/yellow] [blue]./blog/all[/blue] [yellow]to see all posts[/yellow]

[blue]Type [bold]cd ~[/bold] to go back home[/blue]
`,
      files: ["../", "read", "all"]
    }
  };

  // Command definitions
  const commands = {
    help: () => pages.home.content,
    clear: () => "CLEAR",
    ls: () => {
      const files = pages[currentPage].files || [];
      return files.map(file => {
        if (file === "../") return `[blue][bold]../[/bold][/blue]`;
        if (file.includes(".")) return `[grey]${file}[/grey]`;
        return `[green][bold]${file}[/bold][/green]`;
      }).join("  ");
    },
    whoami: () => '[green]visitor@devcrew[/green]',
    pwd: () => `[blue]/home/visitor/${currentPage === "home" ? "" : currentPage}[/blue]`,
    "cd ~": () => {
      currentPage = "home";
      return pages.home.content;
    },
    "cd ..": () => {
      currentPage = "home";
      return pages.home.content;
    }
  };

  // Add navigation commands
  Object.keys(pages).forEach(page => {
    if (page !== "home") {
      commands[`./${page}`] = () => {
        currentPage = page;
        return pages[page].content;
      };
    }
  });

  function executeCommand(cmd) {
    cmd = cmd.trim();
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;

    if (commands[cmd]) {
      const result = commands[cmd]();
      if (result === "CLEAR") {
        term.clear();
        return;
      }
      return result;
    } else if (cmd === "") {
      return "";
    } else {
      return `[pink]zsh: command not found:[/pink] ${cmd}\n\n[yellow]Type [bold]help[/bold] for available commands[/yellow]`;
    }
  }

  // Cross-platform color processing function
  function processColors(text) {
    if (!text || !termColors) return text;

    return text
      .replace(/\[green\](.*?)\[\/green\]/g, termColors.green + '$1' + termColors.reset)
      .replace(/\[pink\](.*?)\[\/pink\]/g, termColors.pink + '$1' + termColors.reset)
      .replace(/\[blue\](.*?)\[\/blue\]/g, termColors.blue + '$1' + termColors.reset)
      .replace(/\[yellow\](.*?)\[\/yellow\]/g, termColors.yellow + '$1' + termColors.reset)
      .replace(/\[grey\](.*?)\[\/grey\]/g, termColors.grey + '$1' + termColors.reset)
      .replace(/\[white\](.*?)\[\/white\]/g, termColors.white + '$1' + termColors.reset)
      .replace(/\[bold\](.*?)\[\/bold\]/g, termColors.bold + '$1' + termColors.reset);
  }

  // Enhanced responsive font sizing for different desktop environments
  function getResponsiveFontSize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      // Adjust for high DPI displays (common on modern desktops)
      if (dpr > 1.5) {
        if (width <= 480) return 16;
        if (width <= 768) return 18;
        if (width <= 1024) return 20;
        if (width <= 1440) return 22;
        return 24;
      }

      // Standard DPI displays
      if (width <= 480) return 14;
      if (width <= 768) return 16;
      if (width <= 1024) return 18;
      if (width <= 1440) return 20;
      if (width <= 1920) return 22;
      return 24; // Ultra-wide displays
    }
    return 22;
  }

  onMount(async () => {
    const { Terminal } = await import("xterm");
    const { FitAddon } = await import("xterm-addon-fit");

    // Initialize cross-platform color codes at runtime
    const esc = String.fromCharCode(27);
    termColors = {
      green: esc + '[38;2;80;250;123m',    // RGB colors for better compatibility
      pink: esc + '[38;2;255;121;198m',
      blue: esc + '[38;2;139;233;253m',
      yellow: esc + '[38;2;241;250;140m',
      grey: esc + '[38;2;98;114;164m',
      white: esc + '[38;2;248;248;242m',
      bold: esc + '[1m',
      reset: esc + '[0m'
    };

    const terminalElement = document.getElementById("terminal");
    if (!terminalElement) return;

    // Enhanced terminal configuration for cross-platform compatibility
    term = new Terminal({
      cursorBlink: true,
      fontSize: getResponsiveFontSize(),
      fontFamily: "Ubuntu Mono, Consolas, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace",
      theme: {
        background: colors.background || "#05050c",
        cursor: colors.pink,
        foreground: colors.grey,
        selection: colors.grey + '40', // Semi-transparent selection
        selectionForeground: colors.white
      },
      scrollback: 2000, // Increased for better desktop experience
      convertEol: true,
      allowProposedApi: true, // Enable modern terminal features
      smoothScrollDuration: 50, // Smooth scrolling for better UX
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalElement);
    fitAddon.fit();

    let currentInput = "";
    let cursorPos = 0;

    function writePrompt() {
      const coloredPrompt = termColors.green + termColors.bold + '➜' + termColors.reset +
                           ' ' + termColors.green + termColors.white + termColors.bold + '~' + termColors.reset;
      term.write(`\r\n${coloredPrompt} `);
    }

    function renderInput() {
      const coloredPrompt = termColors.green + termColors.bold + '➜' + termColors.reset +
                           ' ' + termColors.green + termColors.white + termColors.bold + '~' + termColors.reset;
      term.write(`\r${coloredPrompt} ${currentInput}`);
      // Move cursor to correct position
      term.write(`\r${coloredPrompt} ${currentInput.substring(0, cursorPos)}`);
    }

    function displayContent(content) {
      const coloredContent = processColors(content);
      const lines = coloredContent.split('\n');
      lines.forEach(line => {
        term.writeln(line);
      });
    }

    // Display initial content
    displayContent(pages.home.content);
    writePrompt();

    // Enhanced keyboard handling for better desktop UX
    term.onKey(({ key, domEvent }) => {
      const ev = domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

      if (ev.keyCode === 13) { // Enter
        const result = executeCommand(currentInput);
        term.writeln("");
        if (result) {
          displayContent(result);
        }
        currentInput = "";
        cursorPos = 0;
        writePrompt();
      } else if (ev.keyCode === 8) { // Backspace
        if (cursorPos > 0) {
          currentInput = currentInput.slice(0, cursorPos - 1) + currentInput.slice(cursorPos);
          cursorPos--;
          renderInput();
        }
      } else if (ev.keyCode === 46) { // Delete key
        if (cursorPos < currentInput.length) {
          currentInput = currentInput.slice(0, cursorPos) + currentInput.slice(cursorPos + 1);
          renderInput();
        }
      } else if (ev.keyCode === 37) { // Left arrow
        if (cursorPos > 0) {
          cursorPos--;
          renderInput();
        }
      } else if (ev.keyCode === 39) { // Right arrow
        if (cursorPos < currentInput.length) {
          cursorPos++;
          renderInput();
        }
      } else if (ev.keyCode === 36) { // Home key
        cursorPos = 0;
        renderInput();
      } else if (ev.keyCode === 35) { // End key
        cursorPos = currentInput.length;
        renderInput();
      } else if (ev.keyCode === 38) { // Up arrow - command history
        if (historyIndex > 0) {
          historyIndex--;
          currentInput = commandHistory[historyIndex] || "";
          cursorPos = currentInput.length;
          renderInput();
        }
      } else if (ev.keyCode === 40) { // Down arrow - command history
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          currentInput = commandHistory[historyIndex] || "";
        } else {
          historyIndex = commandHistory.length;
          currentInput = "";
        }
        cursorPos = currentInput.length;
        renderInput();
      } else if (ev.ctrlKey && ev.keyCode === 67) { // Ctrl+C
        term.writeln("^C");
        currentInput = "";
        cursorPos = 0;
        writePrompt();
      } else if (ev.ctrlKey && ev.keyCode === 76) { // Ctrl+L
        term.clear();
        displayContent(pages.home.content);
        writePrompt();
      } else if (printable) {
        currentInput = currentInput.slice(0, cursorPos) + key + currentInput.slice(cursorPos);
        cursorPos++;
        renderInput();
      }
    });

    // Enhanced resize handling for different desktop environments
    const handleResize = () => {
      setTimeout(() => {
        fitAddon.fit();
        term.options.fontSize = getResponsiveFontSize();

        // Handle special cases for different desktop environments
        const { cols, rows } = term;
        if (cols < 80 && rows < 24) {
          // Compact mode for small windows
          term.options.fontSize = Math.max(12, getResponsiveFontSize() - 2);
        }
      }, 100);
    };

    // Listen for window and container changes
    window.addEventListener('resize', handleResize);

    // Handle fullscreen changes (common in desktop environments)
    document.addEventListener('fullscreenchange', handleResize);
    document.addEventListener('webkitfullscreenchange', handleResize);

    // Handle zoom changes
    window.addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.metaKey) {
        setTimeout(handleResize, 100);
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('fullscreenchange', handleResize);
      document.removeEventListener('webkitfullscreenchange', handleResize);
      term.dispose();
    };
  });
</script>

<div class="terminal-container">
  <div id="terminal" />
</div>

<style>
  .terminal-container {
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
    padding: 0 1rem;
    box-sizing: border-box;

    /* Enhanced for desktop environments */
    transition: all 0.2s ease;
    user-select: none; /* Prevent unwanted text selection around terminal */
  }

  /* Enhanced responsive design for all desktop environments */

  /* Ultra-wide displays (3440px+) */
  @media (min-width: 2560px) {
    .terminal-container {
      max-width: 2400px;
      margin: 0 auto;
      padding: 0 4rem;
    }
  }

  /* Large desktop displays (1920px-2559px) */
  @media (min-width: 1920px) and (max-width: 2559px) {
    .terminal-container {
      padding: 0 3rem;
    }
  }

  /* Standard desktop displays (1440px-1919px) */
  @media (min-width: 1440px) and (max-width: 1919px) {
    .terminal-container {
      padding: 0 2.5rem;
    }
  }

  /* Desktop styles (1024px-1439px) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    .terminal-container {
      padding: 0 2rem;
    }
  }

  /* Laptop styles (769px-1023px) */
  @media (min-width: 769px) and (max-width: 1023px) {
    .terminal-container {
      padding: 0 1.5rem;
    }
  }

  /* Tablet styles (481px-768px) */
  @media (min-width: 481px) and (max-width: 768px) {
    .terminal-container {
      padding: 0 1rem;
    }
  }

  /* Mobile styles (up to 480px) */
  @media (max-width: 480px) {
    .terminal-container {
      padding: 0 0.5rem;
    }
  }

  /* High DPI display adjustments */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .terminal-container {
      /* Better rendering on high DPI displays */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  /* Dark mode support for desktop environments */
  @media (prefers-color-scheme: dark) {
    .terminal-container {
      background-color: #05050c;
    }
  }

  /* Accessibility improvements for desktop users */
  @media (prefers-reduced-motion: reduce) {
    .terminal-container {
      transition: none;
    }
  }

  /* Focus management for keyboard navigation */
  .terminal-container:focus-within {
    outline: 2px solid #ff79c6;
    outline-offset: 2px;
  }

  /* Global terminal styling improvements */
  :global(.xterm .xterm-viewport) {
    width: initial !important;
    overflow-y: auto !important;
  }

  :global(.xterm .xterm-screen) {
    margin: 0 !important;
  }

  :global(.xterm) {
    width: 100% !important;
    height: auto !important;
  }

  /* Better scrollbar styling for desktop */
  :global(.xterm .xterm-viewport::-webkit-scrollbar) {
    width: 12px;
  }

  :global(.xterm .xterm-viewport::-webkit-scrollbar-track) {
    background: #05050c;
  }

  :global(.xterm .xterm-viewport::-webkit-scrollbar-thumb) {
    background: #6272a4;
    border-radius: 6px;
  }

  :global(.xterm .xterm-viewport::-webkit-scrollbar-thumb:hover) {
    background: #ff79c6;
  }

  /* Selection styling */
  :global(.xterm .xterm-selection div) {
    background-color: #6272a4 !important;
    opacity: 0.3 !important;
  }

  /* Cursor improvements for desktop */
  :global(.xterm .xterm-cursor-layer .xterm-cursor) {
    background-color: #ff79c6 !important;
  }
</style>
