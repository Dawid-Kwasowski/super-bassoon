<script setup lang="ts">
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { spawn } from "tauri-pty";
import "@xterm/xterm/css/xterm.css";
import { onMounted } from "vue";
import { useTerminalConfig } from "./config/config.ts";

const { configuration } = useTerminalConfig();

const term = new Terminal();

term.options = { ...configuration };
onMounted(() => {
  const terminal: HTMLElement = document.getElementById("terminal")!;
  const fitAddon = new FitAddon();

  term.loadAddon(fitAddon);
  term.open(terminal);
  fitAddon.fit();

  window.onresize = function () {
    fitAddon.fit();
  };

  const pty = spawn(
    "/bin/zsh",
    [
      /* args */
    ],
    {
      cols: term.cols,
      rows: term.rows,
    },
  );

  pty.onData((data) => term.write(data));
  term.onData((data) => pty.write(data));
});
</script>

<template>
  <div id="terminal"></div>
</template>
