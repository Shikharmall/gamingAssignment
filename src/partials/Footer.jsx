import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f1f5f9]">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 grid grid-cols-2 mx-4 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <a
              href="/tutorial"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              Tutorial
            </a>
          </div>
          <div className="pb-6">
            <a
              href="/faq"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              FAQ
            </a>
          </div>
          <div className="pb-6">
            <a
              href="https://blog.zap.gg"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              Blog
            </a>
          </div>
          <div className="pb-6">
            <a
              href="/sponsors"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              Sponsors
            </a>
          </div>
          <div className="pb-6">
            <a
              href="/contact"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              Contact Us
            </a>
          </div>
          <div className="pb-6">
            <a
              href="/privacy"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </a>
          </div>
          <div className="pb-6">
            <a
              href="/terms"
              className="text-sm leading-6 text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </a>
          </div>
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <a
            href="https://twitter.com/realZapGG"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">Twitter</span>
            <svg
              fill="#1DA1F2"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a
            href="https://discord.gg/zap-gg-trading-community-1147592830609535049"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">Discord</span>
            <svg
              fill="#5865F2"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.01-.059.051.051 0 00-.018-.011 8.875 8.875 0 01-1.248-.595.05.05 0 01-.02-.066.051.051 0 01.015-.019c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085 8.254 8.254 0 01-1.249.594.05.05 0 00-.03.03.052.052 0 00.003.041c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z"></path>
            </svg>
          </a>
          <a
            href="https://tiktok.com/@realzapgg"
            className="text-muted-foreground hover:text-primary"
          >
            <span className="sr-only">TikTok</span>
            <svg
              viewBox="0 0 24 24"
              fill="#ff0050"
              height="1em"
              width="1em"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
            </svg>
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          © 2024 Zap! All rights reserved.
        </p>
      </div>
    </footer>
  );
}
