const FILENAME_SELECTOR =
  '[aria-labelledby="files"] [role="rowheader"] a[title]';

const FILENAME_EXCLUSIONS = ["LICENSE", "README.md", "scripts"];

$$(FILENAME_SELECTOR)
  .map((item) => item.textContent)
  .filter((item) => !FILENAME_EXCLUSIONS.includes(item))
  .map((item) => {
    return `* [${titleize(removeExtension(item))}](/${item})`;
  })
  .join("\n");

function removeExtension(string, extension = ".md") {
  return string.replace(new RegExp(extension + "$", "g"), "");
}

function titleize(string) {
  const REPLACEMENTS = new Map([
    ["to", "to"],
    ["and", "and"],
    ["cli", "CLI"],
    ["ai", "AI"],
    ["javascript", "JavaScript"],
  ]);

  return string
    .split(/-/g)
    .map((a) => {
      if (REPLACEMENTS.has(a)) {
        return REPLACEMENTS.get(a);
      }
      return a[0].toUpperCase() + a.slice(1);
    })
    .join(" ");
}

// copy($_);
