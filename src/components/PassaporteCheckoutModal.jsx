import { useEffect, useMemo, useState } from "react";

function onlyDigits(v = "") {
  return v.replace(/\D/g, "");
}

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function formatWhatsappE164(numero = "") {
  const n = onlyDigits(numero);
  if (!n) return "";
  if (n.startsWith("55")) return `+${n}`;
  return `+55${n}`;
}

const PassaporteCheckoutModal = ({ isOpen, onClose, checkoutUrl, categoryLabel }) => {
  const [sourceData, setSourceData] = useState({
    page_url: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [submittedOnce, setSubmittedOnce] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setSourceData({
      page_url: window.location.href,
      utm_source: urlParams.get("utm_source") || "",
      utm_medium: urlParams.get("utm_medium") || "",
      utm_campaign: urlParams.get("utm_campaign") || "",
      utm_term: urlParams.get("utm_term") || "",
      utm_content: urlParams.get("utm_content") || "",
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setForm({ name: "", whatsapp: "", email: "" });
    setStatus("idle");
    setMessage("");
    setSubmittedOnce(false);
  }, [isOpen, categoryLabel, checkoutUrl]);

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Informe seu nome.";
    if (!isValidEmail(form.email)) e.email = "Informe um e-mail válido.";

    const phone = onlyDigits(form.whatsapp);
    if (!(phone.length === 10 || phone.length === 11)) e.whatsapp = "Informe um WhatsApp com DDD.";

    return e;
  }, [form]);

  const handleWhatsappMask = (e) => {
    let value = e.target.value;
    value = onlyDigits(value);

    if (value.length === 0) {
      setForm((prev) => ({ ...prev, whatsapp: "" }));
      return;
    }

    value = value.slice(0, 11);

    if (value.length <= 2) value = `(${value}`;
    else if (value.length <= 6) value = value.replace(/^(\d{2})(\d{0,4})/, "($1) $2");
    else {
      if (value.length <= 10) value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      else value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    setForm((prev) => ({ ...prev, whatsapp: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmittedOnce(true);
    setMessage("");

    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setMessage("Revise os campos e tente novamente.");
      return;
    }

    setStatus("loading");

    const setorNormalizado = (categoryLabel || "nao-informado").toLowerCase();
    const conversionIdentifier = `LP - Sintonia de Mulher - Formulario ${categoryLabel || "Nao Informado"}`;

    const payload = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: conversionIdentifier,
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        personal_phone: formatWhatsappE164(form.whatsapp),

        cf_nome_completo: form.name.trim(),
        cf_whatsapp: formatWhatsappE164(form.whatsapp),
        cf_categoria: categoryLabel || "",
        cf_origem_formulario: `Formulario ${categoryLabel || "Nao Informado"}`,
        cf_mensagem: `Interesse no setor ${categoryLabel || "nao informado"}.`,

        traffic_source: sourceData.utm_source,
        traffic_campaign: sourceData.utm_campaign,
        traffic_medium: sourceData.utm_medium,
        traffic_value: sourceData.utm_term,

        cf_utm_campaign: sourceData.utm_campaign,
        cf_utm_medium: sourceData.utm_medium,
        cf_utm_term: sourceData.utm_term,
        cf_utm_content: sourceData.utm_content,
        cf_utm_source: sourceData.utm_source,
        cf_url_de_conversao: sourceData.page_url,
      },
      tags: ["sintonia-de-mulher", "lp", `formulario-${setorNormalizado}`],
      source: "landing-sintonia-de-mulher",
    };

    try {
      const res = await fetch(
        "https://api.rd.services/platform/conversions?api_key=MHnWDjBYARQKdwUsfZRbjtVmPEyoHnSqtgFz",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        setStatus("error");
        setMessage(data.message || "Não foi possível enviar. Tente novamente.");
        return;
      }

      setStatus("success");
      setMessage("Cadastro enviado! Redirecionando para finalizar sua compra...");

      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 700);
    } catch (_err) {
      setStatus("error");
      setMessage("Falha de rede. Verifique sua conexão e tente novamente.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-passaporte-title"
    >
      <div
        className="max-h-[95vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#7A2E33]/20 bg-[#f4f3ea] p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 id="modal-passaporte-title" className="text-2xl text-[#7A2E33] sm:text-3xl">
              Garanta sua vaga
            </h3>
            <p className="mt-1 text-sm text-[#7A2E33]/90 sm:text-base">
              Preencha seus dados para finalizar sua compra.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#7A2E33]/40 px-3 py-1 text-[#7A2E33] transition hover:bg-[#7A2E33] hover:text-white"
            aria-label="Fechar modal"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <input
              type="text"
              placeholder="Nome*"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className={`h-13 w-full border bg-transparent px-4 ${
                submittedOnce && errors.name ? "border-red-600" : "border-[#7A2E33]/60"
              }`}
            />
            {submittedOnce && errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email*"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              className={`h-13 w-full border bg-transparent px-4 ${
                submittedOnce && errors.email ? "border-red-600" : "border-[#7A2E33]/60"
              }`}
            />
            {submittedOnce && errors.email && <p className="mt-1 text-sm text-red-700">{errors.email}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="WhatsApp com DDD*"
              value={form.whatsapp}
              onChange={handleWhatsappMask}
              inputMode="tel"
              className={`h-13 w-full border bg-transparent px-4 ${
                submittedOnce && errors.whatsapp ? "border-red-600" : "border-[#7A2E33]/60"
              }`}
            />
            {submittedOnce && errors.whatsapp && (
              <p className="mt-1 text-sm text-red-700">{errors.whatsapp}</p>
            )}
          </div>

          <div className="mt-2 flex items-center justify-center">
            <div className="w-fit rounded-[22px] bg-white p-[1px] shadow-[0_0_5px_rgba(0,0,0,0.4)]">
              <div className="rounded-[22px] bg-gradient-to-r from-[#D85A66] via-[#9E2F3F] to-[#9E2F3F] px-6 py-3 sm:px-8">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="block text-center text-base font-light text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
                >
                  {status === "loading" ? "Enviando..." : "Comprar ingresso"}
                </button>
              </div>
            </div>
          </div>

          {message && (
            <p
              className={`text-sm ${
                status === "success" ? "text-green-700" : "text-[#7A2E33]"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PassaporteCheckoutModal;
