# 0001. Portfolio versions, indexed by this site

## Status

Accepted

## Context

The case studies on this site are portfolio versions of production systems. A confidentiality policy does not allow the real products to be shown. The original work cannot be published. Each version follows the same architecture decision, with a different scope, brand, and data. It is not the client's codebase.

This website is not one of those products. It is the public index: four pages a hiring reader can open.

## Decision

Keep this site in its own repository. State the boundary in the README before the architecture notes. On the projects page, link a case study to a GitHub repository only when that folder has a public remote. When it does not, name the local folder and do not publish a URL that would 404.

## Consequences

A reader can separate this site from the systems it describes. A missing remote stays unpublished. This decision record does not name an employer and does not add metrics that the case studies do not already state.
