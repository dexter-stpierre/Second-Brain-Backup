---
aliases: 
tags: 
date created: October 11th, 2021, Monday
date modified: January 26th, 2022, Wednesday
---

# OFW Overview

```ccard
type: folder_brief_live
```
 
- Titling doc [https://confluence.avirat.net/pages/viewpage.action?pageId=93815129](https://confluence.avirat.net/pages/viewpage.action?pageId=93815129)
- Feedback
	- i18n files could use an enum to keep the values of the text consistent throughout the project
	- Types, types, types.
- [[Swagger]] docs: [https://myfiles2ofw.testing.ourfamilywizard.com:8505/pub/swagger-ui.html#/](https://myfiles2ofw.testing.ourfamilywizard.com:8505/pub/swagger-ui.html#/)
- [[Java]] projects
	- When changing branches on our projects you need to run to pull in the updates to the git submodules and then run to compile the updates
	- Here is the local URL for the app: http://localhost:8080/ofw/login.form
- Types of Users:
	- Parent
	- Child/3rd Party
	- Pro
	- Pro [[OFW/CVM]]
- [[OFW/CVM]]
	- A pro user can view the application "as" one of their clients. While in this mode what they can do is limited, but they may view almost everything
- Pro Peaslee appdea@gmail.com
- [[Rocket.Chat]] URL: rocketchat.avirat.net
- [[VPN]] URL: OFW.atomicdata.com
- [[Git]] [[submodule]]
	- To update run the command
- README.md
	- Install yarn
	- Pull down repo using
	- Login to git CLI using SSH
		- [https://confluence.atlassian.com/bitbucketserver075/using-ssh-keys-to-secure-git-operations-1018784883.html?utm_campaign=in-app-help&utm_medium=in-app-help&utm_source=stash](https://confluence.atlassian.com/bitbucketserver075/using-ssh-keys-to-secure-git-operations-1018784883.html?utm_campaign=in-app-help&utm_medium=in-app-help&utm_source=stash)
	- Run
	- Run
- Team Structure: [https://confluence.avirat.net/display/PE/Team+Structure](https://confluence.avirat.net/display/PE/Team+Structure)
- Pre-react code branch: [https://bitbucket.avirat.net/projects/OFW/repos/ofw-web-appv2/browse?at=0.1.0-beta.59](https://bitbucket.avirat.net/projects/OFW/repos/ofw-web-appv2/browse?at=0.1.0-beta.59)
- Career development doc: [https://confluence.avirat.net/display/PP/Learning+and+Development](https://confluence.avirat.net/display/PP/Learning+and+Development)[](<- https://confluence.avirat.net/pages/viewpage.action?pageId=93815129
- Feedback
	- i18n files could use an enum to keep the values of the text consistent throughout the project
	- Types, types, types.
- [[Swagger]] docs: https://myfiles2ofw.testing.ourfamilywizard.com:8505/pub/swagger-ui.html#/
- [[Java]] projects
	- When changing branches on our projects you need to run `git submodule update` to pull in the updates to the git submodules and then run `./gradlew compileJava` to compile the updates
	- Here is the local URL for the app: http://localhost:8080/ofw/login.form
- Types of Users:
	- Parent
	- Child/3rd Party
	- Pro
	- Pro [[OFW/CVM]]
- [[OFW/CVM]]
	- A pro user can view the application "as" one of their clients. While in this mode what they can do is limited, but they may view almost everything
- Pro Peaslee appdea@gmail.com
- [[Rocket.Chat]] URL: rocketchat.avirat.net
- [[VPN]] URL: OFW.atomicdata.com
- [[Git]] [[submodule]]
	- To update run the command `git submodule update`
- README.md
	- Install yarn
	- Pull down repo using `git clone --recurse-submodules repo_url`
	- Login to git CLI using SSH
		- https://confluence.atlassian.com/bitbucketserver075/using-ssh-keys-to-secure-git-operations-1018784883.html?utm_campaign=in-app-help&utm_medium=in-app-help&utm_source=stash
	- Run `yarn`
	- Run `yarn start`
- Team Structure: https://confluence.avirat.net/display/PE/Team+Structure
- Pre-ts code branch: https://bitbucket.avirat.net/projects/OFW/repos/ofw-web-appv2/browse?at=0.1.0-beta.59
	- Looks like release/2.3.0 is the latest I can find
- Career development doc: https://confluence.avirat.net/display/PP/Learning+and+Development
- From now on I will spend time reviewing the legacy code for any feature that I am rewriting
- Useful feature access doc: https://confluence.avirat.net/pages/viewpage.action?spaceKey=PE&title=Feature+Access+by+User+Role

https://sonarqube.avirat.net/about
Test credit cards: https://www.paypalobjects.com/en_GB/vhelp/paypalmanager_help/credit_card_numbers.htm
https://confluence.avirat.net/display/OFWQA/Environments

JS-535 & JS-892

- Removing padding on modals for view and compose modals
-    dateTime

Live messages changes: https://ourfamilywizard.atlassian.net/issues/?filter=10086