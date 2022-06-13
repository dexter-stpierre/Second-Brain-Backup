---
aliases: [Introducing MUI Core V5.0 - MUI, Introducing MUI Core V5.0 - MUI]
author: mui.com
---
# Introducing MUI Core V5.0 - MUI by mui.com

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[mui.com]]
- Full Title: Introducing MUI Core V5.0 - MUI
- Category: #articles
- Source: [[{source}]]
- URL: https://mui.com/blog/mui-core-v5/

## Highlights
### New highlights synced
- We have made styled() the lowest level primitive to add styles. This API is already known by many. ([View Highlight](https://instapaper.com/read/1446438295/17523343)) [Open in Readwise](https://readwise.io/open/229730440) ^rw229730440
    - Note: This would make migration WAY easier ^rw229730440-note
    - Date:: [[September 21st, 2021, Tuesday]]
- @mui/styled-engine-sc: implemented with styled-components ([View Highlight](https://instapaper.com/read/1446438295/17523392)) [Open in Readwise](https://readwise.io/open/229730441) ^rw229730441
    - Note: Can use styled components as the mui implementation, decreasing our bundle size ^rw229730441-note
    - Date:: [[September 21st, 2021, Tuesday]]
- For the last couple of months, we have been sponsoring emotion with a $100/month grant. We are now increasing this amount to $1,000/month. It's in our best interest to help ensure the library keeps pushing the envelope, leading the state of the art in a competitive space. ([View Highlight](https://instapaper.com/read/1446438295/17523401)) [Open in Readwise](https://readwise.io/open/229730442) ^rw229730442
    - Note: Might be worth moving to emotion though, if it can be done with VERY low risk ^rw229730442-note
    - Date:: [[September 21st, 2021, Tuesday]]
- The first immediate benefit of the move to emotion was performance. The <Box> component is x5-x10 more performant in v5, compared to v4. ([View Highlight](https://instapaper.com/read/1446438295/17523402)) [Open in Readwise](https://readwise.io/open/229730443) ^rw229730443
    - Date:: [[September 21st, 2021, Tuesday]]
- In v5, we have pushed the solution one step further with the sx prop. The prop is now available on all the components (made possible by emotion). It exposes a superset of the CSS API: the normal CSS properties, shorthands, and media query helpers. ([View Highlight](https://instapaper.com/read/1446438295/17523514)) [Open in Readwise](https://readwise.io/open/229730444) ^rw229730444
    - Note: This would be a good way to handle a lot of one off situations ^rw229730444-note
    - Date:: [[September 21st, 2021, Tuesday]]
- We have started working on this exact problem, isolating the logic of the Material Design components into hooks and unstyled components. While the effort is still in alpha, you can already find the first building blocks in a new unstyled package. ([View Highlight](https://instapaper.com/read/1446438295/17523556)) [Open in Readwise](https://readwise.io/open/229730445) ^rw229730445
    - Note: This is really interesting. Opens more flexibility if design doesn’t want to use their components ^rw229730445-note
    - Date:: [[September 21st, 2021, Tuesday]]
- The date range picker will be part of the Pro plan, while the other date picker components are MIT licensed. ([View Highlight](https://instapaper.com/read/1446438295/17523597)) [Open in Readwise](https://readwise.io/open/229730446) ^rw229730446
    - Note: Might need the pro plan here ^rw229730446-note
    - Date:: [[September 21st, 2021, Tuesday]]
- The Material Design team at Google has released 600 new icons in five different themes since we released v4. We have made them available in the @mui/icons-material package. ([View Highlight](https://instapaper.com/read/1446438295/17523602)) [Open in Readwise](https://readwise.io/open/229730447) ^rw229730447
    - Note: More icons!!! ^rw229730447-note
    - Date:: [[September 21st, 2021, Tuesday]]
- We have introduced a new <Stack> component to handle one-dimensional layouts. It's's similar to how Figma handles auto-layout. ([View Highlight](https://instapaper.com/read/1446438295/17523604)) [Open in Readwise](https://readwise.io/open/229730448) ^rw229730448
    - Note: Very useful parody now that we are using figma ^rw229730448-note
    - Date:: [[September 21st, 2021, Tuesday]]
- LoadingButton. It does what you would expect. It renders the Button with a configurable loading/pending state. ([View Highlight](https://instapaper.com/read/1446438295/17523608)) [Open in Readwise](https://readwise.io/open/229730449) ^rw229730449
    - Date:: [[September 21st, 2021, Tuesday]]
- TrapFocus. This component traps the keyboard focus within a DOM node. For example, it's used by the Modal to prevent tabbing out of the component for accessibility reasons. ([View Highlight](https://instapaper.com/read/1446438295/17523611)) [Open in Readwise](https://readwise.io/open/229730450) ^rw229730450
    - Date:: [[September 21st, 2021, Tuesday]]
- Masonry. One great use case for this component is when using the Grid component leads to wasted space. It's frequently used in dashboards. ([View Highlight](https://instapaper.com/read/1446438295/17523617)) [Open in Readwise](https://readwise.io/open/229730451) ^rw229730451
    - Note: Is this a Pinterest layout??? ^rw229730451-note
    - Date:: [[September 21st, 2021, Tuesday]]
- We have used all the tools at our disposal. We have worked with the React core team to make React DevTools display warnings directly in the components panel. This should make it easier to find where components need to be updated for v5. See this CHANGELOG section for more details on it. ([View Highlight](https://instapaper.com/read/1446438295/17524374)) [Open in Readwise](https://readwise.io/open/229776013) ^rw229776013
    - Note: Updating to the latest v4 version can help in migration. And for determining how much work transitioning will be ^rw229776013-note
    - Date:: [[September 22nd, 2021, Wednesday]]
- ⚓ We have introduced actionable deprecations in v4. You can upgrade to v4.12.0 and start preparing your codebase to be compatible with v5. ([View Highlight](https://instapaper.com/read/1446438295/17524430)) [Open in Readwise](https://readwise.io/open/229776014) ^rw229776014
    - Date:: [[September 22nd, 2021, Wednesday]]
- ⚒️ We have prepared a codemod that does most of the transformations you will need for the migration. If you are not familiar with what a codemod is, check out Effective Refactoring with Codemods by Edd Yerburgh. ([View Highlight](https://instapaper.com/read/1446438295/17524432)) [Open in Readwise](https://readwise.io/open/229776015) ^rw229776015
    - Date:: [[September 22nd, 2021, Wednesday]]
- 📄 Lastly, we have prepared a step-by-step migration guide. This guide is the one place where you can find all information required for upgrading to v5. ([View Highlight](https://instapaper.com/read/1446438295/17524433)) [Open in Readwise](https://readwise.io/open/229776016) ^rw229776016
    - Date:: [[September 22nd, 2021, Wednesday]]
- If you are starting your upgrade, these are the three things you should look into: ([View Highlight](https://instapaper.com/read/1446438295/17524434)) [Open in Readwise](https://readwise.io/open/229776017) ^rw229776017
    - Date:: [[September 22nd, 2021, Wednesday]]
- We have updated the minimum supported React version from 16.8 to 17.0. The breaking changes released between the two versions are very limited. ([View Highlight](https://instapaper.com/read/1446438295/17524491)) [Open in Readwise](https://readwise.io/open/229776018) ^rw229776018
    - Date:: [[September 22nd, 2021, Wednesday]]
- We now have design kits for the MUI components available in the three main design tools out there: Figma, Sketch, and Adobe XD. ([View Highlight](https://instapaper.com/read/1446438295/17524492)) [Open in Readwise](https://readwise.io/open/229776019) ^rw229776019
    - Date:: [[September 22nd, 2021, Wednesday]]
- It'll also help designers to understand how the library is structured, especially theming features and each component prop, enabling much faster development. ([View Highlight](https://instapaper.com/read/1446438295/17524494)) [Open in Readwise](https://readwise.io/open/229776020) ^rw229776020
    - Note: Can we set up a theme that will be used by both development and design ^rw229776020-note
    - Date:: [[September 22nd, 2021, Wednesday]]
---
aliases: [Introducing MUI Core v5.0 - MUI, Introducing MUI Core v5.0 - MUI]
author: mui.com
---
# Introducing MUI Core v5.0 - MUI by mui.com

![rw-book-cover](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)

## Metadata
- Author: [[mui.com]]
- Full Title: Introducing MUI Core v5.0 - MUI
- Category: #articles
- Source: [[{source}]]
- URL: https://mui.com/blog/mui-core-v5/

## Highlights
### New highlights synced
- Material-UI is now <strong>MUI</strong>! Head to the <a href="https://mui.com/blog/material-ui-is-now-mui/">dedicated blog post</a> to learn more. [Open in Readwise](https://readwise.io/open/231117048) ^rw231117048
    - Note: This is a comment ^rw231117048-note
    - Date:: [[September 23rd, 2021, Thursday]]
- The first step we took to improve the customization experience was to rethink the styling solution from a blank page. [Open in Readwise](https://readwise.io/open/231117049) ^rw231117049
    - Note: Here is another one ^rw231117049-note
    - Date:: [[September 23rd, 2021, Thursday]]
