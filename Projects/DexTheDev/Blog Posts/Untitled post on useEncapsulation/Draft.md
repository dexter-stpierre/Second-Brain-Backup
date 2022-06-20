---
aliases: 
tags: 
date created: June 14th, 2022, Tuesday
date modified: June 14th, 2022, Tuesday
---

# Draft

https://codesandbox.io/s/objective-bas-whk7k6?file=/src/hooks/useDebouncedEffect.ts:739-747

General layout of a hook is as follows:

```typescript
const useHook = (args) => {
	const [state, setState] = useState();
	const handlers = useMemo(() => ({
		setState: (newState) => setState(newState)
	}))

	return [state, handlers];
}
```
