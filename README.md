# @assistant-ui/react-ui

Pre-styled React components for [@assistant-ui/react](https://github.com/assistant-ui/assistant-ui).

## Overview

This package contains styled UI components that were previously part of the main `@assistant-ui/react` package (prior to v0.8). It provides ready-to-use, customizable components for building AI chat interfaces.

## Installation

```bash
npm install @assistant-ui/react-ui @assistant-ui/react @assistant-ui/react-markdown
```

## Components

- **Thread** - Complete chat interface with messages, composer, and scroll management
- **ThreadList** - List view for managing multiple conversation threads
- **AssistantModal** - Floating modal chat interface
- **AssistantMessage** - Styled assistant message component with action bar
- **UserMessage** - Styled user message component with edit capabilities
- **Composer** - Message input with attachment support
- **EditComposer** - Message editing interface
- **BranchPicker** - Navigate between message branches
- **MessagePart** - Render message content parts
- **ThreadWelcome** - Welcome screen with suggestions
- **AttachmentUI** - Attachment display component
- **makeMarkdownText** - Factory for markdown rendering

## Basic Usage

```tsx
import { Thread } from "@assistant-ui/react-ui";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import "@assistant-ui/react-ui/styles/index.css";

function MyChat() {
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}
```

## Styling

### CSS Classes

All components use CSS classes prefixed with `aui-` for easy customization:

```css
.aui-thread-root { /* ... */ }
.aui-message-root { /* ... */ }
.aui-composer-root { /* ... */ }
```

### Importing Styles

```tsx
// Base styles (required)
import "@assistant-ui/react-ui/styles/index.css";

// Optional theme
import "@assistant-ui/react-ui/styles/themes/default.css";
```

## Configuration

Components accept configuration through the `ThreadConfigProvider`:

```tsx
import { Thread, ThreadConfigProvider } from "@assistant-ui/react-ui";

function MyChat() {
  return (
    <ThreadConfigProvider
      config={{
        assistantMessage: {
          allowReload: true,
          allowCopy: true,
          allowFeedbackPositive: true,
          allowFeedbackNegative: true,
        },
        userMessage: {
          allowEdit: true,
        },
        composer: {
          allowAttachments: true,
        },
      }}
    >
      <Thread />
    </ThreadConfigProvider>
  );
}
```

## Compatibility

- Compatible with `@assistant-ui/react` v0.11.x
- Requires React 18 or 19
- Full TypeScript support

## License

MIT