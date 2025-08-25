import config from '../data/site.json'

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="bg" style={{backgroundImage:`url(${config.images.cover})`}} />
        <div className="overlay" />
        <div className="inner container">
          <h1>“As melhores decisões começam pela escolha dos melhores parceiros”</h1>
          <p className="small">Warren Buffet</p>
          <div style={{display:'flex',gap:12,marginTop:14,flexWrap:'wrap'}}>
            <a href="#servicos" className="btn">Ver serviços</a>
            <a href="#contactos" className="btn">Contactar</a>
          </div>
        </div>
      </section>

      <Section id="sobre" title="WELCOME TO SOLICIT">
        <div className="split">
          <div className="card">
            <p className="lead">Bem-vindo à SOLICIT – Solicitadores e Advogados!</p>
            <p>Liderada por Tiago Mendes, Solicitador com mais de uma década de experiência na gestão de equipas de Pré-Contencioso para grandes instituições financeiras e bancárias, a SOLICIT assenta na sua visão prática e estratégica para a recuperação de crédito.</p>
            <p>Em conjunto com a Advogada Joana Lemos Castro, que acrescenta o enquadramento jurídico indispensável, garantem uma liderança partilhada que alia know-how, rigor e proximidade com os clientes, assegurando soluções eficazes e integradas em todo o processo de recuperação de crédito.</p>
            <p>Fundada em 2015 no Porto, oferecemos serviços especializados na cobrança extrajudicial e judicial de créditos, unindo a experiência prática dos Solicitadores ao rigor jurídico dos Advogados.</p>
          </div>
          <div className="card">
            <img src={config.images.about} alt="Sobre a SOLICIT" style={{width:'100%',height:360,objectFit:'cover',borderRadius:14,border:'1px solid var(--border)'}} />
          </div>
        </div>
      </Section>

      <Section id="valores" title="VALORES SOLICIT">
        <div className="split">
          <div className="card">
            <div className="grid cols-3">
              <Tile title="ÉTICA" text="Atuamos sempre com rigor, respeitando normas e regulamentos em todas as nossas ações. Essa postura garante transparência, confiança e integridade." />
              <Tile title="INOVAÇÃO" text="Integramos tecnologia e otimizamos processos continuamente para soluções eficientes, adaptadas às necessidades dos clientes." />
              <Tile title="RESULTADOS" text="Transformamos decisões estratégicas em soluções eficazes que geram valor real, reforçam a confiança e impulsionam o sucesso." />
            </div>
          </div>
          <div className="card">
            <img src={config.images.values} alt="Valores" style={{width:'100%',height:360,objectFit:'cover',borderRadius:14,border:'1px solid var(--border)'}} />
          </div>
        </div>
      </Section>

      <Section id="servicos" title="OS NOSSOS SERVIÇOS">
        <div className="split">
          <div className="card">
            <p className="lead">Multiserviços jurídicos e de recuperação de crédito, cobrindo todas as fases do processo.</p>
            <div className="grid cols-3" style={{marginTop:12}}>
              <Tile title="Equipa Interna — Solicitadores" text="Gestão integrada e rigorosa de processos, acordos e comunicações." />
              <Tile title="Equipa Judicial — Advogados" text="Acompanhamento jurídico completo, extrajudicial e judicial." />
              <Tile title="Apoio a Diligências Judiciais" text="Proximidade operacional e execução eficiente de diligências." />
            </div>
          </div>
          <div className="card">
            <img src={config.images.services} alt="Serviços" style={{width:'100%',height:360,objectFit:'cover',borderRadius:14,border:'1px solid var(--border)'}} />
          </div>
        </div>
      </Section>

      <Section id="tecnologia" title="SOLUÇÕES TECNOLÓGICAS">
        <div className="split">
          <div className="card">
            <ul className="list">
              <li>Infraestrutura Microsoft Azure — segura, escalável e de alto desempenho.</li>
              <li>Portal SOLICIT, Intranet, Extranet 24/7 e APP móvel.</li>
              <li>Automatização inteligente — Dialer, SMS/Email, cartas.</li>
              <li>Segurança avançada — firewall, VPN, encriptação, monitorização 24/7.</li>
              <li>Integração completa — gestão de processos, acordos e comunicações.</li>
              <li>Mobilidade Door Knocking — tablets com GPS para atuação on field.</li>
              <li>SFTP seguro — partilha de ficheiros com parceiros.</li>
            </ul>
            <div className="kpi" style={{marginTop:12}}>
              <div className="item"><b>Reporting de referência</b><div className="small">Power BI e mais, para decisões baseadas em dados.</div></div>
              <div className="item"><b>+10</b><div className="small">Colaboradores on-field (inclui ilhas)</div></div>
              <div className="item"><b>24/7</b><div className="small">Extranet e monitorização</div></div>
            </div>
          </div>
          <div className="card">
            <img src={config.images.tech} alt="Tecnologia" style={{width:'100%',height:360,objectFit:'cover',borderRadius:14,border:'1px solid var(--border)'}} />
          </div>
        </div>
      </Section>

      <Section id="equipa" title="A NOSSA EQUIPA">
        <div className="split">
          <div className="card">
            <div className="grid cols-3">
              <Member name="Dr. Tiago Mendes" role="CEO — Solicitador" />
              <Member name="Dra. Joana Lemos Castro" role="Directora de Operações — Advogada" />
              <Member name="Paulo Rodrigues" role="Tecnologia da Informação" />
            </div>
          </div>
          <div className="card">
            <img src={config.images.team} alt="Equipa" style={{width:'100%',height:360,objectFit:'cover',borderRadius:14,border:'1px solid var(--border)'}} />
          </div>
        </div>
      </Section>

      <Section id="galeria" title="GALERIA">
        <div className="gallery container">
          {config.images.gallery.map((src, i) => (
            <img key={i} src={src} alt={`galeria-${i+1}`} />
          ))}
        </div>
      </Section>

      <Section id="contactos" title="CONTACTOS">
        <div className="card container">
          <div><b>Email:</b> <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a></div>
          <div className="small"><b>WhatsApp:</b> {config.contact.whatsapp}</div>
          <div className="address"><b>Morada:</b>{`\n${config.contact.address}`}</div>
          <div className="small">Obrigado pela confiança — conte connosco para esclarecer qualquer dúvida.</div>
        </div>
      </Section>
    </main>
  )
}

function Section({ id, title, children }){
  return (
    <section id={id} className="section">
      <div className="h container">
        <div className="title">{title}</div>
        <div className="bar" />
      </div>
      <div className="container">{children}</div>
    </section>
  )
}

function Tile({ title, text }){
  return (
    <div className="card">
      <div style={{fontWeight:600, marginBottom:6}}>{title}</div>
      <div className="small">{text}</div>
    </div>
  )
}

function Member({ name, role }){
  return (
    <div className="card">
      <div style={{fontWeight:600}}>{name}</div>
      <div className="small">{role}</div>
    </div>
  )
}
