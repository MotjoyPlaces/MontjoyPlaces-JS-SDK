import { MontjoyPlaces } from "../src/index.js";

const apiKey = process.env.MONTJOY_PLACES_API_KEY;

if (!apiKey) {
  throw new Error("Set MONTJOY_PLACES_API_KEY before running the sample.");
}

const client = new MontjoyPlaces({ apiKey });

const whoAmI = await client.whoAmI();
console.log("whoami:", whoAmI);

const groups = await client.listGroups({ limit: 5 });
console.log("groups:", groups.rows.map((group) => group.name));

const search = await client.searchPlaces({
  q: "coffee near Boston MA",
  limit: 3
});
console.log("search results:", search.rows);
