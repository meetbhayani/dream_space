# COMPONENT_GUIDE.md

# Dream Space Studio - Component Library v1.0

---

# PURPOSE

This document defines every reusable component used throughout the website.

Goals:

* Maximum reusability
* Clean architecture
* Consistent UI
* Easy CMS integration
* Maintainable code
* Production-ready components

Never duplicate UI.

Always compose from existing components.

---

# COMPONENT ARCHITECTURE

Use Atomic Design principles.

Atoms
↓

Molecules
↓

Organisms
↓

Templates
↓

Pages

---

# FOLDER STRUCTURE

src/

components/

ui/

layout/

navigation/

hero/

sections/

cards/

gallery/

forms/

animations/

shared/

footer/

Each folder contains only related components.

---

# COMPONENT NAMING

Good

HeroSection

SectionTitle

ProjectCard

GlassCard

ServiceCard

LuxuryButton

ImageReveal

Bad

Card1

Button2

HeroNew

TempComponent

Test

---

# GLOBAL COMPONENT RULES

Every component must:

* Be reusable
* Be responsive
* Accept props
* Use TypeScript
* Support dark theme
* Support animation
* Avoid inline styles
* Follow design system

---

# LAYOUT COMPONENTS

## PageContainer

Purpose

Global content wrapper.

Max Width

1280px

Responsibilities

Center content

Responsive padding

Section spacing

---

## Section

Purpose

Reusable section wrapper.

Props

title

subtitle

background

children

id

padding

---

## Grid

Responsive grid system.

Supports

1

2

3

4

Columns

Gap configurable.

---

# NAVIGATION

Navbar

Floating

Glass

Blur

Sticky

Scroll detection

Desktop

Mobile

Props

logo

links

cta

transparent

---

MobileMenu

Fullscreen overlay.

Animated.

Supports nested links.

---

NavigationLink

Animated underline.

Active indicator.

Hover animation.

---

# HERO COMPONENTS

HeroSection

Full viewport.

Supports

Video

Image

Overlay

Particles

Buttons

Stats

Scroll indicator

Props

title

subtitle

backgroundVideo

backgroundImage

buttons

statistics

---

HeroBadge

Luxury label.

Used above heading.

---

HeroButtons

Supports

Primary

Secondary

Text button

---

ScrollIndicator

Animated mouse icon.

Hidden on mobile if needed.

---

# TYPOGRAPHY

DisplayTitle

SectionTitle

SectionSubtitle

Paragraph

Caption

Label

NumberDisplay

All typography must use the design system.

---

# BUTTONS

PrimaryButton

SecondaryButton

GhostButton

OutlineButton

IconButton

FloatingButton

Rules

Rounded

Accessible

Loading state

Disabled state

Hover animation

Focus state

---

# CARD COMPONENTS

BaseCard

Every card extends this.

Props

children

className

hover

glass

padding

---

GlassCard

Blur

Rounded

Luxury border

Hover glow

---

ProjectCard

Image

Category

Location

Title

Description

Year

Hover

Image zoom

Overlay reveal

Button

---

ServiceCard

Icon

Title

Description

Hover image

Expand animation

---

MaterialCard

Material image

Title

Preview

Fullscreen modal

---

TestimonialCard

Photo

Name

Rating

Review

Project

Video support

---

StatisticCard

Animated number

Label

Icon

Gold divider

---

BlogCard

Featured image

Category

Date

Read time

Title

Button

---

TeamCard

Photo

Name

Role

Bio

Social links

---

AwardCard

Logo

Title

Year

Description

---

# GALLERY COMPONENTS

MasonryGallery

Pinterest layout.

Responsive.

Infinite loading.

---

GalleryItem

Large image

Hover animation

Metadata

Lightbox

---

Lightbox

Fullscreen

Keyboard support

Swipe

Zoom

Download disabled

---

BeforeAfterSlider

Drag handle

Smooth animation

Responsive

---

ProjectCarousel

Embla Carousel.

Keyboard navigation.

Touch support.

---

# FORM COMPONENTS

TextInput

Textarea

Select

Checkbox

Radio

Switch

DatePicker

PhoneInput

UploadField

SearchInput

Validation via Zod.

React Hook Form.

---

ContactForm

Name

Email

Phone

Project Type

Message

Submit

Loading state

Success state

Error state

---

NewsletterForm

Email

Submit

Success animation

---

BudgetCalculator

Area

Style

Bedrooms

Kitchen

Bathrooms

Estimate

Animated results

---

# TIMELINE COMPONENTS

Timeline

TimelineItem

ProgressLine

YearMarker

Animated on scroll.

---

# FAQ COMPONENTS

Accordion

AccordionItem

Expandable

Keyboard accessible

Animated height

---

# VIDEO COMPONENTS

HeroVideo

Autoplay

Muted

Loop

Optimized

Poster image

---

VideoModal

Fullscreen

Keyboard support

Lazy loaded

---

# IMAGE COMPONENTS

OptimizedImage

Next/Image wrapper.

Blur placeholder.

Lazy loading.

Fallback.

---

ImageReveal

Reveal animation.

Scroll trigger.

---

ParallaxImage

Depth effect.

GSAP controlled.

---

# ANIMATION COMPONENTS

FadeIn

SlideUp

SlideLeft

SlideRight

ScaleIn

BlurReveal

TextReveal

ImageReveal

RotateIn

StaggerChildren

Parallax

MaskReveal

ClipReveal

CounterAnimation

Every animation component should be reusable.

---

# CURSOR COMPONENTS

LuxuryCursor

MagneticButton

CursorFollower

Desktop only.

---

# SOCIAL COMPONENTS

InstagramFeed

SocialLinks

ShareButtons

FloatingWhatsApp

---

# MAP COMPONENTS

GoogleMap

OfficeCard

LocationMarker

DirectionsButton

---

# FOOTER COMPONENTS

Footer

FooterLinks

Newsletter

SocialIcons

ContactInfo

Copyright

---

# MODAL COMPONENTS

ImageModal

VideoModal

SuccessModal

ConfirmationModal

Reusable

Accessible

Animated

---

# LOADER COMPONENTS

SiteLoader

ProgressBar

LineAnimation

LogoAnimation

Only shown during initial page load.

---

# CMS READY COMPONENTS

Every content component must receive data through props.

Never hardcode:

Projects

Services

Testimonials

Blogs

Gallery

Team

FAQ

Later these will come from Sanity CMS.

---

# RESPONSIVE BEHAVIOR

Desktop

Full interactions.

Tablet

Simplified layouts.

Mobile

Stacked layouts.

Reduced animations.

Touch-friendly controls.

---

# PERFORMANCE RULES

Lazy load images.

Lazy load videos.

Dynamic imports for heavy components.

Memoize expensive components.

Avoid unnecessary re-renders.

---

# ACCESSIBILITY

Keyboard navigation

ARIA labels

Visible focus

Alt text

Proper headings

Semantic HTML

Screen-reader friendly

---

# TESTING CHECKLIST

Every component must be tested for:

Desktop

Tablet

Mobile

Dark theme

Keyboard navigation

Loading state

Empty state

Error state

Animation performance

CMS compatibility

---

# COMPONENT DEVELOPMENT RULES

Before creating a new component:

1. Check if one already exists.
2. Extend existing components where possible.
3. Keep props simple.
4. Prefer composition over inheritance.
5. Avoid duplicated markup.
6. Write clear TypeScript interfaces.
7. Export components consistently.
8. Keep business logic outside presentational components.
9. Make components animation-ready.
10. Document complex props.

---

# AI INSTRUCTIONS

When an AI creates a new component it must:

* Reuse existing components first.
* Follow DESIGN_SYSTEM.md.
* Follow PROJECT_CONTEXT.md.
* Use TypeScript.
* Use Tailwind CSS.
* Use shadcn/ui when appropriate.
* Keep components modular.
* Avoid unnecessary dependencies.
* Never generate placeholder or temporary components.
* Ensure components are production-ready and CMS-compatible.

End of Component Guide.