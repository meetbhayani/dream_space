# SEO_GUIDE.md

# Dream Space Studio — SEO Strategy & Standards v1.0

---

# PURPOSE

This document defines the complete SEO strategy for the project.

Goals:

* Rank for luxury interior design keywords
* Increase organic traffic
* Generate qualified leads
* Improve local search visibility
* Maximize Core Web Vitals
* Build a scalable SEO foundation

SEO must be considered during development, not after launch.

---

# SEO OBJECTIVES

Primary Goals

• Rank for interior design services

• Rank for luxury home interiors

• Rank for local searches

• Increase consultation requests

• Improve Google Business Profile visibility

Secondary Goals

• Blog traffic

• Image search traffic

• Brand awareness

• Social sharing

---

# TECHNICAL SEO

Framework

Next.js 15 App Router

Rendering

Prefer Server Components.

Use Static Generation where possible.

Use Server Actions when appropriate.

Avoid unnecessary client-side rendering.

---

# URL STRUCTURE

Good

/

/about

/services

/projects

/projects/luxury-villa-ahmedabad

/blog

/blog/how-to-design-small-living-room

/contact

Avoid

/page?id=2

/project123

/blog-post-final

Uppercase URLs

Spaces in URLs

---

# PAGE TITLES

Format

Primary Keyword | Brand Name

Examples

Luxury Interior Designers in Ahmedabad | Dream Space Studio

Modern Villa Interior Design | Dream Space Studio

Kitchen Interior Design Services | Dream Space Studio

Target length

50–60 characters

Each page must have a unique title.

---

# META DESCRIPTIONS

Target

140–160 characters

Include

Primary keyword

Location (if relevant)

Clear value proposition

Call to action

Example

Transform your home with luxury interior design services in Ahmedabad. Explore our projects and book a free consultation with Dream Space Studio.

---

# OPEN GRAPH

Every page requires

Title

Description

Image

Canonical URL

Site Name

Type

Example

website

article

Use high-quality branded images.

---

# TWITTER CARD

Use

summary_large_image

Include

Title

Description

Image

---

# CANONICAL URLS

Every page must define a canonical URL.

Avoid duplicate content.

---

# ROBOTS

Generate

robots.txt

Allow search engines to crawl public pages.

Block admin routes.

Block private APIs.

---

# SITEMAP

Automatically generate

sitemap.xml

Include

Home

Services

Projects

Blogs

Gallery

Team

Contact

Exclude

Admin

Drafts

Preview pages

---

# STRUCTURED DATA

Use JSON-LD.

Include

Organization

LocalBusiness

ProfessionalService

BreadcrumbList

WebSite

ImageObject

Article

FAQPage

Service

Person (Team)

Review

AggregateRating

Project (CreativeWork)

---

# LOCAL SEO

Optimize for location-based searches.

Example keywords

Interior Designer Ahmedabad

Luxury Interior Designer Ahmedabad

Villa Interior Design Ahmedabad

Office Interior Design Ahmedabad

Residential Interior Designer Gujarat

Include:

Office address

Phone

Email

Working hours

Google Maps

Service areas

---

# GOOGLE BUSINESS PROFILE

Maintain consistency between website and business profile.

Use the same:

Business name

Address

Phone number

Website

Business category

Opening hours

---

# KEYWORD STRATEGY

Primary Keywords

Luxury Interior Design

Residential Interior Design

Commercial Interior Design

Villa Interior Design

Turnkey Interior Solutions

Secondary Keywords

Modular Kitchen

Living Room Design

Bedroom Interior

Office Design

Restaurant Interior

Long-Tail Examples

Best luxury interior designer in Ahmedabad

Modern villa interior design ideas

Premium home interiors in Gujarat

Custom office interior design

---

# CONTENT STRATEGY

Homepage

Brand + Services

About

Company story

Services

Individual service pages

Projects

Detailed case studies

Blog

Educational content

Gallery

Visual inspiration

FAQ

Answer common client questions

Contact

Conversion-focused

---

# BLOG GUIDELINES

Write for users first.

Optimize naturally.

Suggested structure

Title

Introduction

Main sections

Images

FAQ

Conclusion

CTA

Suggested topics

Interior trends

Material guides

Budget planning

Design inspiration

Lighting

Color psychology

Space planning

Maintenance

---

# IMAGE SEO

Every image must include:

Meaningful filename

Example

luxury-villa-living-room-ahmedabad.webp

Never

IMG001.jpg

Use

Alt text

Width

Height

Lazy loading

Modern formats

WebP

AVIF when appropriate

---

# VIDEO SEO

Compress videos.

Poster image required.

Provide captions when useful.

Avoid autoplay with sound.

---

# INTERNAL LINKING

Every page should link to related pages.

Example

Service → Projects

Project → Contact

Blog → Service

About → Team

FAQ → Contact

---

# BREADCRUMBS

Use breadcrumb navigation.

Example

Home

>

Projects

>

Luxury Villa

Implement structured data.

---

# PAGINATION

If required

Use rel="next" and rel="prev" where applicable.

Keep URLs clean.

---

# PERFORMANCE

Target

Lighthouse

95+

Largest Contentful Paint

<2.5s

Interaction to Next Paint

<200ms

Cumulative Layout Shift

<0.1

First Contentful Paint

<1.8s

---

# PERFORMANCE RULES

Optimize images.

Compress videos.

Use lazy loading.

Use dynamic imports.

Minimize JavaScript.

Reduce hydration.

Avoid render-blocking resources.

---

# FONT OPTIMIZATION

Use next/font.

Self-host fonts where possible.

Preload only critical fonts.

Avoid loading unused weights.

---

# CORE WEB VITALS

Monitor

LCP

INP

CLS

Optimize continuously.

---

# ACCESSIBILITY

Semantic HTML

Proper headings

Keyboard navigation

Alt text

Color contrast

Visible focus

Accessible forms

Reduced motion support

Accessibility supports SEO.

---

# SCHEMA REQUIREMENTS

Homepage

Organization

Services

Service

Projects

CreativeWork

Blogs

Article

FAQ

FAQPage

Testimonials

Review

Team

Person

Contact

LocalBusiness

---

# ANALYTICS

Install

Google Analytics 4

Google Search Console

Microsoft Clarity

Monitor

Traffic

Conversions

Events

Scroll depth

Heatmaps

Search queries

---

# CONVERSION TRACKING

Track

Contact form submissions

WhatsApp clicks

Phone clicks

Email clicks

Consultation bookings

Newsletter signups

Project inquiry buttons

---

# SOCIAL SEO

Use Open Graph.

Use branded preview images.

Include

Instagram

LinkedIn

Facebook

Pinterest

---

# SECURITY

HTTPS only.

Secure headers.

No mixed content.

Protect forms.

Validate all user input.

---

# MULTILINGUAL PREPARATION

Future support for multiple languages.

Structure URLs cleanly.

Example

/en/

/hi/

/gu/

---

# AI CONTENT RULES

Do not generate keyword-stuffed content.

Write naturally.

Prioritize readability.

Use one primary keyword per page.

Support with related keywords.

Focus on user intent.

---

# PAGE CHECKLIST

Every page must have:

Unique title

Meta description

Canonical URL

Open Graph image

Structured data

Optimized images

Internal links

Accessible headings

Call to action

Fast loading

---

# DEVELOPMENT CHECKLIST

Before deployment:

✓ Metadata configured

✓ Sitemap generated

✓ robots.txt generated

✓ Structured data validated

✓ Lighthouse >95

✓ Core Web Vitals checked

✓ Search Console ready

✓ Analytics configured

✓ Broken links checked

✓ 404 page implemented

✓ Redirects verified

✓ Image optimization complete

✓ Canonical URLs verified

✓ Mobile usability checked

---

# AI DEVELOPMENT RULES

Every AI assistant must:

1. Preserve existing metadata.
2. Add metadata for new pages.
3. Never create duplicate titles.
4. Follow URL conventions.
5. Optimize images by default.
6. Maintain internal linking opportunities.
7. Generate semantic HTML.
8. Consider accessibility while building.
9. Keep performance in mind.
10. Leave the project SEO-ready after each feature.

---

# DEFINITION OF SEO SUCCESS

The website should:

Load quickly.

Be easy to crawl.

Provide rich search results.

Support local business discovery.

Earn high Lighthouse scores.

Convert visitors into leads.

Remain maintainable as content grows.

SEO is an ongoing process built into the product, not a final checklist.

---

END OF DOCUMENT