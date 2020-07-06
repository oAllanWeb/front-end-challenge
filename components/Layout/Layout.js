import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'Filmes',
  description="Meus filmes",
  keywords="Filmes, Melhores Filmes"
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
      </Head>
      {children}
    </div>
  )
}