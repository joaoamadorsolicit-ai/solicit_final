import './styles/globals.css'
import config from '../data/site.json'

export const metadata = {
  title: 'SOLICIT — Recuperação de Crédito e Serviços Jurídicos',
  description: 'SOLICIT | Solicitadores e Advogados — rigor, inovação e resultados.',
}

export default function RootLayout({ children }) {
  const css = {
    '--bg': config.brand.bg,
    '--text': config.brand.text,
    '--muted': config.brand.muted,
    '--accent': config.brand.accent,
    '--accent-2': config.brand.accent2,
  }
  return (
    <html lang="pt">
      <body style={css}>
        <nav className="nav">
          <div className="nav-inner container">
            <div className="brand">
              <div className="logo"><img src={config.images.logo} alt="logo" style={{width:36,height:36,borderRadius:10}}/></div>
              <div className="brand-name">{config.brand.name}</div>
            </div>
            <div className="menu">
              <a href="#sobre">Sobre</a>
              <a href="#valores">Valores</a>
              <a href="#servicos">Serviços</a>
              <a href="#tecnologia">Tecnologia</a>
              <a href="#equipa">Equipa</a>
              <a href="#contactos">Contactos</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="footer container">
          © {new Date().getFullYear()} {config.brand.name}. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )
}
