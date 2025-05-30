import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'My Documentation',
  description: 'Documentation built with Nextra'
}

const banner = <Banner storageKey="nextra-banner">Nextra Documentation</Banner>
const navbar = (
  <Navbar
    logo={<b>My Docs</b>}
    docsRepositoryBase="https://github.com/AAChibilyaev/nextra-docs"
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © My Documentation.</Footer>

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}