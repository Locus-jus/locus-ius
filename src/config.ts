/// Site configuration — everything not defined, edit here.
// Replace: whatsapp (only digits with country code), email, instagram, url.
// brand is the wordmark shown in header/footer/title.

export const site = {
  brand: "Locus, Ius",
  descriptor: "Sites para advocacia",

  url: "https://seudominio.com.br",

  whatsapp: "5531972211906",
  email: "locusiusdevelopment@gmail.com",
  instagram: "",

  contactLabel: "Fale comigo",
} as const;

export function waLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}