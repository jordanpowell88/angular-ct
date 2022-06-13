import { readFile, writeFile, rename } from "fs/promises";
import { existsSync } from "fs";

await renameNetStubbing();
await replaceNetStubbingInIndex();

async function renameNetStubbing() {
  const targetPath = "node_modules/cypress/types/net-stubbing.d.ts";

  if (existsSync(targetPath)) {
    console.log(`⏩ net-stubbing.ts already renamed to net-stubbing.d.ts`);
    return;
  }

  try {
    await rename("node_modules/cypress/types/net-stubbing.ts", targetPath);
    console.log(`✅ renamed net-stubbing.ts to net-stubbing.d.ts`);
  } catch (e) {
    console.warn(`⛔️ Couldn't rename net-stubbing.ts (${e.message})`);
  }
}

async function replaceNetStubbingInIndex() {
  const encoding = "utf-8";

  const indexPath = "node_modules/cypress/types/index.d.ts";

  const data = await readFile(indexPath, encoding);
  const replaced = data.replace("net-stubbing.ts", "net-stubbing.d.ts");

  if (data === replaced) {
    console.log(`⏩ nothing to replace in ${indexPath}`);
    return;
  }

  await writeFile(indexPath, replaced, encoding);

  console.log(
    `✅ replaced net-stubbing.ts by net-stubbing.d.ts in ${indexPath}`
  );
}
