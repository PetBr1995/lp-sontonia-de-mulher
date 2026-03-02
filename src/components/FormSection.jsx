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

const FormSection = () => {
  const [sourceData, setSourceData] = useState({
    page_url: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });

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

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

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

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Informe seu nome.";
    if (!isValidEmail(form.email)) e.email = "Informe um e-mail válido.";

    const phone = onlyDigits(form.whatsapp);
    if (!(phone.length === 10 || phone.length === 11)) e.whatsapp = "Informe um WhatsApp com DDD.";

    if (!form.category) e.category = "Selecione a categoria.";
    if (!form.message.trim()) e.message = "Descreva seu pedido.";
    return e;
  }, [form]);

  const canSubmit = status !== "loading" && Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!canSubmit) {
      setStatus("error");
      setMessage("Revise os campos e tente novamente.");
      return;
    }

    setStatus("loading");

    const payload = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "LP - Sintonia de Mulher",
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        personal_phone: formatWhatsappE164(form.whatsapp),

        cf_nome_completo: form.name.trim(),
        cf_whatsapp: formatWhatsappE164(form.whatsapp),
        cf_categoria: form.category,
        cf_mensagem: form.message,

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
      tags: ["sintonia-de-mulher", "lp"],
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
      setMessage(data.message || "Inscrição enviada! Redirecionando...");

      setForm({ name: "", whatsapp: "", email: "", category: "", message: "" });

      // ✅ redirect sem Router
      window.location.href = "/agradecimento";
    } catch (err) {
      setStatus("error");
      setMessage("Falha de rede. Verifique sua conexão e tente novamente.");
    }
  };

  return (
    <section className="relative bg-[#E6E1DA] py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl text-[#7A2E33] font-light">
            Garanta sua vaga no{" "}
            <span className="font-semibold uppercase">Sintonia de Mulher</span>
          </h2>

          <p className="mt-3 text-lg sm:text-xl text-[#7A2E33]/90">
            Preencha seus dados para finalizar sua inscrição
          </p>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#7A2E33]" />
        </div>

        <form onSubmit={handleSubmit} className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Nome*"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="h-14 border border-[#7A2E33]/60 bg-transparent px-4"
          />

          <input
            type="email"
            placeholder="Email*"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="h-14 border border-[#7A2E33]/60 bg-transparent px-4"
          />

          <input
            type="text"
            placeholder="WhatsApp*"
            value={form.whatsapp}
            onChange={handleWhatsappMask}
            inputMode="tel"
            className="h-14 border border-[#7A2E33]/60 bg-transparent px-4"
          />

          <select
            value={form.category}
            onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
            className="h-14 border border-[#7A2E33]/60 bg-transparent px-4"
          >
            <option value="">Selecione a categoria*</option>
            <option value="vip">Setor VIP</option>
            <option value="pista">Setor Pista</option>
          </select>

          <textarea
            placeholder="Descreva seu pedido*"
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            className="sm:col-span-2 h-28 border border-[#7A2E33]/60 bg-transparent px-4 py-3"
          />

          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              disabled={!canSubmit}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D85A66] to-[#9E2F3F] text-white shadow-lg disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>

            {message && <p className="mt-4 text-sm text-[#7A2E33]">{message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;