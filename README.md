# Static content for a Countdown to Inauguraiton Day 2029!

## Live Demo

View the site on GitHub Pages: [https://hsauers.github.io/DonDaysLeft/](https://hsauers.github.io/DonDaysLeft/)

## Features
- Live countdown timer to Inauguration Day 2029
- Random image from the `img/` folder on each load
- Mobile responsive design
- Dark mode toggle (now in menu)
- Progress bar showing percentage of time elapsed (starts from January 20, 2025)
- Share button for social media (now in menu)
- Localization (English 🇺🇸 / Spanish 🇪🇸) with emoji-based picker (now in menu)
- Favicon and improved site metadata
- Unit tests for countdown logic (`countdown.test.js`)

## Deployment Instructions

This project is automatically deployed to GitHub Pages using GitHub Actions.

To deploy manually:
1. Push changes to the `main` branch.
2. GitHub Actions will build and deploy the site to GitHub Pages.
3. The site will be available at: `https://<your-username>.github.io/DonDaysLeft/`

To set up GitHub Pages:
1. Go to your repository settings on GitHub.
2. Under "Pages", set the source branch to `main` and the folder to `/ (root)`.
3. Save and wait for the site to be published.

## Running Unit Tests

To run the unit tests for the countdown logic:

1. Make sure you have Node.js installed.
2. Open a terminal in the project directory.
3. Run:

   ```sh
   node countdown.test.js
   ```

You should see `All tests passed.` if everything is working correctly.

---

For more tasks and ideas, see `TASKS.md`.
