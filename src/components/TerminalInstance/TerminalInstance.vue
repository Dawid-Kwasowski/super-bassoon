<script setup lang="ts">
import { Terminal } from "@xterm/xterm";
import { spawn } from "tauri-pty";
import "@xterm/xterm/css/xterm.css";
import { onMounted } from "vue";
const term = new Terminal();

onMounted(() => {
  const terminal: HTMLElement = document.getElementById("terminal")!;

  term.open(terminal);
  term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");

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
