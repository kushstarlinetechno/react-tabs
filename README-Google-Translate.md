# Google Cloud Language Translate API Usage Guide

## Overview
This guide explains how to use the Google Cloud Language Translate API in a React app, including pricing, quota, and security best practices.

---

## Pricing & Quota
- **Free Tier:** 500,000 characters/month per Google Cloud project (billing account).
- **Paid Tier:** $20 per 1 million characters after free quota is exceeded.
- **Quota applies per project, not per domain or IP.**

### Examples
- **One app, one API key:**
  - 300k chars in January → free.
  - 600k chars in February → 500k free + 100k paid = ~$2.
- **Two websites, same project/key:**
  - Site A: 300k chars, Site B: 250k chars → 550k total → 500k free, 50k paid = ~$1.
- **Two projects (two billing accounts):**
  - Each gets its own 500k free quota.

---

## API Key & Security
- **All requests authenticated with the same API key count toward the same quota.**
- **You cannot safely hide your API key in frontend code.**
- **Best Practice:** Restrict your API key by HTTP referrer (domain) in Google Cloud Console.

### Restricting API Key
1. Go to Google Cloud Console → Credentials.
2. Edit your API key.
3. Set Application Restrictions: HTTP referrers (websites).
4. Add your domain(s) (e.g., `https://yourdomain.com/*`).

---

## React Usage Example

```js
import { useState } from "react";
import axios from "axios";

export function useTranslate(apiKey, targets) {
  const [translations, setTranslations] = useState({});

  async function translate(text) {
    if (!text) return;
    const requests = targets.map(async (lang) => {
      const res = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        { q: text, target: lang, source: "en" }
      );
      return [lang, res.data.data.translations[0].translatedText];
    });

    const results = await Promise.all(requests);
    setTranslations(Object.fromEntries(results));
  }

  return [translations, translate];
}

// Usage:
const [translations, translate] = useTranslate(API_KEY, ["es", "fr", "zh"]);
translate("Hello world");
```

---

## Risk Factors
- **API key exposure:** If used in frontend, your key can be discovered and abused.
- **Mitigation:** Always restrict your API key by domain in Google Cloud Console.

---

## Bottom Line
- 500k free characters/month per project.
- Restrict your API key by domain.
- All usage with the same key counts toward the same quota, regardless of domain or region.

---

## References
- [Google Cloud Translate Pricing](https://cloud.google.com/translate/pricing#basic-pricing)
- [API Key Restrictions](https://cloud.google.com/docs/authentication/api-keys)
