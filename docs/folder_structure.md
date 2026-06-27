# FOLDER_STRUCTURE.md

# Dream Space Studio — Project Architecture v1.0

---

# PURPOSE

This document defines the complete folder architecture of the project.

Goals:

* Scalability
* Reusability
* Maintainability
* Easy onboarding
* AI-friendly organization
* Future CMS support

Every developer and AI assistant must follow this structure.

---

# ROOT STRUCTURE

project/

├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── providers/
├── services/
├── stores/
├── styles/
├── types/
├── utils/
├── constants/
├── data/
├── animations/
├── assets/
├── public/
├── sanity/
├── supabase/
├── scripts/
├── docs/
├── tests/
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json

---

# APP ROUTER

app/

layout.tsx

page.tsx

loading.tsx

error.tsx

not-found.tsx

globals.css

sitemap.ts

robots.ts

---

# ROUTES

app/

about/

services/

projects/

projects/[slug]/

gallery/

process/

blog/

blog/[slug]/

team/

testimonials/

faq/

contact/

book-consultation/

privacy-policy/

terms/

api/

---

# API ROUTES

app/api/

contact/

newsletter/

quote/

consultation/

upload/

webhook/

Each endpoint contains:

route.ts

validation.ts

types.ts (optional)

---

# COMPONENTS

components/

ui/

layout/

navigation/

footer/

hero/

shared/

typography/

buttons/

forms/

cards/

gallery/

timeline/

modals/

animations/

icons/

maps/

social/

media/

providers/

---

# UI COMPONENTS

components/ui/

button.tsx

input.tsx

textarea.tsx

dialog.tsx

sheet.tsx

accordion.tsx

carousel.tsx

badge.tsx

separator.tsx

Only shared primitives belong here.

---

# LAYOUT COMPONENTS

components/layout/

PageContainer.tsx

Section.tsx

Grid.tsx

Stack.tsx

Spacer.tsx

MaxWidth.tsx

---

# NAVIGATION

components/navigation/

Navbar.tsx

DesktopMenu.tsx

MobileMenu.tsx

NavLink.tsx

Logo.tsx

CTAButton.tsx

---

# HERO

components/hero/

HeroSection.tsx

HeroVideo.tsx

HeroContent.tsx

HeroButtons.tsx

HeroStats.tsx

ScrollIndicator.tsx

---

# SHARED

components/shared/

SectionTitle.tsx

SectionSubtitle.tsx

EmptyState.tsx

LoadingSpinner.tsx

PageHeading.tsx

ErrorMessage.tsx

Divider.tsx

---

# CARDS

components/cards/

ProjectCard.tsx

ServiceCard.tsx

GlassCard.tsx

TestimonialCard.tsx

MaterialCard.tsx

StatisticCard.tsx

BlogCard.tsx

AwardCard.tsx

TeamCard.tsx

---

# FORMS

components/forms/

ContactForm.tsx

NewsletterForm.tsx

BudgetCalculator.tsx

ConsultationForm.tsx

QuoteForm.tsx

TextInput.tsx

PhoneInput.tsx

SelectInput.tsx

TextArea.tsx

SubmitButton.tsx

---

# GALLERY

components/gallery/

MasonryGallery.tsx

GalleryItem.tsx

Lightbox.tsx

BeforeAfterSlider.tsx

ProjectCarousel.tsx

ImageViewer.tsx

---

# TIMELINE

components/timeline/

Timeline.tsx

TimelineItem.tsx

TimelineLine.tsx

TimelineMarker.tsx

---

# MODALS

components/modals/

VideoModal.tsx

ImageModal.tsx

SuccessModal.tsx

ConfirmModal.tsx

---

# SOCIAL

components/social/

InstagramFeed.tsx

SocialLinks.tsx

FloatingWhatsApp.tsx

ShareButtons.tsx

---

# MAPS

components/maps/

GoogleMap.tsx

OfficeCard.tsx

LocationMarker.tsx

---

# FEATURES

features/

home/

projects/

services/

gallery/

contact/

budget/

blog/

faq/

consultation/

Each feature owns:

components/

hooks/

types/

data/

utils/

animations/

Example:

features/projects/

components/

ProjectGrid.tsx

ProjectFilter.tsx

ProjectHero.tsx

hooks/

useProjects.ts

types/

project.ts

utils/

filterProjects.ts

animations/

projectAnimations.ts

---

# HOOKS

hooks/

useScroll.ts

useLenis.ts

useNavbar.ts

useCursor.ts

useMediaQuery.ts

useWindowSize.ts

useIntersection.ts

useParallax.ts

useCounter.ts

Only reusable hooks.

---

# ANIMATIONS

animations/

hero/

navigation/

cards/

gallery/

timeline/

text/

images/

loader/

page/

shared/

Each folder contains

gsap.ts

variants.ts

constants.ts

helpers.ts

---

# LIB

lib/

gsap/

sanity/

supabase/

seo/

analytics/

email/

utils/

config/

Contains third-party integrations.

---

# SERVICES

services/

project.service.ts

blog.service.ts

contact.service.ts

cms.service.ts

email.service.ts

gallery.service.ts

Business logic lives here.

---

# TYPES

types/

project.ts

service.ts

blog.ts

testimonial.ts

team.ts

faq.ts

gallery.ts

forms.ts

api.ts

global.ts

---

# CONSTANTS

constants/

navigation.ts

colors.ts

animations.ts

breakpoints.ts

metadata.ts

site.ts

social.ts

---

# DATA

Temporary static data only.

data/

projects.ts

services.ts

faq.ts

testimonials.ts

team.ts

Replace with CMS later.

---

# STYLES

styles/

globals.css

typography.css

animations.css

utilities.css

Keep CSS minimal.

Tailwind is primary.

---

# PROVIDERS

providers/

ThemeProvider.tsx

LenisProvider.tsx

AnimationProvider.tsx

AnalyticsProvider.tsx

---

# STORES

Only if needed.

stores/

uiStore.ts

navigationStore.ts

Never store server data here.

---

# UTILS

utils/

formatDate.ts

slugify.ts

truncate.ts

scroll.ts

calculateBudget.ts

validatePhone.ts

Pure utility functions only.

---

# ASSETS

assets/

fonts/

icons/

logos/

patterns/

illustrations/

textures/

Use imports where appropriate.

---

# PUBLIC

public/

images/

videos/

favicons/

manifest/

robots.txt

Place only static assets here.

---

# SANITY

sanity/

schemas/

queries/

client.ts

types/

plugins/

---

# SUPABASE

supabase/

client.ts

server.ts

types.ts

queries/

---

# DOCS

docs/

PROJECT_CONTEXT.md

DESIGN_SYSTEM.md

COMPONENT_GUIDE.md

ANIMATION_GUIDE.md

CODING_RULES.md

FOLDER_STRUCTURE.md

CMS_STRUCTURE.md

SEO_GUIDE.md

DATABASE_PLAN.md

TODO.md

README.md

---

# TESTS

tests/

unit/

integration/

e2e/

fixtures/

---

# IMPORT ORDER

1 React

2 Next.js

3 External libraries

4 Internal components

5 Hooks

6 Services

7 Utils

8 Types

9 Constants

10 Styles

---

# FILE SIZE GUIDELINES

Component

Prefer under 250 lines.

Hook

Prefer under 150 lines.

Utility

Prefer under 100 lines.

Split responsibilities when files become difficult to understand.

---

# FEATURE RULES

Every large feature owns:

Components

Animations

Hooks

Types

Utils

Data

Avoid putting feature-specific logic in global folders.

---

# REUSABILITY

Shared logic

→ hooks/

Shared UI

→ components/

Feature logic

→ features/

Business logic

→ services/

Utilities

→ utils/

Configuration

→ constants/

External integrations

→ lib/

---

# FUTURE EXPANSION

Architecture supports:

Sanity CMS

Supabase

Authentication

Admin Dashboard

Quotation Management

Lead CRM

Booking System

Blog

Media Library

Client Portal

Analytics Dashboard

Internationalization (i18n)

PWA

---

# AI DEVELOPMENT RULES

Before creating a file:

1. Check whether a similar file already exists.
2. Reuse existing folders.
3. Keep features isolated.
4. Keep shared logic in shared folders.
5. Never duplicate utilities.
6. Keep imports clean.
7. Maintain folder consistency.
8. Ensure new files fit the documented architecture.
9. Prefer composition over inheritance.
10. Leave the project in a buildable state.

---

END OF DOCUMENT