import{s as I,n as v,o as x}from"../chunks/scheduler.e108d1fd.js";import{S as A,i as D,g as R,h as M,y as j,k as H,a as z,f as G,r as K,u as B,v as N,d as F,t as U,w as V}from"../chunks/index.0719bd3d.js";import{_ as L}from"../chunks/preload-helper.a4192956.js";function J(u){let l,e='<div id="terminal"></div>';return{c(){l=R("div"),l.innerHTML=e,this.h()},l(r){l=M(r,"DIV",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-1tw294r"&&(l.innerHTML=e),this.h()},h(){H(l,"class","terminal-container svelte-1gedaed")},m(r,c){z(r,l,c)},p:v,i:v,o:v,d(r){r&&G(l)}}}function _(){if(typeof window<"u"){const u=window.innerWidth;return(window.devicePixelRatio||1)>1.5?u<=480?16:u<=768?18:u<=1024?20:u<=1440?22:24:u<=480?14:u<=768?16:u<=1024?18:u<=1440?20:u<=1920?22:24}return 22}function W(u){const l={green:"#50fa7b",pink:"#ff79c6",blue:"#8be9fd",yellow:"#f1fa8c",grey:"#6272a4",white:"#f8f8f2"};let e,r="visitor@devcrew",c="home",a,p=[],y=-1;const m={home:{content:`
     ╭──────────────────────────────────────────────╮
     │                                              │  ${r}
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
`,files:["about","projects","skills","contact","blog","README.md"]},about:{content:`
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
`,files:["../"]},projects:{content:`
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
`,files:["../"]},skills:{content:`
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
`,files:["../"]},contact:{content:`
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
`,files:["../"]},blog:{content:`
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
`,files:["../","read","all"]}},k={help:()=>m.home.content,clear:()=>"CLEAR",ls:()=>(m[c].files||[]).map(d=>d==="../"?"[blue][bold]../[/bold][/blue]":d.includes(".")?`[grey]${d}[/grey]`:`[green][bold]${d}[/bold][/green]`).join("  "),whoami:()=>"[green]visitor@devcrew[/green]",pwd:()=>`[blue]/home/visitor/${c==="home"?"":c}[/blue]`,"cd ~":()=>(c="home",m.home.content),"cd ..":()=>(c="home",m.home.content)};Object.keys(m).forEach(t=>{t!=="home"&&(k[`./${t}`]=()=>(c=t,m[t].content))});function O(t){if(t=t.trim(),p.push(t),y=p.length,k[t]){const d=k[t]();if(d==="CLEAR"){a.clear();return}return d}else return t===""?"":`[pink]zsh: command not found:[/pink] ${t}

[yellow]Type [bold]help[/bold] for available commands[/yellow]`}function P(t){return!t||!e?t:t.replace(/\[green\](.*?)\[\/green\]/g,e.green+"$1"+e.reset).replace(/\[pink\](.*?)\[\/pink\]/g,e.pink+"$1"+e.reset).replace(/\[blue\](.*?)\[\/blue\]/g,e.blue+"$1"+e.reset).replace(/\[yellow\](.*?)\[\/yellow\]/g,e.yellow+"$1"+e.reset).replace(/\[grey\](.*?)\[\/grey\]/g,e.grey+"$1"+e.reset).replace(/\[white\](.*?)\[\/white\]/g,e.white+"$1"+e.reset).replace(/\[bold\](.*?)\[\/bold\]/g,e.bold+"$1"+e.reset)}return x(async()=>{const{Terminal:t}=await L(()=>import("../chunks/xterm.87a90594.js").then(i=>i.x),["../chunks/xterm.87a90594.js","../chunks/_commonjsHelpers.39b5b250.js"],import.meta.url),{FitAddon:d}=await L(()=>import("../chunks/xterm-addon-fit.eb7e4088.js").then(i=>i.x),["../chunks/xterm-addon-fit.eb7e4088.js","../chunks/_commonjsHelpers.39b5b250.js"],import.meta.url),g=String.fromCharCode(27);e={green:g+"[38;2;80;250;123m",pink:g+"[38;2;255;121;198m",blue:g+"[38;2;139;233;253m",yellow:g+"[38;2;241;250;140m",grey:g+"[38;2;98;114;164m",white:g+"[38;2;248;248;242m",bold:g+"[1m",reset:g+"[0m"};const E=document.getElementById("terminal");if(!E)return;a=new t({cursorBlink:!0,fontSize:_(),fontFamily:"Ubuntu Mono, Consolas, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace",theme:{background:l.background||"#05050c",cursor:l.pink,foreground:l.grey,selection:l.grey+"40",selectionForeground:l.white},scrollback:2e3,convertEol:!0,allowProposedApi:!0,smoothScrollDuration:50});const C=new d;a.loadAddon(C),a.open(E),C.fit();let o="",n=0;function f(){const i=e.green+e.bold+"➜"+e.reset+" "+e.green+e.white+e.bold+"~"+e.reset;a.write(`\r
${i} `)}function b(){const i=e.green+e.bold+"➜"+e.reset+" "+e.green+e.white+e.bold+"~"+e.reset;a.write(`\r${i} ${o}`),a.write(`\r${i} ${o.substring(0,n)}`)}function T(i){P(i).split(`
`).forEach(S=>{a.writeln(S)})}T(m.home.content),f(),a.onKey(({key:i,domEvent:h})=>{const s=h,S=!s.altKey&&!s.ctrlKey&&!s.metaKey;if(s.keyCode===13){const $=O(o);a.writeln(""),$&&T($),o="",n=0,f()}else s.keyCode===8?n>0&&(o=o.slice(0,n-1)+o.slice(n),n--,b()):s.keyCode===46?n<o.length&&(o=o.slice(0,n)+o.slice(n+1),b()):s.keyCode===37?n>0&&(n--,b()):s.keyCode===39?n<o.length&&(n++,b()):s.keyCode===36?(n=0,b()):s.keyCode===35?(n=o.length,b()):s.keyCode===38?y>0&&(y--,o=p[y]||"",n=o.length,b()):s.keyCode===40?(y<p.length-1?(y++,o=p[y]||""):(y=p.length,o=""),n=o.length,b()):s.ctrlKey&&s.keyCode===67?(a.writeln("^C"),o="",n=0,f()):s.ctrlKey&&s.keyCode===76?(a.clear(),T(m.home.content),f()):S&&(o=o.slice(0,n)+i+o.slice(n),n++,b())});const w=()=>{setTimeout(()=>{C.fit(),a.options.fontSize=_();const{cols:i,rows:h}=a;i<80&&h<24&&(a.options.fontSize=Math.max(12,_()-2))},100)};return window.addEventListener("resize",w),document.addEventListener("fullscreenchange",w),document.addEventListener("webkitfullscreenchange",w),window.addEventListener("wheel",i=>{(i.ctrlKey||i.metaKey)&&setTimeout(w,100)}),()=>{window.removeEventListener("resize",w),document.removeEventListener("fullscreenchange",w),document.removeEventListener("webkitfullscreenchange",w),a.dispose()}}),[]}class q extends A{constructor(l){super(),D(this,l,W,J,I,{})}}function Q(u){let l,e;return l=new q({}),{c(){K(l.$$.fragment)},l(r){B(l.$$.fragment,r)},m(r,c){N(l,r,c),e=!0},p:v,i(r){e||(F(l.$$.fragment,r),e=!0)},o(r){U(l.$$.fragment,r),e=!1},d(r){V(l,r)}}}class ee extends A{constructor(l){super(),D(this,l,null,Q,I,{})}}export{ee as component};
