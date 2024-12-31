const ResumeLayout = () => {
    return <div className="min-h-screen " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}>

             
  <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
      <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find your<br />Best Resume online</h1>

        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">Finding the perfect online resume involves identifying a template or tool that best reflects your skills, experience, and career goals.</p>
      </div>

      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src="https://d.novoresume.com/images/doc/minimalist-resume-template.png" loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-fit object-center" />
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src="https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-full object-fit object-center" />
        </div>
      </div>
    </div>    
  </section>



    </div>
};


export default ResumeLayout