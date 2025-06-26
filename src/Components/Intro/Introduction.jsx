import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import ThemeTemplateData from '../../theme-db/ThemeTemplateData';

function Introduction() {

    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ThemeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn);
    }

    const themeShow = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }

    return (
        <div className='md:flex  items-center py-8'>
            {selectBtn ?
                <div className='lg:w-3/6 '>

                    <h1 className='mb-4 text-3xl md:text-5xl font-bold '>Create your professional resume in three <span className='text-[#8bca05]'>easy </span>steps.</h1>
                    <p>Resume builder tools help you create well-formatted, professional resumes with ease. Using a resume builder, you can generate a polished resume in just a few simple steps. These tools offer a variety of templates, allowing you to choose the one that best suits your style and career needs.</p>
                    <div>
                        <div className='mt-5 flex items-center'><span className='bg-[#edf2f7] text-black px-4 py-2 rounded mr-3 font-semibold text-md'>1</span> <span>Choose a template from our curated collection.</span></div>
                        <div className='mt-5 flex items-center'><span className='bg-[#edf2f7] text-black px-4 py-2 rounded mr-3 font-semibold text-md'>2</span> <span>Build your resume with our easy-to-use resume builder.</span></div>
                        <div className='mt-5 flex items-center'><span className='bg-[#edf2f7] text-black px-4 py-2 rounded mr-3 font-semibold text-md'>3</span> <span>Download your professionally designed resume.</span></div>
                    </div>
                    <button onClick={handleSelectTemplate} className='mt-8  bg-teal-600 text-white font-medium py-2 px-4 rounded hover:bg-teal-700 transition cursor-pointer' > Select Template</button>
                </div>
                :
                <div className='lg:w-2/6 '> <h2 className='text-3xl md:text-5xl font-bold'>Select a <span className='text-[#009689]'>Template</span> from the list</h2>
                </div>

            }

            {selectBtn ?
                <div className='lg:w-3/6 hidden lg:flex flex-col'>
                    <img src="/src/assets/home-logo.png" alt="Home logo" />
                </div>
                :
                <div className='lg:w-4/6 grid grid-cols-3 gap-4'>
                    {

                        ThemeTemplateData.map((item, index) => {

                            return (
                                <div key={item.id} className='w-[200px] h-[280px] border rounded-2xl overflow-hidden cursor-pointer dark:bg-white' onClick={themeShow}>
                                    <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />

                                </div>
                            )

                        })


                    }
                </div>
            }
        </div>
    )
}

export default Introduction