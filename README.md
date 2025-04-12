# React useRef Hook Demo

This project demonstrates the `useRef` hook in React for:
- Accessing DOM elements directly
- Managing focus programmatically
- Comparing with traditional DOM methods

## Key Features

- **DOM Reference**: Creating a ref attached to an input element
- **Focus Control**: Button that focuses the input using ref
- **Clean Approach**: No direct DOM manipulation via `getElementById`

## Implementation Highlights

1. **useRef Initialization**: `const inputRef = useRef()`
2. **Ref Attachment**: `ref={inputRef}` on input element
3. **Programmatic Focus**: `inputRef.current.focus()`

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173)
