import fs from "node:fs/promises";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const source = "/Users/snorrefossland/GitHub/mimris-site/outputs/Mimris_OSDU_Computas_Equinor_Draft.pptx";
const presentation = await PresentationFile.importPptx(await FileBlob.load(source));
const slide = presentation.slides.items[5];
await fs.writeFile("/Users/snorrefossland/GitHub/mimris-site/work/computas-deck/slide6.layout.json", await (await slide.export({ format: "layout" })).text());
