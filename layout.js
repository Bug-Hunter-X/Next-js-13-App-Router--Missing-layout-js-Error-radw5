```javascript
// pages/about.js

export default function About() {
  return (
    <h1>About page</h1>
  );
}
```
```javascript
// pages/layout.js

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
```