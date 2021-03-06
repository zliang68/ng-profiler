import { LView } from "../interfaces/view";
import { readPatchedLView } from "../util/view_utils";

export function findLView(target: HTMLElement | ChildNode = document.body): LView|null {
  if (!target || !target.childNodes) {
    return;
  }
  const childNodes = target.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i];
    let mpValue = readPatchedLView(childNode);
    if (mpValue) {
      return mpValue;
    } else {
      const mpValueChildren = findLView(childNode);
      if (mpValueChildren) {
        return mpValueChildren;
      }
    }
  }
}