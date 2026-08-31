import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const source = "/Users/snorrefossland/GitHub/mimris-site/outputs/Mimris_OSDU_Computas_Equinor_Draft_IDEF0.pptx";
const presentation = await PresentationFile.importPptx(await FileBlob.load(source));
const operational = presentation.resolve("sh/netcjqxo");
operational.text.style = {
  fontSize: 18,
  typeface: "Helvetica Neue",
  color: "#FFFFFF",
  bold: true,
  alignment: "left",
  verticalAlignment: "top",
  autoFit: "shrinkText",
};
const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(source);
console.log(source);
