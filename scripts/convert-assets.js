// scripts/convert-assets.js
const fs = require("fs");
const path = require("path");

// list the files you want to convert
const files = [
  { input: "assets/mathquill/mathquill.css", output: "lib/mathquill-css.ts" },
  { input: "assets/mathquill/mathquill.min.js", output: "lib/mathquill-js.ts" },
  { input: "assets/jquery/jquery-3.7.1.min.js", output: "lib/jquery-js.ts" },
];

for (const { input, output } of files) {
  const absInput = path.resolve(input);
  const absOutput = path.resolve(output);

  if (!fs.existsSync(absInput)) {
    console.error("❌ File not found:", absInput);
    continue;
  }

  const content = fs.readFileSync(absInput, "utf8");

  // Escape backticks so template literals stay valid
  const escaped = content.replace(/`/g, "\\`");

  const tsModule = `// Auto-generated from ${input}
const content = \`${escaped}\`;
export default content;
`;

  fs.mkdirSync(path.dirname(absOutput), { recursive: true });
  fs.writeFileSync(absOutput, tsModule, "utf8");
  console.log("✅ Converted:", input, "→", output);
}
