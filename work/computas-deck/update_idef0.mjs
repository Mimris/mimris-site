import fs from "node:fs/promises";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const source = "/Users/snorrefossland/GitHub/mimris-site/outputs/Mimris_OSDU_Computas_Equinor_Draft.pptx";
const output = "/Users/snorrefossland/GitHub/mimris-site/outputs/Mimris_OSDU_Computas_Equinor_Draft_IDEF0.pptx";
const work = "/Users/snorrefossland/GitHub/mimris-site/work/computas-deck";

async function writeBlob(file, blob) {
  await fs.writeFile(file, new Uint8Array(await blob.arrayBuffer()));
}

const presentation = await PresentationFile.importPptx(await FileBlob.load(source));
const slide6 = presentation.slides.items[5];
await writeBlob(`${work}/slide-06-before-idef0.png`, await presentation.export({ slide: slide6, format: "png", scale: 1 }));

presentation.resolve("sh/lg76d8zy").text.replace("Process", "Process\n(IDEF0)");
presentation.resolve("sh/ydgnit07").text.replace("Select + refine", "Activity model");

await writeBlob(`${work}/slide-06-after-idef0.png`, await presentation.export({ slide: slide6, format: "png", scale: 1 }));
const verified = await presentation.inspect({
  kind: "slide,textbox,shape,notes",
  search: "IDEF0",
  maxChars: 6000,
});
await fs.writeFile(`${work}/idef0-verification.ndjson`, verified.ndjson);

const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(output);
console.log(output);
