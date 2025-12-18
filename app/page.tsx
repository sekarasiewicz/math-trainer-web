import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: "🎮",
      title: "5 Game Modes",
      description: "Infinite, Session, Speed Run, Marathon, and Learning modes to suit every practice style.",
    },
    {
      icon: "➕",
      title: "All Operations",
      description: "Practice addition, subtraction, multiplication, and division - mix and match as you like.",
    },
    {
      icon: "📊",
      title: "Track Progress",
      description: "Detailed statistics, performance charts, and streak tracking to monitor your improvement.",
    },
    {
      icon: "🏆",
      title: "Achievements",
      description: "Unlock achievements for milestones, streaks, perfect sessions, and speed challenges.",
    },
    {
      icon: "🎨",
      title: "Customizable",
      description: "Create custom difficulty with adjustable number ranges, time limits, and theme modes.",
    },
    {
      icon: "📚",
      title: "Learning Mode",
      description: "Step-by-step explanations to help understand problem-solving strategies.",
    },
  ];

  const gameModes = [
    { name: "Infinite", desc: "Practice without limits" },
    { name: "Session", desc: "10, 20, or 50 questions" },
    { name: "Speed Run", desc: "1, 2, or 5 minute challenges" },
    { name: "Marathon", desc: "Consecutive correct answers" },
    { name: "Learning", desc: "Untimed with explanations" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-6xl mx-auto text-center">
          <Image src="/logo.jpg" alt="Math Trainer Logo" width={120} height={120} className="rounded-3xl mx-auto mb-6 shadow-lg" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
            Math Trainer
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
            Master arithmetic through engaging gameplay. Practice addition, subtraction, multiplication, and division with instant feedback and progress tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/pl/app/math-trainer-pro/id6756526806"
              className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <span className="text-sm text-zinc-500 dark:text-zinc-500">iOS 17.0+ Required</span>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            See It in Action
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Clean, intuitive interface designed for focused practice
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[
              { src: "/screenshots/01_HomeScreen.png", alt: "Home Screen" },
              { src: "/screenshots/02_GameSettings.png", alt: "Game Settings" },
              { src: "/screenshots/06_GameInProgress.png", alt: "Game in Progress" },
              { src: "/screenshots/03_Statistics.png", alt: "Statistics" },
              { src: "/screenshots/04_Achievements.png", alt: "Achievements" },
              { src: "/screenshots/05_AppSettings.png", alt: "App Settings" },
            ].map((screenshot) => (
              <div
                key={screenshot.src}
                className="flex-shrink-0 snap-center first:ml-auto last:mr-auto"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={250}
                  height={542}
                  className="rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Choose Your Challenge
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Five unique game modes designed for different learning styles and goals
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {gameModes.map((mode) => (
              <div
                key={mode.name}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{mode.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{mode.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Features
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Everything you need for effective math practice
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-4">
            Difficulty for Everyone
          </h2>
          <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            From beginners to math experts, find your perfect challenge level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-2 border-green-200 dark:border-green-900 rounded-2xl p-6 bg-green-50 dark:bg-green-950/30">
              <span className="inline-block px-3 py-1 bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-4">Easy</span>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Numbers 1-10</li>
                <li>60 seconds per question</li>
                <li>Addition & Subtraction</li>
              </ul>
            </div>
            <div className="border-2 border-yellow-200 dark:border-yellow-900 rounded-2xl p-6 bg-yellow-50 dark:bg-yellow-950/30">
              <span className="inline-block px-3 py-1 bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-4">Medium</span>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Numbers 1-50</li>
                <li>30 seconds per question</li>
                <li>All operations</li>
              </ul>
            </div>
            <div className="border-2 border-red-200 dark:border-red-900 rounded-2xl p-6 bg-red-50 dark:bg-red-950/30">
              <span className="inline-block px-3 py-1 bg-red-200 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium mb-4">Hard</span>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Numbers 1-100</li>
                <li>15 seconds per question</li>
                <li>All operations</li>
              </ul>
            </div>
            <div className="border-2 border-purple-200 dark:border-purple-900 rounded-2xl p-6 bg-purple-50 dark:bg-purple-950/30">
              <span className="inline-block px-3 py-1 bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium mb-4">Custom</span>
              <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li>Your number range</li>
                <li>Your time limit</li>
                <li>Your operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">🔒</div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Privacy First
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            Math Trainer collects <strong>no personal data</strong>. No accounts, no tracking, no ads.
            All your progress is stored locally on your device.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-4">
              <span className="text-green-500 text-2xl">✓</span>
              <p className="text-sm mt-2 text-zinc-700 dark:text-zinc-300">No Data Collection</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-4">
              <span className="text-green-500 text-2xl">✓</span>
              <p className="text-sm mt-2 text-zinc-700 dark:text-zinc-300">No Account Required</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-4">
              <span className="text-green-500 text-2xl">✓</span>
              <p className="text-sm mt-2 text-zinc-700 dark:text-zinc-300">No Ads</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-4">
              <span className="text-green-500 text-2xl">✓</span>
              <p className="text-sm mt-2 text-zinc-700 dark:text-zinc-300">Kid Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Practicing Today
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Download Math Trainer and make arithmetic practice fun and effective.
          </p>
          <a
            href="https://apps.apple.com/pl/app/math-trainer-pro/id6756526806"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>
        </div>
      </section>
    </div>
  );
}
