import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const source = "/Users/snorrefossland/Documents/Codex/2026-08-27/referenced-chatgpt-conversation-this-is-an/outputs/Mimris_OSDU_Omega_Equinor_Draft.pptx";
const presentation = await PresentationFile.importPptx(await FileBlob.load(source));
const inspect = await presentation.inspect({
  kind: "slide,textbox,shape,notes",
  search: "OMEGA",
  maxChars: 12000,
});
console.log(inspect.ndjson);
