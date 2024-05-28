const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const hostname = 'https://di-tech.eu/';
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/pre-docking', changefreq: 'monthly', priority: 0.8 },
  { url: '/cylinder-measurement', changefreq: 'monthly', priority: 0.8 },
  { url: '/alpha-system', changefreq: 'monthly', priority: 0.8 },
  { url: '/docking-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/engineering-services', changefreq: 'monthly', priority: 0.8 },
  { url: '/performance-measurement', changefreq: 'monthly', priority: 0.8 },
  { url: '/pressure-measure', changefreq: 'monthly', priority: 0.8 },
  { url: '/onboard-overhaul', changefreq: 'monthly', priority: 0.8 },
  { url: '/health-check', changefreq: 'monthly', priority: 0.8 },
  { url: '/large-repair', changefreq: 'monthly', priority: 0.8 },
  { url: '/adjustment-valves', changefreq: 'monthly', priority: 0.8 },
  { url: '/recondition-valves', changefreq: 'monthly', priority: 0.8 },
  { url: '/overhoal-exhaust', changefreq: 'monthly', priority: 0.8 },
  { url: '/overhoal-fuel-boosters', changefreq: 'monthly', priority: 0.8 },
  { url: '/general-maintenance', changefreq: 'monthly', priority: 0.8 },
  { url: '/pump-overhaul', changefreq: 'monthly', priority: 0.8 },
  { url: '/supply-engine', changefreq: 'monthly', priority: 0.8 },
  { url: '/ME-MC-engines', changefreq: 'monthly', priority: 0.8 },
  { url: '/ShaPoli', changefreq: 'monthly', priority: 0.8 },
  { url: '/de-rating', changefreq: 'monthly', priority: 0.8 },
  { url: '/trouble-shooting', changefreq: 'monthly', priority: 0.8 },
  { url: '/fuel-gas-supply', changefreq: 'monthly', priority: 0.8 },
  { url: '/ME-training', changefreq: 'monthly', priority: 0.8 },
];

const stream = new SitemapStream({ hostname });

streamToPromise(Readable.from(urls).pipe(stream)).then((data) =>
  fs.writeFileSync('public/sitemap.xml', data.toString())
);

