---
aliases: 
tags: 
date created: March 18th, 2022, Friday
date modified: March 25th, 2022, Friday
---

# Sonarqube Discovery

## Rules

### Rules with Lots of Occurrences in Our App

-

### Rules We Probably Don't Need

- [The base should be provided to "parseInt"](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS2427)
- [The ternary operator should not be used](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS1774)
- [Track lack of copyright and license headers](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS1451)
- 

### Rules That Are Interesting

- [Array-mutating methods should not be used misleadingly](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS4043)
- [Braces and parentheses should be used consistently with arrow functions](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS3524)
    - Should be configured with the `parameter_parens` to true to enforce parens on all arrow functions
- [Branches should have sufficient coverage by tests](https://sonarqube.avirat.net/coding_rules?languages=ts&open=common-ts%3AInsufficientBranchCoverage)
    - We will need to discuss our goals for this as a team
- [Cognitive Complexity of functions should not be too high](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS3776)
    - We will have to evaluate this and determine how much we care about it, and a path forward. The useEncapsulation strategy can be very helpful here
- [Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS134)
    - Determine the threshold
- [Deprecated APIs should not be used](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS1874)
    - This will alert when an API that we have marked as deprecated is used, helping ensure that after that is done there are no new uses of it
- [Files should not have too many lines of code](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS104)
    - What is a good limit for us?
- [Functions should not have too many parameters](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS107)
    - What would be a good limit for us?
- [Trailing commas should be used](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS3723)
- [Type assertions should use "as"](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS4137)
- [Type guards should be used](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS4322)
- [Template literals should not be nested](https://sonarqube.avirat.net/coding_rules?open=typescript%3AS4624&rule_key=typescript%3AS4624)
- [Cyclomatic Complexity of functions should not be too high](https://sonarqube.avirat.net/coding_rules?open=typescript%3AS1541&rule_key=typescript%3AS1541)
- [Unused assignments should be removed](https://sonarqube.avirat.net/coding_rules?open=typescript%3AS1854&rule_key=typescript%3AS1854)
- 

### Rules to Dig into More

- [Allowing browsers to perform DNS prefetching is security-sensitive](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS5743)
- [Allowing browsers to sniff MIME types is security-sensitive](https://sonarqube.avirat.net/coding_rules?languages=ts&open=typescript%3AS5734)
-
