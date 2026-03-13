# Arteon Agency Skills & Rules System

## Overview

Complete set of 12 custom skills and comprehensive rules system created for Arteon Agency project, covering all aspects of development, deployment, and maintenance. All components are now located in `.windsurf/` directory (migrated from `.claude`).

## Directory Structure

```
.windsurf/
├── CONTEXT.md
├── rules/                    # 6 rule files
└── skills/                    # 45 custom skills + 18 external skills
│   ├── arteon-component-architecture/
│   ├── arteon-content-workflow/
│   ├── arteon-data-management/
│   ├── arteon-deployment-strategy/
│   ├── arteon-error-handling/
│   ├── arteon-i18n/
│   ├── arteon-performance-optimization/
│   ├── arteon-security-best-practices/
│   ├── arteon-seo-optimization/
│   ├── arteon-testing-strategy/
│   ├── arteon-tool-documentation/
│   ├── arteon-tools/
│   ├── arteon-ai-agent/
│   ├── arteon-ai-code-intelligence/
│   ├── arteon-ai-content-intelligence/
│   ├── arteon-ai-seo-intelligence/
│   ├── arteon-ai-ux-intelligence/
│   ├── arteon-accessibility/
│   ├── arteon-advanced-testing/
│   ├── arteon-automation/
│   ├── arteon-content-creation/
│   ├── arteon-content-quality/
│   ├── arteon-content-seo/
│   ├── arteon-analytics-intelligence/
│   ├── arteon-app-intelligence/
│   ├── arteon-architecture-intelligence/
│   ├── arteon-code-documentation-intelligence/
│   ├── arteon-component-intelligence/
│   ├── arteon-cultural-adaptation/
│   ├── arteon-data-intelligence/
│   ├── arteon-docs-intelligence/
│   ├── arteon-fact-verification-intelligence/
│   ├── arteon-hooks-intelligence/
│   ├── arteon-i18n-content-quality/
│   ├── arteon-infrastructure-intelligence/
│   ├── arteon-legal-compliance-intelligence/
│   ├── arteon-lib-intelligence/
│   ├── arteon-locale-patterns/
│   ├── arteon-next-advanced-patterns/
│   ├── arteon-performance-intelligence/
│   ├── arteon-privacy-compliance-intelligence/
│   ├── arteon-quality-intelligence/
│   ├── arteon-sales-intelligence/
│   ├── arteon-scripts-intelligence/
│   ├── arteon-security-intelligence/
│   ├── arteon-seo-content/
│   ├── arteon-seo-research-intelligence/
│   ├── arteon-technical-seo/
│   ├── arteon-types-intelligence/
│   ├── arteon-typescript-advanced-intelligence/
│   ├── arteon-user-intelligence/
│   ├── arteon-utils-intelligence/
│   ├── arteon-web-intelligence/
│   ├── arteon-workflow-automation/
│   ├── deploy-to-vercel/
│   ├── find-skills/
│   ├── humanizer/
│   ├── next-best-practices/
│   ├── next-cache-components/
│   ├── nextjs-static-shells/
│   ├── react-email/
│   ├── responsive-design/
│   ├── seo/
│   ├── tailwind-design-system/
│   ├── typescript-advanced-types/
│   ├── ui-ux-pro-max/
│   ├── vercel-composition-patterns/
│   ├── vercel-react-best-practices/
│   ├── verification-loop/
│   └── web-design-guidelines/
```

## Skills vs Rules Integration

### Skills (`.windsurf/skills/`)

- **Purpose:** Automated assistance for specific development tasks
- **Usage:** Automatically activated by context during development
- **Structure:** Each skill has a `SKILL.md` file with detailed instructions

### Rules (`.windsurf/rules/)

- **Purpose:** Enforced guidelines and standards
- **Usage:** Automatically loaded by Windsurf AI
- **Structure:** Markdown files with clear guidelines
- **Enforcement:** Built-in enforcement mechanisms

## Key Differences

### Skills

- **Dynamic:** Context-aware assistance
- **Specific:** Task-oriented expertise
- **Activation:** Automatic based on development context
- **Storage:** `.windsurf/skills/skills/`

### Rules

- **Static:** Always enforced guidelines
- **General:** Broad architectural standards
- **Storage:** `.windsurf/rules/`
- **Format:** Markdown files with clear structure
- **Precedence:** System rules > Workspace rules > Skills

## Current Status

✅ **Migration Complete:** All skills migrated from `.claude` to `.windsurf`
✅ **Rules Created:** 6 comprehensive rule files
✅ **Structure Optimized:** Clean separation between skills and rules
✅ **Windsurf Compliant:** Follows official Windsurf documentation patterns

## Next Steps

The system is now properly structured and ready for use. Skills will be automatically activated during development, and rules will be enforced consistently across all workspaces.

## Quick Reference

### For Development

- **Skills:** Use `.windsurf/skills/skills/` for task-specific assistance
- **Rules:** Follow `.windsurf/rules/` for general guidelines

### For Maintenance

- **Skills:** Update skills as project evolves
- **Rules:** Adjust rules as standards change
- **Documentation:** Keep README.md updated

## Support

For any questions about the skills or rules, refer to the individual `SKILL.md` files in the skills directory or the overview files in the rules directory.
