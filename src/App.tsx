import React, { useState } from 'react';
import { Shield, BookOpen, Award, Users, CheckCircle, Phone, Mail, MapPin, Menu, X, ArrowRight, Star, Clock, FileText, ChevronRight, PlayCircle, Lock, UserCheck, HelpCircle } from 'lucide-react';
import emblemImg from './assets/uploads/1792450273631-0-Emblema-Dourado-da-Oliveira-Concursos.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '', phone: '', course: '' });
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const courses = [
    {
      id: 'tribunais',
      title: 'Analista e Técnico de Tribunais',
      category: 'Tribunais',
      hours: '380h',
      rating: 4.9,
      students: '1.450+',
      description: 'Preparação completa focada em editais do TJ, TRF, TRT e MPU. Conteúdo atualizado e simulados semanais.',
      price: 'R$ 897,00'
    },
    {
      id: 'policial',
      title: 'Carreiras Policiais (PF, PRF, PC)',
      category: 'Policial',
      hours: '450h',
      rating: 5.0,
      students: '2.890+',
      description: 'Treinamento de alto nível para carreiras policiais com foco em direito penal, processual e legislação extravagante.',
      price: 'R$ 997,00'
    },
    {
      id: 'fiscal',
      title: 'Área Fiscal e Controle',
      category: 'Fiscal',
      hours: '520h',
      rating: 4.8,
      students: '920+',
      description: 'Dominando contabilidade geral, custos, auditoria e discursivas para os concursos mais concorridos do país.',
      price: 'R$ 1.297,00'
    },
    {
      id: 'municipal',
      title: 'Prefeituras e Câmaras Municipais',
      category: 'Municipal',
      hours: '220h',
      rating: 4.9,
      students: '3.100+',
      description: 'Foco nas bancas mais tradicionais de concursos municipais: português, informática, RLM e leis orgânicas.',
      price: 'R$ 497,00'
    }
  ];

  const testimonials = [
    {
      name: 'Mariana Costa',
      approvedIn: 'Analista Judiciário - TJSP',
      text: 'A metodologia da Oliveira Concursos fez toda a diferença na minha aprovação. O suporte dos professores e os simulados foram fundamentais!',
      rating: 5
    },
    {
      name: 'Carlos Eduardo',
      approvedIn: 'Policial Rodoviário Federal',
      text: 'Estudava trabalhando e o formato flexível das aulas com material em PDF direcionado salvou meu tempo. Sou PRF graças a essa equipe!',
      rating: 5
    },
    {
      name: 'Juliana Mendes',
      approvedIn: 'Auditor Fiscal - Receita Federal',
      text: 'Simplesmente o melhor curso preparatório do mercado. A profundidade das aulas de contabilidade e direito tributário é incomparável.',
      rating: 5
    }
  ];

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollSuccess(true);
    setTimeout(() => {
      setEnrollSuccess(false);
      setModalOpen(false);
      setEnrollForm({ name: '', email: '', phone: '', course: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Top Banner / Announcement */}
      <div className="bg-amber-500 text-slate-950 px-4 py-2 text-center text-sm font-semibold tracking-wide">
        🚀 Matrículas Abertas para as Novas Turmas 2025! Garanta seu Desconto de Lançamento.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1 transition-all">
            <img src={emblemImg} alt="Emblema Oliveira Concursos" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(217,119,6,0.5)]" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-amber-400">OLIVEIRA</span>
              <span className="text-xs uppercase tracking-widest text-slate-300">Concursos</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#cursos" className="text-slate-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1">Cursos</a>
            <a href="#diferenciais" className="text-slate-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1">Diferenciais</a>
            <a href="#depoimentos" className="text-slate-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1">Aprovados</a>
            <a href="#contato" className="text-slate-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1">Contato</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => { setSelectedCourse('Geral'); setModalOpen(true); }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Área do Aluno / Matrícula
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-amber-400 hover:bg-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-3">
            <a 
              href="#cursos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-amber-400 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2"
            >
              Cursos
            </a>
            <a 
              href="#diferenciais" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-amber-400 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2"
            >
              Diferenciais
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-amber-400 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2"
            >
              Aprovados
            </a>
            <a 
              href="#contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-amber-400 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-2"
            >
              Contato
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }}
              className="w-full text-center bg-amber-500 text-slate-950 font-bold py-3 rounded-lg shadow-md mt-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              Área do Aluno / Matrícula
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold">
                <Shield className="w-4 h-4" /> Referência Nacional em Preparatórios
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                SUA APROVAÇÃO <span className="text-amber-400 underline decoration-amber-500/40">COMEÇA AQUI</span>
              </h1>
              <p className="text-slate-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
                Método validado com milhares de aprovados em concursos públicos de todo o Brasil. Corpo docente especializado e material direcionado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  Garantir Minha Vaga <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="#cursos"
                  className="border border-slate-700 hover:border-amber-500/50 hover:bg-slate-900 text-slate-200 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  Conhecer Cursos
                </a>
              </div>
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">+10 mil</p>
                  <p className="text-xs text-slate-400">Alunos Aprovados</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">98%</p>
                  <p className="text-xs text-slate-400">Índice de Satisfação</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">15+ anos</p>
                  <p className="text-xs text-slate-400">De Tradição</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-amber-500/20 via-slate-900 to-amber-900/20 rounded-3xl p-8 border border-amber-500/30 shadow-2xl flex flex-col items-center justify-center text-center">
                <div className="absolute -top-4 -right-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  🔥 2025 Atualizado
                </div>
                <img src={emblemImg} alt="Emblema Dourado" className="w-48 h-48 sm:w-60 sm:h-60 object-contain drop-shadow-[0_0_25px_rgba(217,119,6,0.6)] animate-pulse" style={{ animationDuration: '4s' }} />
                <h3 className="text-xl font-bold text-white mt-4">Oliveira Concursos</h3>
                <p className="text-sm text-amber-300 mt-1">Ensino de Elite para Altos Cargos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-400 font-semibold uppercase tracking-wider text-sm">Por que nos escolher?</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Diferenciais que garantem a sua aprovação</p>
            <p className="text-slate-400 mt-3">Desenvolvemos um ecossistema completo para que você estude com foco e eficiência máxima.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Material Direcionado</h3>
              <p className="text-slate-400 text-sm">Apostilas em PDF e videoaulas focadas exatamente no que as bancas examinadoras mais cobram.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professores Especialistas</h3>
              <p className="text-slate-400 text-sm">Mestres, doutores e servidores públicos de carreira com vasta experiência em concursos.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Simulados Comentados</h3>
              <p className="text-slate-400 text-sm">Simulados periódicos com ranking, estatísticas de desempenho e correção detalhada questão por questão.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Metodologia Comprovada</h3>
              <p className="text-slate-400 text-sm">Cronogramas de estudo inteligentes e técnicas de memorização para acelerar sua curva de aprendizado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-amber-400 font-semibold uppercase tracking-wider text-sm">Nossos Cursos</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Preparatórios de Alto Desempenho</p>
            </div>
            <p className="text-slate-400 max-w-md mt-4 md:mt-0">
              Escolha a sua área de atuação e tenha acesso imediato a todo o conteúdo gravado e atualizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/60 transition-all duration-300 shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full">
                      {course.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-4 h-4 fill-amber-400" /> {course.rating}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-slate-400 text-sm mb-6">{course.description}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-300 border-t border-slate-800 pt-4">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-400" /> {course.hours}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4 text-amber-400" /> {course.students} alunos</span>
                  </div>
                </div>
                <div className="p-6 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Investimento</span>
                    <span className="text-lg font-black text-amber-400">{course.price}</span>
                  </div>
                  <button 
                    onClick={() => { setSelectedCourse(course.title); setModalOpen(true); }}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    Matricule-se
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-400 font-semibold uppercase tracking-wider text-sm">Histórias de Sucesso</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Quem estudou com a Oliveira Concursos recomenda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                </div>
                <div className="border-t border-slate-800 pt-4">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">{t.approvedIn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato & Rodapé */}
      <footer id="contato" className="bg-slate-950 border-t border-slate-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={emblemImg} alt="Emblema Oliveira Concursos" className="w-10 h-10 object-contain" />
                <span className="text-lg font-black tracking-wider text-amber-400">OLIVEIRA CONCURSOS</span>
              </div>
              <p className="text-slate-400 text-sm">
                Transformando vidas e sonhos em realidade através da educação de excelência para concursos públicos.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#cursos" className="hover:text-amber-400 transition-colors">Nossos Cursos</a></li>
                <li><a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais</a></li>
                <li><a href="#depoimentos" className="hover:text-amber-400 transition-colors">Aprovados</a></li>
                <li><button onClick={() => setModalOpen(true)} className="hover:text-amber-400 transition-colors text-left">Área do Aluno</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Cursos em Destaque</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><span className="hover:text-amber-400">Tribunais e MPU</span></li>
                <li><span className="hover:text-amber-400">Carreiras Policiais</span></li>
                <li><span className="hover:text-amber-400">Área Fiscal e Controle</span></li>
                <li><span className="hover:text-amber-400">Prefeituras Municipais</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contato & Suporte</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>(11) 99888-7766</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>contato@oliveiraconcursos.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Oliveira Concursos. Todos os direitos reservados.</p>
            <p className="mt-2 sm:mt-0">Sua Aprovação Começa Aqui.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Matrícula / Área do Aluno com Acessibilidade (Labels e Foco Visível) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <img src={emblemImg} alt="Emblema" className="w-12 h-12 object-contain mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-white">Matrícula / Inscrição</h3>
              <p className="text-sm text-slate-400 mt-1">
                {selectedCourse ? `Curso: ${selectedCourse}` : 'Preencha seus dados para iniciar'}
              </p>
            </div>

            {enrollSuccess ? (
              <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 p-6 rounded-xl text-center space-y-2">
                <CheckCircle className="w-12 h-12 text-amber-400 mx-auto" />
                <h4 className="font-bold text-lg">Inscrição realizada com sucesso!</h4>
                <p className="text-sm text-slate-300">Nossa equipe entrará em contato via WhatsApp com os dados de acesso ao portal.</p>
              </div>
            ) : (
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1">
                    Nome Completo
                  </label>
                  <input 
                    id="fullName"
                    type="text"
                    required
                    value={enrollForm.name}
                    onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                    placeholder="Digite seu nome completo"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-slate-300 mb-1">
                    E-mail
                  </label>
                  <input 
                    id="emailAddress"
                    type="email"
                    required
                    value={enrollForm.email}
                    onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-300 mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input 
                    id="phoneNumber"
                    type="tel"
                    required
                    value={enrollForm.phone}
                    onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label htmlFor="courseSelect" className="block text-sm font-medium text-slate-300 mb-1">
                    Curso Desejado
                  </label>
                  <select
                    id="courseSelect"
                    value={enrollForm.course}
                    onChange={(e) => setEnrollForm({ ...enrollForm, course: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Selecione o curso</option>
                    <option value="Tribunais">Analista e Técnico de Tribunais</option>
                    <option value="Policial">Carreiras Policiais</option>
                    <option value="Fiscal">Área Fiscal e Controle</option>
                    <option value="Municipal">Prefeituras Municipais</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 rounded-lg shadow-lg shadow-amber-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 mt-2"
                >
                  Confirmar Inscrição
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
