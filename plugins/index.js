import fs from "fs";

export async function loadPlugins() {
  const files = fs
    .readdirSync("./plugins")
    .filter((file) => file.endsWith(".js") && file !== "index.js");

  const plugins = [];
  for (const file of files) {
    const mod = await import(`./${file}`);
    plugins.push(mod);
  }
  return plugins;
}
