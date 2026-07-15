export const metadata = {
  title: "FLOWPOINT Drainage",
  description: "24/7 Emergency Drainage Specialists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#08111F",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
