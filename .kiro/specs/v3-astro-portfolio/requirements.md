# Requirements Document

## Introduction

V3 is a ground-up rebuild of the Reetta Lipponen portfolio website using Astro.js for static site generation and TinaCMS for content management. The site showcases the work of a Finnish visual artist (ceramics, installations, sculptures, customer work) and includes pages for CV, artist statement, and contact information. Content is primarily in Finnish. The goal is excellent SEO, fast performance through static generation, and easy content editing via TinaCMS.

## Glossary

- **Site**: The v3 Astro.js portfolio application located in the `v3/` directory
- **Visitor**: A person browsing the public-facing portfolio website
- **Editor**: The artist or a delegate who manages content through TinaCMS
- **Navigation_Bar**: The primary navigation component providing links to all site pages
- **Page_Layout**: The shared layout wrapper that includes the Navigation_Bar, main content area, and Footer
- **Footer**: The bottom section of every page displaying copyright and credits
- **Works_Page**: A page displaying artwork for a specific category (ceramic, installation, sculpture, customer)
- **Gallery**: A grid of artwork images with titles displayed on a Works_Page
- **TinaCMS**: The Git-backed content management system used for editing site content
- **Astro**: The static site generation framework powering the site
- **Locale**: A language variant of the site content (e.g., `fi` for Finnish, `en` for English)

## Requirements

### Requirement 1: Project Foundation

**User Story:** As a developer, I want a well-structured Astro.js project with TypeScript and TinaCMS integration, so that the site can be built, developed, and content-managed efficiently.

#### Acceptance Criteria

1. THE Site SHALL be an Astro.js project using TypeScript, located in the `v3/` directory
2. THE Site SHALL integrate TinaCMS for Git-backed content management
3. THE Site SHALL generate static HTML pages at build time for all routes
4. THE Site SHALL use Tailwind CSS for styling
5. WHEN the `npm run dev` command is executed, THE Site SHALL start a local development server with TinaCMS admin interface accessible

### Requirement 2: Shared Layout and Navigation

**User Story:** As a visitor, I want consistent navigation and layout across all pages, so that I can easily browse the portfolio.

#### Acceptance Criteria

1. THE Page_Layout SHALL include the Navigation_Bar, a main content area, and the Footer on every page
2. THE Navigation_Bar SHALL display links to: Etusivu (home), Keramiikka, Installaatio, Veistos, Asiakastyö, CV, and Yhteystiedot
3. WHEN a visitor is on a page, THE Navigation_Bar SHALL visually indicate the currently active page
4. THE Navigation_Bar SHALL display a horizontal link list on viewports 768px and wider
5. WHEN the viewport is narrower than 768px, THE Navigation_Bar SHALL collapse all navigation links and display a hamburger menu icon
6. WHEN a visitor taps the hamburger menu icon, THE Navigation_Bar SHALL open a full-screen overlay displaying all navigation links vertically
7. WHEN a visitor taps a navigation link in the mobile overlay, THE Navigation_Bar SHALL close the overlay and navigate to the selected page
8. WHEN a visitor taps the hamburger menu icon while the overlay is open, THE Navigation_Bar SHALL close the overlay
9. THE Footer SHALL display the current year, the artist name, and a credit link

### Requirement 3: Home Page

**User Story:** As a visitor, I want to see an introduction to the artist when I land on the site, so that I understand who the artist is and what the site is about.

#### Acceptance Criteria

1. WHEN a visitor navigates to the root URL, THE Site SHALL display the home page
2. THE Home Page SHALL display a heading and rich text content managed through TinaCMS
3. THE Home Page SHALL include appropriate meta tags for SEO (title, description, Open Graph)

### Requirement 4: Works Pages

**User Story:** As a visitor, I want to browse artwork organized by category, so that I can explore the artist's different types of work.

#### Acceptance Criteria

1. THE Site SHALL provide a separate Works_Page for each category: ceramic, installation, sculpture, and customer
2. WHEN a visitor navigates to a Works_Page, THE Site SHALL display the category title and a Gallery of artwork images
3. THE Gallery SHALL display artwork images in a responsive grid layout
4. WHEN a visitor views the Gallery on a viewport narrower than 768px, THE Gallery SHALL display images in a single-column layout
5. WHEN a visitor views the Gallery on a viewport 768px or wider, THE Gallery SHALL display images in a multi-column grid
6. EACH artwork item in the Gallery SHALL display an image and a title

### Requirement 5: CV Page

**User Story:** As a visitor, I want to view the artist's CV, so that I can learn about exhibitions, education, and professional background.

#### Acceptance Criteria

1. WHEN a visitor navigates to the CV page, THE Site SHALL display CV sections with titles
2. EACH CV section SHALL contain a list of entries, where each entry has an optional date and a content description
3. THE CV content SHALL be editable through TinaCMS

### Requirement 6: Contact Page

**User Story:** As a visitor, I want to find the artist's contact information, so that I can reach out for inquiries or commissions.

#### Acceptance Criteria

1. WHEN a visitor navigates to the contact page, THE Site SHALL display contact information as rich text content
2. THE contact page content SHALL be editable through TinaCMS
3. THE contact page SHALL include appropriate meta tags for SEO

### Requirement 7: SEO and Performance

**User Story:** As the artist, I want the site to rank well in search engines and load quickly, so that potential clients and galleries can find my work.

#### Acceptance Criteria

1. THE Site SHALL generate a `sitemap.xml` file containing all page URLs at build time
2. THE Site SHALL include a `robots.txt` file that allows search engine crawling
3. EACH page SHALL include a unique `<title>` tag and `<meta name="description">` tag
4. EACH page SHALL include Open Graph meta tags (`og:title`, `og:description`, `og:type`)
5. THE Site SHALL produce a Lighthouse SEO score of 90 or above
6. THE Site SHALL generate fully static HTML with no client-side JavaScript required for content display

### Requirement 8: Content Management with TinaCMS

**User Story:** As an editor, I want to manage all site content through a visual editing interface, so that I can update the portfolio without touching code.

#### Acceptance Criteria

1. WHEN an editor accesses the `/admin` route, THE Site SHALL display the TinaCMS editing interface
2. THE TinaCMS schema SHALL define content models for: home page content, works categories with image galleries, CV sections with entries, and contact page content
3. WHEN an editor saves content changes in TinaCMS, THE Site SHALL persist those changes as Markdown or JSON files in the Git repository
4. THE TinaCMS content files SHALL be stored in a `v3/content/` directory

### Requirement 9: Responsive Design

**User Story:** As a visitor, I want the site to look good on any device, so that I can browse the portfolio on my phone, tablet, or desktop.

#### Acceptance Criteria

1. THE Page_Layout SHALL adapt its spacing and typography to the viewport width
2. WHEN the viewport is narrower than 768px, THE Site SHALL use mobile-optimized layouts for all pages
3. THE Site SHALL use a mobile-first CSS approach with Tailwind CSS breakpoint utilities

### Requirement 10: Internationalization Readiness

**User Story:** As the artist, I want the site to be prepared for multilingual support, so that English content can be added in the future without restructuring the project.

#### Acceptance Criteria

1. THE Site SHALL default to Finnish (`fi`) as the primary Locale
2. THE Site SHALL organize content files by Locale within the `v3/content/` directory (e.g., `content/fi/home/index.md`)
3. THE TinaCMS schema SHALL include a Locale field or use locale-based directory structure so that content can be created per language
4. THE Site SHALL set the `lang` attribute on the `<html>` element to match the current Locale
5. THE Navigation_Bar labels and other UI strings SHALL be stored in a translatable constants file, separate from page content
