import React from 'react'
import CategoryCard from './common/CategoryCard'
import PageSectionLayout from './common/PageSectionLayout'
import SectionHeading from './common/SectionHeading'

const Category = () => {
    return (
        <section id='categories' className='scroll-mt-20 '>
            <SectionHeading heading={"Categories"} />
            <PageSectionLayout >
                <div className="my-10 justify-center items-center grid gap-x-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </PageSectionLayout>
        </section>
    )
}

export default Category