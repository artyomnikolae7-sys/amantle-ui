import fs from "node:fs";

const index = JSON.parse(fs.readFileSync("public/r/index.json", "utf8"));

async function testComponentPages() {
  console.log(`Starting automated audit for ${index.length} component catalog pages...`);

  let passedPages = 0;
  let failedPages = 0;

  for (const item of index) {
    const pageUrl = `http://localhost:3000/${item.category}/${item.name}`;
    try {
      const res = await fetch(pageUrl);
      if (res.status === 200) {
        passedPages++;
      } else {
        console.error(`❌ FAILED PAGE: ${pageUrl} -> Status ${res.status}`);
        failedPages++;
      }
    } catch (err) {
      console.error(`❌ ERROR PAGE: ${pageUrl} -> ${err.message}`);
      failedPages++;
    }
  }

  console.log(`\n--- Component Catalog Pages Audit Result ---`);
  console.log(`Passed: ${passedPages}/${index.length}`);
  console.log(`Failed: ${failedPages}/${index.length}`);
}

testComponentPages();
