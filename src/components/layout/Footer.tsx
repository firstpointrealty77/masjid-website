export function Footer() {
  const addressLines = [
    "10935 Harrisburg Road",
    "Fort Mill, SC 29707",
  ];

  const mapsQuery = encodeURIComponent(
    "10935 Harrisburg Road, Fort Mill, SC 29707"
  );
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  // Dummy contact details (replace later)
  const email = "contact@example.com";
  const whatsappLink = "https://chat.whatsapp.com/XXXXXXXXXXXXXXX";

  return (
    <footer className="mt-16 border-t border-emerald-900/10 bg-[#F8F6F1]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          
          {/* Left: Contact */}
          <div className="space-y-6">
            <div className="space-y-2 text-sm text-emerald-900/70">
              <div className="text-sm font-semibold text-emerald-950">
                Contact
              </div>

              {/* Email */}
              <div>
                <span className="font-medium text-emerald-950">Email: </span>
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-emerald-950 px-3 py-2 text-sm font-semibold text-[#F8F6F1] hover:opacity-90"
                >
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>

          {/* Right: Address + Map */}
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold text-emerald-950">
                Address
              </div>

              <div className="mt-2 text-sm leading-relaxed text-emerald-900/70">
                {addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>

              {/* Open in Google Maps button */}
              <div className="mt-3">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-[#ffde59] px-3 py-2 text-sm font-semibold text-emerald-950 hover:opacity-90"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-emerald-900/10 bg-white">
              <iframe
                title="Location on Google Maps"
                src={mapsEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 border-t border-emerald-900/10 pt-6 text-xs text-emerald-900/60">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} All rights reserved.</div>
            <div>Privacy • Terms</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
