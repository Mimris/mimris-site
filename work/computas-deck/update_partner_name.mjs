import fs from "node:fs/promises";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const source = "/Users/snorrefossland/Documents/Codex/2026-08-27/referenced-chatgpt-conversation-this-is-an/outputs/Mimris_OSDU_Omega_Equinor_Draft.pptx";
const output = "/Users/snorrefossland/GitHub/mimris-site/outputs/Mimris_OSDU_Computas_Equinor_Draft.pptx";
const work = "/Users/snorrefossland/GitHub/mimris-site/work/computas-deck";

async function writeBlob(file, blob) {
  await fs.writeFile(file, new Uint8Array(await blob.arrayBuffer()));
}

const presentation = await PresentationFile.importPptx(await FileBlob.load(source));
const slide1 = presentation.resolve("sl/y90nupkv");
const slide9 = presentation.slides.items[8];
await writeBlob(`${work}/slide-01-before.png`, await presentation.export({ slide: slide1, format: "png", scale: 1 }));
await writeBlob(`${work}/slide-09-before.png`, await presentation.export({ slide: slide9, format: "png", scale: 1 }));

presentation.resolve("sh/zadcv2p8").text.replace("OMEGA", "COMPUTAS");
presentation.resolve("sh/7qp4be9c").text.replace("Omega", "Computas");
presentation.resolve("sh/ofq5svm5").text.replace("OMEGA", "COMPUTAS");
const notes = presentation.resolve("nt/gnmp4jqx");
notes.setText(notes.text.replace("Omega", "Computas"));

await writeBlob(`${work}/slide-01-after.png`, await presentation.export({ slide: slide1, format: "png", scale: 1 }));
await writeBlob(`${work}/slide-09-after.png`, await presentation.export({ slide: slide9, format: "png", scale: 1 }));

const verified = await presentation.inspect({
  kind: "slide,textbox,shape,notes",
  search: "Computas",
  maxChars: 12000,
});
await fs.writeFile(`${work}/verification.ndjson`, verified.ndjson);

const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(output);
console.log(output);
