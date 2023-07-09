import profile from '../assets/picture.jpeg';

const About = () => {
    return (
        <section id="about" className="flex flex-col justify-center items-center h-full">

            <div className="flex flex-col-reverse md:flex-row gap-14 ">
                <div className="p-4">
                    <div className="md:w-[27rem]">

                        <h1 className='text-3xl font-normal'>
                            Olá, meu nome é <strong>Smile</strong>
                        </h1>

                        <p className="text-lg font-normal text-left my-9">
                            Cursando análise e desenvolvimento de sistemas pela PUC-MG.
                            Sou um deselvolvedor ambicioso, sempre buscando me superar e alcançar novos objetivos.
                            Busco crescer na área de <strong>Desenvolvimento Front-End</strong>, aprimorando minhas habilidades e conhecimentos constantemente.
                            Estou em busca de novas oportunidades de aprendizado e desenvolvimento,
                            para me tornar cada vez mais completo e capaz de lidar com os desafios que aparecerem.

                        </p>
                        <div className='inline-block'>
                            <a
                                href="assets/curriculo_final.pdf"
                                download={'curriculo.pdf'}
                                className="  text-gray-300 transition-all border-[1px] border-solid border-[#5659fd] hover:bg-[#5659fd] hover:text-white hover:-translate-y-2 hover:shadow-md hover:shadow-[#5659fd] px-3 py-2 rounded-md text-base font-medium"
                            >
                                Download CV <i className='p-[4px] fa fa-download'></i>
                            </a>

                            <a target="_blank" href='https://www.github.com/UnknownPerson66' className='  mx-2 text-gray-300 transition-all border-[1px] border-solid border-[#5659fd] hover:bg-[#5659fd] hover:text-white hover:-translate-y-2 hover:shadow-md hover:shadow-[#5659fd] px-3 py-2 rounded-md text-base font-medium'>
                                <i className='fa-brands fa-github'></i>
                            </a>

                            <a href='https://www.linkedin.com/in/erick-c-3a540a257' className='  text-gray-300 transition-all border-[1px] border-solid border-[#5659fd] hover:bg-[#5659fd] hover:text-white hover:-translate-y-2 hover:shadow-md hover:shadow-[#5659fd] px-3 py-2 rounded-md text-base font-medium'>
                                <i className='fa-brands fa-linkedin'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sm:mx-auto p-4">
                    <img className='h-[300px] w-[300px] blur-lg object-cover sm:h-full sm:w-[300px]' src={profile} alt="profile picture" />
                </div>
            </div>

        </section>
    )
}

export default About;