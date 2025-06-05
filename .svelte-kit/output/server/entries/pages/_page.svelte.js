import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Terminal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".terminal-container.svelte-1gedaed{overflow:hidden;max-width:100vw;max-height:100vh;padding:0 1rem;box-sizing:border-box;transition:all 0.2s ease;user-select:none}@media(min-width: 2560px){.terminal-container.svelte-1gedaed{max-width:2400px;margin:0 auto;padding:0 4rem}}@media(min-width: 1920px) and (max-width: 2559px){.terminal-container.svelte-1gedaed{padding:0 3rem}}@media(min-width: 1440px) and (max-width: 1919px){.terminal-container.svelte-1gedaed{padding:0 2.5rem}}@media(min-width: 1024px) and (max-width: 1439px){.terminal-container.svelte-1gedaed{padding:0 2rem}}@media(min-width: 769px) and (max-width: 1023px){.terminal-container.svelte-1gedaed{padding:0 1.5rem}}@media(min-width: 481px) and (max-width: 768px){.terminal-container.svelte-1gedaed{padding:0 1rem}}@media(max-width: 480px){.terminal-container.svelte-1gedaed{padding:0 0.5rem}}@media(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi){.terminal-container.svelte-1gedaed{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}}@media(prefers-color-scheme: dark){.terminal-container.svelte-1gedaed{background-color:#05050c}}@media(prefers-reduced-motion: reduce){.terminal-container.svelte-1gedaed{transition:none}}.terminal-container.svelte-1gedaed:focus-within{outline:2px solid #ff79c6;outline-offset:2px}.xterm .xterm-viewport{width:initial !important;overflow-y:auto !important}.xterm .xterm-screen{margin:0 !important}.xterm{width:100% !important;height:auto !important}.xterm .xterm-viewport::-webkit-scrollbar{width:12px}.xterm .xterm-viewport::-webkit-scrollbar-track{background:#05050c}.xterm .xterm-viewport::-webkit-scrollbar-thumb{background:#6272a4;border-radius:6px}.xterm .xterm-viewport::-webkit-scrollbar-thumb:hover{background:#ff79c6}.xterm .xterm-selection div{background-color:#6272a4 !important;opacity:0.3 !important}.xterm .xterm-cursor-layer .xterm-cursor{background-color:#ff79c6 !important}",
  map: null
};
const Terminal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let prefix = `visitor@devcrew`;
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
  Object.keys(pages).forEach((page) => {
  });
  $$result.css.add(css);
  return `<div class="terminal-container svelte-1gedaed" data-svelte-h="svelte-1tw294r"><div id="terminal"></div> </div>`;
});
const site_style = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Terminal, "Terminal").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
