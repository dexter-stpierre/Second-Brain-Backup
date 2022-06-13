---
aliases: 
tags: 
date created: April 26th, 2022, Tuesday
date modified: May 6th, 2022, Friday
---

# MUI5 Migration

## Things That Needed to Be Fixed in Messages

- https://mui.com/material-ui/guides/migration-v4/#non-ref-forwarding-class-components
- https://mui.com/material-ui/guides/migration-v4/#styles
	- Style imports

## Things That Still Need to Be Fixed for Migration

- Hidden component
	- https://mui.com/material-ui/guides/migration-v4/#hidden
- Ensure that files only use 1 makeStyles call

## Previous Build Sizes

```
static/media/OFW-App-glyph-INTERFACE-icon-set.ad72392e.svg (383 KiB)
  join.bundle.js (4.07 MiB)
  app.bundle.js (6.38 MiB)
  myfiles.bundle.js (1.67 MiB)
  myaccount.bundle.js (3.63 MiB)
  messageboard.bundle.js (2.28 MiB)
  holidays.bundle.js (1.38 MiB)
  expenses.bundle.js (3.25 MiB)
  ../build/journal/static/css/1.4d37624e.chunk.css.map (718 KiB)
  ../build/journal/static/css/main.73443d71.chunk.css.map (247 KiB)
  ../build/journal/static/js/1.2cb8ba46.chunk.js (1.22 MiB)
  ../build/journal/static/js/1.2cb8ba46.chunk.js.map (4.73 MiB)
  ../build/journal/static/js/main.7fcdf5f0.chunk.js (262 KiB)
  ../build/journal/static/js/main.7fcdf5f0.chunk.js.map (616 KiB)
```

## Migration Doc

Hey team! So excited to be upgrading us to MUI5. This project has been quite the process, so I just wanted to make a little write up to help us all be on the same page! I'm gonna try to break this down into a few sections. First will be what I did to complete the migration, What we can do was we continue our in progress work to make merging this into our feature branches go smoothly, and some tips for how to handle merge conflicts and ensure that all changes are integrated correctly.

### What happened?

I'm very grateful for all the hard work that the MUI team has put into their migration docs. So most of the process was just following along with their docs. Which involves a lot of going step by step and waiting for the app to build, making sure that things looked good. Most of the first handful of steps are pretty boring, so I won't go into too many details with those. I did run the codemods one folder at a time (calendar, then core, then expenses, etc.). One thing of note is that there were some of our pages that didn't have the ThemeProvider set up, so I added the `ContextContainer` to those so that they now have all of the useful contexts that are contained in there. Now I'll go through some of the more interesting items in the "Handling Breaking Changes" section that I had to handle for.

#### Handling Breaking Changes

##### Non-ref-forwarding Class Components

We had some lists being rendered into components like the MenuList and Popper that were just rendering the return value of an `array.map` function. Since these components now require a child value that can accept a ref I simply had to wrap the children in a `div` tag. (see [MenuOverflow](https://bitbucket.avirat.net/projects/OFW/repos/ofw-web-appv2/pull-requests/822/diff#src/utils/components/MenuOverflow.tsx?t=76))

##### Button

The label element was removed from buttons. Moved any styling being applied to the `label` class to the `root` class

##### Hidden

Removed the Hidden component and replaced it with appropriate replacement listed, using either JS or CSS fixes

##### MenuItem

`MenuItem` was updated to inherit from `ButtonBase` instead of `MenuItem`. This required some updates to styles to appropriately changes styles based on those classes instead of the old ones

##### Popper

The modifiers API had significant changes, the one that required changes is that it now accepts them as an array instead of an object

##### Snackbar

`Snackbar`  nows displays on the bottom left by default. Updated the `Toast` component to continue displaying them on the bottom center

#### @material-ui/pickers

The pickers API changed significantly. Thankfully we wrapped them in a component rather than importing them directly into the file they are used in. This made it easy to rewrite the components to behave the same way with the new MUI component, and expose the same API so our use of those components did not need to change. The design the of the components have changed significantly, and the change in design has been approved by QA.

#### Migrate theme's `styleOverrides` to emotion

The `$selector` syntax no longer works as placeholders for different classes that might be applied to components. I replaced those with their hard-coded equivalents

#### Migrate from JSS

This mainly consists of replacing `makeStyles` and `withStyles` from `@mui/styles`. The officially preferred solution is the first one, which is replacing them with `styled` from `@mui/material/styles` or using the `sx` prop. They include a codemod to make the changes automatically. The reason I decided not to use this solution is because we have many components where we use multiple `makeStyles` calls, and the codemod did not handle those well. The codemod also had less than stellar performance on `withStyles` calls. So I would have had to make the changes manually, which likely would have been multiple weeks worth of mundane work. There was no codemods for the second option, which is using `tss-react` in place of `@mui/styles`. The APIs for `tss-react` and `@mui/styles` were very similar and in almost all cases could be replaced with a simple find and replace. This made this phase of the migration very quick. I'll detail how I approached this below:

1. Install `tss-react` and implement the required provider
2. Search for `makeStyles` in the codebase and manually replace all imports of it with the import from `tss-react`
3. Search for `= makeStyles(` in the entire codebase and replace with `= makeStyles()(` to match the new syntax
4. Search for `const classes = useStyles` in the entire codebase and replace with `const { classes } = useStyles` to match the new syntax
5. Search for `withStyles` in the codebase and manually replace all imports of it with the import from `tss-react`
6. Manually update all uses of `withStyles` to match the new syntax
    1. Move the component that is receiving the styles from the second function call to the first argument of `withStyles`

Replace any remaining instance of an import from `@mui/styles` with the same from `@mui/material/styles`

This document was written after completing the migration, so there is always a chance that I missed something that I did in the process. If you see anything that you have questions on please feel free to reach out to me (Dexter) and I will do my best to update this doc

### What now?

We are hoping to deploy this migration the week of May 30th. That gives about 4 weeks where we will be continuing to do work in our codebase while we wait for this to go out. So How do we continue to do that and make sure that merging this release into our feature branches goes smoothly? Here's some tips:

- To the best of your ability, when modifying styles on MUI components, please try to use the `styled` API. This is the API that will migrate the most smoothly. All that needs to be done is importing the new `styled` function and things will just work. [Here](https://v4.mui.com/styles/basics/#nesting-selectors) is the doc about nesting selectors, which can be used to target children within a component (i.e. the `input` element in a `TextField` component).
- If you prefer to use the `makeStyles` or `withStyles` API just realize that you will have to follow steps 2-6 in the "Migrate from JSS" section of this document. If you have existing instances of these that you have already implemented I do **not** suggest changing them. Moving them to the new API is quick and easy.
- Do not use the `$selector` syntax for overriding styling (v4 docs for this deprecated form of selecting can be found [here](https://v4.mui.com/customization/components/#use-rulename-to-reference-a-local-rule-within-the-same-style-sheet))
- Don't use the `Hidden` component. It has been deprecated. If you have added instances of this component in your branch I do suggest removing them now. It will make merging in this migration much easier. In almost all instances you can change out for the JS implementation describe in the [migration docs](https://mui.com/material-ui/guides/migration-v4/#hidden). If you really need a CSS implementation you can make one using the `styled` API.
- If you notice anything else that you think would be helpful in this part of the guide add it, or reach out to me and I can add it.

### What then?

What happens when the code is released? I suggest first celebrating with a cup of your favorite coffee! Hopefully the merge from master will go smoothly, but I can almost guarantee that there will be merge conflicts. So how do we deal with those? I got a little taste when I resolved merge conflicts with messages-tweaks, so I'll share what I learned from that, along with what I think off the top of my head will help

- Let's use codemods! The [codemods](https://mui.com/material-ui/guides/migration-v4/#preset-safe) in the docs can target specific folders, and files. So if you have new folders that weren't in master when I created this branch (like pro, and the time of this writing), then you can run the codemod for the entire folder. This would include if you want to just target subfolders (like src/expenses/modules/expenseLogs).
- If a file has had significant changes in your branch feel free to accept your changes and run the codemods on just that file. It will automatically make many of the changes needed for the migration. Just make sure to look through the What Happened section of this doc to see if any of the manual changes apply to this file. Especially the Migrate from JSS section. You can also look at the commit history from the file. If the only change made in that file for the migration was running the codemods then you should be good to go. If there are others then just make sure you make those changes on the branch, if they still apply. Either way, the changes for the migration are likely easier to apply to your changes than the other way around.
- Be sure that you replace any places that you have used `$selector`, `makeStyles`, or `withStyles`
- Test it! Make sure that everything still looks good, and behaves the way you expect it to.