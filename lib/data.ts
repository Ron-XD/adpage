import type { Company, EmploymentType, Job, JobCategory } from "@/lib/types";

export const jobCategories: JobCategory[] = [
  "Logistica",
  "Limpieza",
  "Hoteleria",
  "Comercio",
  "Atencion al cliente",
  "Administracion",
  "Ventas",
];

export const cities = ["Lima", "Bogota", "Quito", "Santiago", "CDMX", "Buenos Aires"];

export const employmentTypes: EmploymentType[] = ["Tiempo completo", "Medio tiempo", "Hibrido", "Temporal"];

export const companies: Company[] = [
  { name: "Hotel Aurora", logo: "/companies/cloudbridge.svg", openRoles: 80, industry: "Hoteleria" },
  { name: "SuperMercados Uno", logo: "/companies/viva.svg", openRoles: 70, industry: "Comercio" },
  { name: "LimpiaPlus", logo: "/companies/orbit.svg", openRoles: 55, industry: "Limpieza" },
  { name: "Logisur", logo: "/companies/nexo.svg", openRoles: 65, industry: "Logistica" },
  { name: "Centro Servicios Alfa", logo: "/companies/aurea.svg", openRoles: 30, industry: "Servicios" },
];

type JobTemplate = {
  title: string;
  slugBase: string;
  company: string;
  city: string;
  category: JobCategory;
  employmentType: EmploymentType;
  salary: string;
  summary: string;
};

const templates: JobTemplate[] = [
  {
    title: "NECESITAMOS EMPLEADA DOMESTICA DE LUNES A VIERNES",
    slugBase: "necesitamos-empleada-domestica-lunes-viernes",
    company: "Centro Servicios Alfa",
    city: "Lima",
    category: "Limpieza",
    employmentType: "Tiempo completo",
    salary: "S/ 1,250",
    summary: "Apoyo en limpieza del hogar, lavado y orden general de lunes a viernes.",
  },
  {
    title: "Se Solicita encargado(a) de tienda",
    slugBase: "se-solicita-encargada-tienda",
    company: "SuperMercados Uno",
    city: "Bogota",
    category: "Comercio",
    employmentType: "Tiempo completo",
    salary: "COP 1.650.000",
    summary: "Apertura y cierre de tienda, control de caja y atencion a clientes.",
  },
  {
    title: "SE SOLICITA CAMARERA PART TIME O FULL TIME",
    slugBase: "se-solicita-camarera-part-time-full-time",
    company: "Hotel Aurora",
    city: "Quito",
    category: "Hoteleria",
    employmentType: "Medio tiempo",
    salary: "USD 520",
    summary: "Atencion de mesas y apoyo en salon para turnos parciales o completos.",
  },
  {
    title: "Solicitamos Personal de limpieza para Oficinas",
    slugBase: "personal-limpieza-oficinas",
    company: "LimpiaPlus",
    city: "Santiago",
    category: "Limpieza",
    employmentType: "Tiempo completo",
    salary: "CLP 590.000",
    summary: "Limpieza de escritorios, banos y areas comunes en horario administrativo.",
  },
  {
    title: "Personal para hoteles",
    slugBase: "personal-para-hoteles",
    company: "Hotel Aurora",
    city: "CDMX",
    category: "Hoteleria",
    employmentType: "Temporal",
    salary: "MXN 8,900",
    summary: "Apoyo en recepcion, limpieza de habitaciones y asistencia a huespedes.",
  },
  {
    title: "Solicitamos personal para almacen",
    slugBase: "solicitamos-personal-para-almacen",
    company: "Logisur",
    city: "Buenos Aires",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "ARS 780.000",
    summary: "Recepcion, etiquetado y despacho de mercaderia en centro logistico.",
  },
  {
    title: "Auxiliar de limpieza para clinicas",
    slugBase: "auxiliar-limpieza-clinicas",
    company: "LimpiaPlus",
    city: "Lima",
    category: "Limpieza",
    employmentType: "Tiempo completo",
    salary: "S/ 1,300",
    summary: "Desinfeccion de consultorios y pasillos con protocolos de higiene.",
  },
  {
    title: "Operario de carga y descarga",
    slugBase: "operario-carga-descarga",
    company: "Logisur",
    city: "Bogota",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "COP 1.500.000",
    summary: "Carga de pedidos, acomodo de pallets y control de salida de bodega.",
  },
  {
    title: "Cajero(a) para supermercado",
    slugBase: "cajero-supermercado",
    company: "SuperMercados Uno",
    city: "Quito",
    category: "Comercio",
    employmentType: "Medio tiempo",
    salary: "USD 500",
    summary: "Cobro en caja, arqueo y atencion cordial al cliente en linea de pago.",
  },
  {
    title: "Atencion al cliente call center (operativo)",
    slugBase: "atencion-cliente-call-center-operativo",
    company: "Centro Servicios Alfa",
    city: "Santiago",
    category: "Atencion al cliente",
    employmentType: "Hibrido",
    salary: "CLP 650.000",
    summary: "Recepcion de llamadas y seguimiento de consultas de clientes finales.",
  },
  {
    title: "Mozo para restaurante turno noche",
    slugBase: "mozo-restaurante-turno-noche",
    company: "Hotel Aurora",
    city: "CDMX",
    category: "Hoteleria",
    employmentType: "Temporal",
    salary: "MXN 9,200",
    summary: "Servicio de mesas, orden del salon y apoyo en cierre nocturno.",
  },
  {
    title: "Auxiliar de cocina para comedor empresarial",
    slugBase: "auxiliar-cocina-comedor-empresarial",
    company: "Hotel Aurora",
    city: "Buenos Aires",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "ARS 760.000",
    summary: "Preparacion basica de alimentos y limpieza de area de cocina.",
  },
  {
    title: "Reponedor(a) de gondolas para supermercado",
    slugBase: "reponedor-gondolas-supermercado",
    company: "SuperMercados Uno",
    city: "Lima",
    category: "Comercio",
    employmentType: "Tiempo completo",
    salary: "S/ 1,180",
    summary: "Reposicion de productos, rotulado y control de fechas de vencimiento.",
  },
  {
    title: "Recepcionista de hotel (sin experiencia)",
    slugBase: "recepcionista-hotel-sin-experiencia",
    company: "Hotel Aurora",
    city: "Bogota",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "COP 1.600.000",
    summary: "Check-in y check-out de huespedes, asistencia basica en recepcion.",
  },
  {
    title: "Personal de limpieza para condominios (manana)",
    slugBase: "limpieza-condominios-manana",
    company: "LimpiaPlus",
    city: "Quito",
    category: "Limpieza",
    employmentType: "Medio tiempo",
    salary: "USD 480",
    summary: "Mantenimiento de pasillos, escaleras y areas compartidas.",
  },
  {
    title: "Picker preparador de pedidos",
    slugBase: "picker-preparador-pedidos",
    company: "Logisur",
    city: "Santiago",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "CLP 620.000",
    summary: "Armado de pedidos, escaneo de productos y control de calidad.",
  },
  {
    title: "Auxiliar de lavanderia para hotel",
    slugBase: "auxiliar-lavanderia-hotel",
    company: "Hotel Aurora",
    city: "CDMX",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "MXN 8,700",
    summary: "Clasificacion, lavado y planchado de ropa de habitaciones.",
  },
  {
    title: "Vendedor(a) de piso para tienda",
    slugBase: "vendedor-piso-tienda",
    company: "SuperMercados Uno",
    city: "Buenos Aires",
    category: "Ventas",
    employmentType: "Tiempo completo",
    salary: "ARS 740.000",
    summary: "Atencion en sala, apoyo a clientes y orden de exhibiciones.",
  },
  {
    title: "Portero para control de acceso turno dia",
    slugBase: "portero-control-acceso-turno-dia",
    company: "Centro Servicios Alfa",
    city: "Lima",
    category: "Administracion",
    employmentType: "Temporal",
    salary: "S/ 1,220",
    summary: "Registro de ingresos y apoyo en atencion de visitas.",
  },
  {
    title: "Auxiliar de bodega sin experiencia",
    slugBase: "auxiliar-bodega-sin-experiencia",
    company: "Logisur",
    city: "Bogota",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "COP 1.470.000",
    summary: "Apoyo general en almacen: acomodo, inventario y despacho.",
  },
  {
    title: "Housekeeping para cuartos de hotel",
    slugBase: "housekeeping-cuartos-hotel",
    company: "Hotel Aurora",
    city: "Quito",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "USD 540",
    summary: "Limpieza de habitaciones, cambio de blancos y reposicion de amenidades.",
  },
  {
    title: "Operario de embalaje de productos",
    slugBase: "operario-embalaje-productos",
    company: "Logisur",
    city: "Santiago",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "CLP 610.000",
    summary: "Empaque, sellado y etiquetado de pedidos para despacho diario.",
  },
  {
    title: "Asistente de limpieza para colegios",
    slugBase: "asistente-limpieza-colegios",
    company: "LimpiaPlus",
    city: "CDMX",
    category: "Limpieza",
    employmentType: "Tiempo completo",
    salary: "MXN 8,600",
    summary: "Limpieza de aulas, patios y servicios sanitarios.",
  },
  {
    title: "Anfitrion(a) de atencion al cliente en tienda",
    slugBase: "anfitrion-atencion-clientes-tienda",
    company: "SuperMercados Uno",
    city: "Buenos Aires",
    category: "Atencion al cliente",
    employmentType: "Medio tiempo",
    salary: "ARS 430.000",
    summary: "Orientacion a clientes, apoyo en filas y consulta de promociones.",
  },
  {
    title: "Auxiliar de recepcion para edificio corporativo",
    slugBase: "auxiliar-recepcion-edificio-corporativo",
    company: "Centro Servicios Alfa",
    city: "Lima",
    category: "Administracion",
    employmentType: "Tiempo completo",
    salary: "S/ 1,280",
    summary: "Recepcion de correspondencia y atencion basica a visitantes.",
  },
  {
    title: "Auxiliar para minimarket turno tarde",
    slugBase: "auxiliar-minimarket-turno-tarde",
    company: "SuperMercados Uno",
    city: "Bogota",
    category: "Comercio",
    employmentType: "Medio tiempo",
    salary: "COP 1.050.000",
    summary: "Reposicion de productos, apoyo en caja y limpieza de sala de ventas.",
  },
  {
    title: "Ayudante de cocina para hotel turistico",
    slugBase: "ayudante-cocina-hotel-turistico",
    company: "Hotel Aurora",
    city: "Quito",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "USD 560",
    summary: "Mise en place, apoyo en preparaciones y limpieza de utensilios.",
  },
  {
    title: "Operador(a) de montacarga basico",
    slugBase: "operador-montacarga-basico",
    company: "Logisur",
    city: "Santiago",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "CLP 700.000",
    summary: "Movimiento interno de pallets y apoyo en despacho de mercaderia.",
  },
  {
    title: "Personal de aseo para centro comercial",
    slugBase: "personal-aseo-centro-comercial",
    company: "LimpiaPlus",
    city: "CDMX",
    category: "Limpieza",
    employmentType: "Temporal",
    salary: "MXN 8,400",
    summary: "Mantenimiento de pisos, banos y areas de alto trafico.",
  },
  {
    title: "Asistente de servicio a habitaciones",
    slugBase: "asistente-servicio-habitaciones",
    company: "Hotel Aurora",
    city: "Buenos Aires",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "ARS 750.000",
    summary: "Entrega de pedidos a habitaciones y apoyo en requerimientos de huespedes.",
  },
  {
    title: "Auxiliar de limpieza para clinica dental turno noche",
    slugBase: "auxiliar-limpieza-clinica-dental-noche",
    company: "LimpiaPlus",
    city: "Lima",
    category: "Limpieza",
    employmentType: "Temporal",
    salary: "S/ 1,260",
    summary: "Limpieza y desinfeccion de boxes, recepcion y pasillos en turno nocturno.",
  },
  {
    title: "Operador de picking para almacen e-commerce",
    slugBase: "operador-picking-almacen-ecommerce",
    company: "Logisur",
    city: "Bogota",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "COP 1.520.000",
    summary: "Preparacion de pedidos online, escaneo y control de salidas.",
  },
  {
    title: "Camarera para cafeteria turno manana",
    slugBase: "camarera-cafeteria-turno-manana",
    company: "Hotel Aurora",
    city: "Quito",
    category: "Hoteleria",
    employmentType: "Medio tiempo",
    salary: "USD 510",
    summary: "Atencion en barra y mesas para servicio de desayunos y media manana.",
  },
  {
    title: "Portero para condominio turno noche",
    slugBase: "portero-condominio-turno-noche",
    company: "Centro Servicios Alfa",
    city: "Santiago",
    category: "Administracion",
    employmentType: "Temporal",
    salary: "CLP 620.000",
    summary: "Control de ingresos, rondas de verificacion y atencion a residentes.",
  },
  {
    title: "Recepcionista para hostal en zona centro",
    slugBase: "recepcionista-hostal-zona-centro",
    company: "Hotel Aurora",
    city: "CDMX",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "MXN 9,100",
    summary: "Check-in, check-out y soporte a huespedes en recepcion principal.",
  },
  {
    title: "Ayudante de cocina para restaurante ejecutivo",
    slugBase: "ayudante-cocina-restaurante-ejecutivo",
    company: "Hotel Aurora",
    city: "Buenos Aires",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "ARS 770.000",
    summary: "Apoyo en preparacion de insumos, emplatado basico y orden de cocina.",
  },
  {
    title: "Operario de montacarga para patio logistico",
    slugBase: "operario-montacarga-patio-logistico",
    company: "Logisur",
    city: "Lima",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "S/ 1,650",
    summary: "Movimiento de pallets y abastecimiento interno en zona de despacho.",
  },
  {
    title: "Personal de aseo para universidad privada",
    slugBase: "personal-aseo-universidad-privada",
    company: "LimpiaPlus",
    city: "Bogota",
    category: "Limpieza",
    employmentType: "Tiempo completo",
    salary: "COP 1.430.000",
    summary: "Mantenimiento de aulas, oficinas administrativas y espacios comunes.",
  },
  {
    title: "Anfitrion(a) para tienda departamental",
    slugBase: "anfitriona-tienda-departamental",
    company: "SuperMercados Uno",
    city: "Quito",
    category: "Atencion al cliente",
    employmentType: "Medio tiempo",
    salary: "USD 500",
    summary: "Orientacion de clientes, apoyo en fila y gestion de consultas frecuentes.",
  },
  {
    title: "Auxiliar de bodega para despacho rapido",
    slugBase: "auxiliar-bodega-despacho-rapido",
    company: "Logisur",
    city: "Santiago",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "CLP 640.000",
    summary: "Recepcion, clasificacion y salida de paquetes de alta rotacion.",
  },
  {
    title: "Housekeeping para hotel ejecutivo",
    slugBase: "housekeeping-hotel-ejecutivo",
    company: "Hotel Aurora",
    city: "CDMX",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "MXN 8,950",
    summary: "Limpieza de habitaciones y control de estandares de presentacion.",
  },
  {
    title: "Mozo de salon para eventos corporativos",
    slugBase: "mozo-salon-eventos-corporativos",
    company: "Hotel Aurora",
    city: "Buenos Aires",
    category: "Hoteleria",
    employmentType: "Temporal",
    salary: "ARS 730.000",
    summary: "Servicio de mesas y montaje de salon para jornadas de eventos.",
  },
  {
    title: "Operador de carga para centro de distribucion",
    slugBase: "operador-carga-centro-distribucion",
    company: "Logisur",
    city: "Lima",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "S/ 1,580",
    summary: "Carga y descarga de mercaderia con control de guia y rutas.",
  },
  {
    title: "Personal de limpieza para gimnasio",
    slugBase: "personal-limpieza-gimnasio",
    company: "LimpiaPlus",
    city: "Bogota",
    category: "Limpieza",
    employmentType: "Medio tiempo",
    salary: "COP 1.080.000",
    summary: "Limpieza de maquinas, vestuarios y zonas de alto trafico.",
  },
  {
    title: "Portero recepcion para torre empresarial",
    slugBase: "portero-recepcion-torre-empresarial",
    company: "Centro Servicios Alfa",
    city: "Quito",
    category: "Administracion",
    employmentType: "Tiempo completo",
    salary: "USD 570",
    summary: "Control de acceso, registro de visitas y atencion en lobby.",
  },
  {
    title: "Auxiliar de cocina para cafeteria escolar",
    slugBase: "auxiliar-cocina-cafeteria-escolar",
    company: "Hotel Aurora",
    city: "Santiago",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "CLP 610.000",
    summary: "Apoyo en preparacion de menus, porcionado y limpieza de area.",
  },
  {
    title: "Cajero(a) multifuncional para minimarket",
    slugBase: "cajero-multifuncional-minimarket",
    company: "SuperMercados Uno",
    city: "CDMX",
    category: "Comercio",
    employmentType: "Medio tiempo",
    salary: "MXN 8,300",
    summary: "Cobro en caja, reposicion de productos y apoyo al cliente.",
  },
  {
    title: "Asistente de habitaciones para apart hotel",
    slugBase: "asistente-habitaciones-apart-hotel",
    company: "Hotel Aurora",
    city: "Buenos Aires",
    category: "Hoteleria",
    employmentType: "Tiempo completo",
    salary: "ARS 760.000",
    summary: "Reposicion de blancos y atencion de requerimientos de huespedes.",
  },
  {
    title: "Picker de pedidos turno tarde",
    slugBase: "picker-pedidos-turno-tarde",
    company: "Logisur",
    city: "Lima",
    category: "Logistica",
    employmentType: "Tiempo completo",
    salary: "S/ 1,490",
    summary: "Seleccion y empaque de pedidos para despacho de ultima milla.",
  },
  {
    title: "Anfitrion de servicio al cliente para supermercado",
    slugBase: "anfitrion-servicio-cliente-supermercado",
    company: "SuperMercados Uno",
    city: "Bogota",
    category: "Atencion al cliente",
    employmentType: "Tiempo completo",
    salary: "COP 1.420.000",
    summary: "Atencion en piso, gestion de filas y resolucion de consultas de clientes.",
  },
];

const companyLogos: Record<string, string> = {
  "Hotel Aurora": "/companies/cloudbridge.svg",
  "SuperMercados Uno": "/companies/viva.svg",
  LimpiaPlus: "/companies/orbit.svg",
  Logisur: "/companies/nexo.svg",
  "Centro Servicios Alfa": "/companies/aurea.svg",
};

const categoryRequirements: Record<JobCategory, string[]> = {
  Limpieza: [
    "Experiencia previa en aseo de oficinas u hogares (deseable)",
    "Conocimiento basico de productos de limpieza",
    "Orden, puntualidad y buena presentacion",
  ],
  Logistica: [
    "Capacidad para trabajo fisico moderado",
    "Manejo basico de inventario o picking",
    "Disponibilidad para turnos rotativos",
  ],
  Hoteleria: [
    "Actitud de servicio al cliente",
    "Disponibilidad fines de semana y feriados",
    "Trabajo en equipo y buena comunicacion",
  ],
  Comercio: [
    "Atencion cordial al cliente",
    "Manejo basico de caja o reposicion",
    "Responsabilidad con horarios y cierres",
  ],
  "Atencion al cliente": [
    "Comunicacion verbal clara",
    "Paciencia para resolucion de consultas",
    "Manejo basico de computador",
  ],
  Administracion: [
    "Organizacion documental",
    "Manejo basico de Excel y correo",
    "Trato profesional con visitas",
  ],
  Ventas: [
    "Orientacion al cumplimiento de metas",
    "Excelente trato interpersonal",
    "Experiencia en ventas de mostrador (deseable)",
  ],
};

const categoryBenefits: Record<JobCategory, string[]> = {
  Limpieza: ["Capacitacion inicial", "Uniforme y materiales", "Pago puntual"],
  Logistica: ["Ingreso a planilla", "Horas extra pagadas", "Ruta de crecimiento"],
  Hoteleria: ["Alimentacion en turno", "Propinas segun puesto", "Turnos organizados"],
  Comercio: ["Bonos por desempeno", "Descuentos en tienda", "Pago quincenal"],
  "Atencion al cliente": ["Capacitacion continua", "Bono por calidad", "Modalidad flexible"],
  Administracion: ["Jornada estable", "Seguro segun ley", "Formacion interna"],
  Ventas: ["Comisiones", "Bonos por objetivos", "Plan de carrera"],
};

const sourceByCompany: Record<string, { name: string; url: string }> = {
  "Hotel Aurora": { name: "Portal de Talento Hotel Aurora", url: "https://www.linkedin.com/jobs" },
  "SuperMercados Uno": { name: "Bolsa laboral SuperMercados Uno", url: "https://www.computrabajo.com" },
  LimpiaPlus: { name: "Canal de reclutamiento LimpiaPlus", url: "https://www.indeed.com" },
  Logisur: { name: "Talento Logisur", url: "https://www.glassdoor.com/Job" },
  "Centro Servicios Alfa": { name: "Portal de empleos Alfa", url: "https://www.bumeran.com" },
};

const sourceBySlugBase: Record<string, string> = {
  "necesitamos-empleada-domestica-lunes-viernes": "https://www.computrabajo.com/trabajo-de-empleada-domestica",
  "se-solicita-encargada-tienda": "https://www.computrabajo.com/trabajo-de-encargado-de-tienda",
  "se-solicita-camarera-part-time-full-time": "https://www.indeed.com/q-camarera-jobs.html",
  "personal-limpieza-oficinas": "https://www.indeed.com/q-office-cleaning-jobs.html",
  "personal-para-hoteles": "https://www.linkedin.com/jobs/hotel-jobs",
  "solicitamos-personal-para-almacen": "https://www.computrabajo.com/trabajo-de-almacen",
  "auxiliar-limpieza-clinicas": "https://www.indeed.com/q-hospital-cleaning-jobs.html",
  "operario-carga-descarga": "https://www.computrabajo.com/trabajo-de-carga-y-descarga",
  "cajero-supermercado": "https://www.indeed.com/q-supermarket-cashier-jobs.html",
  "atencion-cliente-call-center-operativo": "https://www.computrabajo.com/trabajo-de-atencion-al-cliente",
  "mozo-restaurante-turno-noche": "https://www.indeed.com/q-waiter-jobs.html",
  "auxiliar-cocina-comedor-empresarial": "https://www.indeed.com/q-kitchen-assistant-jobs.html",
  "reponedor-gondolas-supermercado": "https://www.computrabajo.com/trabajo-de-reponedor",
  "recepcionista-hotel-sin-experiencia": "https://www.linkedin.com/jobs/hotel-receptionist-jobs",
  "limpieza-condominios-manana": "https://www.indeed.com/q-janitor-jobs.html",
  "picker-preparador-pedidos": "https://www.computrabajo.com/trabajo-de-picker",
  "auxiliar-lavanderia-hotel": "https://www.indeed.com/q-laundry-assistant-jobs.html",
  "vendedor-piso-tienda": "https://www.computrabajo.com/trabajo-de-vendedor-de-tienda",
  "portero-control-acceso-turno-dia": "https://www.indeed.com/q-security-guard-jobs.html",
  "auxiliar-bodega-sin-experiencia": "https://www.computrabajo.com/trabajo-de-auxiliar-de-bodega",
  "housekeeping-cuartos-hotel": "https://www.linkedin.com/jobs/housekeeping-jobs",
  "operario-embalaje-productos": "https://www.indeed.com/q-packing-worker-jobs.html",
  "asistente-limpieza-colegios": "https://www.indeed.com/q-school-janitor-jobs.html",
  "anfitrion-atencion-clientes-tienda": "https://www.computrabajo.com/trabajo-de-anfitrion",
  "auxiliar-recepcion-edificio-corporativo": "https://www.indeed.com/q-receptionist-jobs.html",
  "auxiliar-minimarket-turno-tarde": "https://www.computrabajo.com/trabajo-de-cajero",
  "ayudante-cocina-hotel-turistico": "https://www.indeed.com/q-commis-chef-jobs.html",
  "operador-montacarga-basico": "https://www.computrabajo.com/trabajo-de-operador-de-montacargas",
  "personal-aseo-centro-comercial": "https://www.indeed.com/q-cleaning-staff-jobs.html",
  "asistente-servicio-habitaciones": "https://www.linkedin.com/jobs/room-service-jobs",
  "auxiliar-limpieza-clinica-dental-noche": "https://www.indeed.com/q-night-cleaning-jobs.html",
  "operador-picking-almacen-ecommerce": "https://www.computrabajo.com/trabajo-de-picker",
  "camarera-cafeteria-turno-manana": "https://www.indeed.com/q-cafe-waitress-jobs.html",
  "portero-condominio-turno-noche": "https://www.indeed.com/q-doorman-jobs.html",
  "recepcionista-hostal-zona-centro": "https://www.linkedin.com/jobs/receptionist-jobs",
  "ayudante-cocina-restaurante-ejecutivo": "https://www.indeed.com/q-kitchen-helper-jobs.html",
  "operario-montacarga-patio-logistico": "https://www.computrabajo.com/trabajo-de-operador-de-montacargas",
  "personal-aseo-universidad-privada": "https://www.indeed.com/q-janitor-jobs.html",
  "anfitriona-tienda-departamental": "https://www.computrabajo.com/trabajo-de-anfitrion",
  "auxiliar-bodega-despacho-rapido": "https://www.computrabajo.com/trabajo-de-auxiliar-de-bodega",
  "housekeeping-hotel-ejecutivo": "https://www.linkedin.com/jobs/housekeeping-jobs",
  "mozo-salon-eventos-corporativos": "https://www.indeed.com/q-banquet-server-jobs.html",
  "operador-carga-centro-distribucion": "https://www.computrabajo.com/trabajo-de-carga-y-descarga",
  "personal-limpieza-gimnasio": "https://www.indeed.com/q-cleaning-staff-jobs.html",
  "portero-recepcion-torre-empresarial": "https://www.indeed.com/q-security-guard-jobs.html",
  "auxiliar-cocina-cafeteria-escolar": "https://www.indeed.com/q-kitchen-assistant-jobs.html",
  "cajero-multifuncional-minimarket": "https://www.computrabajo.com/trabajo-de-cajero",
  "asistente-habitaciones-apart-hotel": "https://www.linkedin.com/jobs/room-service-jobs",
  "picker-pedidos-turno-tarde": "https://www.computrabajo.com/trabajo-de-picker",
  "anfitrion-servicio-cliente-supermercado": "https://www.computrabajo.com/trabajo-de-atencion-al-cliente",
};

function formatDateByOffset(index: number) {
  const day = 9 - (index % 25);
  const safeDay = day <= 0 ? 1 : day;
  return `2026-03-${String(safeDay).padStart(2, "0")}`;
}

function makeLocation(city: string) {
  const countryMap: Record<string, string> = {
    Lima: "Peru",
    Bogota: "Colombia",
    Quito: "Ecuador",
    Santiago: "Chile",
    CDMX: "Mexico",
    "Buenos Aires": "Argentina",
  };

  return `${city}, ${countryMap[city] ?? "Latam"}`;
}

const categoryEnMap: Record<JobCategory, string> = {
  Logistica: "Logistics",
  Limpieza: "Cleaning",
  Hoteleria: "Hospitality",
  Comercio: "Retail",
  "Atencion al cliente": "Customer Support",
  Administracion: "Administration",
  Ventas: "Sales",
};

const employmentTypeEnMap: Record<EmploymentType, string> = {
  "Tiempo completo": "Full-time",
  "Medio tiempo": "Part-time",
  Remoto: "Remote",
  Hibrido: "Hybrid",
  Temporal: "Temporary",
};

const requirementsEnByCategory: Record<JobCategory, string[]> = {
  Limpieza: [
    "Previous cleaning experience in offices or homes (preferred)",
    "Basic knowledge of cleaning products and safety handling",
    "Strong organization, punctuality, and professional presentation",
  ],
  Logistica: [
    "Ability to perform moderate physical work",
    "Basic inventory, picking, or warehouse handling knowledge",
    "Availability for rotating schedules when required",
  ],
  Hoteleria: [
    "Customer-service mindset and professional attitude",
    "Availability for weekends and holiday shifts",
    "Teamwork and clear communication skills",
  ],
  Comercio: [
    "Friendly customer support and in-store assistance",
    "Basic cash register or restocking knowledge",
    "Reliable attendance and shift-end responsibility",
  ],
  "Atencion al cliente": [
    "Clear verbal communication skills",
    "Patience when handling questions and complaints",
    "Basic computer and typing proficiency",
  ],
  Administracion: [
    "Document handling and basic office organization",
    "Basic Excel and email management skills",
    "Professional communication with visitors and teams",
  ],
  Ventas: [
    "Goal-oriented sales mindset",
    "Strong interpersonal communication",
    "Retail floor sales experience (preferred)",
  ],
};

const benefitsEnByCategory: Record<JobCategory, string[]> = {
  Limpieza: ["Initial onboarding training", "Uniform and work materials", "On-time payments"],
  Logistica: ["Formal payroll onboarding", "Paid overtime", "Growth opportunities"],
  Hoteleria: ["Meal during shift", "Tips depending on role", "Organized schedules"],
  Comercio: ["Performance bonuses", "Store discounts", "Biweekly payment"],
  "Atencion al cliente": ["Continuous training", "Quality performance bonus", "Flexible model"],
  Administracion: ["Stable work schedule", "Legal insurance coverage", "Internal training"],
  Ventas: ["Sales commissions", "Target bonuses", "Career development path"],
};

function toEnglishTitle(title: string) {
  const replacements: Array<[RegExp, string]> = [
    [/^NECESITAMOS\s+/i, "WE ARE HIRING: "],
    [/^Se Solicita\s+/i, "Hiring: "],
    [/^SE SOLICITA\s+/i, "Hiring: "],
    [/^Solicitamos\s+/i, "We are hiring "],
    [/^Personal para\s+/i, "Staff for "],
    [/^Auxiliar de\s+/i, "Assistant for "],
    [/^Personal de limpieza\s+/i, "Cleaning staff "],
    [/^Asistente de\s+/i, "Assistant for "],
    [/\bde lunes a viernes\b/i, "Monday to Friday"],
    [/\bpart time\b/i, "Part-time"],
    [/\bfull time\b/i, "Full-time"],
    [/\bempleada domestica\b/i, "Domestic Worker"],
    [/\bencargado\(a\) de tienda\b/i, "Store Supervisor"],
    [/\bcamarera\b/i, "Waitress"],
    [/\blimpieza\b/i, "cleaning"],
    [/\boficinas\b/i, "offices"],
    [/\bhoteles\b/i, "hotels"],
    [/\balmacen\b/i, "warehouse"],
    [/\bcajero\(a\)\b/i, "Cashier"],
    [/\batencion al cliente\b/i, "customer support"],
    [/\bturno noche\b/i, "night shift"],
    [/\bcomedor empresarial\b/i, "corporate cafeteria"],
    [/\breponedor\(a\)\b/i, "Shelf Restocker"],
    [/\brecepcionista\b/i, "Receptionist"],
    [/\bsin experiencia\b/i, "no experience required"],
    [/\bcondominios\b/i, "residential buildings"],
    [/\bpicker preparador de pedidos\b/i, "Order Picker"],
    [/\blavanderia\b/i, "laundry"],
    [/\bvendedor\(a\) de piso\b/i, "Sales Floor Associate"],
    [/\bportero\b/i, "Doorman"],
    [/\bbodega\b/i, "warehouse"],
    [/\bhousekeeping\b/i, "Housekeeping"],
    [/\bembalaje\b/i, "packing"],
    [/\bcolegios\b/i, "schools"],
    [/\banfitrion\(a\)\b/i, "Customer Host"],
    [/\brecepcion\b/i, "front desk"],
    [/\bminimarket\b/i, "mini market"],
    [/\bayudante de cocina\b/i, "Kitchen Assistant"],
    [/\bmontacarga\b/i, "forklift"],
    [/\bcentro comercial\b/i, "shopping center"],
    [/\bhabitaciones\b/i, "rooms"],
    [/\bmanana\b/i, "morning"],
    [/\bdia\b/i, "day"],
  ];

  let output = title;
  for (const [pattern, replacement] of replacements) {
    output = output.replace(pattern, replacement);
  }

  return output;
}

function buildEnglishSummary(template: JobTemplate, company: string) {
  const category = categoryEnMap[template.category].toLowerCase();
  const type = employmentTypeEnMap[template.employmentType].toLowerCase();
  return `${toEnglishTitle(template.title)} role at ${company}, focused on ${category} operations with a ${type} schedule.`;
}

function wordsOf(text: string) {
  return text
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean);
}

function chunkByWords(text: string, wordsPerChunk = 85) {
  const words = wordsOf(text);
  const chunks: string[] = [];

  for (let index = 0; index < words.length; index += wordsPerChunk) {
    chunks.push(words.slice(index, index + wordsPerChunk).join(" "));
  }

  return chunks;
}

function toWordCount(text: string, target = 1200) {
  const words = wordsOf(text);
  if (words.length >= target) {
    return words.slice(0, target).join(" ");
  }

  const filler = wordsOf(
    "Este anuncio se actualiza regularmente para mantener informacion clara, transparente y util para personas que buscan empleo operativo en su ciudad con condiciones reales y procesos de postulacion verificables.",
  );

  while (words.length < target) {
    words.push(...filler);
  }

  return words.slice(0, target).join(" ");
}

function buildLongJobArticle(template: JobTemplate, company: string, location: string, sourceName: string) {
  const paragraphs = [
    `${template.title} es una vacante operativa publicada para ${location} en ${company}. Este articulo fue redactado para explicar con detalle las funciones reales del puesto, el ritmo de trabajo esperado, las condiciones de contratacion y la forma recomendada de postular. La intencion es que cualquier persona interesada pueda evaluar si cumple el perfil antes de enviar su candidatura, evitando perdida de tiempo y mejorando la calidad del proceso para ambas partes.`,
    `En terminos de contexto laboral, este tipo de empleo requiere compromiso con tareas repetitivas, cumplimiento estricto de horarios y capacidad para sostener una rutina constante. En la practica, se valora mucho la puntualidad, la actitud de servicio y la predisposicion para seguir instrucciones. Aunque no siempre se exige formacion tecnica avanzada, la empresa espera responsabilidad diaria y buena comunicacion con supervisores y companeros.`,
    `Las funciones principales se enfocan en ${template.category.toLowerCase()} y se desarrollan segun protocolos internos del establecimiento. Dependiendo del turno, el trabajador puede iniciar actividades de preparacion, ejecucion y cierre de jornada, verificando que el area quede en condiciones seguras y ordenadas. Este punto es clave porque las vacantes operativas suelen medirse por resultados concretos: tiempos de respuesta, calidad del servicio y nivel de cumplimiento.`,
    `Respecto al perfil ideal, la empresa busca personas con disponibilidad real para trabajar en equipo y con capacidad de adaptarse a imprevistos. En la mayoria de escenarios operativos, no todo sale igual cada dia: puede haber mayor carga de clientes, cambios de turno, ajustes de inventario o tareas extraordinarias. Por eso se recomienda postular solo si existe flexibilidad, orientacion al detalle y voluntad de aprender procesos nuevos con rapidez.`,
    `El entorno de trabajo normalmente combina actividad fisica moderada, interaccion con otros departamentos y seguimiento de normas de seguridad. En roles de limpieza, comercio, hoteleria o logistica, se espera que la persona cuide herramientas, insumos y espacios compartidos. Mantener una conducta profesional, respetar lineamientos y reportar incidencias de forma oportuna son practicas que mejoran el desempeno y aumentan posibilidades de continuidad laboral.`,
    `Sobre la jornada, esta vacante se publica como ${template.employmentType.toLowerCase()} con remuneracion referencial de ${template.salary}. Es importante confirmar durante entrevista la estructura exacta de pagos, descansos, posibles bonos y condiciones de horas extra segun normativa local. Tambien se recomienda preguntar por fecha estimada de ingreso, periodo de prueba y criterios de evaluacion, para tomar una decision informada y evitar malentendidos posteriores.`,
    `En procesos de seleccion operativa, los reclutadores revisan aspectos practicos: experiencia previa en tareas similares, orden al presentar informacion y claridad para explicar disponibilidad horaria. Una postulacion bien preparada incluye datos actualizados, antecedentes laborales verificables y una breve descripcion de habilidades utiles para el cargo. Este enfoque simple pero profesional suele marcar diferencia frente a candidaturas incompletas o poco precisas.`,
    `Tambien conviene preparar ejemplos concretos de situaciones resueltas en trabajos anteriores. Por ejemplo, manejo de picos de demanda, solucion de inconvenientes con clientes, cumplimiento de objetivos de limpieza o coordinacion eficiente con equipos de almacen. Mostrar evidencias de responsabilidad y continuidad ayuda a transmitir confianza. Incluso en puestos iniciales, la actitud proactiva y la disciplina son factores determinantes para avanzar en el proceso.`,
    `En esta convocatoria se sugiere revisar cuidadosamente requisitos y beneficios antes de confirmar interes. Muchas personas pasan por alto detalles importantes como tiempos de traslado, horario real de salida o funciones secundarias del puesto. Leer con atencion permite identificar si el empleo es sostenible en el mediano plazo. Esta evaluacion previa reduce rotacion temprana y aumenta la probabilidad de una experiencia laboral positiva.`,
    `Si decides postular, la recomendacion es hacerlo en horario habil y usando un correo activo para responder rapidamente. En vacantes operativas, los tiempos de contacto suelen ser cortos y los cupos se cierran con rapidez. Mantener disponibilidad para entrevista presencial o virtual puede acelerar significativamente el avance. Tambien es util tener documentos basicos listos para no retrasar etapas administrativas cuando llegue la confirmacion.`,
    `Desde una perspectiva de empleabilidad, trabajos como este pueden abrir camino a puestos de mayor responsabilidad. Quienes demuestran constancia, respeto por procedimientos y buen trato al cliente suelen acceder a mejores turnos o funciones de coordinacion. Aunque la posicion sea operativa, se convierte en una oportunidad real para construir historial laboral formal, fortalecer habilidades transferibles y mejorar ingresos con el tiempo.`,
    `Para mayor transparencia, este articulo incorpora fuente de referencia y fecha de actualizacion. No sustituye la validacion final con la empresa, pero ofrece una base clara para analizar el puesto. Antes de compartir datos sensibles, confirma siempre que el canal sea oficial y que no existan cobros indebidos por participar en el proceso. Una postulacion segura empieza por verificar informacion y conservar evidencia de cada comunicacion recibida.`,
    `Finalmente, ${template.title} en ${company} representa una opcion concreta para personas que buscan empleo operativo en ${location}. Si cumples con el perfil, tienes disponibilidad y valoras estabilidad, vale la pena iniciar el proceso de postulacion. Recuerda que la preparacion previa, la puntualidad y la comunicacion profesional son claves para destacar en este tipo de vacantes, incluso cuando hay alta competencia de candidatos.`,
    `Fuente de referencia utilizada en esta publicacion: ${sourceName}. La informacion de funciones, requisitos y contexto se presenta con enfoque practico para facilitar decisiones laborales responsables. Este contenido se actualiza periodicamente para mantener utilidad real para postulantes y para cumplir criterios de calidad editorial en publicaciones de empleo.`
  ];

  return toWordCount(paragraphs.join(" "), 1200);
}

function buildLongJobArticleEn(template: JobTemplate, titleEn: string, company: string, location: string, sourceName: string) {
  const category = categoryEnMap[template.category].toLowerCase();
  const employmentType = employmentTypeEnMap[template.employmentType].toLowerCase();

  const paragraphs = [
    `${titleEn} is an operational role currently available in ${location} at ${company}. This article explains the real day-to-day duties, expected pace, contract context, and recommended application steps so candidates can evaluate fit before applying.`,
    `In practical terms, this position requires consistency, punctuality, and the ability to follow clear procedures. While advanced technical education is not always required, reliability, communication, and daily responsibility are essential in operational environments.`,
    `Core tasks focus on ${category} activities under internal quality and safety standards. Depending on the shift, the employee may handle opening, execution, and closing responsibilities while ensuring that the work area remains organized and compliant.`,
    `The ideal profile is someone with real availability, teamwork mindset, and adaptability. Operational workloads can vary by day, and strong performance usually depends on attention to detail and readiness to solve routine issues quickly.`,
    `The work environment often combines moderate physical activity, coordination with other departments, and compliance with safety protocols. Proper handling of equipment, supplies, and shared spaces is critical for sustainable performance and team trust.`,
    `This opening is published as ${employmentType} with a reference pay level of ${template.salary}. During interviews, candidates should confirm payment structure, break policy, overtime conditions, onboarding date, and evaluation criteria.`,
    `Recruiters in operational hiring usually prioritize practical indicators: similar experience, clear schedule availability, and organized profile information. A complete and professional application can significantly improve interview conversion.`,
    `Candidates are encouraged to prepare real examples from previous work contexts, such as handling peak demand, resolving customer issues, or maintaining service quality under pressure. Evidence-based communication strengthens credibility.`,
    `Before applying, review requirements and benefits carefully. Important details such as commute time, effective shift end, and secondary responsibilities can define long-term sustainability and job satisfaction.`,
    `When you decide to apply, do it through active communication channels and respond quickly to follow-up messages. Operational vacancies often move fast and open seats can close in a short timeframe.`,
    `From a career perspective, roles like this can become a path toward team coordination and more stable compensation. Candidates who show consistency, good service attitude, and procedural discipline often gain better opportunities.`,
    `For transparency, this post includes a source reference and update date. This content does not replace direct validation with the employer, and candidates should avoid sharing sensitive data through unofficial channels.`,
    `Overall, ${titleEn} at ${company} is a concrete option for people seeking practical employment in ${location}. Preparation, punctuality, and professional communication are key differentiators in competitive processes.`,
    `Reference source used in this post: ${sourceName}. This content is regularly updated to provide practical value for applicants and to maintain editorial quality standards.`
  ];

  return toWordCount(paragraphs.join(" "), 1200);
}

function buildOperationalJobs(): Job[] {
  return templates.map((template, index) => {
    const idNumber = index + 1;
    const id = `job-${idNumber}`;
    const imageNumber = ((idNumber - 1) % 30) + 1;

    const city = cities[index % cities.length] ?? template.city;
    const location = makeLocation(city);
    const slug = template.slugBase;

    const source = sourceByCompany[template.company] ?? {
      name: "Fuente corporativa",
      url: "https://www.google.com/search?q=empleos+operativos",
    };

    const sourceUrl = sourceBySlugBase[template.slugBase] ?? source.url;
    const detailedDescription = buildLongJobArticle(template, template.company, location, source.name);
    const titleEn = toEnglishTitle(template.title);
    const summaryEn = buildEnglishSummary(template, template.company);
    const detailedDescriptionEn = buildLongJobArticleEn(template, titleEn, template.company, location, source.name);
    const chunks = chunkByWords(detailedDescription, 85);
    const chunksEn = chunkByWords(detailedDescriptionEn, 85);
    const intro = chunks[0] ?? template.summary;
    const introEn = chunksEn[0] ?? summaryEn;
    const mainResponsibilities = chunks.slice(1, 5);
    const mainResponsibilitiesEn = chunksEn.slice(1, 5);
    const workdayAndConditions = chunks.slice(5, 9);
    const workdayAndConditionsEn = chunksEn.slice(5, 9);
    const applicationRecommendations = chunks.slice(9, 13);
    const applicationRecommendationsEn = chunksEn.slice(9, 13);
    const keyTakeaways = chunks.slice(13, 15);
    const keyTakeawaysEn = chunksEn.slice(13, 15);

    return {
      id,
      slug,
      image: `/jobs/job-${imageNumber}.jpg`,
      title: template.title,
      titleEn,
      company: template.company,
      companyLogo: companyLogos[template.company] ?? "/companies/aurea.svg",
      location,
      city,
      category: template.category,
      categoryEn: categoryEnMap[template.category],
      employmentType: template.employmentType,
      employmentTypeEn: employmentTypeEnMap[template.employmentType],
      salary: template.salary,
      summary: template.summary,
      summaryEn,
      description: detailedDescription,
      descriptionEn: detailedDescriptionEn,
      intro,
      introEn,
      mainResponsibilities,
      mainResponsibilitiesEn,
      workdayAndConditions,
      workdayAndConditionsEn,
      applicationRecommendations,
      applicationRecommendationsEn,
      keyTakeaways,
      keyTakeawaysEn,
      requirements: categoryRequirements[template.category],
      requirementsEn: requirementsEnByCategory[template.category],
      benefits: categoryBenefits[template.category],
      benefitsEn: benefitsEnByCategory[template.category],
      sourceName: source.name,
      sourceUrl,
      updatedAt: formatDateByOffset(index),
      featured: idNumber <= 18,
      publishedAt: formatDateByOffset(index),
    };
  });
}

export const jobs: Job[] = buildOperationalJobs();
