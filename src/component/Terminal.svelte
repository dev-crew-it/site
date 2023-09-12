<script>
  import { onMount } from "svelte";

  import chalk from "chalk";

  let green = chalk.hex("#50fa7b");
  let hight = chalk.hex("#ff79c6");
  let light_grey = chalk.hex("#6272a4");

  let termPrefix = `${green.bold("➜")} ${green.white.bold("~")}`;
  let prefix = `visitor@${green.bold("devcrew")}`;
  let aciiart = `                               ${prefix}
  ⠀⠀⠀⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⠀⠀⠀   
⠀⠀⢸⣿⣿⣿⣿⣦⣀⣀⣤⣤⣤⣤⣤⣤⣄⣠⣶⣿⣿⣿⣿⡇⠀⠀     ${hight.bold("Host")}: Italy
⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀     ${hight.bold("Kernel")}: Open Source Hakers
⠀⠀⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀     ${hight.bold("Shell")}: zsh 5.9
⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
⢠⣿⣿⣿⣿⣿⠿⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠿⣿⣿⣿⣿⣿⡄
⢸⣿⣿⣿⡟⠁⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠈⢻⣿⣿⣿⡇
⠘⣿⣿⣿⡇⠀⢠⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡄⠀⢸⣿⣿⣿⠃
⠀⢿⣿⣿⡇⠀⠀⠛⠟⠀⠀⠀⠀⠀⠀⠀⠀⠻⠛⠀⠀⢸⣿⣿⡟⠀
⠀⠀⠻⣿⣿⣆⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠟⠀⠀
⠀⠀⠀⠀⠙⠛⠿⣷⣶⣤⣤⣤⣤⣤⣤⣤⣤⣴⣶⠿⠛⠋⠀⠀⠀⠀
`;

  onMount(async () => {
    const { Terminal } = await import("xterm");
    const { FitAddon } = await import("xterm-addon-fit");

    const term = new Terminal({
      cursorBlink: true,
      fontSize: 22,
      fontFamily: "Ubuntu Mono, courier-new, courier, monospace",
      theme: {
        background: "#05050c",
        cursor: "#ff79c6",
      },
    });
    const fitAddon = new FitAddon();

    term.loadAddon(fitAddon);
    term.open(document.getElementById("terminal"));
    fitAddon.fit();

    const lines = aciiart.split(/\n/);
    lines.forEach((l) => term.write(light_grey.bold(l) + "\r\n"));

    term.writeln(`${termPrefix} ${light_grey("./a.out")}`);
    term.writeln(`${light_grey(`[1]    188801 IOT instruction  ./a.out`)}`);
    term.write(`${termPrefix} `);
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
    padding-left: 2em;
  }
  .xterm .xterm-viewport {
    /* see : https://github.com/xtermjs/xterm.js/issues/3564#issuecomment-1004417440 */
    width: initial !important;
  }
</style>
