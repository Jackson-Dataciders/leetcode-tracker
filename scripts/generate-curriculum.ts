import * as fs from "fs";
import * as path from "path";

interface Problem {
  id: string;
  title: string;
  url: string;
  difficulty: "Easy" | "Medium" | "Hard";
  rationale: string;
  category: string;
}

interface Category {
  index: number;
  name: string;
  problems: Problem[];
}

const md = fs.readFileSync(
  path.join(__dirname, "..", "leetcode-lehrplan.md"),
  "utf-8"
);

const lines = md.split("\n");

const categories: Category[] = [];
let currentCategory: Category | null = null;

const categoryRegex = /^## (\d+)\. (.+?) \(\d+\)$/;
const problemRegex =
  /^- \*\*\[(.+?)\]\((https:\/\/leetcode\.com\/problems\/[a-z0-9-]+\/?)\)\*\* — \*(Easy|Medium|Hard)\* — (.+)$/;

for (const line of lines) {
  const catMatch = line.match(categoryRegex);
  if (catMatch) {
    currentCategory = {
      index: parseInt(catMatch[1], 10),
      name: catMatch[2],
      problems: [],
    };
    categories.push(currentCategory);
    continue;
  }

  if (!currentCategory) continue;

  const probMatch = line.match(problemRegex);
  if (probMatch) {
    const url = probMatch[2].replace(/\/?$/, "/");
    const slugMatch = url.match(/\/problems\/([a-z0-9-]+)\//);
    if (!slugMatch) {
      console.error(`Could not extract slug from URL: ${url}`);
      process.exit(1);
    }

    currentCategory.problems.push({
      id: slugMatch[1],
      title: probMatch[1],
      url,
      difficulty: probMatch[3] as "Easy" | "Medium" | "Hard",
      rationale: probMatch[4].replace(/\.$/, "").trim(),
      category: currentCategory.name,
    });
  }
}

// Validation
const allProblems = categories.flatMap((c) => c.problems);
const totalCount = allProblems.length;

console.log(`Total problems: ${totalCount}`);
console.log(`Categories: ${categories.length}`);

if (totalCount !== 365) {
  console.error(`ERROR: Expected 365 problems, got ${totalCount}`);
  for (const c of categories) {
    console.log(`  ${c.index}. ${c.name}: ${c.problems.length}`);
  }
  process.exit(1);
}

if (categories.length !== 17) {
  console.error(`ERROR: Expected 17 categories, got ${categories.length}`);
  process.exit(1);
}

for (let i = 0; i < categories.length; i++) {
  if (categories[i].index !== i + 1) {
    console.error(
      `ERROR: Category ${i} has index ${categories[i].index}, expected ${i + 1}`
    );
    process.exit(1);
  }
}

const idSet = new Set<string>();
for (const p of allProblems) {
  if (idSet.has(p.id)) {
    console.error(`ERROR: Duplicate problem ID: ${p.id}`);
    process.exit(1);
  }
  idSet.add(p.id);

  if (!p.id || !p.title || !p.url || !p.difficulty || !p.rationale || !p.category) {
    console.error(`ERROR: Problem missing fields: ${JSON.stringify(p)}`);
    process.exit(1);
  }

  if (!/^https:\/\/leetcode\.com\/problems\/[a-z0-9-]+\/$/.test(p.url)) {
    console.error(`ERROR: Invalid URL: ${p.url}`);
    process.exit(1);
  }

  if (!["Easy", "Medium", "Hard"].includes(p.difficulty)) {
    console.error(`ERROR: Invalid difficulty: ${p.difficulty}`);
    process.exit(1);
  }
}

console.log("All validations passed!");

// Generate output
const escapeString = (s: string): string =>
  s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");

let output = `import type { Category } from "@/lib/types";\n\nexport const CURRICULUM: Category[] = [\n`;

for (const cat of categories) {
  output += `  {\n`;
  output += `    index: ${cat.index},\n`;
  output += `    name: "${escapeString(cat.name)}",\n`;
  output += `    problems: [\n`;
  for (const p of cat.problems) {
    output += `      {\n`;
    output += `        id: "${escapeString(p.id)}",\n`;
    output += `        title: "${escapeString(p.title)}",\n`;
    output += `        url: "${escapeString(p.url)}",\n`;
    output += `        difficulty: "${p.difficulty}",\n`;
    output += `        rationale: "${escapeString(p.rationale)}",\n`;
    output += `        category: "${escapeString(p.category)}",\n`;
    output += `      },\n`;
  }
  output += `    ],\n`;
  output += `  },\n`;
}

output += `];\n`;

fs.writeFileSync(path.join(__dirname, "..", "lib", "curriculum.ts"), output, "utf-8");
console.log("Written to lib/curriculum.ts");
