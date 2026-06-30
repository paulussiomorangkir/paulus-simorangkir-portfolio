import type { EducationItem } from "@/types";

/** TODO(Paulus): isi `period` dengan tahun masuk-lulus yang sebenarnya. */
export const EDUCATION_ITEMS: readonly EducationItem[] = [
  {
    id: "imelda",
    institution: "Universitas Imelda Medan",
    credential: "Diploma 3, Komputer (A.Md.Kom)",
    period: "Periode studi",
    summary:
      "Memperdalam dasar ilmu komputer sambil membangun proyek nyata, termasuk Sistem Informasi Penggajian untuk Fakultas Kedokteran.",
  },
  {
    id: "smk",
    institution: "SMK Yayasan Perguruan Pelita Pematangsiantar",
    credential: "Lulusan SMK",
    period: "Periode studi",
    summary: "Mengawali ketertarikan pada teknologi dan menjadi titik awal perjalanan menuju dunia pengembangan web.",
  },
];
