import './styles/globals.css'

export const metadata = {
  title: 'SOLICIT — Recuperação de Crédito e Serviços Jurídicos',
  description: 'SOLICIT | Solicitadores e Advogados — rigor, inovação e resultados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <nav className="nav">
          <div className="nav-inner container">
            <div className="brand">
              <div className="brand-badge">SL</div>
              <div className="brand-name">SOLICIT</div>
            </div>
            <div className="menu">
              <a href="#bemvindo">Sobre</a>
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
          © {new Date().getFullYear()} SOLICIT — Solicitadores e Advogados. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )
}
