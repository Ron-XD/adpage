export type EmploymentType = "Tiempo completo" | "Medio tiempo" | "Remoto" | "Hibrido" | "Temporal";

export type JobCategory =
  | "Logistica"
  | "Limpieza"
  | "Hoteleria"
  | "Comercio"
  | "Atencion al cliente"
  | "Administracion"
  | "Ventas";

export interface Job {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  image: string;
  company: string;
  companyLogo: string;
  location: string;
  city: string;
  category: JobCategory;
  categoryEn: string;
  employmentType: EmploymentType;
  employmentTypeEn: string;
  salary?: string;
  summary: string;
  summaryEn: string;
  description: string;
  descriptionEn: string;
  intro: string;
  introEn: string;
  mainResponsibilities: string[];
  mainResponsibilitiesEn: string[];
  workdayAndConditions: string[];
  workdayAndConditionsEn: string[];
  applicationRecommendations: string[];
  applicationRecommendationsEn: string[];
  keyTakeaways: string[];
  keyTakeawaysEn: string[];
  requirements: string[];
  requirementsEn: string[];
  benefits: string[];
  benefitsEn: string[];
  sourceName: string;
  sourceUrl: string;
  updatedAt: string;
  featured: boolean;
  publishedAt: string;
}

export interface Company {
  name: string;
  logo: string;
  openRoles: number;
  industry: string;
}

export interface JobFilters {
  query?: string;
  city?: string;
  category?: string;
  type?: string;
  subcategory?: string;
  page?: string;
}
