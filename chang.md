# CHANGELOG


## 2.0.0

### Features

* Introduced the **Run Panel**, designed to _test run_ your config.

  This panel lets your trigger pipelines from VS Code based on your local `config.yml` file, instead of the one versioned on your branch, in order to test your recent edits easily. 
  
  You can choose to run your full pipeline, or select only the individual jobs and workflows you want to validate, by using checkboxes. 

    <div style="text-align:center">
        <img src="https://images.ctfassets.net/il1yandlcjgk/3bAxTZDhAwAtvIMgLCmiPe/e65a39590bb65a3312fd5f7a76aef0e1/vscode-ext-config-test-run-crop.png" alt="config-test-run" width="540"/>
    </div> 

  View the results of your test runs in the Pipelines Panel or in the CircleCI web app, just the same as any other pipeline.

  **Notes**:
  - This feature is currently in **Closed Preview**, and only available to projects on a [Free plan](https://circleci.com/pricing/). If you are on a Performance of Scale plan, and would like to sign up for the closed preview, you can do so [here](https://docs.google.com/forms/d/1IDOyltcRRN0g5XULRK7qIzmF2Mvb5fnclk9If38_9yI/edit).
  - You need to opt-in to this feature per project. Navigate to Project Settings > VS Code integration and toggle the setting "Run pipelines with unversioned config" to On.
  - This feature is disabled for projects that make use of [dynamic configuration](https://circleci.com/docs/dynamic-config/)
  - Please be mindful when running pipelines with unversioned configuration, and take care to ensure no jobs with unintended effects are included in the run. 
  - At this time, audit logs do not mention that a pipeline was run with unversioned config, and PR status checks may be altered as a result of unversioned config overrides. Both issues will be addressed soon.

  More information can be found in the [docs](https://circleci.com/docs/vs-code-extension-overview/#test-run-your-config-from-vs-code).    



---
---

## 1.23.0

### Features
* Display the relative timestamp for each pipeline in the Pipelines Panel


## 1.22.1

### Bug Fixes
* Fixed unexpected errors occurring in the extension background, with no impact on extension behaviour:
  - `"You are not authenticated"` on extension startup
  - `"Cannot resolve tree view item"` when rendering the Pipelines Panel

## 1.22.0

### Features
* Adjust display of job step commands to reflect behaviour in the WebUI: long commands are only shown partially, but can be expanded to be viewed in full.

### Bug Fixes
* Fix display of job steps outputs, removing unexpected characters (such as "A" and "B")
* Remove mention of "no internet connection" from settings page project selector
* Avoid pinging Google on every internet connection recovery attempt
* Reintroduce "re-run with SSH" action icon next to jobs in the Pipelines Panel

## 1.21.0

### Bug Fixes
* Improve internet connection detection and recovery 
  * Change internet detection polling interval
  * Add Google DNS servers to server list for online checks
  * Fallback to google.com for internet detection
* Fix spawning of the Language Server on Windows
* Fix broken link to CircleCI Documentation from "Help and Feedback" section


## 1.20.2

### Bug Fixes

* Fix issues with Internet connectivity detection, where in some cases, depending on network configurations, the extension could appear offline, even as the computer was connected to the Internet.

## 1.20.1

### Bug Fixes

* Job logs are now showing

## 1.20.0


### Features

* Improve step logs by displaying step command above log trace
* On new notifications, add a badge on the CircleCI Activity bar icon (from VS Code version 1.75)


### Bug Fixes

* Restore the sidebar login view when not authenticated
* Fix job step output not being updated in real time
* Improve internet connection detection. Implementation now uses DNS resolution instead of HEAD request

## 1.19.0

### Bug fixes

- Fix detection of unavailable internet causing UX issues
- Fix language server error notification when adding new job

## 1.18.1

### Bug fixes

* Do not force-update the Language Server after online status changes
* Fix validation of YAML config files through the command `Validate current configuration file`, to support validation of private orbs


## 1.18.0

### Features

* Display latest commit information (author & message) for pipelines in sidebar
* Add support for GitLab projects
  * Automatic detection of GitLab projects is not supported, projects must be chosen manually from the settings page

### Bug fixes

* Fix a case where settings page would appear empty, with corrupted pipeline filters settings
* Fix broken Language Server validation of YAML config files after restarting the Language Server

## 1.17.5

### Bug fixes

* Change WebSocket creation to avoid creating and dropping connections on start up
* Change the way internet connection is detected
* Update display of canceled jobs in the Job details page, using a dedicated icon instead of the text 'canceled'

## 1.17.4

**This patch reintroduces some of the changes that were reverted by patch `1.17.1`. These will be marked with [RE-INCLUDED]**

### Features

* Workflow notification pop-ups no longer offer the action "Open in app". Instead, notifications for statuses *failed* and *failing* now propose the action "View job logs", which opens logs inside VS Code.
* [RE-INCLUDED] New setting to filter notifications by pipeline author (me / anyone)

### Bug Fixes

* Correctly update the status of the "mute notifications" button (on the Pipelines Panel) when VS Code settings are changed manually
* [RE-INCLUDED] Shutdown Language Server properly when VS Code is closed, thus avoiding lots of LS processes running in parallel
* Fix one case when the settings page fails to load due to legacy settings.

## 1.17.3

### Bug fixes

* Fix bug causing the settings page to be inaccesible for some users, preventing them from changing their pipeline filters
* Fix faulty behaviour of 'current branch' filter: new pipelines were shown in the panel even when not triggered from the current branch

## 1.17.2

### Bug fixes

* Fix login and logout not working with VS Code 1.80 (June 2023)

## 1.17.1

**REVERT ALL FEATURES INTRODUCED IN VERSION 1.17.0, DUE TO ISSUES IN PIPELINES AND THE LANGUAGE SERVER**

### Bug fixes

* Patch [security vulnerability](https://github.com/advisories/GHSA-c2qf-rxjj-qqgw) in semver dependency

## 1.17.0


### Features

* Filter workflow notifications by author (me/everyone)
* Introduce support for Gitlab projects to the Pipelines Manager.

  **Note**:
  *  Automatic project detection for Gitlab projects is currently disabled. Monitoring Gitlab projects requires manually selecting them from the settings page.
  *  For now, interactive re-run with SSH through the extension is disabled for all Gitlab projects. Jobs can still be re-run with SSH from the Web App, if permissions allow

### Bug Fixes

* Fix bug of 'current branch' filter, whereby new pipelines were added even when they were not from the current branch
* Shutdown Language Server properly when VS Code is closed, thus avoiding lots of LS processes running in parallel
* For LSP: updated list of supported Docker versions


## 1.16.0

### Features

* Automatically detect projects for repositories with multiple remotes

### Bug Fixes

* Fix inconsistent pipeline filter description when no filter is applied

## 1.15.1

### Features

* Improve reliability of network connection after clicking "Reload pipelines" button
* Display a message at the top of the pipelines panel detailing which filters are applied

## 1.15.0


### Features

* Add a quick link to report a bug as a Pipelines Panel tree item
* Add a notification that informs users of new features
* Support filtering by current branch
* Improve the UX for opening job details: clicking on the job now opens the logs page and expands the tree item at once
* On login, open the Pipelines Panel automatically
* Add a link to open a project in browser (with the same filter settings selected) from the pipelines panel

## 1.14.0


### Features

* Introduce support for **multi-project workspaces**

    The extension now allows monitoring multiple CircleCI projects at the same time in the Pipelines Panel of a single workspace. CircleCI projects present in a workspace are now automatically detected when a workspace is opened, whether it is a single-folder workspace or a multi-root workspace. Additional projects can be added through the settings page.

    *Note*: the "current branch" filter is temporarily disabled, but will be back soon.
* Show unfollowed projects contained in a workspace in the Pipelines Panel, and allow following them with a click from VS Code
* Add ability to *mute notifications* temporarily. The option is accessible at the top of the Pipelines Panel, in the VS Code User Settings, and in the CircleCI extension settings.
* Add a suffix '[SSH]' at the end of all jobs that have been rerun with SSH


### Bug Fixes

* Do not show error pipelines when workflow statuses are filtered
* Fixed bug that prevented opening logs for running jobs
* Fixed pipelines color updating correctly when its status changes
* Added indication 'Loading projects' when projects are loading

## 1.13.0


### Features

* Display one-off popup to unauthenticated users, to present new extension features and prompt login
* Add a "New features" link in the Help and Feedback section
+ Fixed issue with "My Pipelines" filter not working


### Bug Fixes

* Fix Pipelines Panel refresh button
* Remove XSS vulnerability on job details view
* Reset websockets on internet changes
* Fix behaviour of command "CircleCI: Validate current configuration file" when no file is in focus


## 1.12.0

### Features

 * Use Websockets instead of Polling to load pipelines, improving extension performance and the Pipelines Panel loading experience
 * Allow searching for workflows through `<ctrl+F>` in the Pipelines Panel
 * Enable viewing the compiled version of a config file:
    * Through the command `CircleCI: View compiled version of current configuration file`
    * Through the CircleCI menu at the top right of your config files
    * From any Job Logs page
 * Improve the extension login experience by using a [Welcome view](https://code.visualstudio.com/api/references/contribution-points#contributes.viewsWelcome) in the Pipelines Panel
 * Add a reminder to cancel an SSH job when the SSH terminal session is closed
 * Remove Dry Run mock UIs and attached survey

### Bug Fixes

 * Added backward compatibility for Config Validations commands for Server customers
 * Improve UX of job view's step filtering
 * Fix tracking of current branch, when local and remote branch names are different
 * Fix command `CircleCI: Restart CircleCI Language Server` (previously it was killing the Language Server)
 * Reintroduce "open in browser" icon for workflows

## 1.10.3


### Bug Fixes

* LSP not downloading if schema is missing

## 1.10.2


### Bug Fixes

* Internal improvements

## 1.10.1


### Bug Fixes

* Fix a bug where the extension would freeze VSCode

## 1.10.0


### Features

* Adding test your workflows UI


### Bug Fixes

* Fixed log out popup showing more than once


### Documentation

* Add referral links

## 1.9.7


### Bug Fixes

* Improved authentication
* Improved telemetry

## 1.9.6

### Bug Fixes

* Changed invalid token behavior

## 1.9.4

### Features
* On workflow fail popup, you can now directly open the job details webview

### Bug Fixes

* Another fix on invalid token detection

## 1.9.3

### Bug Fixes

* Removed uncaughted error on startup
* Invalid token notification error shows only once per session

## 1.9.2

### Bug Fixes

* Canceled jobs no longer shown in notifications by default
* Improved authentication error handling when internet is down

## 1.9.1

### Bug Fixes
* Fixed bug where self-hosted URL were not applied correctly after connexion

## 1.9.0

### Features

 * Improve logout and login experience
 * Make it easier to view Job Details from the Job tree item
 * Add "open in terminal" button when downloading artifacts

## 1.8.0

### Features

 * Allow viewing job details for running jobs
 * When selecting the command "Validate config policy", suggest the current branch as the default option
 * Remove the option to select polling interval shorter than 5 seconds
 * Allow searching through `ctrl+F` in the Job Details page

### Bug Fixes

 * Change icon colour for validate config icon for light theme
 * Fix config validation commands not working on Windows
 * Min issue with config file being highlighted as invalid when multiple anchors are present in the same YAML file
## 1.7.1

### Bug Fixes

 * Internet unavailable error should happen only when internet is off

## 1.7.0

### Features

 * Re-run with SSH updates:
    * Allow SSH through dedicated VSCode Remote Window
    * For parallel jobs, allow selecting which instance you want to connect to
 * Allow re-running individual jobs from Pipelines Panel

### Bug Fixes

 * Auto detect project when using command 'Validating config policy'
 * Only show 're-run job' icon on jobs that can actually be re-run (canceled, failed, succeeded)
 * Address bug that caused unexpected number of http requests, and introduce caching to reduce requests rate limiting


## 1.6.4 (2023-02-09)

### Bug Fixes

 * Removed the spammy "invalid token" notification


## 1.6.3 (2023-02-03)

### Bug Fixes

* move token to secret storage




## 1.6.2 (2023-02-02)

### Bug Fixes

* Fix changelog
* small bug fixes




## 1.6.1 (2023-01-31)

### Bug fixes
* Keep poller disabled when polling interval is disabled

# 1.6.0 (2023-01-25)

### Features

* "Rerun with SSH" button for jobs, which opens automatically an SSH connection in the integrated terminal
* Flagging of flaky tests in the job tests list
* Display of commit messages next to pipeline names
* Option to always monitor default branch pipelines along with the chosen specific branch
* Addition of a CircleCI button on the top right menu when a config file is open, exposing commands to validate config and validate config against org policy
* Persistance of project choice by workspace
* Improvement of the login experience for self-hosted customers
* Improvement of the Job Details view, to expose re-run commands
* Renaming of some configuration attributes. Mind - this change will log you out and clear your host URL!

### Bug Fixes

* **No longer add or update a comment at the end of `config.yml` files every time they are edited**
* Better management of invalid (or revoked) tokens
* Improve error message on non-existent Git remote
* Redesign the behavior of the clear button of the branch filter inside the settings page
* Stop branch selection resetting to default on each new VS Code session
* Improve error handling for command 'validate current configuration file against org policy'
* Fix policy validation command not working on some projects


## 1.5.1 (2022-12-28)
- Fix lsp not starting on Windows

# 1.5.0 (2022-12-21)

### Features

- Implement visualisation of job logs in a dedicated VS Code tab
- Add command "Validate current configuration file"
- Add command "Display CircleCI Language Server version"
- Paginate tests, and display failed tests at the top

### Bug Fixes

- When an unfollowed project is detected, suggest following the project through a link to the
  relevant App page
- Disable the button "Connect" in the login page when the token input field is empty
- Fix filtering icon display, to appear empty if all default settings are selected
- Fix Language Server failing to be downloaded on first extension start
- Improve Language Server download flow, including a retry if the connection failed

# 1.4.0 (2022-12-05)

### Features

- Add command "Validate Policy for current configuration file"

# 1.3.0 (2022-12-02)

### Features

- Correctly validate private orbs for Server customers

### Bug Fixes

- Improve error message displayed when user's VCS is not handled

## 1.2.2 (2022-12-01)

### Bug Fixes

- Avoid bug affecting users who entered a value in the self-hosted URL field

## 1.2.1 (2022-11-30)

### Bug Fixes

- Fix artifacts download on Windows
- Fix LSP download process preventing the extension from starting
- Fix issue fetching projects after self-host url is entered and then removed

# 1.2.0 (2022-11-28)

### Features

- Enable Config Helper support of Private Orbs
- Show test logs in the editor
- Allow using the Pipelines Manager with self-hosted CircleCI instances
- Add status information to Pipelines icons
- Add link in "Help & Feedback" section to share feature ideas

### Bug Fixes

- Fix LSP behavior on download error
- Fix 4O4 error occurring on pipelines fetch
- Update job duration in real time
- Hide action "open in browser" for jobs that don't exist yet
- If LSP downlad failed due to network issues, update it on network recovery
- Fix pipelines not loading on some projects
- Remove duplicate commands to open settings page

# 1.1.1 (2022-11-17)

No user facing changes

# 1.1.0 (2022-11-17)

### Features

- Add polling configuration to settings page
- Improve Language Server update system
- Fetch jobs only when expanding parent workflow, not parent pipeline
- Display failed pipelines (previously ignored)
- Obscure API token in settings view

### Bug Fixes

- Fix project path detection on Windows
- Improve error message when no followed project is found
- Change token creation page URL, so if user is logged out of
  [app.circleci.com](https://app.circleci.com) they are redirected to login

# 1.0.0 (2022-09-27)

### Features

- Authentication to CircleCI through an authentication webview
- Pipelines, workflows and jobs visualisation in the CircleCI Pipelines panel
- Live workflow status updates in the status bar
- Notifications on workflow status changes
- Creation of a settings page, to configure pipeliens visualisation
- Integration of the CircleCI Language Server to provide language support features on circleCI YAML
  files
