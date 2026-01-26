
  <p align="center">
    ⚠️ This library is in beta version might be all hooks are not yet ready! we will soon dispatch hooks with bulletproof tests 🚀
  </p>

  <br />
 

  <p align="center">
   <img src="https://github.com/user-attachments/assets/0dd59f4a-f058-46f8-a6db-015cf9bd2f70" alt="Logo" width="400" height="400" style="border-radius: 50%;" />
  </p>

  ---


![npm](https://img.shields.io/npm/v/react-smart-utils) 
[![Discord](https://img.shields.io/discord/123456789012345678)](https://discord.gg/DTJV27BYwA)

Discord: https://discord.gg/DTJV27BYwA






# React Smart Utils Library

A lightweight collection of production-ready React hooks and utility functions.
Zero dependencies. SSR-safe. StrictMode-friendly.

---

- [Docs](https://react-smart-utils.netlify.app/)


## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Example Hooks](#example-hooks)
- [Available Hooks](#available-hooks)
- [Contributing](#contributing)
- [Code Style Guidelines](#code-style-guidelines)
- [Roadmap](#roadmap)
- [License](#license)

---

## Installation

To install the React Smart Utils library, use npm or yarn:


```bash
npm install react-smart-utils
```
  or 
 
```bash
yarn add react-smart-utils
```
---

## Features

- **Custom Hooks**: Reusable React hooks to solve common use cases.
- **Utility Functions**: Handy utilities to simplify everyday coding tasks.
- **TypeScript Support**: Fully typed with TypeScript for a smooth developer experience.
- **Tree-shakable**: Only include what you need, minimizing bundle size.

---

## 🪝 Hooks – Description & Usage
| Hook               | Description                              | React Native Support | Mobile Alternative / Notes            |
| ------------------ | ---------------------------------------- | -------------------- | ------------------------------------- |
| `useToggle`        | Manage boolean state with helper actions | ✅ Yes                | Works out of the box                  |
| `usePrevious`      | Get previous value of state or prop      | ✅ Yes                | Works out of the box                  |
| `useLocalStorage`  | Persist state in `localStorage`          | ❌ No                 | Use AsyncStorage                      |
| `useCountdown`     | Countdown timer with controls            | ✅ Yes                | Works out of the box                  |
| `useDebounceValue` | Debounce changing values                 | ✅ Yes                | Works out of the box                  |
| `useUpdateEffect`  | Effect that skips initial render         | ✅ Yes                | Works out of the box                  |
| `useRunOnlyOnce`   | Run logic exactly once (StrictMode safe) | ✅ Yes                | Works out of the box                  |
| `useUnmount`       | Run cleanup logic on unmount             | ✅ Yes                | Works out of the box                  |
| `useIsMounted`     | Prevent state updates after unmount      | ✅ Yes                | Works out of the box                  |
| `useClipboard`     | Copy text to clipboard                   | ⚠️ Partial           | Use `expo-clipboard` / RN Clipboard   |
| `useNetwork`       | Track online/offline state               | ⚠️ Partial           | Use `@react-native-community/netinfo` |
| `useWindowSize`    | Track window dimensions                  | ❌ No                 | Use `useWindowDimensions`             |


## 🧰 Utils (Web & Native)

| Utility       | Description                      | React Native Support | Notes             |
| ------------- | -------------------------------- | -------------------- | ----------------- |
| `clamp`       | Clamp a number between min & max | ✅ Yes                | Pure function     |
| `hasKey`      | Type-safe object key check       | ✅ Yes                | TS-friendly       |
| `isNull`      | Check if value is `null`         | ✅ Yes                | Pure function     |
| `isUndefined` | Check if value is `undefined`    | ✅ Yes                | Pure function     |
| `sample`      | Get random item from array       | ✅ Yes                | Pure function     |
| `sleep`       | Async delay helper               | ✅ Yes                | Works everywhere  |
| `throttle`    | Throttle function execution      | ✅ Yes                | Platform-agnostic |
| `toLower`     | Convert string to lowercase      | ✅ Yes                | Safe wrapper      |
| `toUpperCase` | Convert string to uppercase      | ✅ Yes                | Safe wrapper      |
| `uniqueArray` | Remove duplicate array values    | ✅ Yes                | Uses `Set`        |








## Contributing

We welcome contributions! Please follow the instructions below to set up the project for development and make your contributions.

1. **Fork the repository**on GitHub.
2. **Clone your forked repository**:

```bash
git clone https://github.com/your-username/react-smart-utils.git
cd package
yarn install
```

3.**Test your functions or hooks in smart-app:**

```bash
cd smart-app
yarn install
yarn dev
```

Note: You can push example code as it helps in preparing documents (When Raise PR you must paste the path in PR description)
   
4.**Create a new branch for your feature:**

```bash
git checkout -b feature/my-new-feature
```


5. **Make your changes, then commit and push:**

```bash
git commit -m "Add new feature"
git push origin feature/my-new-feature
```

**Submit a Pull Request with a detailed explanation of your changes.**
