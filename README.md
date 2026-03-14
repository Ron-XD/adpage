# JobPoint - Portal De Empleo (Next.js App Router)

Aplicacion web inspirada en un portal de convocatorias de empleo, construida con arquitectura moderna en Next.js y componentes reutilizables.

## Stack

- Next.js 16 (compatible con el requisito 14+)
- React 19
- App Router
- TailwindCSS v4
- TypeScript

## Funcionalidades

- Header con navegacion principal y accesos a registro/login
- Hero con buscador principal y filtros por puesto, ciudad, categoria y tipo de empleo
- Seccion de empleos destacados
- Listado de empleos con paginacion y filtros por query string
- Pagina de detalle por vacante en `jobs/[slug]`
- Secciones de empresas destacadas y categorias de empleo
- Footer con enlaces legales, contacto y redes
- Metadata SEO en home, listado, detalle y paginas secundarias
- Uso de `next/image` para logos de empresas y `next/link` para navegacion

## Estructura Principal

- `app/` paginas y layout (App Router)
- `components/` componentes de UI reutilizables
- `lib/` datos tipados y logica de filtrado/paginacion
- `styles/` tokens y utilidades CSS
- `public/` assets estaticos

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Configuracion De Entorno

1. Copia `.env.local.example` a `.env.local`.
2. Define tu dominio real en `NEXT_PUBLIC_SITE_URL`.
3. Actualiza datos de contacto y razon social legal.
4. Configura `public/ads.txt` con tu publisher ID real de AdSense.

## Checklist Pre-AdSense

- Dominio real y HTTPS activo.
- `robots.txt`, `sitemap.xml` y `ads.txt` publicados.
- Paginas legales y contacto completas.
- Vacantes con datos utiles (fuente, fecha de actualizacion, requisitos y beneficios).
- Sin contenido duplicado o vacio.

## Verificacion Realizada

- `npm run lint` sin errores
- `npm run build` compilacion correcta y rutas generadas
