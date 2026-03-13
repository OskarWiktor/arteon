# Arteon Agency Rules & Standards

## Overview

This directory contains comprehensive rules and standards for the Arteon Agency project, ensuring consistency, quality, and best practices across all development activities.

## Structure

```
.windsurf/rules/
├── README.md                   # This file
├── project-principles.md       # Core development principles
├── development-guidelines.md   # Detailed development guidelines
├── security-standards.md       # Security requirements and best practices
├── performance-standards.md   # Performance targets and optimization
├── testing-standards.md        # Testing strategies and requirements
└── [future-rules].md          # Additional rule files as needed
```

## Quick Reference

### Core Principles

- **TypeScript First** - All code must be typed
- **Server Components by Default** - Minimize client-side JavaScript
- **Performance First** - Meet Core Web Vitals budgets
- **Security First** - Validate all inputs, no `any` types
- **Accessibility First** - WCAG 2.1 AA compliance

### Key Requirements

- **Lighthouse Score:** > 90 (performance, accessibility, best-practices, SEO)
- **Bundle Size:** < 250KB gzipped
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Test Coverage:** 80%+ for unit tests
- **16 Locales:** Full internationalization support

### Forbidden Practices

```typescript
// ❌ Never use any
const data: any = fetchData();

// ❌ Never use eval
const result = eval(userInput);

// ❌ Never use innerHTML without sanitization
div.innerHTML = userInput;

// ❌ Never wrap navigation errors in try-catch
try {
  redirect('/new-page');
} catch (error) {
  // ❌ This will never work
}
```

### Required Practices

```typescript
// ✅ Always use specific types
interface User {
  id: string;
  name: string;
}

// ✅ Always use React.cache for data
const getUser = cache(async (id: string) => {
  return await db.user.findUnique({ where: { id } });
});

// ✅ Always use Server Components by default
export default async function Page() {
  const data = await fetchData();
  return <Component data={data} />;
}
```

## When to Use Which Rules

### Development Phase

- **project-principles.md** - Core principles and anti-patterns
- **development-guidelines.md** - Detailed coding standards
- **security-standards.md** - Input validation and security patterns

### Quality Assurance

- **testing-standards.md** - Testing strategies and requirements
- **performance-standards.md** - Performance optimization targets

### Deployment

- **security-standards.md** - Production security requirements
- **performance-standards.md** - Performance monitoring
- **testing-standards.md** - Post-deployment testing

### Maintenance

- **performance-standards.md** - Ongoing performance monitoring
- **security-standards.md** - Regular security audits
- **testing-standards.md** - Test maintenance and updates

## Integration with Skills

These rules are designed to work seamlessly with the custom skills in `.windsurf/skills/skills/`:

- **arteon-component-architecture** - Component patterns
- **arteon-data-management** - Data structure rules
- **arteon-security-best-practices** - Security implementation
- **arteon-performance-optimization** - Performance patterns
- **arteon-testing-strategy** - Testing methodologies
- **arteon-workflow-automation** - Automation standards

## Enforcement

### Pre-commit Hooks

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run test:ci",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

### CI/CD Quality Gates

- [ ] All tests pass
- [ ] Linting successful
- [ ] Build successful
- [ ] Performance > 90 Lighthouse
- [ ] Accessibility > 95
- [ ] Security scan passed

### Code Review Checklist

- [ ] TypeScript types are correct
- [ ] Performance is optimized
- [ ] Security is implemented
- [ ] Accessibility is met
- [ ] Tests are comprehensive

## Tool-Specific Rules

### Image Converters (47 tools)

- File size limit: 10MB
- Supported formats: jpg, png, webp, avif, gif, bmp, tiff
- Processing timeout: 60 seconds
- Quality range: 1-100
- Memory usage: < 500MB

### Text Converters (8 tools)

- Input size limit: 1MB
- Encoding: UTF-8
- Line ending normalization: LF
- Special character handling
- Processing timeout: 30 seconds

### Unit Converters (17 tools)

- Precision: 2 decimal places
- Input validation: numeric ranges
- Error handling: invalid inputs
- Result formatting: locale-specific
- Processing timeout: 5 seconds

## Performance Budgets

### Core Web Vitals

```typescript
interface PerformanceBudgets {
  lighthouse: {
    performance: 90;
    accessibility: 95;
    bestPractices: 90;
    seo: 90;
  };
  coreWebVitals: {
    LCP: 2.5; // seconds
    FID: 100; // milliseconds
    CLS: 0.1; // cumulative layout shift
    FCP: 1.8; // seconds
    TTI: 3.8; // seconds
  };
  bundle: {
    total: 250; // KB gzipped
    largest: 100; // KB gzipped
  };
}
```

### Tool Performance

```typescript
interface ToolPerformanceTargets {
  imageConverters: {
    lcp: 3.0; // seconds
    fid: 150; // milliseconds
    conversionTime: 5000; // milliseconds
  };
  textConverters: {
    lcp: 2.0;
    fid: 50;
    conversionTime: 1000;
  };
  unitConverters: {
    lcp: 2.0;
    fid: 50;
    conversionTime: 500;
  };
}
```

## Security Requirements

### Input Validation

- All client inputs must be validated with Zod schemas
- File uploads must be type and size validated
- API endpoints must have rate limiting
- No `any` types in production code

### Data Protection

- Database connections must use parameterized queries
- Sensitive data must be encrypted
- Environment variables must be validated
- No secrets in code or commits

### Frontend Security

- CSP headers must be configured
- XSS protection must be implemented
- CSRF protection must be enabled
- HTTPS must be enforced

## Testing Requirements

### Coverage Goals

- **Unit Tests:** 80% coverage
- **Integration Tests:** Critical paths
- **E2E Tests:** User workflows
- **Performance Tests:** Core Web Vitals
- **Accessibility Tests:** WCAG compliance

### Test Structure

```
tests/
├── unit/                    # Unit tests
├── integration/             # Integration tests
├── e2e/                     # End-to-end tests
├── performance/            # Performance tests
├── accessibility/           # Accessibility tests
└── visual/                 # Visual regression tests
```

## Internationalization

### Supported Locales

- **PL:** Default (no URL prefix)
- **EN:** `/en/tools`
- **DE:** `/de/werkzeuge`
- **ES:** `/es/herramientas`
- **FR:** `/fr/outils`
- **PT:** `/pt/ferramentas`
- **IT:** `/it/strumenti`
- **RO:** `/ro/instrumente`
- **NL:** `/nl/tools`
- **HU:** `/hu/eszkozok`
- **CS:** `/cs/nastroje`
- **SV:** `/sv/verktyg`
- **DA:** `/da/vaerktojer`
- **NO:** `/no/verktoy`
- **FI:** `/fi/tyokalut`
- **EL:** `/el/ergaleia`

### Content Rules

- UTF-8 without BOM
- No Polish typographic quotes „" → use `&quot;`
- No Unicode escapes → use actual characters
- Adapt, don't translate - consider cultural context

## Monitoring & Alerting

### Performance Monitoring

- Core Web Vitals tracking
- Bundle size monitoring
- Error rate tracking
- User experience metrics

### Security Monitoring

- Failed authentication attempts
- Rate limit violations
- Suspicious activity detection
- Security event logging

### Alert Thresholds

- Lighthouse score < 90
- Error rate > 1%
- Bundle size > 300KB
- Response time > 3 seconds

## Compliance

### GDPR Compliance

- Data protection policies implemented
- User consent mechanisms
- Data retention policies
- Right to deletion implemented

### Accessibility Compliance

- WCAG 2.1 AA standard
- Screen reader compatibility
- Keyboard navigation support
- Color contrast requirements

## Getting Started

### For New Developers

1. Read `project-principles.md` first
2. Follow `development-guidelines.md` for coding standards
3. Review `testing-standards.md` for testing requirements
4. Check `security-standards.md` for security practices
5. Monitor `performance-standards.md` for performance targets

### For Existing Developers

1. Review all rules when making major changes
2. Use `testing-standards.md` for new feature testing
3. Check `performance-standards.md` for optimization opportunities
4. Follow `security-standards.md` for security updates

### For Code Reviewers

1. Ensure all rules are followed
2. Check performance implications
3. Verify security implementation
4. Confirm test coverage
5. Validate accessibility compliance

## Maintenance

### Regular Updates

- **Weekly:** Dependency updates
- **Monthly:** Security audits
- **Quarterly:** Performance reviews
- **Yearly:** Architecture assessment

### Rule Updates

- Update rules when new patterns emerge
- Document rule changes in README
- Communicate changes to team
- Update skills accordingly

## Troubleshooting

### Common Issues

- **Performance:** Check `performance-standards.md`
- **Security:** Review `security-standards.md`
- **Testing:** Follow `testing-standards.md`
- **Development:** Use `development-guidelines.md`

### Getting Help

- Check relevant rule files first
- Consult appropriate skills
- Review project documentation
- Ask team members for guidance

## Future Enhancements

### Planned Additions

- `api-standards.md` - API design patterns
- `database-standards.md` - Database best practices
- `deployment-standards.md` - Deployment procedures
- `monitoring-standards.md` - Monitoring and alerting

### Rule Evolution

- Rules evolve with project needs
- Community feedback incorporated
- Industry best practices adopted
- Team experience integrated

---

These rules ensure the Arteon Agency project maintains high quality, performance, security, and accessibility standards while supporting efficient development workflows for all 92 tools and 16 locales.
