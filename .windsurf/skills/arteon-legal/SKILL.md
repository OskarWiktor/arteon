---
name: arteon-legal
description: >
  Comprehensive legal compliance system for Arteon Agency - GDPR, cookies,
  privacy policy, consent management, data protection, terms of service.
  Combines 2 skills into one deep-dive knowledge base.
---

# Skill: arteon-legal

Kompletny system compliance prawnego dla Arteon Agency — GDPR, cookies, prywatność.

**Łączy:** arteon-legal-compliance-intelligence, arteon-privacy-compliance-intelligence

## Kiedy używać

- Cookie consent implementation
- Privacy policy updates
- GDPR compliance
- Terms of service
- Data protection
- User privacy

---

# CZĘŚĆ 1: GDPR REQUIREMENTS

## Data Collection

| Data Type         | Purpose          | Consent      |
| ----------------- | ---------------- | ------------ |
| Analytics (GA4)   | Usage statistics | Required     |
| Contact form      | Lead generation  | Explicit     |
| Essential cookies | Functionality    | Not required |
| Marketing cookies | Advertising      | Required     |

## User Rights

| Right       | Implementation      |
| ----------- | ------------------- |
| Access      | Provide data export |
| Deletion    | Delete on request   |
| Portability | Export in JSON      |
| Object      | Stop processing     |

---

# CZĘŚĆ 2: COOKIE CONSENT

## Categories

```typescript
// Essential (no consent needed)
- Session cookies
- Language preference
- Consent cookie itself

// Analytics (consent required)
- Google Analytics
- Vercel Analytics

// Marketing (consent required)
- AdSense
- Remarketing
```

## Consent Mode v2

```typescript
// Default state (before consent)
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
});

// After user grants consent
gtag('consent', 'update', {
  analytics_storage: 'granted',
});
```

## Cookie Banner

```tsx
// components/shared/CookieConsent.tsx
function CookieConsent() {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-white p-4 shadow-lg">
      <p>Używamy plików cookie do analizy ruchu.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={acceptAll}>Akceptuję</button>
        <button onClick={rejectAll}>Odrzuć</button>
        <button onClick={openSettings}>Ustawienia</button>
      </div>
    </div>
  );
}
```

## Consent Storage

```typescript
interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
  version: string;
}

function setConsent(state: ConsentState) {
  document.cookie = `consent=${JSON.stringify(state)}; max-age=31536000; path=/; SameSite=Lax`;
}
```

## Consent Withdrawal

```typescript
function withdrawConsent() {
  setConsent({
    analytics: false,
    marketing: false,
    timestamp: Date.now(),
    version: '1.0',
  });

  gtag('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
  });

  clearAnalyticsCookies();
}
```

---

# CZĘŚĆ 3: PRIVACY POLICY

## Required Sections

1. Data controller info
2. Types of data collected
3. Purpose of processing
4. Legal basis
5. Data retention periods
6. User rights
7. Cookie policy
8. Third-party services
9. Contact information

## Third-Party Services

| Service          | Data       | Purpose      |
| ---------------- | ---------- | ------------ |
| Google Analytics | Usage data | Analytics    |
| Vercel           | Logs       | Hosting      |
| Resend           | Email      | Contact form |

---

# CZĘŚĆ 4: DATA PROTECTION

## Privacy Principles

### Data Minimization

```typescript
// ✅ Collect only what's needed
const contactForm = {
  name: required,
  email: required,
  message: required,
  // No phone, address, etc.
};

// ❌ Over-collection
const contactForm = {
  name, email, phone, address, company, position...
};
```

### Purpose Limitation

| Data         | Purpose            | Retention      |
| ------------ | ------------------ | -------------- |
| Contact form | Respond to inquiry | Until resolved |
| Analytics    | Usage statistics   | 14 months      |
| Consent      | Legal compliance   | 1 year         |

### Storage Limitation

```typescript
// Delete data when no longer needed
async function cleanupOldData() {
  const threshold = new Date();
  threshold.setMonth(threshold.getMonth() - 14);

  await deleteAnalyticsOlderThan(threshold);
}
```

## Data Security

### Transmission

- HTTPS everywhere
- Secure cookies (SameSite)
- No sensitive data in URLs

### Storage

- No client-side secrets
- Environment variables for keys
- Minimal localStorage usage

---

# CZĘŚĆ 5: CONTACT FORM

## Consent Checkbox

```tsx
<label className="flex items-start gap-2">
  <input type="checkbox" required name="consent" />
  <span className="text-sm">Wyrażam zgodę na przetwarzanie danych osobowych w celu odpowiedzi na zapytanie.</span>
</label>
```

## Data Handling

- Store only what's needed
- Delete after purpose fulfilled
- Secure transmission (HTTPS)
- No sharing with third parties

---

# CZĘŚĆ 6: TERMS OF SERVICE

## Key Points

- Service description
- User responsibilities
- Intellectual property
- Limitation of liability
- Governing law (Polish)
- Dispute resolution

---

# CZĘŚĆ 7: LEGAL PAGES

| Page           | Path (PL)               | Purpose       |
| -------------- | ----------------------- | ------------- |
| Privacy Policy | `/polityka-prywatnosci` | Data handling |
| Terms          | `/regulamin`            | Service terms |

---

# CZĘŚĆ 8: REGIONAL COMPLIANCE

## EU (GDPR)

- Consent before analytics
- Cookie banner mandatory
- Right to withdraw consent
- Data Processing Agreements with third parties

## US States (CCPA)

- California "Do Not Sell" option
- Privacy notice
- Opt-out mechanism

---

# CZĘŚĆ 9: PRIVACY BY DESIGN

## Default Settings

```typescript
// Privacy-friendly defaults
const defaultConsent = {
  analytics: false, // Opt-in, not opt-out
  marketing: false,
};
```

## Minimal Tracking

```typescript
// Track only essential events
trackEvent('tool_used', {
  tool_name: 'palette', // No PII
  // No user identifiers
});
```

## Google Analytics Config

```typescript
// Anonymize IP
gtag('config', GA_ID, {
  anonymize_ip: true,
  cookie_flags: 'SameSite=None;Secure',
});
```

---

# CZĘŚĆ 10: USER RIGHTS IMPLEMENTATION

## Access Request

```typescript
export async function GET(request: Request) {
  const userId = getUserId(request);
  const userData = await collectUserData(userId);

  return Response.json(userData);
}
```

## Deletion Request

```typescript
export async function DELETE(request: Request) {
  const userId = getUserId(request);

  await deleteUserData(userId);
  await deleteAnalyticsData(userId);

  return Response.json({ success: true });
}
```

---

# CZĘŚĆ 11: KEY FILES

| File                                  | Purpose           |
| ------------------------------------- | ----------------- |
| `components/shared/CookieConsent.tsx` | Banner            |
| `lib/consent/consentCookie.ts`        | Cookie management |
| `lib/consent/ga.ts`                   | Analytics consent |
| `data/{locale}/pages/privacy.json`    | Privacy policy    |
| `data/{locale}/pages/terms.json`      | Terms             |

---

# CZĘŚĆ 12: CHECKLISTS

## Cookie Compliance

- [ ] Cookie banner implemented
- [ ] Consent Mode v2 configured
- [ ] Essential vs analytics cookies separated
- [ ] Easy withdrawal mechanism
- [ ] Consent stored properly

## Privacy Compliance

- [ ] Privacy policy up to date
- [ ] Data minimization practiced
- [ ] Secure transmission (HTTPS)
- [ ] User rights supported
- [ ] Third-party DPAs in place

## Forms

- [ ] Contact form has consent checkbox
- [ ] Data retention policy defined
- [ ] Validation and sanitization
- [ ] Secure storage

## Legal Pages

- [ ] Privacy policy present
- [ ] Terms of service present
- [ ] Cookie information accessible
- [ ] Contact information available
