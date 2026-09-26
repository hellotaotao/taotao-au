import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import postcss from "postcss";
import { describe, expect, it } from "vitest";

const stylesheet = postcss.parse(
  readFileSync(resolve(process.cwd(), "src/app/globals.css"), "utf8"),
);

function getGridColumns(container: postcss.Container): string | undefined {
  const rule = container.nodes.find(
    (node): node is postcss.Rule =>
      node.type === "rule" && node.selector === ".more-products-grid",
  );
  const declaration = rule?.nodes.find(
    (node): node is postcss.Declaration =>
      node.type === "decl" && node.prop === "grid-template-columns",
  );
  return declaration?.value;
}

function getMediaGridColumns(query: string): string | undefined {
  let columns: string | undefined;
  stylesheet.walkAtRules("media", (media) => {
    if (media.params === query) {
      columns = getGridColumns(media) ?? columns;
    }
  });
  return columns;
}

describe("More products responsive layout", () => {
  it("uses three columns on wide screens", () => {
    expect(getGridColumns(stylesheet)).toBe("repeat(3, minmax(0, 1fr))");
  });

  it("uses two columns on tablet and compact desktop screens", () => {
    expect(
      getMediaGridColumns("(min-width: 701px) and (max-width: 1199px)"),
    ).toBe("repeat(2, minmax(0, 1fr))");
  });

  it("uses one column on mobile screens", () => {
    expect(getMediaGridColumns("(max-width: 700px)")).toBe("minmax(0, 1fr)");
  });
});
