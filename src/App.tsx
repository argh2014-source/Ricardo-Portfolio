import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)

        // Intersection Observer for scroll reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <header className={`fixed top-0 z-50 w-full transition-all duration-300 px-6 lg:px-20 py-4 ${isScrolled ? 'bg-background-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-xl">landscape</span>
                            </div>
                            <h2 className="text-slate-100 text-xl font-bold tracking-tight">Ricardo AVLESSI</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-10">
                            <a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#accueil">Accueil</a>
                            <a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#expertise">Expertise</a>
                            <a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#parcours">Parcours</a>
                            <a className="text-slate-400 hover:text-white text-sm font-medium transition-colors" href="#competences">Compétences</a>
                            <button className="bg-primary hover:bg-primary/80 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all border border-white/10">
                                Me contacter
                            </button>
                        </nav>
                    </div>
                </header>
                <main className="flex-1 pt-24">
                    <section className="px-6 lg:px-20 py-16 lg:py-32 max-w-7xl mx-auto reveal" id="accueil">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                                    </span>
                                    <span className="text-xs font-semibold text-sky-400 tracking-wider uppercase">Disponible pour consultation</span>
                                </div>
                                <h1 className="text-slate-100 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    Ricardo AVLESSI
                                </h1>
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-xl lg:text-2xl font-bold leading-relaxed max-w-3xl mt-4">
                                    Expert en développement rural, gestion de projets et suivi-évaluation, gouvernance participative et innovation digitale au service d’un impact durable.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a className="flex items-center justify-center bg-primary text-white font-bold py-4 px-8 rounded-xl hover:scale-[1.02] transition-transform" href="#contact">
                                        Me contacter
                                    </a>
                                    <a className="flex items-center justify-center bg-white/5 text-slate-200 border border-white/10 font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors" href="#expertise">
                                        Voir mon expertise
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-2 border-white/5 shadow-2xl">
                                    <img alt="Portrait professionnel de Ricardo AVLESSI" className="w-full h-full object-cover" data-alt="Professional portrait of a male expert in field attire" src="/profile.jpg" />
                                </div>

                            </div>
                        </div><div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/5">
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <span className="text-4xl lg:text-5xl font-black text-white">10+</span>
                                <span className="text-slate-400 uppercase tracking-widest text-sm font-bold">Années d'expérience</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <span className="text-4xl lg:text-5xl font-black text-emerald-400">5000+</span>
                                <span className="text-slate-400 uppercase tracking-widest text-sm font-bold">Personnes formées</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start gap-2">
                                <span className="text-4xl lg:text-5xl font-black text-blue-400">50+</span>
                                <span className="text-slate-400 uppercase tracking-widest text-sm font-bold">Projets impactés</span>
                            </div>
                        </div>
                    </section>
                    <section className="px-6 lg:px-20 py-24 bg-primary/10 reveal" id="expertise">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col gap-4 mb-16">
                                <h2 className="text-slate-100 text-3xl lg:text-4xl font-bold tracking-tight">Piliers d'Expertise</h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                <div className="glass-card p-8 rounded-2xl group hover:bg-primary/40 transition-all duration-300">
                                    <span className="material-symbols-outlined text-sky-400 text-4xl mb-6 block group-hover:scale-110 transition-transform">developer_mode</span>
                                    <h3 className="text-slate-100 font-bold text-lg mb-2 leading-snug">Innovation &amp; Solutions numériques et digitales</h3>
                                    <p className="text-slate-400 text-sm">Transformation digitale au service du développement</p>
                                </div>
                                <div className="glass-card p-8 rounded-2xl group hover:bg-primary/40 transition-all duration-300">
                                    <span className="material-symbols-outlined text-purple-400 text-4xl mb-6 block group-hover:scale-110 transition-transform">analytics</span>
                                    <h3 className="text-slate-100 font-bold text-lg mb-2 leading-snug">Gestion de projet &amp; Suivi-évaluation</h3>
                                    <p className="text-slate-400 text-sm">Efficacité opérationnelle et mesure d'impact.</p>
                                </div>
                                <div className="glass-card p-8 rounded-2xl group hover:bg-primary/40 transition-all duration-300">
                                    <span className="material-symbols-outlined text-blue-400 text-4xl mb-6 block group-hover:scale-110 transition-transform">diversity_3</span>
                                    <h3 className="text-slate-100 font-bold text-lg mb-2 leading-snug">Genre &amp; Inclusion économique</h3>
                                    <p className="text-slate-400 text-sm">Empowerment et égalité des chances pour tous.</p>
                                </div>
                                <div className="glass-card p-8 rounded-2xl group hover:bg-primary/40 transition-all duration-300">
                                    <span className="material-symbols-outlined text-emerald-400 text-4xl mb-6 block group-hover:scale-110 transition-transform">account_balance</span>
                                    <h3 className="text-slate-100 font-bold text-lg mb-2 leading-snug">Cohésion sociale &amp; Gouvernance</h3>
                                    <p className="text-slate-400 text-sm">Gouvernance locale participative et transparente.</p>
                                </div>
                                <div className="glass-card p-8 rounded-2xl group hover:bg-primary/40 transition-all duration-300">
                                    <span className="material-symbols-outlined text-amber-400 text-4xl mb-6 block group-hover:scale-110 transition-transform">handshake</span>
                                    <h3 className="text-slate-100 font-bold text-lg mb-2 leading-snug">Gestion des conflits &amp; Résilience</h3>
                                    <p className="text-slate-400 text-sm">Paix durable et renforcement communautaire.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-6 lg:px-20 py-24 max-w-7xl mx-auto reveal" id="a-propos">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <div className="space-y-8">
                                <h2 className="text-slate-100 text-4xl font-bold tracking-tight">À Propos</h2>
                                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                    <p>
                                        En tant qu'Agroéconomiste et agrosociologue, j'ai dédié ma carrière à la transformation positive des zones rurales. Mon approche combine rigueur analytique et sensibilité sociale pour répondre aux défis complexes du développement.
                                    </p>
                                    <div className="p-6 border-l-4 border-primary bg-primary/10 rounded-r-xl">
                                        <h4 className="text-slate-100 font-bold mb-2">Ma Vision</h4>
                                        <p className="italic text-slate-300">"Contribuer à un développement équitable, durable et innovant où chaque membre de la communauté devient acteur de son propre progrès."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 bg-white/5 rounded-2xl border border-white/5">
                                    <h4 className="text-slate-100 font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-blue-400">verified_user</span> Valeurs
                                    </h4>
                                    <ul className="space-y-3 text-slate-400 text-sm">
                                        <li className="flex items-center gap-2"><span className="size-1 bg-blue-400 rounded-full"></span> Inclusion &amp; Équité</li>
                                        <li className="flex items-center gap-2"><span className="size-1 bg-blue-400 rounded-full"></span> Participation</li>
                                        <li className="flex items-center gap-2"><span className="size-1 bg-blue-400 rounded-full"></span> Innovation</li>
                                        <li className="flex items-center gap-2"><span className="size-1 bg-blue-400 rounded-full"></span> Responsabilité</li>
                                        <li className="flex items-center gap-2"><span className="size-1 bg-blue-400 rounded-full"></span> Impact durable</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-white/5 rounded-2xl border border-white/5">
                                    <h4 className="text-slate-100 font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-emerald-400">school</span> Formation
                                    </h4>
                                    <ul className="space-y-4 text-slate-400 text-xs">
                                        <li>
                                            <p className="font-bold text-slate-200">Master Professionnel</p>
                                            <p>Université de Parakou</p>
                                        </li>
                                        <li>
                                            <p className="font-bold text-slate-200">Licence en Agronomie</p>
                                            <p>Université de Parakou</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-6 lg:px-20 py-24 bg-white/[0.02] reveal" id="parcours">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-slate-100 text-4xl font-bold tracking-tight mb-4">Parcours Professionnel</h2>
                                <p className="text-slate-400">Une trajectoire dédiée au service du développement international</p>
                            </div>
                            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-indigo-500/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Responsable de projet & coordination stratégique</div>
                                            <time className="text-xs font-medium text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded sm:text-right">ITA INNOVATE</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Élaboration de sites web, portfolios numériques et solutions SaaS pour les projets et initiatives de l’organisation</li>
                                            <li>Analyse des besoins, cadrage des projets et définition des objectifs opérationnels</li>
                                            <li>Élaboration des documents de planification, feuilles de route, work plans et outils de pilotage</li>
                                            <li>Appui à la conception de la vision stratégique des projets et modélisation des idées</li>
                                            <li>Alignement des initiatives avec la vision globale et les orientations stratégiques d’ITA</li>
                                            <li>Organisation et coordination des parties prenantes internes et externes</li>
                                            <li>Suivi des livrables, des performances et des indicateurs d’avancement</li>
                                            <li>Mise en place de mécanismes de communication projet, reporting et documentation</li>
                                            <li>Préparation et conduite de réunions de travail, ateliers et sessions de cadrage</li>
                                            <li>Veille méthodologique et appui stratégique à la prise de décision</li>
                                            <li>Modération professionnelle de formations en ligne, webinaires et sessions techniques</li>
                                            <li>Facilitation des échanges et valorisation des contributions des experts</li>
                                            <li>Gestion du rythme d’animation et maintien de l’engagement des participants</li>
                                            <li>Production de synthèses intermédiaires et formulation de recommandations</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">work</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-emerald-500/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Facilitateur technique</div>
                                            <time className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded sm:text-right">Projet COSO — Banque Mondiale</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Rédaction des Dossiers d’Appel à Concurrence (DAO) / dossiers d’appel d’offres locaux</li>
                                            <li>Suivi de la réalisation des infrastructures communautaires conformément aux dossiers techniques</li>
                                            <li>Contrôle de conformité des travaux aux normes et plans techniques</li>
                                            <li>Intégration de l’approche genre (GTA) et inclusion économique</li>
                                            <li>Animation de cadres de concertation communautaires</li>
                                            <li>Médiation des conflits fonciers et agropastoraux</li>
                                            <li>Formation des comités locaux et OSC</li>
                                            <li>Accompagnement d’initiatives économiques inclusives</li>
                                            <li>Suivi-évaluation sensible au genre et reporting</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">trending_up</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-blue-500/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Superviseur départemental</div>
                                            <time className="text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded sm:text-right">Projet SWEDD — MASM / BM</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Coordination et supervision des activités terrain</li>
                                            <li>Élaboration de stratégies d’autonomisation des adolescentes et jeunes filles</li>
                                            <li>Animation d’espaces sûrs et programmes de leadership</li>
                                            <li>Sensibilisation et prévention des VBG</li>
                                            <li>Formation des mentores et comités de veille</li>
                                            <li>Mise en place de groupes d’épargne et initiatives économiques</li>
                                            <li>Suivi-évaluation et capitalisation des résultats</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">groups</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-sky-500/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Facilitateur communautaire</div>
                                            <time className="text-xs font-medium text-sky-500 bg-sky-500/10 px-2 py-0.5 rounded sm:text-right">Projet ATPC — UNICEF / GABF</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Mobilisation communautaire WASH</li>
                                            <li>Sensibilisation à l’hygiène et à l’assainissement</li>
                                            <li>Communication pour le changement social et comportemental</li>
                                            <li>Intégration du genre et prévention des VBG</li>
                                            <li>Appui technique aux ménages pour la construction de latrines</li>
                                            <li>Suivi de l’engagement communautaire</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">biotech</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-amber-500/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Assistant technique en DO</div>
                                            <time className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded sm:text-right">PASDeR3 — Swisscontact / DDC</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Renforcement institutionnel des coopératives agricoles</li>
                                            <li>Appui à l’entrepreneuriat agricole et aux chaînes de valeur</li>
                                            <li>Autonomisation économique des femmes productrices</li>
                                            <li>Planification participative avec acteurs locaux</li>
                                            <li>Médiation des conflits agriculteurs-éleveurs</li>
                                            <li>Formation des acteurs sur la gestion et la gouvernance</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">school</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-purple-500/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Stagiaire professionnel</div>
                                            <time className="text-xs font-medium text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded sm:text-right">Projet Commune du Millénaire — PNUD</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Renforcement organisationnel des coopératives locales</li>
                                            <li>Promotion de la cohésion sociale communautaire</li>
                                            <li>Médiation et gestion des conflits entre acteurs</li>
                                            <li>Autonomisation des coopératives féminines</li>
                                            <li>Mobilisation communautaire et planification participative</li>
                                            <li>Rédaction de rapports et suivi des activités</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">science</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-slate-400/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Stagiaire chercheur</div>
                                            <time className="text-xs font-medium text-slate-400 bg-slate-400/10 px-2 py-0.5 rounded sm:text-right">LRIDA — Université de Parakou</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Collecte et analyse de données socio-économiques</li>
                                            <li>Recherche sur genre et dynamiques collectives</li>
                                            <li>Utilisation d’outils d’analyse et de modélisation sociale</li>
                                            <li>Animation d’ateliers communautaires</li>
                                            <li>Rédaction de rapports et contrôle qualité des données</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-background-dark text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <span className="material-symbols-outlined text-sm">energy_savings_leaf</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-green-500/30 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                            <div className="font-bold text-slate-100">Stagiaire</div>
                                            <time className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded sm:text-right">Projet ProAgri4 — GIZ</time>
                                        </div>
                                        <ul className="text-slate-400 text-sm space-y-1.5 list-disc list-inside">
                                            <li>Diagnostic des systèmes de commercialisation agricole</li>
                                            <li>Structuration des groupes de producteurs</li>
                                            <li>Intégration du genre dans les filières</li>
                                            <li>Appui à la vente groupée d’anacarde</li>
                                            <li>Production de rapports techniques</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-6 lg:px-20 py-24 bg-primary/5 reveal" id="portfolio">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col gap-4 mb-16 text-center">
                                <h2 className="text-slate-100 text-3xl lg:text-4xl font-bold tracking-tight">Portfolio de Projets</h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto"></div>
                                <p className="text-slate-400 mt-4">Découvrez mes interventions marquantes en milieu rural et solutions digitales.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Item 1 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-slate-800 overflow-hidden">
                                        <img src="/projet-1.jpg" alt="ITA NEXTGEN ACADEMY" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Formation</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">ITA NEXTGEN ACADEMY, Photo 1ère Cohorte de formation</h4>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-slate-800 overflow-hidden">
                                        <img src="/projet-2.jpg" alt="Formation Clinique Finalo" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Déploiement</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">Formation des agents de la Clinique Finalo sur LogiClinic</h4>
                                    </div>
                                </div>
                                {/* Item 3 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-white overflow-hidden flex items-center justify-center">
                                        <img src="/projet-3.png" alt="ITA NextGen Academy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Digital</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">ITA NextGen Academy</h4>
                                    </div>
                                </div>
                                {/* Item 4 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-slate-800 overflow-hidden">
                                        <img src="/projet-4.jpg" alt="Ricardo travaillant à ITA" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Action terrain</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">Intervention sur site - ITA Innovate</h4>
                                    </div>
                                </div>
                                {/* Item 5 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-white flex items-center justify-center p-8">
                                        <img src="/projet-5.png" alt="Planova SaaS" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">SaaS</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">Planova - Gestion de Tâches</h4>
                                    </div>
                                </div>
                                {/* Item 6 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-white flex items-center justify-center p-8">
                                        <img src="/projet-6.jpg" alt="ITA INNOVATE" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Entreprise</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">ITA INNOVATE</h4>
                                    </div>
                                </div>
                                {/* Item 7 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-white flex items-center justify-center p-8">
                                        <img src="/projet-7.png" alt="PEM SMART" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Logiciel</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">PEM SMART - Gestion Agricole</h4>
                                    </div>
                                </div>
                                {/* Item 8 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-slate-800 overflow-hidden">
                                        <img src="/projet-8.jpg" alt="Campagne End Polio 2025 - ROTARY" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Santé Publique</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">ROTARY - Campagne End Polio 2025</h4>
                                    </div>
                                </div>
                                {/* Item 9 */}
                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-video">
                                    <div className="w-full h-full bg-slate-800 overflow-hidden">
                                        <img src="/projet-9.jpg" alt="Remise d'attestation SWEDD" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                                    <div className="absolute bottom-0 p-6 w-full z-10">
                                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Inclusion</span>
                                        <h4 className="text-white font-bold text-lg leading-tight mt-1">Projet SWEDD - Remise d'attestation aux mentores</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-6 lg:px-20 py-24 bg-white/[0.01] reveal" id="certifications">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-slate-100 text-3xl font-bold mb-12 flex items-center gap-3">
                                <span className="material-symbols-outlined text-amber-400">workspace_premium</span>
                                Certifications &amp; Attestations
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-indigo-400">code</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Développement Web & Vibe Coding</h4>
                                        <p className="text-slate-500 text-xs">Conception de solutions digitales, applications web et plateformes SaaS</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-rose-400">monitoring</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Gestion de projets & Suivi-Évaluation (M&E)</h4>
                                        <p className="text-slate-500 text-xs">Planification, pilotage de projets, suivi des résultats et évaluation d’impact</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-blue-400">verified</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Certification GTA</h4>
                                        <p className="text-slate-500 text-xs">Gestion de Territoire Appliquée / Approche Transformationnelle du Genre</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-emerald-400">shield_person</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Prévention des VBG</h4>
                                        <p className="text-slate-500 text-xs">Protection & Inclusion Sociale</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-amber-400">leaderboard</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Spécialiste M&E</h4>
                                        <p className="text-slate-500 text-xs">Suivi et Évaluation d’Impact</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-sky-400">hub</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Gouvernance Locale</h4>
                                        <p className="text-slate-500 text-xs">Décentralisation & Participation</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-orange-400">search_insights</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Analyse Communautaire VCA</h4>
                                        <p className="text-slate-500 text-xs">Vulnérabilité & Capacité d’Adaptation</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-teal-400">handshake</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Cohésion Sociale & Médiation</h4>
                                        <p className="text-slate-500 text-xs">Prévention et gestion des conflits</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-pink-400">currency_exchange</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Autonomisation Économique</h4>
                                        <p className="text-slate-500 text-xs">Inclusion des femmes et des jeunes</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-violet-400">record_voice_over</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Communication pour le Changement</h4>
                                        <p className="text-slate-500 text-xs">Mobilisation communautaire & comportementale</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-cyan-400">water_drop</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Approche ATPC / WASH</h4>
                                        <p className="text-slate-500 text-xs">Assainissement total piloté par la communauté</p>
                                    </div>
                                </div>
                                <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
                                    <span className="material-symbols-outlined text-fuchsia-400">diversity_3</span>
                                    <div>
                                        <h4 className="text-slate-100 font-bold text-sm">Genre & Inclusion</h4>
                                        <p className="text-slate-500 text-xs">Intégration du genre dans les projets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-6 lg:px-20 py-24 max-w-7xl mx-auto reveal" id="competences">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="flex flex-col h-full">
                                <h2 className="text-slate-100 text-3xl font-bold mb-10 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-400">psychology</span>
                                    Compétences Techniques
                                </h2>
                                <div className="flex flex-col justify-between grow space-y-4">
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Conception de solutions web & SaaS</span>
                                            <span className="text-slate-500">80%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-indigo-500 h-full w-[80%] group-hover:bg-indigo-400 transition-all"></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Analyse communautaire & diagnostic</span>
                                            <span className="text-slate-500">95%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-blue-500 h-full w-[95%] group-hover:bg-blue-400 transition-all"></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Gouvernance locale & participation</span>
                                            <span className="text-slate-500">92%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-emerald-500 h-full w-[92%] group-hover:bg-emerald-400 transition-all"></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Gestion de projet</span>
                                            <span className="text-slate-500">90%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-amber-500 h-full w-[90%] group-hover:bg-amber-400 transition-all"></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Suivi & évaluation (M&E)</span>
                                            <span className="text-slate-500">90%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-orange-500 h-full w-[90%] group-hover:bg-orange-400 transition-all"></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Cohésion sociale & médiation</span>
                                            <span className="text-slate-500">92%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-teal-500 h-full w-[92%] group-hover:bg-teal-400 transition-all"></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Ingénierie sociale</span>
                                            <span className="text-slate-500">92%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-purple-500 h-full w-[92%] group-hover:bg-purple-400 transition-all"></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-200 font-medium">Prévention des VBG & inclusion sociale</span>
                                            <span className="text-slate-500">88%</span>
                                        </div>
                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                            <div className="bg-rose-500 h-full w-[88%] group-hover:bg-rose-400 transition-all"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col h-full">
                                <h2 className="text-slate-100 text-3xl font-bold mb-10 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-emerald-400">construction</span>
                                    Outils Digitaux
                                </h2>
                                <div className="grid grid-cols-2 gap-4 grow">
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-indigo-400">web</span>
                                        <span className="text-slate-100 font-bold">Web Design & Développement web</span>
                                        <p className="text-xs text-slate-500">Conception de sites, plateformes et solutions digitales</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-sky-400">cloud_sync</span>
                                        <span className="text-slate-100 font-bold">KoboToolbox</span>
                                        <p className="text-xs text-slate-500">Collecte mobile de données terrain</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-purple-400">smart_toy</span>
                                        <span className="text-slate-100 font-bold">Google Antigravity</span>
                                        <p className="text-xs text-slate-500">Conception d’applications et solutions web assistées par IA</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-blue-400">bar_chart</span>
                                        <span className="text-slate-100 font-bold">Power BI</span>
                                        <p className="text-xs text-slate-500">Visualisation de données complexes</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-emerald-400">functions</span>
                                        <span className="text-slate-100 font-bold">SPSS / R</span>
                                        <p className="text-xs text-slate-500">Analyse statistique avancée</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-rose-400">description</span>
                                        <span className="text-slate-100 font-bold">Microsoft Office</span>
                                        <p className="text-xs text-slate-500">Analyse, reporting et production documentaire</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-amber-400">task</span>
                                        <span className="text-slate-100 font-bold">Outils de gestion de projet</span>
                                        <p className="text-xs text-slate-500">Planification, suivi des activités et coordination</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center text-center gap-3">
                                        <span className="material-symbols-outlined text-3xl text-teal-400">groups</span>
                                        <span className="text-slate-100 font-bold">Plateformes collaboratives</span>
                                        <p className="text-xs text-slate-500">Travail en équipe et partage de données en ligne</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-6 lg:px-20 py-24 bg-primary reveal" id="contact">
                        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <h2 className="text-white text-4xl font-black tracking-tight">Collaborons ensemble.</h2>
                                <p className="text-slate-300 text-lg">Vous avez un projet de développement rural ou une initiative d'innovation sociale ? Discutons-en.</p>
                                <div className="space-y-6">
                                    <a className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group" href="mailto:argh2014@gmail.com">
                                        <div className="size-12 flex items-center justify-center bg-white/10 rounded-full shrink-0 group-hover:bg-blue-400/20 transition-colors">
                                            <span className="material-symbols-outlined text-xl">mail</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email</p>
                                            <p className="text-lg">argh2014@gmail.com</p>
                                        </div>
                                    </a>
                                    <a className="flex items-center gap-4 text-white hover:text-emerald-400 transition-colors group" href="https://wa.me/2290197680703" target="_blank" rel="noopener noreferrer">
                                        <div className="size-12 flex items-center justify-center bg-white/10 rounded-full shrink-0 group-hover:bg-emerald-400/20 transition-colors">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">WhatsApp / Téléphone</p>
                                            <p className="text-lg">+229 01 97 68 07 03</p>
                                        </div>
                                    </a>
                                    <a className="flex items-center gap-4 text-white hover:text-sky-500 transition-colors group" href="https://bj.linkedin.com/in/ricardoavlessi" target="_blank" rel="noopener noreferrer">
                                        <div className="size-12 flex items-center justify-center bg-white/10 rounded-full shrink-0 group-hover:bg-sky-500/20 transition-colors">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">LinkedIn</p>
                                            <p className="text-lg">Profil Ricardo AVLESSI</p>
                                        </div>
                                    </a>
                                    <a className="flex items-center gap-4 text-white hover:text-pink-500 transition-colors group" href="https://www.instagram.com/ricardoavlss?igsh=azRmbmtldzY0MXQz" target="_blank" rel="noopener noreferrer">
                                        <div className="size-12 flex items-center justify-center bg-white/10 rounded-full shrink-0 group-hover:bg-pink-500/20 transition-colors">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Instagram</p>
                                            <p className="text-lg">@ricardoavlss</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-background-dark/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                                <form action="#" className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-2">Nom complet</label>
                                        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all" placeholder="Votre nom" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-2">Email</label>
                                        <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all" placeholder="votre@email.com" type="email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                                        <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-all" placeholder="Votre message..." rows={4}></textarea>
                                    </div>
                                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20" type="submit">
                                        Envoyer le message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="px-6 lg:px-20 py-12 border-t border-white/5 text-center">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-500 text-sm">© 2024 Ricardo AVLESSI. Tous droits réservés.</p>
                        <div className="flex gap-6">
                            <a className="text-slate-500 hover:text-white transition-colors" href="#">Mentions légales</a>
                            <a className="text-slate-500 hover:text-white transition-colors" href="#">Confidentialité</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App

