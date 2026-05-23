import Script from 'next/script';

type JsonLdProps = {
  schema: object | object[];
  id?: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker';
};

export function JsonLd({ schema, id, strategy }: JsonLdProps) {
  const json = JSON.stringify(schema).replace(/</g, '\\u003c');

  if (strategy) {
    return (
      <Script
        id={id}
        type='application/ld+json'
        strategy={strategy}
        dangerouslySetInnerHTML={{ __html: json }}
      />
    );
  }

  return <script id={id} type='application/ld+json' dangerouslySetInnerHTML={{ __html: json }} />;
}
