# Tzu Chi University PT Department — Design System

## Philosophy
Medical, academic, and caring. Reflects the Buddhist/Tzu Chi humanitarian spirit of compassion, joy, and equanimity (慈悲喜捨). Clean, trustworthy, and warm.

## Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#00695C` | Deep teal — trust, care, nature |
| Primary Container | `#00695C` | Filled buttons, active states |
| On Primary | `#FFFFFF` | Text/icons on primary |
| On Primary Container | `#94E5D5` | Text on primary container |
| Inverse Primary | `#84D5C5` | Inverse surface text |
| Accent / Secondary | `#4DB6AC` | Soft teal — calm, healing |
| Secondary | `#006A63` | Complementary actions |
| Secondary Container | `#8BF1E6` | Secondary filled backgrounds |
| On Secondary | `#FFFFFF` | Text on secondary |
| Tertiary | `#703321` | Accent contrast (warm brown) |
| Tertiary Container | `#8D4A36` | Warm accent backgrounds |
| Warm Neutral | `#F5F5F5` | Warm grey — backgrounds, surfaces |
| Text Primary | `#212121` | Near-black — high readability |
| Text Secondary | `#757575` | Mid-grey — supporting text |
| Background | `#FFFFFF` | Pure white — clinical clarity |
| On Background | `#181C1B` | Text on background |
| Surface | `#FAFAFA` | Off-white — cards, panels |
| Surface Dim | `#D7DBD8` | Dimmer surface variant |
| Surface Bright | `#F7FAF8` | Brighter surface variant |
| Surface Container Lowest | `#FFFFFF` | Lowest container layer |
| Surface Container Low | `#F1F4F2` | Low container layer |
| Surface Container | `#EBEFEC` | Default container layer |
| Surface Container High | `#E5E9E6` | High container layer |
| Surface Container Highest | `#E0E3E1` | Highest container layer |
| Surface Variant | `#E0E3E1` | Alternative surface tone |
| On Surface | `#181C1B` | Text on surface |
| On Surface Variant | `#3E4946` | Secondary text on surface |
| Inverse Surface | `#2D3130` | Dark mode surface inverse |
| Inverse On Surface | `#EEF1EF` | Light text on inverse surface |
| Outline | `#6E7976` | Borders, dividers |
| Outline Variant | `#BEC9C5` | Subtle borders |
| Error | `#B00020` | Standard Material error red |
| On Error | `#FFFFFF` | Text on error |
| Error Container | `#FFDAD6` | Error background |
| On Error Container | `#93000A` | Text on error container |
| On Accent | `#FFFFFF` | Text/icons on accent |
| Dark Background | `#121212` | Dark mode background |
| Dark Surface | `#1E1E1E` | Dark mode surface |
| Dark Text Primary | `#E0E0E0` | Dark mode primary text |
| Dark Text Secondary | `#A0A0A0` | Dark mode secondary text |

## Fixed Colors (for consistent theming)
| Token | Value |
|-------|-------|
| Primary Fixed | `#A0F2E1` |
| Primary Fixed Dim | `#84D5C5` |
| On Primary Fixed | `#00201B` |
| On Primary Fixed Variant | `#005046` |
| Secondary Fixed | `#8EF4E9` |
| Secondary Fixed Dim | `#71D7CD` |
| On Secondary Fixed | `#00201D` |
| On Secondary Fixed Variant | `#00504A` |
| Tertiary Fixed | `#FFDBD1` |
| Tertiary Fixed Dim | `#FFB59F` |
| On Tertiary Fixed | `#3A0B01` |
| On Tertiary Fixed Variant | `#723522` |

## Typography
- **Font Family**: Noto Sans TC, sans-serif
- **Style**: Clean, highly legible, academic tone
- **Language support**: Chinese (zh-TW) + English bilingual

### Type Scale
| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Display Large | 57px | 400 | 64px | -0.25px |
| Headline Large | 32px | 400 | 40px | 0 |
| Headline Large Mobile | 28px | 400 | 36px | 0 |
| Title Large | 22px | 500 | 28px | 0 |
| Body Large | 16px | 400 | 24px | 0.5px |
| Body Medium | 14px | 400 | 20px | 0.25px |
| Label Large | 14px | 500 | 20px | 0.1px |
| Label Small | 11px | 500 | 16px | 0.5px |

## Shapes
- **Corner Radius**: 12px — soft, approachable cards and buttons
- **Rounded Scale**: sm (4px), md (12px), lg (16px), xl (24px), full (9999px)

## Layout & Spacing
- **Container Max Width**: 1280px
- **Desktop Grid**: 12-column, 24px gutters, 32px margins
- **Tablet Grid**: 8-column, 24px gutters
- **Mobile Grid**: 4-column, 16px margins
- **Spacing Unit**: 8px base rhythm
  - xs: 4px
  - sm: 8px
  - md: 16px
  - lg: 24px
  - xl: 48px

## Elevation & Depth
| Elevation | Shadow | Usage |
|-----------|--------|-------|
| Elevation 1 (Cards) | `0 2px 8px rgba(0,0,0,0.08)` | Resting cards |
| Elevation 2 (Nav/App Bar) | `0 4px 12px rgba(0,0,0,0.05)` | Navigation bars |
| Elevation 3 (Dialogs/Menus) | `0 8px 24px rgba(0,0,0,0.12)` | Overlays, dialogs |

## Animations
- Spring physics via Framer Motion: smooth, natural transitions
- Spring stiffness 100, damping 15 for UI element entrances
- Gentle hover lifts on cards (translateY -2px, shadow increase)
- Fade + slide-in for page transitions

## Dark Mode
| Token | Light | Dark |
|-------|-------|------|
| Background | `#FFFFFF` | `#121212` |
| Surface | `#FAFAFA` | `#1E1E1E` |
| Text Primary | `#212121` | `#E0E0E0` |
| Text Secondary | `#757575` | `#A0A0A0` |
| Primary | `#00695C` | `#00695C` |
| Accent | `#4DB6AC` | `#4DB6AC` |

## Component Tokens
| Component | Token |
|-----------|-------|
| Button | 12px radius, primary fill, white text, scale-down on press |
| Card | 12px radius, white surface, shadow: `0 2px 8px rgba(0,0,0,0.08)` |
| Input | 8px radius, light border, focus ring in accent color |
| Link | Accent color, underline on hover |
| Avatar | Circular, 64px default, optional border in primary |
| Filter Chip | 9999px radius, outline style, active = primary fill |
| Timeline | Vertical line in primary, dot markers in accent |

## Design Principles
1. **Compassion** — every interaction should feel caring and supportive
2. **Clarity** — information should be easy to find and understand
3. **Calm** — avoid visual noise; use whitespace and soft colors
4. **Trust** — professional medical/academic aesthetic
5. **Accessibility** — WCAG 2.1 AA compliant contrast ratios

## Screen Designs
Generated screens in Stitch project `2012845011721061566`:
- **Home** (`screens/7e73deb0aaa04550beddde05d18528ef`) — Hero, stats, news feed, footer
- **Faculty** (`screens/90148b9b7df346de8cbf97bed7c60213`) — Filter bar, faculty card grid
- **About** (`screens/1786c594a758425ea20661905d0aee62`) — Hero, mission, timeline, pillars
