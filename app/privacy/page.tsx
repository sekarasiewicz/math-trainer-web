import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Math Trainer iOS App. We do not collect any personal data. No tracking, no ads, no account required.",
  alternates: {
    canonical: "https://math-trainer.karasiewicz.dev/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 dark:text-zinc-500 mb-8">
          Last updated: November 2025
        </p>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Math Trainer (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we handle information when you use our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Information We Collect
            </h2>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-xl p-6 mb-4">
              <p className="text-green-800 dark:text-green-200 font-semibold text-lg mb-2">
                We do not collect any personal information.
              </p>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Math Trainer is designed with privacy in mind. The app:
            </p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span> Does <strong>not</strong> collect personal data
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span> Does <strong>not</strong> require account creation or login
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span> Does <strong>not</strong> track your location
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span> Does <strong>not</strong> use analytics or tracking services
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span> Does <strong>not</strong> contain advertisements
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">✕</span> Does <strong>not</strong> transmit any data over the internet
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Data Stored Locally
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              The app stores the following data <strong>locally on your device only</strong>:
            </p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
              <li><strong>Game settings</strong> - difficulty level, selected operations, time limits</li>
              <li><strong>Statistics</strong> - scores, accuracy, response times</li>
              <li><strong>Achievements</strong> - unlocked achievements and progress</li>
              <li><strong>App preferences</strong> - theme mode, sound/haptic settings</li>
            </ul>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6">
              <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                This data is stored using iOS&apos;s standard UserDefaults system, never leaves your device,
                and is automatically deleted if you uninstall the app.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Math Trainer is suitable for users of all ages, including children. Since we do not collect
              any personal information, the app complies with the Children&apos;s Online Privacy Protection Act
              (COPPA) and similar regulations worldwide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Math Trainer does <strong>not</strong> use any third-party services, SDKs, or APIs that collect user data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Data Security
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Since all data is stored locally on your device and never transmitted, your information is
              protected by your device&apos;s built-in security features (passcode, Face ID, Touch ID, encryption).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be reflected in the
              &quot;Last updated&quot; date at the top of this policy. Continued use of the app after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Since we don&apos;t collect personal data, there is no personal information to access, modify,
              or delete from our systems. All app data is stored locally on your device and can be removed
              by uninstalling the app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6">
              <p className="text-zinc-700 dark:text-zinc-300">
                <strong>Email:</strong>{" "}
                <a href="mailto:sebastian@karasiewicz.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
                  sebastian@karasiewicz.dev
                </a>
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                <strong>Developer:</strong> Sebastian Karasiewicz
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
              Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-700">
                    <th className="text-left py-3 px-4 text-zinc-900 dark:text-white font-semibold">Question</th>
                    <th className="text-left py-3 px-4 text-zinc-900 dark:text-white font-semibold">Answer</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-600 dark:text-zinc-400">
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <td className="py-3 px-4">Do you collect personal data?</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">No</td>
                  </tr>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <td className="py-3 px-4">Do you track users?</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">No</td>
                  </tr>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <td className="py-3 px-4">Do you show ads?</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">No</td>
                  </tr>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <td className="py-3 px-4">Do you share data with third parties?</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400 font-medium">No</td>
                  </tr>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    <td className="py-3 px-4">Where is data stored?</td>
                    <td className="py-3 px-4 font-medium">Locally on your device only</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">How do I delete my data?</td>
                    <td className="py-3 px-4 font-medium">Uninstall the app</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className="text-sm text-zinc-500 dark:text-zinc-500 italic mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            This privacy policy is effective as of November 2025.
          </p>
        </div>
      </div>
    </div>
  );
}
