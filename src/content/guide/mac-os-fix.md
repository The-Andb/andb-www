# MacOS "App is damaged" Fix

If you download **TheAndb** on macOS and see an error saying the app is "damaged and can't be opened," don't worry. This is a common security feature on macOS for applications that are not yet notarized by Apple.

Since TheAndb is an open-source project, you can easily bypass this by clearing the extended attributes.

## The Fix

1. Open your **Terminal** application.
2. Copy and paste the following command:

```bash
xattr -cr /Applications/The\ Andb.app
```

3. Press **Enter**.

Now you should be able to open the app normally from your Applications folder.

### 💡 A better way: Homebrew

If you want to avoid these steps, we recommend installing via **Homebrew**. It handles the security attributes automatically:

```bash
brew tap The-Andb/tap && brew install --cask the-andb
```

---

> [!NOTE]
> This command simply removes the "quarantine" flag that macOS adds to files downloaded from the internet. It does not modify the app's internal code.
