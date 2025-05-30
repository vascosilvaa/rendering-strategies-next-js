import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white shadow-sm p-4">
          <div className="max-w-4xl mx-auto flex gap-4">
            <a href="/static" className="text-gray-600 hover:text-gray-900">
              Static
            </a>
            <a href="/dynamic" className="text-gray-600 hover:text-gray-900">
              Dynamic
            </a>
            <a href="/streaming" className="text-gray-600 hover:text-gray-900">
              Streaming
            </a>
            <a href="/client" className="text-gray-600 hover:text-gray-900">
              Client
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
