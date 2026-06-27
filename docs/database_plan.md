# DATABASE_PLAN.md

# Dream Space Studio

## Centralized Database Architecture v1.0

---

# PURPOSE

This document defines the logical data architecture of the project.

It is **database independent**.

The application must work with:

* PostgreSQL
* MySQL
* MariaDB
* SQLite
* MongoDB
* Supabase
* Firebase
* PlanetScale
* Neon
* Appwrite
* PocketBase
* Prisma
* Drizzle
* Future databases

Never build business logic around a specific database provider.

---

# DATABASE PHILOSOPHY

The database should be:

Scalable

Normalized where appropriate

Secure

Modular

Reusable

Easy to migrate

Cloud independent

---

# ARCHITECTURE

Presentation Layer

↓

API Layer

↓

Business Logic Layer

↓

Repository Layer

↓

Database

The frontend must never communicate directly with database logic.

---

# DOMAIN MODEL

Core Modules

Authentication

↓

Users

↓

Projects

↓

Gallery

↓

Services

↓

Blogs

↓

Testimonials

↓

Team

↓

Leads

↓

Appointments

↓

Newsletter

↓

Media

↓

Settings

↓

Analytics

↓

SEO

↓

Audit Logs

---

# ENTITY RELATIONSHIP

User

↓

creates

↓

Project

↓

contains

↓

Gallery Images

↓

uses

↓

Materials

↓

belongs to

↓

Category

↓

receives

↓

Testimonials

↓

generates

↓

Leads

---

# MASTER ENTITIES

Users

Roles

Permissions

Projects

Project Categories

Project Images

Project Videos

Services

Service Categories

Blogs

Blog Categories

Authors

Tags

Testimonials

Clients

Gallery

Materials

Appointments

Contact Forms

Budget Calculator Requests

Newsletter Subscribers

Media Library

SEO Metadata

Site Settings

Navigation

FAQ

Analytics Events

Notifications

Audit Logs

---

# USER MODULE

Fields

id

name

email

phone

avatar

role

status

createdAt

updatedAt

Relations

Role

Appointments

Projects

Audit Logs

---

# ROLE MODULE

Admin

Editor

Designer

Sales

Content Manager

Client

Future roles should be configurable.

---

# PROJECT MODULE

Fields

id

title

slug

description

categoryId

clientId

location

year

status

budget

coverImage

gallery

video

completionDate

architect

designer

seo

createdAt

updatedAt

Relations

Gallery

Materials

Testimonials

Categories

---

# PROJECT CATEGORY

Residential

Commercial

Office

Restaurant

Villa

Apartment

Retail

Hospitality

Future categories configurable.

---

# GALLERY MODULE

Each image stores

id

projectId

url

alt

width

height

order

featured

caption

metadata

---

# VIDEO MODULE

id

projectId

url

thumbnail

duration

provider

autoplay

order

---

# MATERIAL MODULE

Stores

Marble

Wood

Stone

Glass

Tiles

Wallpaper

Lighting

Fabric

Fields

title

description

image

category

supplier

---

# SERVICE MODULE

Fields

id

title

slug

description

icon

heroImage

seo

order

featured

---

# BLOG MODULE

Fields

id

title

slug

excerpt

content

coverImage

author

category

tags

status

publishedAt

seo

---

# AUTHOR

id

name

avatar

bio

socialLinks

---

# TESTIMONIAL MODULE

Fields

id

clientName

designation

company

projectId

rating

review

image

video

approved

---

# CLIENT MODULE

Stores

Client details

Company

Project history

Testimonials

Lead source

Communication history

---

# CONTACT LEADS

Fields

id

name

email

phone

projectType

budget

message

status

source

assignedTo

createdAt

---

# APPOINTMENTS

Stores

Booking

Date

Time

Consultation Type

Assigned Designer

Status

Notes

---

# NEWSLETTER

email

subscriptionStatus

createdAt

source

---

# FAQ MODULE

Question

Answer

Category

Order

Visibility

---

# TEAM MODULE

Photo

Name

Position

Experience

Biography

Social Links

Display Order

---

# SEO MODULE

Every page stores

Meta Title

Meta Description

Canonical URL

OG Image

Keywords

Schema

Noindex

---

# SETTINGS MODULE

Company Name

Logo

Phone

Email

Address

Social Links

Business Hours

Maps

Brand Colors

Footer

Scripts

Analytics IDs

---

# NAVIGATION MODULE

Main Menu

Footer Menu

Mobile Menu

Quick Links

Order

Visibility

---

# MEDIA LIBRARY

Images

Videos

Documents

Floor Plans

PDF

3D Models

Storage provider independent.

---

# ANALYTICS MODULE

Page Views

Clicks

Conversions

CTA Clicks

Scroll Depth

Form Submissions

Source

Device

Location

---

# NOTIFICATIONS

Email

SMS

WhatsApp

Push

Internal

All notifications should use one centralized service.

---

# AUDIT LOG

Stores

Who changed what

When

Old value

New value

Module

IP

Useful for admin panel.

---

# REPOSITORY PATTERN

Every module should expose:

findAll()

findById()

findBySlug()

create()

update()

delete()

search()

filter()

Never access the database directly from components.

---

# SERVICE LAYER

Business rules belong here.

Example

Create Project

↓

Validate

↓

Upload Media

↓

Generate Slug

↓

Store Database

↓

Invalidate Cache

↓

Return Response

---

# API DESIGN

REST-ready

Future GraphQL ready

Consistent responses

Success

Data

Message

Pagination

Errors

Versionable

---

# CACHING

Support

Redis

Memory Cache

Edge Cache

CDN

Never tie cache to one provider.

---

# FILE STORAGE

Should support

Cloudinary

AWS S3

Supabase Storage

Firebase Storage

DigitalOcean Spaces

Local Storage

Storage must be abstracted.

---

# SEARCH

Architecture should support

Basic Search

Full Text Search

Algolia

Meilisearch

ElasticSearch

Future AI Search

---

# AUTHENTICATION

Provider independent.

Should support

Email

Google

GitHub

Microsoft

OTP

Magic Link

Future SSO

---

# PERMISSIONS

Role Based Access Control (RBAC)

Permission Based Access Control

Future Organization Support

---

# MIGRATIONS

Every schema change must

Be versioned

Be reversible

Avoid breaking changes

---

# BACKUP STRATEGY

Daily backup

Media backup

Configuration backup

Database snapshot

---

# SECURITY

Input validation

Prepared queries / ORM

Encryption for sensitive fields

Secure authentication

Rate limiting

CSRF protection where applicable

Audit logging

Never expose secrets to the client.

---

# SCALABILITY

Support

1 website

↓

10 websites

↓

100 websites

↓

1000+ projects

Without architectural changes.

---

# AI DEVELOPMENT RULES

Before creating any data model:

1. Think in business entities, not tables.
2. Keep modules independent.
3. Prefer interfaces over vendor-specific types.
4. Separate business logic from persistence.
5. Never hardcode database providers.
6. Design relationships first.
7. Keep APIs stable.
8. Make storage provider replaceable.
9. Keep authentication provider replaceable.
10. Ensure future migrations are possible.

---

# GOLDEN RULE

The application owns the business logic.

The database is only a persistence layer.

If tomorrow the database changes, the application architecture should remain largely unchanged.

---

END OF DOCUMENT