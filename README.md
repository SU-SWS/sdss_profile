# SDSS PROFILE -- OLD

## DEPRECATED

As of **2023-02-15** this repo has been deprecated. The `sdss_profile` has been consolidated into the [ace-sdssgryphon](https://github.com/SU-SWS/ace-sdssgryphon) repo.

Original README continues below.

***


# [SDSS Profile](https://github.com/SU-SWS/sdss_profile)
##### 1.x
[![CircleCI](https://circleci.com/gh/SU-SWS/sdss_profile.svg?style=svg)](https://circleci.com/gh/SU-SWS/sdss_profile)

Maintainers: [Mike Decker](https://github.com/pookmish), [sherakama](https://github.com/sherakama), [joegl](https://github.com/joegl)

Changelog: [Changelog.md](CHANGELOG.md)

Description
---

This is the main installation profile for Stanford Web Services' self service platform and is used as a base for more.

Accessibility
---
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)
This module conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).

Installation
---

Install this installation profile like any other profile. [See Drupal Documentation](https://www.drupal.org/docs/7/install/using-an-installation-profile)

Configuration
---

Nothing special needed.

Releases
---

Steps to build a new release:
- Checkout the latest commit from the `8.x-1.x` branch.
- Create a new branch for the release.
- Commit any necessary changes to the release branch.
  -  These may include, but are not necessarily limited to:
    - Update the version in any `info.yml` files, including in any submodules.
    - Update the CHANGELOG to reflect the changes made in the new release.
- Make a PR to merge your release branch into `main`
- Give the PR a semver-compliant label, e.g., (`patch`, `minor`, `major`).  This may happen automatically via Github actions (if a labeler action is configured).
- When the PR is merged to `main`, a new tag will be created automatically, bumping the version by the semver label.
- The github action is built from: [semver-release-action](https://github.com/K-Phoen/semver-release-action), and further documentation is available there.

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this module. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)
