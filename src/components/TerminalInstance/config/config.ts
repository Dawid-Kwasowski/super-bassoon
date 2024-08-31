import { reactive } from "vue";
import { ITerminalOptions } from "@xterm/xterm";

const useTerminalConfig = () => {
  const configuration: ITerminalOptions = reactive({
    fontSize: 12,
    cursorStyle: "underline",
    cursorBlink: true,
    theme: {
      background: "#191414",
    },
  });

  return {
    configuration,
  };
};

export { useTerminalConfig };
