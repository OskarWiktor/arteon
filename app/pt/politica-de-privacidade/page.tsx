import TableOfContents from '@/components/sections/TableOfContent';
import ButtonToTop from '@/components/ui/buttons/ButtonToTop';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import { getPrivacyPageMeta, getPrivacyAlternates } from '@/lib/i18n/pages/privacy';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = 'pt' as const;
const meta = getPrivacyPageMeta(LOCALE)!;
const alternates = getPrivacyAlternates(LOCALE);

export const metadata = {
  title: meta.title,
  description: meta.description,
  alternates,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toAbsoluteUrl('/pt/politica-de-privacidade'),
    type: 'website',
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <Gap size="xs" />
      <Wrapper as="article" id="article-root" itemScope itemType="https://schema.org/Article" className="flex flex-col-reverse gap-8 select-none lg:grid lg:grid-cols-[1fr_300px]">
        <div>
          <h1>Política de Privacidade</h1>
          <p className="mt-2 text-sm opacity-70">
            Versão&nbsp;: <strong>13.02.2026</strong>
          </p>

          <Gap size="xs" />

          <SectionInfo title="1. Responsável pelo tratamento">
            <p>O responsável pelo tratamento dos dados pessoais é a Arteon, com sede no município de Czernichów, Zagacie, ul. Jaśminowa 36, 32-070, Polónia.</p>
            <p>
              NIF (NIP)&nbsp;: <strong>9442284430</strong>, REGON&nbsp;: <strong>528888241</strong>
            </p>
            <p>
              Contacto&nbsp;: <strong>kontakt@arteonagency.pl</strong>, tel.&nbsp;: <strong>+48 516 466 255</strong>.
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="2. Âmbito dos dados recolhidos">
            <ul className="list-disc space-y-1 pl-6">
              <li>dados fornecidos através do formulário de contacto (nome, apelido, e-mail, conteúdo da mensagem),</li>
              <li>dados técnicos recolhidos automaticamente (endereço IP, informações sobre o dispositivo, cookies),</li>
              <li>dados analíticos do Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics e Vercel Speed Insights,</li>
              <li>dados analíticos do Metricool (estatísticas de visitas, fontes de tráfego),</li>
              <li>dados recolhidos pelo Google AdSense para exibição de publicidade (identificadores publicitários, cookies publicitários, dados de interação com anúncios),</li>
              <li>registos do servidor e eventos de segurança (ex.: carimbos temporais, endereço IP, cabeçalhos de pedido).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="3. Finalidades e bases jurídicas do tratamento">
            <ol className="list-decimal space-y-1 pl-6">
              <li>
                <strong>Contacto com o cliente</strong> - resposta a pedidos do formulário de contacto (art. 6.º, n.º 1, alíneas b) e f) do RGPD).
              </li>
              <li>
                <strong>Marketing e análise</strong> - estatísticas do site, otimização de conteúdo (art. 6.º, n.º 1, alínea f) do RGPD).
              </li>
              <li>
                <strong>Prestação de serviços</strong> - preparação de orçamentos, contratos, faturas (art. 6.º, n.º 1, alínea b) do RGPD).
              </li>
              <li>
                <strong>Obrigações legais</strong> - ex.: conservação de documentação contabilística (art. 6.º, n.º 1, alínea c) do RGPD).
              </li>
              <li>
                <strong>Segurança e reclamações</strong> - manutenção de registos, prevenção de abusos, estabelecimento/exercício/defesa de reclamações (art. 6.º, n.º 1, alínea f) do RGPD).
              </li>
              <li>
                <strong>Exibição de publicidade</strong> - exibição de publicidade baseada em interesses através do Google AdSense (art. 6.º, n.º 1, alínea a) do RGPD - consentimento do utilizador
                através do banner de cookies).
              </li>
            </ol>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="4. Cookies">
            <p>O site utiliza cookies para os seguintes fins&nbsp;:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>garantir o correto funcionamento do site,</li>
              <li>análise de tráfego (Google Analytics 4, Ahrefs Web Analytics, Vercel Analytics, Metricool),</li>
              <li>fins de marketing,</li>
              <li>exibição de publicidade baseada em interesses (Google AdSense / DoubleClick).</li>
            </ul>
            <p>
              O Google AdSense pode utilizar cookies DoubleClick para exibir anúncios baseados em visitas anteriores do utilizador ao nosso site ou a outros sites. Os fornecedores terceiros (incluindo
              a Google) utilizam estes cookies para exibir anúncios com base no histórico de navegação.
            </p>
            <p>
              Pode desativar os anúncios personalizados na página{' '}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="inline-link">
                Definições de anúncios Google
              </a>{' '}
              ou em{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="inline-link">
                aboutads.info
              </a>
              .
            </p>
            <p>
              O site utiliza o Google Consent Mode v2. Isto significa que os scripts de análise e publicidade da Google não recolhem dados enquanto o utilizador não der o seu consentimento através do
              banner de cookies.
            </p>
            <p>Pode gerir os cookies nas definições do seu navegador. A restrição de cookies pode afetar algumas funcionalidades do site.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="5. Destinatários dos dados">
            <p>Os dados podem ser partilhados com entidades que nos ajudam na prestação de serviços, tais como&nbsp;:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>fornecedores de alojamento/aplicações (ex.: Vercel),</li>
              <li>fornecedores de ferramentas de análise (Google Ireland Ltd., Ahrefs Pte. Ltd., Vercel Inc., Metricool S.L.),</li>
              <li>fornecedores de serviços publicitários (Google Ireland Ltd. - Google AdSense),</li>
              <li>gabinete de contabilidade, prestadores de pagamento ou entidades jurídicas - se necessário.</li>
            </ul>
            <p>Todos os destinatários tratam os dados em conformidade com o RGPD com base em acordos adequados.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="6. Acordo de tratamento de dados (DPA)">
            <p>
              Mediante pedido, celebramos um acordo de tratamento de dados (DPA) quando tratamos dados em nome de um cliente (ex.: no âmbito da manutenção do site, configuração de ferramentas ou
              sistemas).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="7. Transferências de dados para fora do EEE">
            <p>
              A Google e a Vercel podem tratar dados fora do Espaço Económico Europeu. São aplicadas garantias jurídicas adequadas (nomeadamente as cláusulas contratuais-tipo aprovadas pela Comissão
              Europeia) e, na medida do possível, medidas técnicas (pseudonimização, minimização).
            </p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="8. Período de conservação dos dados">
            <ul className="list-disc space-y-1 pl-6">
              <li>Dados do formulário de contacto&nbsp;: até 12 meses após o fim da correspondência.</li>
              <li>Dados de clientes&nbsp;: durante o período exigido por lei (documentação contabilística).</li>
              <li>Dados analíticos&nbsp;: em conformidade com a política do Google Analytics (ex.: 26 meses).</li>
              <li>Registos&nbsp;: durante o período necessário para a segurança e rastreabilidade (em regra até 12 meses, salvo disposição em contrário).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="9. Os seus direitos">
            <p>Tem o direito de&nbsp;:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>aceder aos seus dados e obter uma cópia,</li>
              <li>retificação dos dados,</li>
              <li>apagamento dos dados,</li>
              <li>limitação do tratamento,</li>
              <li>portabilidade dos dados,</li>
              <li>oposição ao tratamento (incluindo marketing),</li>
              <li>apresentar uma reclamação à autoridade de controlo competente (na Polónia: o Presidente do Gabinete de Proteção de Dados Pessoais, UODO).</li>
            </ul>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="10. Caráter voluntário do fornecimento de dados">
            <p>O fornecimento de dados pessoais é voluntário, mas necessário para o contacto ou a prestação de serviços.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="11. Medidas de segurança">
            <p>Aplicamos medidas técnicas e organizacionais para proteger os dados pessoais contra qualquer acesso não autorizado, perda ou destruição.</p>
          </SectionInfo>

          <Gap variant="line" size="sm" />

          <SectionInfo title="12. Alterações à política">
            <p>Esta política de privacidade pode ser atualizada para refletir alterações legislativas ou tecnológicas. A versão atual está sempre disponível nesta página.</p>
          </SectionInfo>

          <Gap size="xs" />
        </div>

        <TableOfContents rootSelector="#article-root" size="large" />
      </Wrapper>

      <ButtonToTop />

      <Gap />
    </>
  );
}
