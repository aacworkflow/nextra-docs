export default {
  docsRepositoryBase: 'https://github.com/AAChibilyaev/nextra-docs',
  logo: <span>Документация</span>,
  project: {
    link: 'https://github.com/AAChibilyaev/nextra-docs'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Документация'
    }
  }
}