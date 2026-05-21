import { CONTACT } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Fale com o escritório no WhatsApp ${CONTACT.whatsappDisplay}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 ease-smooth hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.358.69 4.55 1.881 6.39L4 28l6.793-1.834a11.94 11.94 0 0 0 5.21 1.21h.005c6.626 0 12.002-5.376 12.002-12.003C28.01 8.376 22.63 3 16.003 3Zm0 21.806h-.004a9.94 9.94 0 0 1-5.066-1.39l-.363-.215-4.029 1.088 1.075-3.93-.236-.379a9.946 9.946 0 0 1-1.527-5.978c0-5.486 4.46-9.946 9.95-9.946 2.656 0 5.151 1.034 7.029 2.913a9.875 9.875 0 0 1 2.913 7.038c0 5.486-4.46 9.799-9.742 9.799Zm5.452-7.452c-.298-.149-1.764-.871-2.038-.97-.273-.099-.471-.149-.67.149-.198.298-.768.97-.943 1.169-.174.198-.347.223-.645.074-.298-.149-1.26-.464-2.4-1.482-.887-.79-1.485-1.766-1.66-2.064-.173-.298-.018-.459.131-.607.134-.134.298-.347.447-.521.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.075-.149-.671-1.617-.919-2.215-.242-.582-.488-.503-.671-.512l-.571-.01c-.198 0-.521.075-.794.372-.273.298-1.042 1.018-1.042 2.486 0 1.466 1.067 2.883 1.215 3.082.149.198 2.1 3.2 5.087 4.487.711.307 1.265.49 1.698.628.713.227 1.362.195 1.875.118.572-.085 1.764-.72 2.014-1.416.248-.696.248-1.293.173-1.416-.075-.124-.273-.198-.571-.347Z"
        />
      </svg>
    </a>
  );
}
