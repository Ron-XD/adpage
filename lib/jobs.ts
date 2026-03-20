import { employmentTypes, jobCategories, jobs } from "@/lib/data";
import type { Lang } from "@/lib/i18n";
import type { Job, JobFilters } from "@/lib/types";

const PAGE_SIZE = 6;

export const JOB_SUBCATEGORIES = [
  "limpieza",
  "cocina",
  "montacarga",
  "camarera",
  "almacen",
  "anfitriona",
  "portero",
  "hotel",
] as const;

export type JobSubcategory = (typeof JOB_SUBCATEGORIES)[number];

const jobSubcategoryBySlug: Record<string, JobSubcategory> = {
  "necesitamos-empleada-domestica-lunes-viernes": "limpieza",
  "se-solicita-encargada-tienda": "anfitriona",
  "se-solicita-camarera-part-time-full-time": "camarera",
  "personal-limpieza-oficinas": "limpieza",
  "personal-para-hoteles": "hotel",
  "solicitamos-personal-para-almacen": "almacen",
  "auxiliar-limpieza-clinicas": "limpieza",
  "operario-carga-descarga": "montacarga",
  "cajero-supermercado": "anfitriona",
  "atencion-cliente-call-center-operativo": "anfitriona",
  "mozo-restaurante-turno-noche": "camarera",
  "auxiliar-cocina-comedor-empresarial": "cocina",
  "reponedor-gondolas-supermercado": "anfitriona",
  "recepcionista-hotel-sin-experiencia": "hotel",
  "limpieza-condominios-manana": "limpieza",
  "picker-preparador-pedidos": "almacen",
  "auxiliar-lavanderia-hotel": "hotel",
  "vendedor-piso-tienda": "anfitriona",
  "portero-control-acceso-turno-dia": "portero",
  "auxiliar-bodega-sin-experiencia": "almacen",
  "housekeeping-cuartos-hotel": "hotel",
  "operario-embalaje-productos": "montacarga",
  "asistente-limpieza-colegios": "limpieza",
  "anfitrion-atencion-clientes-tienda": "anfitriona",
  "auxiliar-recepcion-edificio-corporativo": "portero",
  "auxiliar-minimarket-turno-tarde": "anfitriona",
  "ayudante-cocina-hotel-turistico": "cocina",
  "operador-montacarga-basico": "montacarga",
  "personal-aseo-centro-comercial": "limpieza",
  "asistente-servicio-habitaciones": "hotel",
  "auxiliar-limpieza-clinica-dental-noche": "limpieza",
  "operador-picking-almacen-ecommerce": "almacen",
  "camarera-cafeteria-turno-manana": "camarera",
  "portero-condominio-turno-noche": "portero",
  "recepcionista-hostal-zona-centro": "hotel",
  "ayudante-cocina-restaurante-ejecutivo": "cocina",
  "operario-montacarga-patio-logistico": "montacarga",
  "personal-aseo-universidad-privada": "limpieza",
  "anfitriona-tienda-departamental": "anfitriona",
  "auxiliar-bodega-despacho-rapido": "almacen",
  "housekeeping-hotel-ejecutivo": "hotel",
  "mozo-salon-eventos-corporativos": "camarera",
  "operador-carga-centro-distribucion": "montacarga",
  "personal-limpieza-gimnasio": "limpieza",
  "portero-recepcion-torre-empresarial": "portero",
  "auxiliar-cocina-cafeteria-escolar": "cocina",
  "cajero-multifuncional-minimarket": "anfitriona",
  "asistente-habitaciones-apart-hotel": "hotel",
  "picker-pedidos-turno-tarde": "almacen",
  "anfitrion-servicio-cliente-supermercado": "anfitriona",
};

const customImageBySlug: Record<string, string> = {
  "necesitamos-empleada-domestica-lunes-viernes": "/jobs/empleada-domestica-v2.webp",
  "auxiliar-minimarket-turno-tarde": "/jobs/auxiliar-minimarket.webp",
  "ayudante-cocina-hotel-turistico": "/jobs/ayudante-cocina.webp",
  "se-solicita-encargada-tienda": "/jobs/encargada-tienda.webp",
  "operador-montacarga-basico": "/jobs/operador-montacarga.webp",
  "se-solicita-camarera-part-time-full-time": "/jobs/camarera-part-time.webp",
};

const customImageAltBySlug: Record<string, string> = {};

export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function classifyJobSubcategory(job: Job): JobSubcategory {
  return jobSubcategoryBySlug[job.slug] ?? "limpieza";
}

function expandQueryTerms(queryText: string) {
  const baseTerms = normalize(queryText)
    .split(/\s+/)
    .filter((term) => term.length > 1);

  const expanded = new Set<string>(baseTerms);

  for (const term of baseTerms) {
    if (term.startsWith("emplead")) {
      expanded.add("empleada");
      expanded.add("empleado");
      expanded.add("empleo");
      expanded.add("trabajo");
      expanded.add("vacante");
    }

    if (term.startsWith("trabaj")) {
      expanded.add("empleo");
      expanded.add("vacante");
      expanded.add("job");
      expanded.add("work");
    }

    if (term.startsWith("job") || term.startsWith("work")) {
      expanded.add("empleo");
      expanded.add("vacante");
      expanded.add("trabajo");
    }

    if (term.startsWith("clean")) {
      expanded.add("limpieza");
      expanded.add("aseo");
    }

    if (term.startsWith("warehouse") || term.startsWith("store")) {
      expanded.add("almacen");
      expanded.add("bodega");
      expanded.add("logistica");
    }

    if (term.startsWith("limpi")) {
      expanded.add("aseo");
      expanded.add("mantenimiento");
    }

    if (term.startsWith("almacen") || term.startsWith("bodega")) {
      expanded.add("logistica");
      expanded.add("picker");
      expanded.add("despacho");
    }

    if (term.startsWith("montacarga")) {
      expanded.add("logistica");
      expanded.add("carga");
      expanded.add("descarga");
      expanded.add("bodega");
      expanded.add("almacen");
    }

    if (term.startsWith("anfitrion")) {
      expanded.add("recepcionista");
      expanded.add("atencion");
      expanded.add("cliente");
      expanded.add("hotel");
      expanded.add("hoteleria");
    }

    if (term.startsWith("hotel")) {
      expanded.add("hoteleria");
      expanded.add("recepcionista");
      expanded.add("housekeeping");
      expanded.add("camarera");
    }

    if (term.startsWith("cocina")) {
      expanded.add("auxiliar");
      expanded.add("comedor");
      expanded.add("restaurante");
    }

    if (term.startsWith("portero")) {
      expanded.add("acceso");
      expanded.add("vigilancia");
      expanded.add("control");
    }

    if (term.startsWith("camarera")) {
      expanded.add("mozo");
      expanded.add("mesas");
      expanded.add("salon");
      expanded.add("hoteleria");
    }

    if (term.endsWith("s") && term.length > 3) {
      expanded.add(term.slice(0, -1));
    }
  }

  return Array.from(expanded);
}

function localizeJob(job: Job, lang: Lang): Job {
  if (lang !== "en") {
    return job;
  }

  return {
    ...job,
    title: job.titleEn,
    summary: job.summaryEn,
    description: job.descriptionEn,
    intro: job.introEn,
    mainResponsibilities: job.mainResponsibilitiesEn,
    workdayAndConditions: job.workdayAndConditionsEn,
    applicationRecommendations: job.applicationRecommendationsEn,
    keyTakeaways: job.keyTakeawaysEn,
    requirements: job.requirementsEn,
    benefits: job.benefitsEn,
    category: job.categoryEn as Job["category"],
    employmentType: job.employmentTypeEn as Job["employmentType"],
  };
}

export function getFeaturedJobs(limit = 4, lang: Lang = "es") {
  return jobs.filter((job) => job.featured).slice(0, limit).map((job) => localizeJob(job, lang));
}

export function getJobBySlug(slug: string, lang: Lang = "es") {
  const found = jobs.find((job) => job.slug === slug);
  return found ? localizeJob(found, lang) : undefined;
}

export function getAllJobs(lang: Lang = "es") {
  return [...jobs].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)).map((job) => localizeJob(job, lang));
}

export function getFilterOptions() {
  const uniqueCities = Array.from(new Set(jobs.map((job) => job.city))).sort();
  return {
    categories: jobCategories,
    cities: uniqueCities,
    types: employmentTypes,
  };
}

export function filterJobs(filters: JobFilters, lang: Lang = "es"): Job[] {
  const all = getAllJobs(lang);
  const query = filters.query ?? "";
  const queryTerms = expandQueryTerms(query);
  const city = normalize(filters.city ?? "");
  const category = normalize(filters.category ?? "");
  const type = normalize(filters.type ?? "");
  const subcategory = normalize(filters.subcategory ?? "");

  return all.filter((job) => {
    const haystack = normalize(
      [
        job.title,
        job.company,
        job.summary,
        job.description,
        job.category,
        job.location,
        job.city,
        job.employmentType,
        ...job.requirements,
        ...job.benefits,
      ].join(" "),
    );

    const matchesQuery =
      !queryTerms.length || queryTerms.some((term) => haystack.includes(term));
    const matchesCity = !city || normalize(job.city) === city;
    const matchesCategory = !category || normalize(job.category) === category;
    const matchesType = !type || normalize(job.employmentType) === type;
    const matchesSubcategory = !subcategory || classifyJobSubcategory(job) === subcategory;

    return matchesQuery && matchesCity && matchesCategory && matchesType && matchesSubcategory;
  });
}

export function paginateJobs(jobList: Job[], pageInput?: string) {
  const total = jobList.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const currentPage = Math.min(Math.max(Number(pageInput) || 1, 1), totalPages);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return {
    items: jobList.slice(start, end),
    pagination: {
      currentPage,
      totalPages,
      total,
      pageSize: PAGE_SIZE,
    },
  };
}

export function getCategoryStats() {
  return jobCategories.map((category) => ({
    category,
    total: jobs.filter((job) => job.category === category).length,
  }));
}

export function formatDate(dateString: string, lang: Lang = "es") {
  const formatter = new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return formatter.format(new Date(dateString));
}

function getSeoImageBySlug(job: Job) {
  return `/jobs/${job.slug}.jpg`;
}

export function getJobImageSrc(job: Job) {
  return customImageBySlug[job.slug] ?? getSeoImageBySlug(job);
}

export function getJobImageAlt(job: Job, lang: Lang = "es") {
  const customAlt = customImageAltBySlug[job.slug];
  if (customAlt) {
    return customAlt;
  }

  if (lang === "en") {
    return `${job.title} at ${job.company} in ${job.city} (${job.employmentType}) - job opportunity`;
  }

  return `oferta de empleo: ${job.title} en ${job.company}, ${job.city} (${job.employmentType})`;
}
