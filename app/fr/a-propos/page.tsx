import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { RiLockLine, RiInfinityFill, RiToolsFill, RiRocketLine, RiImageEditLine, RiSearchLine, RiMailLine, RiPaletteLine, RiQrCodeLine } from 'react-icons/ri';

export const metadata = {
  title: 'À propos – Outils en ligne gratuits - Arteon',
  description: "Arteon crée des outils en ligne gratuits pour les propriétaires d'entreprises, les créateurs web et toute personne travaillant en ligne. Sans inscription, sans limites, sans envoi de fichiers sur des serveurs.",
  alternates: {
    canonical: toAbsoluteUrl('/fr/a-propos'),
    languages: {
      en: toAbsoluteUrl('/en/about'),
      de: toAbsoluteUrl('/de/ueber-uns'),
      es: toAbsoluteUrl('/es/sobre-nosotros'),
      fr: toAbsoluteUrl('/fr/a-propos'),
    },
  },
  openGraph: {
    title: 'À propos – Outils en ligne gratuits - Arteon',
    description: "Arteon crée des outils en ligne gratuits pour les propriétaires d'entreprises, les créateurs web et toute personne travaillant en ligne. Sans inscription, sans limites, sans envoi de fichiers sur des serveurs.",
    url: toAbsoluteUrl('/fr/a-propos'),
    type: 'website',
  },
};

export default function AProposPage() {
  return (
    <>
      <HeroBanner title="À propos" description="Outils en ligne gratuits pour les propriétaires d'entreprises, designers, développeurs et tous ceux qui travaillent en ligne" backgroundImage="/assets/arteon-logo-on-mockup.webp" overlay="black" variant="center" />

      <Wrapper as="article" itemScope itemType="https://schema.org/AboutPage">
        <Gap size="sm" />

        <SectionInfo title="Qui sommes-nous">
          <p>
            Arteon est une agence créative polonaise. En plus de notre travail commercial, nous développons et maintenons une collection grandissante d&apos;outils en ligne gratuits destinés aux
            propriétaires d&apos;entreprises, créateurs de sites web, designers, spécialistes du marketing et toute personne travaillant avec du contenu numérique.
          </p>
          <p className="mt-2">
            Chaque outil que nous créons résout un problème concret et quotidien&nbsp;: convertir des images, vérifier le contraste des couleurs, générer des favicons, créer des codes QR et bien plus.
            Notre objectif est de construire une boîte à outils complète où vous trouverez tout ce dont vous avez besoin en un seul endroit — sans naviguer entre des dizaines de sites différents.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Pourquoi nous proposons des outils gratuits"
          grid="two"
          items={[
            {
              title: 'Sans inscription, sans limites',
              icon: <RiInfinityFill className="text-primary h-6 w-6" />,
              description: <p>Chaque outil fonctionne instantanément dans votre navigateur. Pas de compte, pas de connexion, pas de paiement.</p>,
            },
            {
              title: 'Confidentialité avant tout',
              icon: <RiLockLine className="text-primary h-6 w-6" />,
              description: <p>Vos fichiers ne quittent jamais votre appareil. Tout le traitement se fait localement dans votre navigateur — nous n&apos;envoyons vos données à aucun serveur.</p>,
            },
            {
              title: 'Créés à partir de besoins réels',
              icon: <RiToolsFill className="text-primary h-6 w-6" />,
              description: <p>Chaque outil est né d&apos;un problème réel que nous avons rencontré en travaillant sur des projets clients. Si nous en avions besoin, vous aussi probablement.</p>,
            },
            {
              title: 'Financés par la publicité, gratuits pour vous',
              icon: <RiRocketLine className="text-primary h-6 w-6" />,
              description: (
                <p>
                  Nous utilisons des bannières Google AdSense pour couvrir les coûts de développement et d&apos;hébergement. Grâce aux revenus publicitaires, nous pouvons garder tous les outils
                  gratuits et continuer à en créer de nouveaux.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Nos outils"
          grid="three"
          items={[
            {
              title: 'Images et favicons',
              icon: <RiImageEditLine className="text-primary h-6 w-6" />,
              description: <p>Convertisseur WebP, éditeur d&apos;images en ligne et générateur de favicon. 3 outils pour le travail quotidien avec les images.</p>,
            },
            {
              title: 'Méta et SEO',
              icon: <RiSearchLine className="text-primary h-6 w-6" />,
              description: <p>Vérificateur de méta titre et description plus un compteur de mots et caractères pour évaluer la longueur du texte.</p>,
            },
            {
              title: 'E-mail et communication',
              icon: <RiMailLine className="text-primary h-6 w-6" />,
              description: <p>Générateur de signature e-mail HTML avec code prêt à l&apos;emploi pour Gmail et Outlook.</p>,
            },
            {
              title: 'Couleurs et accessibilité',
              icon: <RiPaletteLine className="text-primary h-6 w-6" />,
              description: <p>Vérificateur de contraste WCAG, extracteur de couleurs d&apos;image et générateur de palettes de couleurs. 3 outils pour travailler avec la couleur.</p>,
            },
            {
              title: 'Impression et supports',
              icon: <RiQrCodeLine className="text-primary h-6 w-6" />,
              description: <p>Générateur de codes QR pour sites web, vCards, menus et dépliants. Export en PNG et SVG.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Et ensuite">
          <p>
            Nous travaillons activement à l&apos;élargissement de la boîte à outils. De nouveaux outils sont ajoutés régulièrement en fonction des retours des utilisateurs et de notre propre
            expérience. L&apos;objectif est une plateforme unique où propriétaires d&apos;entreprises, designers et développeurs ont accès à chaque outil essentiel — tout en un lieu, tout gratuitement.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Confidentialité et sécurité">
          <p>
            Nous respectons votre vie privée. Les fichiers que vous importez dans nos outils sont traités exclusivement dans votre navigateur et ne sont jamais envoyés à un serveur. Nous utilisons des
            analyses (Google Analytics 4) et de la publicité (Google AdSense) uniquement après votre consentement via la bannière de cookies. Tous les détails sont disponibles dans notre{' '}
            <a href="/fr/politique-de-confidentialite" className="inline-link">
              Politique de confidentialité
            </a>
            .
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Essayez nos outils"
        description="10 outils en ligne gratuits — sans inscription, sans limites, sans envoi de fichiers sur des serveurs"
        btnOne="Voir les outils"
        btnOneLink="/fr/outils"
        btnTwo="Contact"
        btnTwoLink="/fr/contact"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
