<script>
  import { onMount } from "svelte";

  import chalk from "chalk";

  let green = chalk.hex("#50fa7b");
  let hight = chalk.hex("#ff79c6");
  let light_grey = chalk.hex("#6272a4");
  let blue = chalk.hex("#8be9fd");
  let yellow = chalk.hex("#f1fa8c");

  let termPrefix = `${green.bold("➜")} ${green.white.bold("~")}`;
  let prefix = `visitor@${green.bold("devcrew")}`;

  let currentPage = "home";
  let term;
  let commandHistory = [];
  let historyIndex = -1;

  // Page content definitions
  const pages = {
    home: {
      content: `
     ╭──────────────────────────────────────────────╮
     │                                              │  ${prefix}
     │      ██████╗ ███████╗██╗   ██╗ ██████╗       │
     │      ██╔══██╗██╔════╝██║   ██║██╔════╝       │  ${hight.bold("Host")}: Italy
     │      ██║  ██║█████╗  ██║   ██║██║            │  ${hight.bold("Kernel")}: Open Source Hakers
     │      ██║  ██║██╔══╝  ╚██╗ ██╔╝██║            │  ${hight.bold("Shell")}: zsh 5.9
     │      ██████╔╝███████╗ ╚████╔╝ ╚██████╗       │  ${hight.bold("Theme")}: Terminal Dark
     │      ╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝       │
     │                                              │
     │    ┌─────────────────────────────────────┐   │
     │    │ Open Source Developer               │   │
     │    └─────────────────────────────────────┘   │
     │                                              │
     ╰──────────────────────────────────────────────╯

${yellow.bold("Available commands:")}
  ${blue("./about")}     - Learn more about me
  ${blue("./projects")}  - View my projects
  ${blue("./skills")}    - Technical skills
  ${blue("./contact")}   - Get in touch
  ${blue("./blog")}      - Read my blog
  ${blue("help")}        - Show this help
  ${blue("clear")}       - Clear terminal
  ${blue("ls")}          - List files
  ${blue("whoami")}      - Current user info
`,
      files: ["about", "projects", "skills", "contact", "blog", "README.md"]
    },
    about: {
      content: `
${hight.bold("=== ABOUT ME ===")}

${green("Name:")} DevCrew Developer
${green("Location:")} Italy 🇮🇹
${green("Role:")} Open Source Hacker & Terminal Enthusiast

${yellow("Bio:")}
Passionate developer who lives and breathes in the terminal. I believe
that the command line is the most powerful interface ever created.
When I'm not coding, you'll find me contributing to open source
projects or optimizing my dotfiles.

${yellow("Philosophy:")}
"The terminal is not just a tool, it's a way of life. Every problem
has an elegant command-line solution."

${yellow("Current Focus:")}
• Building developer tools
• Contributing to open source
• Terminal productivity workflows
• Minimalist software design

${blue("Type")} ${blue.bold("cd ~")} ${blue("to go back home")}
`,
      files: ["../"]
    },
    projects: {
      content: `
${hight.bold("=== PROJECTS ===")}

${green.bold("1. Terminal Portfolio")} ${light_grey("(This site!)")}
   ${yellow("→")} Interactive terminal-based portfolio
   ${yellow("→")} Built with Svelte + xterm.js
   ${yellow("→")} Responsive design with terminal aesthetics

${green.bold("2. DevCrew CLI Tools")}
   ${yellow("→")} Collection of productivity scripts
   ${yellow("→")} Git workflow automation
   ${yellow("→")} Development environment setup

${green.bold("3. Open Source Contributions")}
   ${yellow("→")} Various repositories on GitHub
   ${yellow("→")} Terminal-focused tools
   ${yellow("→")} Developer productivity enhancements

${green.bold("4. Terminal Themes")}
   ${yellow("→")} Custom color schemes
   ${yellow("→")} Optimized for long coding sessions
   ${yellow("→")} Dark mode focused

${blue("Type")} ${blue.bold("cd ~")} ${blue("to go back home")}
`,
      files: ["../"]
    },
    skills: {
      content: `
${hight.bold("=== TECHNICAL SKILLS ===")}

${green.bold("Languages:")}
  ${blue("●")} JavaScript/TypeScript  ${yellow("████████████")} ${green("Advanced")}
  ${blue("●")} Python                ${yellow("██████████")}   ${green("Advanced")}
  ${blue("●")} Rust                  ${yellow("████████")}     ${green("Intermediate")}
  ${blue("●")} Go                    ${yellow("██████")}       ${green("Intermediate")}
  ${blue("●")} Shell Scripting       ${yellow("████████████")} ${green("Expert")}

${green.bold("Frontend:")}
  ${blue("●")} Svelte/SvelteKit      ${yellow("████████████")} ${green("Advanced")}
  ${blue("●")} React                 ${yellow("██████████")}   ${green("Advanced")}
  ${blue("●")} CSS/SCSS              ${yellow("████████████")} ${green("Advanced")}
  ${blue("●")} Terminal UIs          ${yellow("████████████")} ${green("Expert")}

${green.bold("Backend & DevOps:")}
  ${blue("●")} Node.js               ${yellow("████████████")} ${green("Advanced")}
  ${blue("●")} Docker                ${yellow("██████████")}   ${green("Advanced")}
  ${blue("●")} Linux Administration  ${yellow("████████████")} ${green("Expert")}
  ${blue("●")} Git                   ${yellow("████████████")} ${green("Expert")}

${blue("Type")} ${blue.bold("cd ~")} ${blue("to go back home")}
`,
      files: ["../"]
    },
    contact: {
      content: `
${hight.bold("=== CONTACT INFO ===")}

${green.bold("Get in touch:")}

${blue("📧 Email:")}    dev@devcrew.terminal
${blue("🐙 GitHub:")}   github.com/devcrew
${blue("💼 LinkedIn:")} linkedin.com/in/devcrew
${blue("🐦 Twitter:")}  @devcrew_dev

${green.bold("Preferred communication:")}
${yellow("→")} Email for professional inquiries
${yellow("→")} GitHub for technical discussions
${yellow("→")} Terminal/CLI for everything else 😄

${green.bold("Open for:")}
${yellow("●")} Open source collaboration
${yellow("●")} Terminal tool development
${yellow("●")} Code reviews and feedback
${yellow("●")} Developer tool discussions

${light_grey("// Note: I respond faster to well-formatted emails")}
${light_grey("// and GitHub issues than social media DMs")}

${blue("Type")} ${blue.bold("cd ~")} ${blue("to go back home")}
`,
      files: ["../"]
    },
    blog: {
      content: `
${hight.bold("=== RECENT BLOG POSTS ===")}

${green.bold("1.")} ${blue("Why I Live in the Terminal")} ${light_grey("(2024-01-15)")}
   A deep dive into terminal productivity and why GUI tools
   often slow down development workflows.

${green.bold("2.")} ${blue("Building Terminal UIs with JavaScript")} ${light_grey("(2024-01-10)")}
   How to create interactive command-line interfaces using
   modern web technologies.

${green.bold("3.")} ${blue("My Minimal Development Setup")} ${light_grey("(2024-01-05)")}
   The tools and configurations that power my daily
   development workflow.

${green.bold("4.")} ${blue("Contributing to Open Source: A Terminal Approach")} ${light_grey("(2023-12-28)")}
   Using command-line tools to efficiently contribute to
   open source projects.

${yellow("→")} ${blue("./blog/read <number>")} ${yellow("to read a specific post")}
${yellow("→")} ${blue("./blog/all")} ${yellow("to see all posts")}

${blue("Type")} ${blue.bold("cd ~")} ${blue("to go back home")}
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
        if (file === "../") return blue.bold("../");
        if (file.includes(".")) return light_grey(file);
        return green.bold(file);
      }).join("  ");
    },
    whoami: () => `${green(prefix.replace(/\x1b\[[0-9;]*m/g, ''))}`,
    pwd: () => `${blue("/home/visitor/" + (currentPage === "home" ? "" : currentPage))}`,
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
      return `${hight("zsh: command not found:")} ${cmd}\n\n${yellow("Type")} ${blue.bold("help")} ${yellow("for available commands")}`;
    }
  }

  function getResponsiveFontSize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return 14;
      if (width <= 768) return 16;
      if (width <= 1024) return 18;
      return 22;
    }
    return 22;
  }

  onMount(async () => {
    const { Terminal } = await import("xterm");
    const { FitAddon } = await import("xterm-addon-fit");

    const terminalElement = document.getElementById("terminal");
    if (!terminalElement) return;

    term = new Terminal({
      cursorBlink: true,
      fontSize: getResponsiveFontSize(),
      fontFamily: "Ubuntu Mono, 'Courier New', courier, monospace",
      theme: {
        background: "#05050c",
        cursor: "#ff79c6",
        foreground: "#6272a4",
      },
      scrollback: 1000,
      convertEol: true,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalElement);
    fitAddon.fit();

    let currentInput = "";
    let cursorPos = 0;

    function writePrompt() {
      term.write(`\r\n${termPrefix} `);
    }

    function renderInput() {
      term.write(`\r${termPrefix} ${currentInput}`);
      // Move cursor to correct position
      const targetPos = termPrefix.length + 1 + cursorPos;
      term.write(`\r${termPrefix} ${currentInput.substring(0, cursorPos)}`);
    }

    function displayContent(content) {
      const lines = content.split('\n');
      lines.forEach(line => {
        term.writeln(line);
      });
    }

    // Display initial content
    displayContent(pages.home.content);
    writePrompt();

    // Handle keyboard input
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
      } else if (printable) {
        currentInput = currentInput.slice(0, cursorPos) + key + currentInput.slice(cursorPos);
        cursorPos++;
        renderInput();
      }
    });

    const handleResize = () => {
      setTimeout(() => {
        fitAddon.fit();
        term.options.fontSize = getResponsiveFontSize();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  });
</script>

<div class="terminal-container">
  <div id="terminal" />
</div>

<style>
  .terminal-container {
    /* this is important */
    overflow: hidden;
    max-width: 100vw;
    max-height: 100vh;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  /* Desktop styles */
  @media (min-width: 769px) {
    .terminal-container {
      padding-left: 2rem;
      padding-right: 1rem;
    }
  }

  /* Tablet styles */
  @media (max-width: 768px) and (min-width: 481px) {
    .terminal-container {
      padding: 0 1rem;
    }
  }

  /* Mobile styles */
  @media (max-width: 480px) {
    .terminal-container {
      padding: 0 0.5rem;
    }
  }

  :global(.xterm .xterm-viewport) {
    width: initial !important;
  }

  :global(.xterm .xterm-screen) {
    margin: 0 !important;
  }

  :global(.xterm) {
    width: 100% !important;
    height: auto !important;
  }

  @media (max-width: 768px) {
    :global(.xterm .xterm-viewport) {
      overflow-y: auto !important;
    }
  }
</style>
