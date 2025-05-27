# Roamio FlutterFlow Layout Guide

## Theme & Colors
- Primary: #007AFF (Roamio Blue)
- Secondary: #000000 (Black)
- Background: #FFFFFF
- Text: #000000
- Text Secondary: #666666
- Card Background: #FFFFFF
- Card Shadow: rgba(0, 0, 0, 0.1)

## Typography
- Headings: Roboto Bold
- Body: Roboto Regular
- Buttons: Roboto Medium

## Layout Components

### 1. Bottom Navigation
- Home Tab
- Explore Tab
- Events Tab
- Profile Tab

### 2. Home Screen
- App Bar with logo
- Search bar
- Featured Events carousel
- Upcoming Events list
- Category filters

### 3. Event Card
- Event image (16:9)
- Title
- Date & Time
- Location
- RSVP button
- Accessibility indicator

### 4. Explore Screen
- Map view (Mapbox)
- Event pins
- Filter overlay
- Search bar
- Location button

### 5. Profile Screen
- Profile header
- Interests section
- Accessibility preferences
- Schedule settings
- Notifications settings

## Component Specifications

### Event Card
```
Container
├── Image (16:9)
├── Content
│   ├── Title (Roboto Bold, 18px)
│   ├── Date (Roboto Regular, 14px)
│   ├── Location (Roboto Regular, 14px)
│   └── RSVP Button
└── Shadow
```

### Bottom Navigation
```
Container
├── Home Icon
├── Explore Icon
├── Events Icon
└── Profile Icon
```

### Search Bar
```
Container
├── Search Icon
├── Text Field
└── Filter Button
```

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - Small: 320px
  - Medium: 375px
  - Large: 414px
  - XL: 428px

## Animations
- Page transitions: Slide
- Card interactions: Scale
- Button feedback: Opacity
- Loading states: Shimmer

## Accessibility
- Minimum touch target: 44x44px
- Text contrast ratio: 4.5:1
- Screen reader support
- Dynamic text sizing 