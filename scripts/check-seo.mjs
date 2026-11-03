import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const html = await readFile('dist/index.html', 'utf8');
const canonical = 'https://raviteja5469.github.io/Ravis_portfolio/';
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one main heading');
assert.ok(html.includes(`rel="canonical" href="${canonical}"`), 'Canonical production URL');
assert.ok(!html.includes('intro-pending'), 'Static content must not be hidden by the intro');
for (const section of ['top', 'work', 'projects', 'skills', 'about', 'contact']) {
  assert.ok(html.includes(`id="${section}"`), `Prerendered ${section} section`);
}
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const person = schema['@graph'].find(entity => entity['@type'] === 'Person');
const profile = schema['@graph'].find(entity => entity['@type'] === 'ProfilePage');
assert.equal(profile.mainEntity['@id'], person['@id']);
assert.equal(person.name, 'Raviteja Seguri');
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Unique element IDs');
const paths = new Set([...html.matchAll(/(?:src|href|content)="(?:https:\/\/raviteja5469.github.io)?\/Ravis_portfolio\/([^"#?]+)"/g)].map(match => match[1]));
for (const path of paths) await access(`dist/${path}`);
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
assert.equal((sitemap.match(/<loc>/g) || []).length, 1, 'Only actual page URLs in sitemap');
console.log(`SEO checks passed: prerendered sections, heading, structured data, canonical, sitemap and ${paths.size} asset references.`);
