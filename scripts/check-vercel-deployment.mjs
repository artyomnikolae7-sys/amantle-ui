import fs from "node:fs";

async function monitor() {
  const auth = JSON.parse(
    fs.readFileSync(
      "C:\\Users\\Verok\\AppData\\Roaming\\com.vercel.cli\\Data\\auth.json",
      "utf-8"
    )
  );
  const token = auth.token;

  console.log("Checking latest Vercel deployments for project amantle-ui-x...");

  // Wait a few seconds for GitHub webhook trigger
  await new Promise((r) => setTimeout(r, 6000));

  // Find latest deployment
  const listRes = await fetch(
    "https://api.vercel.com/v6/deployments?projectId=prj_U2XMrLgCjj8drz4gAxAc8d2rQiB3&limit=3",
    { headers: { Authorization: "Bearer " + token } }
  );
  const listData = await listRes.json();
  const latest = listData.deployments?.[0];

  if (!latest) {
    console.error("No deployments found.");
    return;
  }

  console.log(`Tracking deployment: ${latest.uid} (${latest.url})`);

  for (let i = 0; i < 40; i++) {
    const res = await fetch(
      `https://api.vercel.com/v13/deployments/${latest.uid}`,
      { headers: { Authorization: "Bearer " + token } }
    );
    const d = await res.json();
    console.log(`[VERCEL] Attempt ${i + 1}: state=${d.readyState || d.status}`);

    if (d.readyState === "READY") {
      console.log("✅ Deployment READY!");
      console.log("URL:", d.url);

      // Assign production alias
      const deployId = d.id || d.uid || latest.uid;
      const aliasRes = await fetch(
        `https://api.vercel.com/v2/deployments/${deployId}/aliases`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ alias: "amantle-ui-x.vercel.app" }),
        }
      );
      const aliasData = await aliasRes.json();
      console.log("Alias updated:", aliasData);
      return;
    }

    if (d.readyState === "ERROR" || d.readyState === "CANCELED") {
      console.error("❌ Deployment failed with state:", d.readyState);
      console.error(d.error);
      return;
    }

    await new Promise((r) => setTimeout(r, 10000));
  }
}

monitor().catch(console.error);
