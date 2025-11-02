import useOrientation from "@/hooks/useOrientation";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

type Props = {
  initialLatex?: string;
  onChange?: (latex: string) => void;
  onCursorChange?: (cursor: any) => void;
};

export type MathQuillEditorRef = {
  insert: (val: string) => void;
  keystroke: (key: string) => void;
  clear: () => void;
  moveToStart: () => void;
  moveToEnd: () => void;
  focus: () => void;
  moveLeft: (steps?: number) => void;
  moveRight: (steps?: number) => void;
  deleteLeft: () => void;
  setCursor: (pos: { fromEnd?: number; fromStart?: number }) => void;
  moveUp: (steps?: number) => void;
  moveDown: (steps?: number) => void;
};

const MathQuillEditor = forwardRef<MathQuillEditorRef, Props>(
  ({ initialLatex = "", onChange }, ref) => {
    const webRef = useRef<WebView>(null);
    const { isLandscape } = useOrientation();
    const latexFontSize = isLandscape ? `2em` : `3.5em`;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.css" />
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <style>
          body { margin: 0; padding: 10px; height:60px; }
          #editor {
            border: none;
            font-size:${latexFontSize};
            font-weight:400;
            font-family:xenera, sans-serif;
            font-style:normal;
            width:100%;
          }
        </style>
      </head>
      <body>
        <span id="editor"></span>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.min.js"></script>
        <script>
          const MQ = MathQuill.getInterface(2);
          const editor = document.getElementById("editor");
          const mathField = MQ.MathField(editor, {
            handlers: {
              edit: function() {
                window.ReactNativeWebView?.postMessage(JSON.stringify({
                  type: "change",
                  latex: mathField.latex()
                }));
              }
            }
          });
          mathField.latex(${JSON.stringify(initialLatex)});

          document.addEventListener("message", (event) => {
            const msg = JSON.parse(event.data);

            if (msg.type === "insert") mathField.write(msg.value);
            if (msg.type === "keystroke") mathField.keystroke(msg.value);
            if (msg.type === "clear") mathField.latex("");

            if (msg.type === "moveToStart") mathField.moveToLeftEnd();
            if (msg.type === "moveToEnd") mathField.moveToRightEnd();
            if (msg.type === "focus") mathField.focus();
            if (msg.type === "moveLeft") {
              let steps = msg.value || 1;
              for (let i = 0; i < steps; i++) mathField.keystroke("Left");
            }
            if (msg.type === "moveRight") {
              let steps = msg.value || 1;
              for (let i = 0; i < steps; i++) mathField.keystroke("Right");
            }
            if (msg.type === "deleteLeft") {
              mathField.keystroke("Backspace");
            }
            if (msg.type === "setCursor") {
              if (msg.pos?.fromStart !== undefined) {
                mathField.moveToLeftEnd();
                let steps = msg.pos.fromStart;
                for (let i = 0; i < steps; i++) mathField.keystroke("Right");
              }
              if (msg.pos?.fromEnd !== undefined) {
                mathField.moveToRightEnd();
                let steps = msg.pos.fromEnd;
                for (let i = 0; i < steps; i++) mathField.keystroke("Left");
              }
            }

            if (msg.type === "moveUp") {
  let steps = msg.value || 1;
  for (let i = 0; i < steps; i++) mathField.keystroke("Up");
}
if (msg.type === "moveDown") {
  let steps = msg.value || 1;
  for (let i = 0; i < steps; i++) mathField.keystroke("Down");
}
          });
        </script>
      </body>
      </html>
    `;

    const handleMessage = (event: WebViewMessageEvent) => {
      try {
        const data = JSON.parse(event.nativeEvent.data);
        if (data.type === "change") {
          onChange?.(data.latex);
        }
      } catch {}
    };

    useImperativeHandle(ref, () => ({
      insert: (val: string) => {
        webRef.current?.postMessage(
          JSON.stringify({ type: "insert", value: val })
        );
      },
      keystroke: (key: string) => {
        webRef.current?.postMessage(
          JSON.stringify({ type: "keystroke", value: key })
        );
      },
      clear: () => {
        webRef.current?.postMessage(JSON.stringify({ type: "clear" }));
      },
      moveToStart: () => {
        webRef.current?.postMessage(JSON.stringify({ type: "moveToStart" }));
      },
      moveToEnd: () => {
        webRef.current?.postMessage(JSON.stringify({ type: "moveToEnd" }));
      },
      focus: () => {
        webRef.current?.postMessage(JSON.stringify({ type: "focus" }));
      },
      moveLeft: (steps = 1) => {
        webRef.current?.postMessage(
          JSON.stringify({ type: "moveLeft", value: steps })
        );
      },
      moveRight: (steps = 1) => {
        webRef.current?.postMessage(
          JSON.stringify({ type: "moveRight", value: steps })
        );
      },
      deleteLeft: () => {
        webRef.current?.postMessage(JSON.stringify({ type: "deleteLeft" }));
      },
      setCursor: (pos: { fromEnd?: number; fromStart?: number }) => {
        webRef.current?.postMessage(JSON.stringify({ type: "setCursor", pos }));
      },
      moveUp: (steps = 1) => {
        webRef.current?.postMessage(
          JSON.stringify({ type: "moveUp", value: steps })
        );
      },
      moveDown: (steps = 1) => {
        webRef.current?.postMessage(
          JSON.stringify({ type: "moveDown", value: steps })
        );
      },
    }));

    return (
      <View style={styles.container}>
        <WebView
          ref={webRef}
          originWhitelist={["*"]}
          source={{ html }}
          javaScriptEnabled
          domStorageEnabled
          scrollEnabled={false}
          onMessage={handleMessage}
          style={styles.webview}
        />
      </View>
    );
  }
);

export default MathQuillEditor;

const styles = StyleSheet.create({
  container: { height: 60, marginVertical: 10 },
  webview: { flex: 1, backgroundColor: "transparent" },
});
