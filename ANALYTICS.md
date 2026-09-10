# Analytics setup

The production website uses Google Analytics 4 measurement ID `G-PHXVQSG37S`.
The ID is public configuration and is intentionally committed with the site.

Tracking loads only when the browser hostname matches the production hostname:

```text
www.ballantynemasjid.org
```

Localhost and staging remain excluded. `NEXT_PUBLIC_ANALYTICS_HOSTNAME` may be used to override the hostname for a controlled test, but a separate GA4 test property should be used before doing that.

## Required GA4 settings

Keep Enhanced Measurement enabled so GA4 records page views, including browser-history changes during Next.js navigation. Leave Google Signals and advertising personalization disabled in the website integration.

## Events

| Event | Meaning | Parameters |
| --- | --- | --- |
| `page_view` | Initial page and Next.js navigation | Standard GA4 page information |
| `donation_checkout` | Click to the PayPal donation page | provider=paypal, page_path |
| `donation_details_copy` | Successful Zelle detail copy on Donate | method=zelle, detail=recipient_tag or memo, page_path |
| `contact_click` | Open email, SMS, WhatsApp or community invite | method, page_path |
| `directions_click` | Open Google Maps directions | provider=google_maps, page_path |

Mark `donation_checkout` as a key event in GA4 to measure donation intent. Optionally mark `contact_click`. Do not label these as completed donations or completed messages. A Zelle copy is not a transfer. No donation amounts, donor names, email addresses, phone numbers, copied values, query strings, or fragments are added to custom event parameters. Standard GA4 browser/device measurement still applies.

Actual donation completion requires verified PayPal transaction reporting or a server-side payment integration. The website cannot infer a payment from a click or return URL.

## Verify before production

1. Deploy the configured measurement ID to the allowed hostname.
2. Verify initial page view and one page view per internal navigation in GA4 Realtime/DebugView.
3. Click PayPal, email, SMS, WhatsApp, and directions links without submitting payments/messages. Confirm the matching events.
4. Copy a Zelle detail and confirm an event; failed copy attempts must not emit one.
5. Confirm local and non-allowed staging hostnames do not request gtag.js.
6. Update the site's privacy information to describe Google Analytics before activation. If visitor consent is required for your deployment, integrate the applicable consent flow before enabling tracking.

Official references:
- https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications
- https://developers.google.com/analytics/devguides/collection/ga4/views
- https://developers.google.com/tag-platform/security/guides/privacy
