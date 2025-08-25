export default function Page() {
  return (
    <main>
      <section className="hero container">
        <h1>“As melhores decisões começam pela escolha dos melhores parceiros”</h1>
        <p className="small">Warren Buffet</p>
        <div className="ctas">
          <a href="#servicos" className="btn">Ver serviços</a>
          <a href="#contactos" className="btn">Contactar</a>
        </div>
      </section>

      <Section id="bemvindo" title="WELCOME TO SOLICIT"
        lead="Bem-vindo à SOLICIT – Solicitadores e Advogados!"
      >
        <p> Liderada por Tiago Mendes, Solicitador com mais de uma década de experiência na gestão de equipas de Pré-Contencioso para grandes instituições financeiras e bancárias, a SOLICIT assenta na sua visão prática e estratégica para a recuperação de crédito.</p>
        <p> Em conjunto com a Advogada Joana Lemos Castro, que acrescenta o enquadramento jurídico indispensável, garantem uma liderança partilhada que alia know-how, rigor e proximidade com os clientes, assegurando soluções eficazes e integradas em todo o processo de recuperação de crédito.</p>
        <p> Fundada em 2015 no Porto, oferecemos serviços especializados na cobrança extrajudicial e judicial de créditos, unindo a experiência prática dos Solicitadores ao rigor jurídico dos Advogados.</p>
      </Section>

      <Section id="valores" title="VALORES SOLICIT">
        <div className="grid cols-3">
          <Card title="ÉTICA" text="Atuamos sempre com rigor, respeitando normas e regulamentos em todas as nossas ações. Essa postura garante transparência, confiança e integridade." />
          <Card title="INOVAÇÃO" text="Integramos tecnologia e otimizamos processos continuamente para soluções eficientes, adaptadas às necessidades dos clientes." />
          <Card title="RESULTADOS" text="Transformamos decisões estratégicas em soluções eficazes que geram valor real, reforçam a confiança e impulsionam o sucesso." />
        </div>
      </Section>

      <Section id="visao" title="VISÃO, PROPÓSITO E IMPACTO">
        <ul className="list">
          <li><b>Visão:</b> Ser a referência em multiserviços legais e empresariais, unindo rigor, inovação e eficiência.</li>
          <li><b>Propósito:</b> Simplificar processos e criar valor real para os clientes.</li>
          <li><b>Impacto:</b> Gerar resultados concretos e confiança contínua.</li>
        </ul>
      </Section>

      <Section id="missao" title="MISSÃO SOLICIT">
        <ul className="list">
          <li><b>Excelência nos resultados:</b> Maximizar resultados na recuperação de créditos, com ética e alinhamento com os objetivos dos clientes.</li>
          <li><b>Rigor e profissionalismo:</b> Processos eficientes e transparentes, em conformidade com o Código Deontológico.</li>
          <li><b>Parcerias de confiança:</b> Relações duradouras que potenciam valor para clientes e sociedade.</li>
        </ul>
      </Section>

      <Section id="servicos" title="OS NOSSOS SERVIÇOS" lead="Multiserviços jurídicos e de recuperação de crédito, cobrindo todas as fases do processo.">
        <div className="grid cols-3">
          <Card title="Equipa Interna — Solicitadores" text="Gestão integrada e rigorosa de processos, acordos e comunicações." />
          <Card title="Equipa Judicial — Advogados" text="Acompanhamento jurídico completo, extrajudicial e judicial." />
          <Card title="Apoio a Diligências Judiciais" text="Proximidade operacional e execução eficiente de diligências." />
        </div>
      </Section>

      <Section id="recuperacao" title="RECUPERAÇÃO MULTICANAL & PRESENCIAL">
        <p>Processo multicanal — telefone, SMS, email e WhatsApp — estruturado de forma estratégica para alcance, rapidez e conveniência.</p>
        <p>Equipa de procuradores forenses para visitas presenciais e recuperação de bens pela via pré-judicial, com presença nacional (incluindo ilhas).</p>
      </Section>

      <Section id="tecnologia" title="SOLUÇÕES TECNOLÓGICAS">
        <ul className="list">
          <li>Infraestrutura Microsoft Azure — segura, escalável e de alto desempenho.</li>
          <li>Portal SOLICIT, Intranet, Extranet 24/7 e APP móvel.</li>
          <li>Automatização inteligente — Dialer, SMS/Email, cartas.</li>
          <li>Segurança avançada — firewall, VPN, encriptação, monitorização 24/7.</li>
          <li>Integração completa — gestão de processos, acordos e comunicações.</li>
          <li>Mobilidade Door Knocking — tablets com GPS para atuação on field.</li>
          <li>SFTP seguro — partilha de ficheiros com parceiros.</li>
        </ul>
        <div className="kpi">
          <div className="item"><b>Reporting de referência</b><div className="small">Power BI e mais, para decisões baseadas em dados.</div></div>
          <div className="item"><b>+10</b><div className="small">Colaboradores on-field (inclui ilhas)</div></div>
          <div className="item"><b>24/7</b><div className="small">Extranet e monitorização</div></div>
        </div>
      </Section>

      <Section id="parceiros" title="OS NOSSOS PARCEIROS">
        <p>Trabalhamos com as principais instituições bancárias e financeiras do país e diversos clientes B2B.</p>
      </Section>

      <Section id="equipa" title="A NOSSA EQUIPA">
        <div className="team">
          <Member name="Dr. Tiago Mendes" role="CEO — Solicitador" bio="Fundador da SOLICIT. Experiência sólida em cobrança extrajudicial e judicial de créditos bancários e financeiros, reconhecido pela visão estratégica e liderança." />
          <Member name="Dra. Joana Lemos Castro" role="Directora de Operações — Advogada" bio="10 anos de experiência em liderança de equipas e gestão de projetos, alinhando estratégia e execução." />
          <Member name="Paulo Rodrigues" role="Tecnologia da Informação" bio="20+ anos em liderança de equipas e implementação de soluções tecnológicas, com rigor e foco em resultados." />
          <Member name="Filipa Braga" role="Coordenadora Operacional" bio="Apoio à gestão diária e alinhamento de equipas, reconhecida pela proximidade e relações de confiança." />
        </div>
      </Section>

      <Section id="contactos" title="CONTACTOS">
        <div className="card contact">
          <div><b>Email:</b> <a href="mailto:geral@solict.pt">geral@solict.pt</a></div>
          <div className="small"><b>WhatsApp:</b> em atualização</div>
          <div className="address"><b>Morada:</b>{`\nRua Ciríaco Cardoso, 265-i\n4150-213 Porto`}</div>
          <div className="small">Obrigado pela confiança — conte connosco para esclarecer qualquer dúvida.</div>
        </div>
      </Section>
    </main>
  )
}

function Section({ id, title, lead, children }){
  return (
    <section id={id} className="section container">
      <div className="card">
        <h2>{title}</h2>
        {lead && <p className="lead">{lead}</p>}
        <div style={{marginTop:12}}>{children}</div>
      </div>
    </section>
  )
}

function Card({ title, text }){
  return (
    <div className="card">
      <div style={{fontWeight:600, marginBottom:6}}>{title}</div>
      <div className="small">{text}</div>
    </div>
  )
}

function Member({ name, role, bio }){
  return (
    <div className="member">
      <div style={{fontWeight:600}}>{name}</div>
      <div className="small">{role}</div>
      <p className="small" style={{marginTop:8}}>{bio}</p>
    </div>
  )
}
