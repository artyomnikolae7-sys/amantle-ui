import fs from "node:fs";

const index = JSON.parse(fs.readFileSync("public/r/index.json", "utf8"));

async function testRoutes() {
  console.log(`Starting automated audit for ${index.length} components...`);

  // Test main pages
  const basePages = ["/", "/ui", "/blocks", "/templates"];
  for (const page of basePages) {
    const res = await fetch(`http://localhost:3000${page}`);
    if (res.status !== 200) {
      console.error(`❌ FAILED: ${page} -> Status ${res.status}`);
    } else {
      console.log(`✅ OK: ${page}`);
    }
  }

  // Test all preview routes
  let passedPreviews = 0;
  let failedPreviews = 0;
  for (const item of index) {
    const previewUrl = `http://localhost:3000/preview/${item.category}/${item.name}`;
    try {
      const res = await fetch(previewUrl);
      if (res.status === 200) {
        passedPreviews++;
      } else {
        console.error(`❌ FAILED PREVIEW: ${previewUrl} -> Status ${res.status}`);
        failedPreviews++;
      }
    } catch (err) {
      console.error(`❌ ERROR PREVIEW: ${previewUrl} -> ${err.message}`);
      failedPreviews++;
    }
  }

  console.log(`\n--- Preview Routes Audit Result ---`);
  console.log(`Passed: ${passedPreviews}/${index.length}`);
  console.log(`Failed: ${failedPreviews}/${index.length}`);
}

testRoutes();
