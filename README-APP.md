# Math Trainer App

An engaging iOS educational game designed to help users practice and master basic arithmetic operations through interactive gameplay.

## Features

### Game Modes

- **Infinite Mode** - Practice without limits, perfect for continuous learning
- **Session Mode** - Complete a set number of questions (10, 20, or 50)
- **Speed Run** - Answer as many questions as possible within a time limit (1, 2, or 5 minutes)
- **Marathon Mode** - See how many consecutive correct answers you can achieve
- **Learning Mode** - Untimed practice with optional step-by-step explanations for each problem

### Operations

Practice any combination of:
- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)

### Difficulty Levels

- **Easy** - Numbers 1-10, 60 seconds per question, addition and subtraction
- **Medium** - Numbers 1-50, 30 seconds per question, all operations
- **Hard** - Numbers 1-100, 15 seconds per question, all operations
- **Custom** - Create your own difficulty with customizable number ranges, time limits, and operations

### Statistics & Progress Tracking

- Comprehensive statistics including accuracy, average time, and total games
- Per-operation performance breakdown
- Session history with detailed comparisons
- Visual charts showing daily and weekly performance trends
- Streak tracking to monitor consecutive correct answers

### Achievements System

Unlock achievements by:
- Reaching answer milestones (10, 50, 100 correct answers)
- Maintaining streaks (5, 10, 20 consecutive correct)
- Completing perfect sessions (10+ questions with 100% accuracy)
- Speed challenges (20 questions under 2 minutes)
- Marathon runs (50 questions without mistakes)
- Using all four operations in a single session

### Visual & Audio Feedback

- Color-coded feedback for correct (green) and incorrect (red) answers
- Shake animation on wrong answers
- Confetti celebration at streak milestones
- Haptic feedback (can be toggled)
- Sound effects (can be toggled)

### Customization

- **Theme Modes** - Light, Dark, or Automatic (follows system setting)
- **Perfect Mode** - End session immediately after first mistake
- Adjustable time limits and number ranges

## Requirements

- iOS 17.0 or later
- iPhone or iPad

## Installation

### For Developers

1. Clone the repository:
```bash
git clone <repository-url>
cd MathTrainerApp
```

2. Open the project in Xcode:
```bash
open MathTrainerApp.xcodeproj
```

3. Select your target device or simulator

4. Build and run (⌘R)

### Building for Release

Before building for App Store submission:

1. Fix the Bundle Identifier typo in project settings:
   - Current: `com.examle.MathTrainerApp`
   - Should be: `com.example.MathTrainerApp` (or your own domain)

2. Correct the iOS Deployment Target:
   - Set to 17.0 (currently incorrectly set to 26.1)

See `APP_STORE_PUBLICATION_GUIDE.md` for complete publication instructions.

## Technologies Used

- **SwiftUI** - Modern declarative UI framework
- **Combine** - Reactive programming for state management
- **MVVM Architecture** - Clean separation of concerns
- **UserDefaults** - Local data persistence
- **AVFoundation** - Sound effects
- **CoreHaptics** - Haptic feedback

## Project Structure

```
MathTrainerApp/
├── Models/              # Data models and business logic
│   ├── GameSettings.swift
│   ├── Statistics.swift
│   ├── Achievement.swift
│   ├── GameSession.swift
│   └── AppSettings.swift
├── ViewModels/          # State management and logic
│   ├── GameViewModel.swift
│   ├── StatisticsViewModel.swift
│   ├── SettingsViewModel.swift
│   └── AchievementsViewModel.swift
├── Views/               # SwiftUI views
│   ├── GameView.swift
│   ├── StatisticsView.swift
│   ├── SettingsView.swift
│   ├── AchievementsView.swift
│   └── ...
└── Utils/               # Helper utilities
    ├── HapticFeedback.swift
    └── SoundFeedback.swift
```

## How to Play

1. **Start a Game** - Tap "Start Game" on the home screen
2. **Choose Settings** - Configure game mode, difficulty, and operations before starting
3. **Solve Problems** - Enter your answer and submit (or wait for timer to expire)
4. **Get Feedback** - Instant visual, audio, and haptic feedback on your answer
5. **Track Progress** - View detailed statistics and unlock achievements
6. **Learn** - Use Learning Mode to get step-by-step explanations

## Learning Mode

Learning Mode is designed for educational purposes:
- No time pressure - take as long as you need
- Tap "Help" to see step-by-step explanations
- Different strategies shown for each operation type
- Practice at your own pace with the "Next" button

## Future Enhancements

See `NICE_TO_HAVE.md` for planned features including:
- Survive mode (time added/removed based on answers)
- Negative numbers and fractions
- More comprehensive test coverage
- Accessibility improvements
- Additional achievement types

## Development

### Running Tests

```bash
# Run all tests
xcodebuild test -project MathTrainerApp.xcodeproj \
  -scheme MathTrainerApp \
  -destination 'platform=iOS Simulator,name=iPhone 15'
```

### Code Style

- Follow Swift API Design Guidelines
- Use SwiftUI best practices
- Maintain MVVM architecture
- Add `deinit` methods to ViewModels for cleanup
- Use `[weak self]` in closures to prevent retain cycles

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Author

Sebastian Karasiewicz

## Acknowledgments

- Built with SwiftUI
- Inspired by the need for engaging math practice tools
- Achievement system designed to motivate consistent practice
