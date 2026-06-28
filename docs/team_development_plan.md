# TEAM_DEVELOPMENT_PLAN.md

# Dream Space Studio

## Team Development Plan

Version: 1.0

---

# PURPOSE

This document defines how the two developers will collaborate throughout the project.

It is written for:

* Developer 1 (Lead Frontend & Motion)
* Developer 2 (Data, Features & Integration)
* AI Coding Agents

Everyone must follow this workflow.

---

# TEAM STRUCTURE

## Developer 1 (Lead)

Primary Responsibilities

* Project Architecture
* UI Development
* Design System
* Components
* GSAP Animations
* Framer Motion
* Lenis
* Homepage Layout
* Responsive Design
* Performance
* Final UI Polish

---

## Developer 2

Primary Responsibilities

* Features
* Business Logic
* Data Models
* API Routes
* Forms
* SEO
* Static Content
* CMS Preparation
* Utilities
* Testing Support

---

# PROJECT BRANCHES

Never work directly on **main**.

Repository Structure

main

↓

develop

↓

feature/navbar

feature/design-system

feature/hero

feature/projects

feature/services

feature/gallery

feature/contact

feature/blog

feature/seo

feature/performance

Every task must be completed on a feature branch.

---

# FOLDER OWNERSHIP

## Developer 1

Owns

components/

animations/

hooks/

providers/

styles/

layout/

Do not modify

services/

types/

data/

constants/

app/api/

Unless required for integration.

---

## Developer 2

Owns

features/

services/

types/

constants/

data/

utils/

app/api/

Do not modify

animations/

styles/

layout/

Unless required for integration.

---

# DEVELOPMENT PRINCIPLE

We do NOT divide work by pages.

We divide work by responsibilities.

Developer 1 builds reusable UI.

Developer 2 builds reusable business logic.

The Homepage is assembled only after both parts are ready.

---

# SPRINT 0

Goal

Create project foundation.

---

## Developer 1

Setup

* Next.js 15
* TypeScript
* Tailwind CSS
* shadcn/ui
* GSAP
* Framer Motion
* Lenis
* React Hook Form
* Zod
* ESLint
* Prettier
* Husky

Create

* Theme Provider
* Animation Provider
* Font Configuration
* Global Layout
* Metadata
* Loader
* Cursor
* Page Transition

Deliverable

Project skeleton.

---

## Developer 2

Create

* Folder structure
* Types
* Constants
* Configuration
* Utilities

Setup

* Company Config
* Navigation Config
* Theme Config
* Social Config
* SEO Config
* Site Config

Deliverable

Complete project configuration layer.

---

# SPRINT 1

## Developer 1

Build Design System

Components

* Button
* Typography
* Container
* Section
* Grid
* Card
* Glass Card
* Divider
* Input
* Textarea
* Badge
* Modal
* Accordion
* Carousel
* Loading Components

Deliverable

Reusable UI library.

---

## Developer 2

Create Static Data

Projects

Services

Gallery

Testimonials

Team

FAQ

Blog

Materials

Statistics

Deliverable

Complete static content layer.

---

# SPRINT 2

## Developer 1

Navigation

* Navbar
* Desktop Menu
* Mobile Menu
* Footer
* Floating CTA
* Scroll Progress
* Cursor

Deliverable

Navigation system.

---

## Developer 2

SEO Foundation

* Metadata
* Sitemap
* Robots
* Open Graph
* JSON-LD
* Breadcrumb
* Canonical URLs

Deliverable

SEO infrastructure.

---

# SPRINT 3

## Developer 1

Hero Section

* Video
* GSAP
* Hero Layout
* Statistics
* CTA
* Scroll Indicator

Deliverable

Luxury Hero.

---

## Developer 2

Forms

* Contact Form
* Consultation Form
* Newsletter
* Budget Calculator
* Validation
* API Structure

Deliverable

Complete forms module.

---

# SPRINT 4

## Developer 1

Services UI

* Service Cards
* Layout
* Hover Effects
* Animations
* Icons

Deliverable

Interactive Services section.

---

## Developer 2

Services Logic

* Data Models
* Interfaces
* Filtering
* CMS-ready structures

Deliverable

Reusable services module.

---

# SPRINT 5

## Developer 1

Projects UI

* Horizontal Scroll
* Project Cards
* Gallery Layout
* Hover Effects
* GSAP

Deliverable

Projects showcase.

---

## Developer 2

Projects Logic

* Categories
* Search
* Filters
* Slugs
* Related Projects
* Data Management

Deliverable

Project module.

---

# SPRINT 6

## Developer 1

Gallery UI

* Masonry Grid
* Lightbox
* Image Animations
* Lazy Loading

Deliverable

Luxury Gallery.

---

## Developer 2

Gallery Logic

* Image Metadata
* Categories
* Search
* Pagination

Deliverable

Gallery module.

---

# SPRINT 7

## Developer 1

Timeline

* GSAP ScrollTrigger
* Timeline Animation
* Process Cards

Deliverable

Process section.

---

## Developer 2

Testimonials

* Testimonial Data
* Ratings
* Video Support
* Carousel Data

Deliverable

Testimonials module.

---

# SPRINT 8

## Developer 1

Before / After

* Slider
* Animations
* Mobile Support

Deliverable

Comparison section.

---

## Developer 2

Blog

* Blog Data
* Categories
* Search
* Pagination
* Markdown support

Deliverable

Blog module.

---

# SPRINT 9

## Developer 1

About Page

* Company Story
* Mission
* Vision
* Team Layout

Deliverable

About page.

---

## Developer 2

Project Detail

* Gallery
* Materials
* Related Projects
* SEO Metadata

Deliverable

Project detail module.

---

# SPRINT 10

## Developer 1

Animation Polish

* Loader
* Cursor
* Micro Interactions
* Page Transition
* Motion Refinement

Deliverable

Production-quality animations.

---

## Developer 2

Optimization

* Image Optimization
* Video Optimization
* Dynamic Imports
* SEO Audit

Deliverable

Performance improvements.

---

# SPRINT 11

## Developer 1

Responsive Design

Desktop

Tablet

Mobile

Ultra Wide

Deliverable

Fully responsive UI.

---

## Developer 2

Accessibility

* Keyboard Navigation
* Focus States
* ARIA Labels
* Screen Reader Support

Deliverable

Accessible application.

---

# SPRINT 12

Both Developers

Final QA

* Bug Fixes
* Integration
* Lighthouse
* Accessibility
* SEO
* Cross Browser Testing
* Deployment

Deliverable

Production release.

---

# DAILY WORKFLOW

Morning

1. Pull latest develop
2. Review assigned issue
3. Start feature branch

During Development

* Commit frequently
* Keep branch focused
* Follow documentation

Evening

* Push branch
* Open Pull Request
* Review teammate's PR
* Merge into develop after approval

---

# AI CODING AGENT RULES

Every AI assistant must:

1. Read AI_MASTER_PROMPT.md.
2. Read all documents in docs/.
3. Respect folder ownership.
4. Never modify files owned by the other developer unless requested.
5. Reuse existing components.
6. Do not duplicate code.
7. Keep the project buildable.
8. Follow coding standards.
9. Maintain consistency with the design system.
10. Explain significant architectural changes.

---

# DEFINITION OF DONE

A task is complete only when:

* Code compiles successfully.
* No TypeScript errors.
* No lint errors.
* Responsive.
* Accessible.
* Matches the design system.
* Uses reusable components.
* Animations follow ANIMATION_GUIDE.md.
* Reviewed by the other developer.
* Merged into develop.

---

# SUCCESS METRIC

Developer 1 focuses on creating a premium user experience.

Developer 2 focuses on creating a robust and scalable application.

Together, the goal is to deliver an award-quality website with clean architecture, consistent design, and production-ready code.

END OF DOCUMENT