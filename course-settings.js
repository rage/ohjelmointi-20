const courseSettings = {
  language: "fi",
  name: "Ohjelmoinnin MOOC 2020",
  siteUrl: "https://ohjelmointi-20.mooc.fi",
  githubUrl: "https://github.com/rage/ohjelmointi-20",
  subtitle: "Ohjelmoinnin alkeet kaikille, ilmaiseksi",
  slug: "ohjelmoinnin-mooc-2020",
  tmcCourse: "2020-ohjelmointi",
  quizzesId: "a9251b4f-b3d2-4d0c-ab01-a143eb2834b5",
  tmcOrganization: "mooc",
  bannerPath: "banner.svg",
  studyRightEnabled: true,
  sidebarEntries: [
    {
      title: "Tietoa kurssista",
      path: "/",
    },
    {
      title: "Arvostelu ja kokeet",
      path: "/arvostelu-ja-kokeet",
    },
    {
      title: "Mahdollisuus opinto-oikeuteen",
      path: "/opinto-oikeus",
    },
    { title: "Tukiväylät", path: "/tukivaylat" },
    {
      title: "Opettajille ja opinto-ohjaajille",
      path: "/opettajille",
    },
    {
      title: "Usein kysytyt kysymykset",
      path: "/usein-kysytyt-kysymykset",
    },
    { separator: true, title: "Ohjelmoinnin perusteet" },
  ],
  sidebarFuturePages: [
    { title: "Osa 11", tba: "22.3.2020" },
    { title: "Osa 12", tba: "29.3.2020" },
    { title: "Osa 13", tba: "12.4.2020" },
    { title: "Osa 14", tba: "19.4.2020" },
  ], // { title: "Osa 14", tba: "19.4.2019" },
  splitCourses: true,
}

module.exports = courseSettings
