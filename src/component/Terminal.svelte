<script>
  import { onMount } from "svelte";

  import chalk from "chalk";

  let green = chalk.hex("#50fa7b");
  let hight = chalk.hex("#ff79c6");
  let light_grey = chalk.hex("#6272a4");

  let termPrefix = `${green.bold("➜")} ${green.white.bold("~")}`;
  let prefix = `visitor@${green.bold("devcrew")}`;
  let aciiart = `
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
`;

  // Function to get responsive font size
  function getResponsiveFontSize() {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return 14; // Small mobile
      if (width <= 768) return 16; // Mobile/tablet
      if (width <= 1024) return 18; // Tablet/small desktop
      return 22; // Desktop
    }
    return 22; // Default for SSR
  }

  onMount(async () => {
    const { Terminal } = await import("xterm");
    const { FitAddon } = await import("xterm-addon-fit");

    const terminalElement = document.getElementById("terminal");
    if (!terminalElement) return;

    const term = new Terminal({
      cursorBlink: true,
      fontSize: getResponsiveFontSize(),
      fontFamily: "Ubuntu Mono, 'Courier New', courier, monospace",
      theme: {
        background: "#05050c",
        cursor: "#ff79c6",
      },
      scrollback: 1000,
      convertEol: true,
    });
    const fitAddon = new FitAddon();

    term.loadAddon(fitAddon);
    term.open(terminalElement);
    fitAddon.fit();

    // Function to render content
    const renderContent = () => {
      term.clear();
      const lines = aciiart.split(/\n/);
      lines.forEach((l) => term.write(light_grey.bold(l) + "\r\n"));

      term.writeln(`${termPrefix} ${light_grey("./a.out")}`);
      term.writeln(`${light_grey(`[1]    188801 IOT instruction  ./a.out`)}`);
      term.write(`${termPrefix} `);
    };

    // Handle window resize
    const handleResize = () => {
      setTimeout(() => {
        fitAddon.fit();
        // Update font size on resize
        term.options.fontSize = getResponsiveFontSize();
        // Re-render to ensure proper display
        renderContent();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Initial render
    renderContent();

    // Cleanup
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
    /* see : https://github.com/xtermjs/xterm.js/issues/3564#issuecomment-1004417440 */
    width: initial !important;
  }

  :global(.xterm .xterm-screen) {
    margin: 0 !important;
  }

  /* Ensure terminal adapts to container */
  :global(.xterm) {
    width: 100% !important;
    height: auto !important;
  }

  /* Improve terminal scrolling on mobile */
  @media (max-width: 768px) {
    :global(.xterm .xterm-viewport) {
      overflow-y: auto !important;
    }
  }
</style>
