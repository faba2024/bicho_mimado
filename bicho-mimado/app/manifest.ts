import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bicho Mimado | Pet Shop VCA",
    short_name: "Bicho Mimado",
    description: "Pet shop em Vitória da Conquista - BA. Rações, medicamentos, acessórios e delivery.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fc",
    theme_color: "#0879b6",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  };
}
