import { Award, ExternalLink, X } from 'lucide-react';

export type Certificate = {
  title: string;
  issuer: string;
  pdfSrc: string;
  category: 'Frontend' | 'Backend' | 'Automated Testing';
};

type CertificationListModalProps = {
  certificates: Certificate[];
  onClose: () => void;
  onOpenCertificate: (certificate: Certificate) => void;
};

const CertificationListModal = ({
  certificates,
  onClose,
  onOpenCertificate,
}: CertificationListModalProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    aria-labelledby="certifications-title"
  >
    <div className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col rounded-2xl border border-border bg-background p-6 shadow-2xl">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close certifications"
        className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mb-6 pr-10">
        <div className="mb-3 inline-flex rounded-xl bg-amber-500/15 p-3 text-amber-600 dark:text-amber-300">
          <Award className="h-6 w-6" />
        </div>
        <h2 id="certifications-title" className="text-2xl font-bold text-foreground">
          Professional Certifications
        </h2>
        <p className="mt-1 text-muted-foreground">Choose a certificate to view its PDF.</p>
      </div>

      <div className="min-h-0 space-y-6 overflow-y-auto pr-1">
        {(['Frontend', 'Backend', 'Automated Testing'] as const).map((category) => {
          const group = certificates.filter((certificate) => certificate.category === category);

          return (
            <section key={category} aria-labelledby={`${category.toLowerCase().replaceAll(' ', '-')}-certifications`}>
              <h3
                id={`${category.toLowerCase().replaceAll(' ', '-')}-certifications`}
                className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300"
              >
                {category}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {group.map((certificate) => (
                  <button
                    key={certificate.title}
                    type="button"
                    onClick={() => onOpenCertificate(certificate)}
                    className="group flex items-center justify-between rounded-xl border border-border bg-muted/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-amber-500/60 hover:bg-amber-500/10 hover:shadow-lg"
                  >
                    <span>
                      <span className="block font-semibold text-foreground">{certificate.title}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{certificate.issuer}</span>
                    </span>
                    <ExternalLink className="ml-3 h-5 w-5 shrink-0 text-amber-600 transition-transform group-hover:scale-110 dark:text-amber-300" />
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  </div>
);

export default CertificationListModal;
