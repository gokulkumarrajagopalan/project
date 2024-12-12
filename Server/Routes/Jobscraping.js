const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const BASE_URL = 'https://careers.caterpillar.com';


async function fetchJobDetails(jobUrl) {
  try {
    const { data } = await axios.get(jobUrl);
    const $ = cheerio.load(data);

    
    const title = $('h1.job-title').text().trim();
    const location = $('span.job-location').text().trim();
    const description = $('div.job-description').html().trim(); // HTML for full description
    const requirements = $('div.job-requirements').html().trim(); // Requirements if available
    const postedDate = $('span.job-posted-date').text().trim();

    return { title, location, description, requirements, postedDate, applyLink: jobUrl };
  } catch (error) {
    console.error(`Error fetching job details from ${jobUrl}:`, error.message);
    return null;
  }
}


router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/en/jobs/`);
    const $ = cheerio.load(data);

    const jobs = [];
    const jobLinks = [];

    
    $('a.stretched-link').each((index, element) => {
      const relativeLink = $(element).attr('href');
      if (relativeLink) {
        jobLinks.push(`${BASE_URL}${relativeLink}`);
      }
    });

    console.log(`Found ${jobLinks.length} job links. Fetching details...`);

    
    for (const jobLink of jobLinks) {
      const jobDetails = await fetchJobDetails(jobLink);
      if (jobDetails) jobs.push(jobDetails);
    }

    
    fs.writeFileSync('jobs.json', JSON.stringify(jobs, null, 2));
    console.log('Job data saved to jobs.json');

    // Send response to client
    res.json({
      success: true,
      message: `${jobs.length} jobs scraped successfully.`,
      jobs,
    });
  } catch (error) {
    console.error('Error scraping jobs:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to scrape jobs.',
    });
  }
});

module.exports = router;
