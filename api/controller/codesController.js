import { get, getAll, update, create, deleteCode } from "../services/codesService.js";
import Code from "../models/Code.js";
import { getPageId } from "../../src/utils/getPageId.js";

export function getCodeById(id) {
    const codeData = get(id);
    return codeData;
  }
  
export function getAllCodes() {
  let codes = getAll();
  return codes;
}

export function saveCode(formData) {
  const id = getPageId();

  if (id) {
    let code = getCodeById(id);
    code = { ...code, ...formData };

    update(code);
    alert("Code updated");
    window.location.href = "../../src/pages/community.html";
  } else {
    const code = new Code(formData);
    create(code);
    alert("Code saved");
    window.location.href = "../../src/pages/community.html";
  }
}

export function deleteCodeById(id) {
  deleteCode(id);
  alert("Code deleted");
  window.location.href = "../../src/pages/code-editor.html";
}