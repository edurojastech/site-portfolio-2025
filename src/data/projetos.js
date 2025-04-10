import videoToms from "../assets/videos/toms.mp4"
import videoFinans from "../assets/videos/finans.mp4"
import onebitCodeForm from  "../assets/jobs/onebitcode-form.png"
import videoSysleilao from  "../assets/videos/sysleylao.mp4"

export const projetos = [
  {
    nome: "Site de Formulário",
    descricao: "Pagina Web de Formulário da OneBitCode",
    url: "https://onebitx-lp.netlify.app",
    gif: onebitCodeForm,
    video: false
  },

  {
    nome: "Finans",
    descricao: "Site de cadastro para app de finanças",
    url: "https://lp-financas.netlify.app",
    gif: videoFinans,
    video: true
  },

  {
    nome: "TOM's",
    descricao: "Site de instrumento musical",
    url: "https://jazz-school-lp.netlify.app",
    gif: videoToms,
    video: true
  },

  {
    nome: "Sysleilao",
    descricao: "Site de sistema de leilão rurais",
    url: "https://sysleilao.com.br",
    gif: videoSysleilao,
    video: true
  },
]