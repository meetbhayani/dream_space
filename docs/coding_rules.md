# CODING_RULES.md

# Dream Space Studio — Engineering Standards v1.0

---

# PURPOSE

This document defines the coding standards for the entire project.

Every developer and every AI assistant must follow these rules.

The goals are:

* Readable code
* Maintainable architecture
* High performance
* Scalability
* Consistency
* Production-ready quality

Never sacrifice maintainability for speed.

---

# TECHNOLOGY STACK

Framework

Next.js 15 (App Router)

Language

TypeScript

Styling

Tailwind CSS

UI Library

shadcn/ui

Animation

GSAP

Framer Motion

Smooth Scroll

Lenis

Forms

React Hook Form

Validation

Zod

Database (Future)

Supabase

CMS (Future)

Sanity

Deployment

Vercel

---

# GENERAL PRINCIPLES

Code must be:

Simple

Readable

Reusable

Scalable

Predictable

Avoid clever code.

Prefer clear code.

---

# TYPESCRIPT RULES

Always use TypeScript.

Never use `any`.

Prefer:

unknown

interfaces

type aliases

generic types

Always define props explicitly.

Example

interface HeroProps {
title: string
subtitle: string
}

---

# FILE NAMING

Components

PascalCase

HeroSection.tsx

LuxuryButton.tsx

ProjectCard.tsx

Hooks

camelCase

useScroll.ts

useCursor.ts

Utilities

camelCase

formatDate.ts

calculateBudget.ts

Types

PascalCase

Project.ts

Service.ts

Constants

UPPER_CASE where appropriate

---

# FOLDER STRUCTURE

src/

app/

components/

hooks/

lib/

services/

utils/

types/

constants/

styles/

animations/

data/

providers/

contexts/

schemas/

Do not create unnecessary folders.

---

# COMPONENT RULES

One component = one responsibility.

Keep components small.

If a component exceeds roughly 200–300 lines because it mixes layout, state, and animations, consider splitting it into smaller components or custom hooks.

Never duplicate UI.

Prefer composition.

---

# CLIENT / SERVER COMPONENTS

Default

Server Component

Use Client Components only when needed.

Examples

Animation

Forms

State

Event handlers

Browser APIs

Avoid unnecessary `"use client"`.

---

# IMPORT RULES

Order imports consistently.

1

React

2

Next.js

3

External libraries

4

Internal components

5

Hooks

6

Utilities

7

Types

8

Styles

Never use wildcard imports unless necessary.

---

# PATH ALIASES

Use

@

Example

@/components

@/hooks

@/lib

Avoid long relative paths.

---

# STYLING RULES

Only Tailwind CSS.

Never write inline CSS.

Avoid large global CSS files.

Use utility classes.

Extract repeated patterns into reusable components.

---

# CLASS MANAGEMENT

Use

clsx

and

tailwind-merge

Never concatenate class strings manually.

---

# SHADCN COMPONENTS

Use shadcn/ui as the foundation.

Customize to match the design system.

Never use default styling without modification.

---

# STATE MANAGEMENT

Local state

useState

Complex logic

useReducer

Shared UI state

Context

Server state

Use server components and server actions where appropriate.

Avoid unnecessary global state.

---

# CUSTOM HOOKS

Move repeated logic into hooks.

Examples

useScrollProgress

useCursor

useWindowSize

useMediaQuery

useNavbar

Hooks must not render UI.

---

# API RULES

Route handlers belong in

app/api/

Keep handlers small.

Validate input with Zod.

Return consistent JSON.

Do not expose sensitive data.

---

# ERROR HANDLING

Never ignore errors.

Always provide:

User-friendly message

Developer-friendly logs

Graceful fallback UI

---

# FORMS

React Hook Form

*

Zod

Requirements

Validation

Loading state

Success state

Error state

Accessible labels

Keyboard support

---

# IMAGE RULES

Use Next/Image.

Never use img unless required.

Always include

alt

width

height (or fill)

priority only when justified

Lazy load below-the-fold content.

---

# VIDEO RULES

Autoplay

Muted

Loop

Poster image

Lazy load

Compress before deployment.

---

# ANIMATION RULES

GSAP

Scroll

Timelines

Hero

Framer Motion

Buttons

Cards

Page transitions

Never animate layout properties if transforms or opacity will achieve the same effect.

---

# PERFORMANCE RULES

Lazy load heavy components.

Dynamic imports for large features.

Memoize expensive calculations only when profiling indicates a benefit.

Avoid unnecessary re-renders.

Minimize client-side JavaScript.

Target 60 FPS.

---

# ACCESSIBILITY

Semantic HTML

Keyboard navigation

Visible focus

ARIA labels

Alt text

Color contrast

Support prefers-reduced-motion

---

# SEO RULES

Every page needs

Title

Description

Open Graph image

Canonical URL

Structured data where appropriate

Generate sitemap.

Generate robots.txt.

---

# SECURITY

Never expose secrets.

Use environment variables.

Validate all user input.

Sanitize rich text from CMS if applicable.

Escape user-generated content where required.

Do not trust client-side validation alone.

---

# ENVIRONMENT VARIABLES

Use

.env.local

Never commit secrets.

Document required variables in README.

---

# LOGGING

Development

Console logs are acceptable.

Production

Remove unnecessary logs.

Use structured error reporting when needed.

---

# COMMENTS

Write comments only when the intent is not obvious.

Do not comment every line.

Code should explain itself.

---

# TESTING EXPECTATIONS

Every feature should be verified for:

Desktop

Tablet

Mobile

Dark mode

Keyboard navigation

Slow network

Reduced motion

Cross-browser compatibility

---

# GIT WORKFLOW

Branch naming

feature/navbar

feature/gallery

feature/contact-form

fix/mobile-menu

Commit format

feat: add luxury hero animation

fix: resolve navbar scroll flicker

refactor: extract project card component

style: improve typography spacing

docs: update animation guide

---

# PULL REQUEST CHECKLIST

Before merging:

Code builds

Lint passes

Types pass

Responsive verified

Accessibility checked

Performance reviewed

No duplicate components

No console errors

---

# CODE QUALITY

Prefer early returns.

Avoid deeply nested logic.

Keep functions focused.

Avoid magic numbers.

Extract constants.

Use descriptive variable names.

---

# REUSABILITY

Before creating anything:

Check if it already exists.

If yes

Reuse.

If no

Create a reusable solution.

Never duplicate.

---

# CMS PREPARATION

Never hardcode business content.

Projects

Services

Testimonials

Blogs

FAQ

Gallery

Team

Should all be driven by props or data sources.

Prepare interfaces for future Sanity integration.

---

# AI DEVELOPMENT RULES

Every AI assistant must:

1. Analyze the existing project first.
2. Read PROJECT_CONTEXT.md.
3. Read DESIGN_SYSTEM.md.
4. Read COMPONENT_GUIDE.md.
5. Read ANIMATION_GUIDE.md.
6. Follow these coding rules.
7. Do not overwrite working code.
8. Reuse existing components.
9. Write TypeScript only.
10. Keep code production-ready.
11. Explain significant architectural changes.
12. Maintain consistent naming.
13. Avoid introducing unnecessary dependencies.
14. Leave the project in a buildable state after every change.

---

# DEFINITION OF PRODUCTION READY

Production-ready means:

No placeholder code

No TODOs left in committed features

No duplicated logic

No dead code

No lint errors

No TypeScript errors

Responsive

Accessible

Optimized

Scalable

Easy to extend

Easy to maintain

Easy to hand over

---

END OF DOCUMENT