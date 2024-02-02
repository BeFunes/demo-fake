The official CircleCI VS Code extension is a new way to interact with CircleCI.

This extension provides an interface to visualize and manage CircleCI pipelines directly from your
IDE, as well as providing contextual help when creating, modifying and editing CircleCI YAML config
files. This way, it avoids expensive context-switching between VS Code and your browser.

More practically, this extension allows you to:

- Authenticate and connect VS Code to CircleCI
- Browse and interact with your pipelines. Available actions include
  - Viewing pipelines, workflows, and jobs statuses
  - Viewing test outputs
  - Browsing job logs
  - Downloading artifacts
  - Approving jobs
  - Re-running builds
  - Debugging jobs with SSH
- Be alerted through notifications when your workflows change status or need your attention
- Access in-file support when editing CircleCI YAML configuration files, including:
  - Syntax validation
  - Syntax highlighting
  - Go-to-definition and go-to-reference
  - On-hover documentation and usage hints
  - Autocompletion
- Launch commands to validate config files statically, or against your org policy

<div style="text-align:center;margin-bottom:20px">
    <img src="https://images.ctfassets.net/il1yandlcjgk/1r1Hc7rvqeQLVAq28Zp6dr/2dff34364eb1784f7a104d5d31306bb7/extension_gif.gif" alt="circleci-vscode-vscode-extension-gif" width="650"/>
</div>

## Getting started

It’s easy to get started with CircleCI for VS Code.

1. **Install the extension**

   You can install the CircleCI extension from within VS Code, or download it from the marketplace.

   <div style="padding:10px; border-radius:2px; border: 1px solid #ffa700; font-weight: 500; margin-bottom: 10px;">⚠️ This extension is compatible with VS Code versions <code>1.67</code> or above.</div>

2. **Authenticate into CircleCI**

   Open the CircleCI Panel by clicking on the CircleCI icon on the activity bar on the left of your
   screen, then click on “Log in”.

      <div style="text-align:center">
       <img src="https://images.ctfassets.net/il1yandlcjgk/1L7EbmIClXTEYvXo47vnW6/3b18d9b45b4ed84718f8c10d3cdc5e47/login_ui.png" alt="circleci-vscode-login" width="280"/>
   </div>

   You will be prompted to enter a
   [Personal API Token](https://app.circleci.com/settings/user/tokens). If you don't have one, you
   can generate a new one for this purpose.

   If you are an Enterprise customer, make sure to check the box and enter your self-hosted server
   URL.

3. **Setup your project**

   If your VS Code workspace contains one or more CircleCI projects, the extension will detect them
   automatically, and the Pipelines Panel will be populated with your most recent pipelines.

   If no project is detected, open the settings page (through the VS Code command
   `CircleCI: Open Settings`, or by clicking on the settings icon (⚙️) at the top of the Pipelines
   Panel), and select your projects manually.

   Please note that your manual selection will only be persisted if no projects are detected
   automatically.

      <div style="padding:10px; border-radius:2px; border: 1px solid #ffa700; font-weight: 500; margin-bottom: 10px;">⚠️ Automatic project detection does not work for GitLab projects. Please select your project manually from the Settings page.</div>

<!-- <div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/5zE2XGTqtWepwyExqSgT0x/5c035998c3d6d57add008da2470c7135/select-project-optimised.gif" alt="circleci-vscode-select-project" width="600"/>
</div> -->
<!-- TODO: Add a gif here?? -->

4. **Configure your Pipelines Panel**

   By default, your Pipelines Panel will display all the latest pipelines run on your project.
   However, you can configure it to show you only the pipelines you are interested in.

   All configurations are available in the Settings page, which you can open with the command
   `CircleCI: Open Settings` or by clicking on the settings icon (⚙️) at the top of the Pipelines
   Panel.

   Specifically, you can choose to follow:

   - Only your pipelines, or those authored by anyone
   - All branches, only your current branch, or a specific branch. You can also select the checkbox
     “Always display default branch”
   - Only pipelines that include workflows and jobs with specific _statuses_.

   <div style="text-align:center; padding:12px" >
       <img src="https://images.ctfassets.net/il1yandlcjgk/6NiSdwwwEVB97zKgAja1DQ/dd33940b8a912aba8c6a2f80b56bd801/pipelines_settings.png" alt="circleci-vscode-pipelines-settings" width="450"/>
   </div>

5. **Configure notifications**

   You can set up pop-up notifications to warn you when a workflow in your Pipelines Panel has
   changed status.

    <div style="text-align:center">
      <img src="https://images.ctfassets.net/il1yandlcjgk/7i88m699tJo30NHWT4eBgj/d2cd01431b1ff9f1e89fa74793a1521e/new_notification.png" alt="circleci-vscode-notification" width="320"/>
    </div>

   By default, you will receive a pop-up notification every time one of the workflows in your
   Pipelines Panel enters a failing status, or needs your approval.

   If you wish to alter these defaults, you can:

   - Mute notifications (a toggle button to change this setting is also available at the top of the
   Pipelines Panel)
   <!-- - Select to be notified only about pipelines you are the author of -->
   - Configure which workflow status changes you want to be notified about

   Please note that you can only be notified about workflows that appear in your Pipelines Panel.

    <div style="text-align:center; padding:12px">
        <img src="https://images.ctfassets.net/il1yandlcjgk/4PUW1LkF5BAMI4l2x6AbNF/4c825c6a05b58623848e24ac7eb5f15e/notification_settings.png" alt="circleci-vscode-notifications-settings" width="450"/>
    </div>

## The Pipelines Panel

The Pipelines Panel lists all CircleCI projects detected in your workspace. For each project, it
shows the most recent pipelines, jobs and workflows, and lets you monitor their status and interact
with them.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/1wkgsoT4bLeu6um3jcVK6U/c5fc5cf811d3e6e75cc77a33d1425e95/pipelines_panel.png" alt="circleci-vscode-pipelines-panel" width="380"/>
</div>

For some tree objects, you can perform actions by clicking on the icons which appear when you hover
over the item.

### Project

Projects are the top level tree items, and they contain your pipelines.

<!-- Hovering over a Project lets you:
- Open in browser, to view the project in the CircleCI Web UI, applying the same filters currently active in the VS Code Pipelines Panel -->

If you don't follow a project, you can also use the panel to follow it.

### Pipeline

[Pipelines](https://circleci.com/docs/pipelines?utm_source=VS_Code_marketplace&utm_medium=marketplace&utm_campaign=CCI_VS_code_marketplace_page)
are nested under projects. They are the CircleCI unit of change, and they contain your workflows.

<!-- Hovering over a Pipeline lets you:
- Open in browser, to view pipeline details in the CircleCI app on your default web browser -->

### Workflow

[Workflows](https://circleci.com/docs/workflows?utm_source=VS_Code_marketplace&utm_medium=marketplace&utm_campaign=CCI_VS_code_marketplace_page)
are nested under each Pipeline, and contain Jobs. Hovering over a Workflow lets you:

- Open in browser, to view workflow details in the CircleCI app, on your default web browser
- Rerun workflow from start, to re-triggered the entire workflow
- Rerun workflow from failed, to re-triggered the workflow starting from the first failed job

### Job

[Jobs](https://circleci.com/docs/jobs-steps?utm_source=VS_Code_marketplace&utm_medium=marketplace&utm_campaign=CCI_VS_code_marketplace_page)
are nested under each Workflow, and can contain Tests and Artifacts. Hovering over a Job lets you:

- Approve the job (only if the job is on hold)
- Cancel the job (only if the job is running)
- Rerun the job with SSH (you can read more about this functionality in a later section)
- **View job details**

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/XtreF3Lo54vkeBdjzZ4Ga/4a91c3cf47251cb4b3d76bc18cfec690/job-details-gif.gif" alt="circleci-job-details-webview" width="450"/>
</div>

By expanding a Job, you can also:

- **Load tests**, if you have configured your tests to upload test results to CircleCI. Tests that
  CircleCI has detected as flaky will be prefaced by the indication [FLAKY].
- **Load artifacts**, to load any artifacts created by the Job. Once the artifacts are loaded, you
  can download them by clicking on them.

### Re-run with SSH

You can re-run jobs with SSH directly from VS Code, either:

- through the Job Details page, by clicking on the green button on the top right:

<!-- <div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/4a7QIPEUXkD4UDEyacA8Y8/7e1ec72c8b799fbeb481b1b1503175b5/job-details.png" alt="rerun-with-ssh-inline" width="380"/>
</div> -->

- or by clicking on the action icon next to the job name in the Pipelines Panel.

<div style="text-align:center">
    <img src="https://global.discourse-cdn.com/circleci/original/3X/1/f/1f0ee73a524c57191276a6ba66989892a317067a.png" alt="rerun-with-ssh-inline" width="300"/>
</div>

In both cases, you will be presented with two options:

1. **Open SSH session in terminal**

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/5Q5YsCydCIQqZDS8Dl3ePy/1126453a0088fef4572ca52335384c2e/ssh_terminal.png" alt="rerun-with-ssh-terminal" width="460"/>
</div>

2. **Open SSH session in remote VS Code window**

   > This feature requires the official VS Code extension
   > [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh).
   > You can find more information on Remote Development using SSH in VS Code directly in the
   > [VS Code docs](https://code.visualstudio.com/docs/remote/ssh).

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/PhAxalshH4WakKKx3eJAn/1f3351d12dd426878d1f3544172f496b/ssh_remote_window.png" alt="rerun-with-ssh-remote-window" width="460"/>
</div>

To rerun your job with SSH, you will first have to set the path to your Github or Bitbucket SSH key.
The first time you attempt to re-run with SSH, the extension will guide you to select the path of
the relevant SSH key. However, if you miss this step or want to modify it at a later time, you can
do so from the dedicated section of the settings page:

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/5Bo33WhX9gG9CulAVVexPx/8267182255428dc28f2da6af51926eb7/ssh-settings.png" alt="circleci-vscode-ssh-settings" width="380"/>
</div>

If the job you want to rerun uses parallelism, you will be able to select which job you want to SSH
into.

> You can read more about debugging with SSH on CircleCI
> [in the Docs](https://circleci.com/docs/ssh-access-jobs/#ensure-the-correct-key-is-offered-to-circleci?utm_source=VS_Code_marketplace&utm_medium=marketplace&utm_campaign=CCI_VS_code_marketplace_page).

## Status Bar

The Status Bar provides summary information about the state of the CircleCI extension, your project
and your most recent workflow.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/2AxjT8oathUfD54twnPoJs/5899ed45f8961fc8f550f01cd84b53d3/status-bar.png" alt="circleci-vscode-status-bar" width="480"/>
</div>

Specifically, you might see the following statuses:

- **Not logged in** - when clicking on the status bar, the login page will open
- **No project** - when clicking on the status bar, the settings page will open so you can select a
  project manually
- **Success / On hold / Failed**, and similar workflow statuses - THIS refers to the status of the
  top pipeline in your panel. When clicking on the status bar, the relative workflow will come into
  focus on the CircleCI Pipelines Panel.
- **No internet** - when your internet connection is lost

## Config Helper

This extension provides in-file assistance with writing, editing and navigating CircleCI
Configuration files.

It is based on a CircleCI-specific Language Server, and offers:

- **Rich code navigation through “go-to-definition” and “go-to-reference” commands**. This is
  especially convenient when working on large configuration files, to verify the definition of
  custom jobs, executors parameters, or in turn view where any of them are referenced in the file.
  Assisted code navigation also works for Orbs, allowing to explore their definition directly in the
  IDE when using the go-to-definition feature on an orb-defined command or parameter.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/3JVSu8rTDQRJcIMGF866oJ/444091930e6c64dc9d52f17755e16af9/config_helper_go-to-definition-optimised.gif" alt="circleci-vscode-go-to-definition" width="380"/>
</div>

- **Contextual documentation and usage hints when hovering on specific keys**, so as to avoid having
  to continuously switch to the browser to check the docs whenever you are editing your YAML config.
  Links to the official CircleCI documentation are also provided on hover - for easier navigation.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/6bloAnI35jXou9Q91aGFgU/356b1554d42c77fb2708fac980a8d592/config_helper_on-hover-documentation.png" alt="circleci-vscode-documentation-on-hover" width="380"/>
</div>

- **Syntax validation** - which makes it much easier to identify typos, incorrect use of parameters,
  incomplete definitions, wrong types, invalid or deprecated machine versions, etc.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/1dF1ic2cUczaMYdxnSUZuF/fbc1eb5d5894a803caf297c57e808738/config_helper_syntax-validation.gif" alt="circleci-vscode-syntax-validation" width="380"/>
</div>

- **Usage warnings** - which can help identify deprecated parameters, unused jobs or executors, or
  missing keys that prevent you from taking advantage of CircleCI’s full capabilities

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/404bGppmtCgvE0WOmPk0E/0a92e373929d6d19c8f5a742f1097511/config_helper_usage-warning.png" alt="circleci-vscode-usage-warnings" width="380"/>
</div>

- **Auto completion**, available both on built-in keys and parameters and on user-defined variables

<div style="text-align:center;padding:12p">
    <img src="https://images.ctfassets.net/il1yandlcjgk/3jXaQvhOQgayhV9O4nfAhZ/b6d55e689ddfcf7673ab7e9b76ba0a53/config_helper_autocomplete.png" alt="circleci-vscode-autocomplete" width="380"/>
</div>

You can access a full overview of all errors, warnings and hints proposed by the Config Helper in
the Problems tab of VS Code.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/5PRTRn6UvbSX55HDAYdmJ2/51e7c91d86b8c44f83b0372c7809e222/ls_diagnostics.png" alt="circleci-vscode-diagnostics" width="440"/>
</div>

> The Config Helper is based on a dedicated Language Server for CircleCI YAML files, which is Open
> Source. You can view its source code, contribute and add issues directly on the project
> repository:
> [circleci-yaml-language-server](https://github.com/CircleCI-Public/circleci-yaml-language-server).

## Config validation commands

The extension also provides two commands that help you statically validate your YAML config files
without having to run a pipeline.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/19bH6WVfybTjUb0037ARGq/54d0d24f8948894e3dac86dbeac4850b/config-validation-commands.png" alt="circleci-vscode-validation-commands" width="380"/>
</div>

1. **Validate current configuration file**

   Corresponds to the CLI command
   [`circleci config validate`](https://circleci-public.github.io/circleci-cli/circleci_config_validate.html),
   and verifies statically that the config file is well formed. Please note that this command only
   validates this file for structure and syntax errors, but not for semantic error (e.g. _this job
   does not exist_).

2. **Validate current configuration file against org policy**

   Corresponds to the CLI command
   [`circleci policy decide`](https://circleci-public.github.io/circleci-cli/circleci_policy_decide.html),
   and verifies that the configuration file complies with your organization policies - if any are
   set.

   > Please note that this command is only available to Scale customers

3. **View compiled version of current configuration file**

   This command resolves all orb references in your config file, and shows you the full-length
   version of your config.

All these commands can also be invoked:

- by right-clicking on a CircleCI YAML file:

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/11clc9xHtc83wdWtx3kgU7/01248678eb173688b371872ee4407d07/right-click-menu.png" alt="circleci-vscode-right-click-config-comands" width="480"/>
</div>

- by clicking on the CircleCI button on the top right corner of the page, when focusing on a
  CircleCI YAML file. Please note that the button will _not_ be visible if you are editing a
  different file.

<div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/2jJdb6NkpYw2ytN1LgCl2V/e7c916cc0a0a332897bcb406044de8a4/cci-commands-gif.gif" alt="circleci-vscode-button-config-commands" width="480"/>
</div>

## 🆕 Test run your config

> NOTE: The ability to trigger a pipeline from VS Code with a _unversioned_ config is currently in
> **closed preview**. This feature is available on the **Free Plan** for projects integrated through
> the **GitHub OAuth app**, or **Bitbucket**. To find out which GitHub account type you have, see
> the documentation about GitHub OAuth app integration
> (https://circleci.com/docs/github-integration/). If you are on the Performance of Scale plan, and
> would like to sign up for the closed preview, you can do so
> [here](https://docs.google.com/forms/d/1IDOyltcRRN0g5XULRK7qIzmF2Mvb5fnclk9If38_9yI).

Trigger pipelines from VS Code to iterate on your CircleCI config without committing your trial and
error changes to your version control system. Run and validate your full pipeline, or select jobs
and workflows to validate individually. View the results of your test runs in the CircleCI web app,
just the same as any other pipeline.

![Config Test Run](https://images.ctfassets.net/il1yandlcjgk/3bAxTZDhAwAtvIMgLCmiPe/e65a39590bb65a3312fd5f7a76aef0e1/vscode-ext-config-test-run-crop.png "CircleCI Config Test Run")

<!-- <div style="text-align:center">
    <img src="https://images.ctfassets.net/il1yandlcjgk/3bAxTZDhAwAtvIMgLCmiPe/e65a39590bb65a3312fd5f7a76aef0e1/vscode-ext-config-test-run-crop.png" alt="config-test-run" width="640"/>
</div> -->

### Prerequisites

- `v2.0` or higher of the CircleCI VS Code extension
- A CircleCI account integrated through the GitHub OAuth app, or Bitbucket. To find out which GitHub
  account type you have, check [this docs page](https://circleci.com/docs/github-integration/).
- You must be on the [Free plan](https://circleci.com/pricing/)
- You need to opt-in to this feature per project. For your project, navigate to menu:Project
  Settings[VS Code integration] and toggle the "Run pipelines with unversioned config" to **On**.
- Your project must **not** make use of
  [dynamic configuration](https://circleci.com/docs/dynamic-config/). This feature is disabled for
  projects that use dynamic configuration.

NOTE: **Unversioned config** in CircleCI indicates that the `.circleci/config.yml` on the branch
where the pipeline is running is ignored, and instead, the configuration file is overridden by a
custom configuration file passed as a parameter.

### Steps

<div style="padding:10px; border-radius:2px; border: 1px solid #ffa700; font-weight: 500; margin-bottom: 10px;">⚠️ 
Triggering a pipeline with an _unversioned_ configuration can have side effects, for example, unwanted deployment. We recommend using this feature **only** on feature branches.
</br>
Test run pipelines triggered from VS Code have access to contexts, and project environment variables, based on which branch they are run on, and user permissions.
</div>

The following steps show how to test run a pipeline from the VS Code extension:

1. Open VS Code and select the CircleCI logo in the sidebar. The **Pipelines** and **Run** panels
   will be visible
2. Expand the **Run** panel to view your projects.
3. For each project, there is a button to trigger the config test run, and check boxes for each
   workflow and job for you to choose which parts of your config you want to run. Select your
   options, and click icon:play[]. Any local change you make to your `.circleci/config.yml` file
   will be included in the test run.
4. The pipeline is now visible in your dashboard in the CircleCI web app, at
   [app.circleci.com/pipelines/](https://app.circleci.com/pipelines/), and the Pipelines Panel in
   the VS Code extension.


## Troubleshooting

Here are some frequently encountered issues, and some clarifications on each of them.

- `“Your project could not be detected because no workspace is currently open”`

  You can fix this issue by opening a folder or workspace. Alternatively, you can select to follow a
  CircleCI project manually from the Settings page.

- The following errors concern the ability of the extension to link your workspace to a Git
  repository.

  - `“Your project could not be detected because we couldn’t find a Git repository associated with this workspace”`
  - `“Your project could not be detected because we were unable to get the list of git remotes”`
  - `“Your project could not be detected because we could not find default remote of your Git repository”`
  - `“Your project could not be detected because we were unable to get the URL of the Git remote XYZ”`

  When any of these errors occur, you might want to check that your workspace has a valid Git remote
  URL. You can also fix this issue by selecting to follow a CircleCI project manually from the
  Settings page.

- `“Your project could not be detected because CircleCI does not know this project”`

  This error indicates that the repository associated with your workspace doesn’t appear to be a
  CircleCI project. If this is unexpected, verify the Git remote URL associated with your
  repository, and ensure that you see this project on the CircleCI web app. You can also address
  this issue by selecting to follow a CircleCI project manually from the Settings page.

- `“Your project could not be detected because you don't follow this project on CircleCI”`

  When you see this error, you might want to visit the
  [Projects page on the CircleCI app](https://app.circleci.com/projects/project-dashboard/github/)
  and ensure that you “follow” the project associated with this workspace.

- `“connection to server is erroring. Shutting down server”`

  This message indicates that the CircleCI Language Server has crashed. This might be caused by an
  unexpected parsing error. For this reason, it is likely that this issue will always occur on the
  same file. If you identify a file that causes this error, it would be helpful if you could inform
  us at XXXXXX (in the future on the LS open source repo)

- When interacting with pipelines, workflows and jobs, you might see the following errors.

  - `“Cannot refresh pipelines: [runtime error message]”`
  - `“Download failed [runtime error message”’`
  - `“Cannot rerun workflow because: [runtime error message]”`
  - `“Job approval failed: [runtime error message]”`

  Please keep in mind that one of the causes for any of the above error messages could be network
  issues. If you see any of these messages repeatedly, we recommend you check your internet
  connection.

- The following errors should never occur. Should you see any of them and be able to reproduce them
  appearing, it would be helpful if you could report this to us.
  - `“Target entity can not be cancelled because it is not a workflow / job”`
  - `“Your project is not set up”`
  - `“Can not cancel your job because it has no job number”`

## Need support?

### How to contact us

If you find any bugs with this extension or want to provide feedback, you can contact us at
[cci-vscode-feedback@circleci.com](mailto:cci-vscode-feedback@circleci.com?subject=VS%20Code%20extension%20feedback).

### Documentation

You can find more information about CircleCI on our
[official documentation](https://circleci.com/docs?utm_source=VS_Code_marketplace&utm_medium=marketplace&utm_campaign=CCI_VS_code_marketplace_page).

### How to contribute

The Language Server upon which the Conifg Helper is based is Open Source. If you would like to
contribute to the project, feel free to open a PR or get in touch with us through the
[circleci-yaml-language-server repository](https://github.com/CircleCI-Public/circleci-yaml-language-server).

## Additional resources

### Data and Telemetry

The CircleCI VS Code extension collects usage data for product improvement purposes, respecting the
`isTelemetryEnabled` and `telemetry.telemetryLevel` settings provided by VS Code.

It can be opted out through the VS Code settings page.

### Privacy Policy

By signing in to this extension, you agree to the
[CircleCI Privacy Policy](https://privacy.circleci.com/).

### Acknowledgements

This project was made possible by the community surrounding it. You can find more information about
the people and projects which contributed to this extension in the file `CREDITS.md`.

We were also inspired by the great work done by community-built extensions:

- [Jody's Extension for CircleCI](https://marketplace.visualstudio.com/items?itemName=jodyh.circleci-vscode)
- [CircleCI Status](https://marketplace.visualstudio.com/items?itemName=kuromoka.circleci-status)
- [vscode-circleci](https://github.com/jvandyke/vscode-circleci)
- [circleci-conig-validator](https://marketplace.visualstudio.com/items?itemName=valmack.circleci-config-validator)
- [Local-CI](https://marketplace.visualstudio.com/items?itemName=LocalCI.local-ci)

<div style="color:gray;margin-top:30px">
© 2023 Circle Internet Services, Inc.
</div>
