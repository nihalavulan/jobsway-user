import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Icon } from '@iconify/react';
import JobCard from '../components/JobCard/JobCard';
import SmallCompanyCard from '../components/company/SmallCompanyCard';
import PostJob from '../components/postJob/PostJob';
import Footer from '../components/footer/Footer';

const FindJobs = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto w-full h-20 mt-28">
                    <div className="flex justify-center w-full  p-4 items-center">
                        <div className="m-2 w-6/12">
                            <input placeholder="   Jobn title, Keywords  or  Company" className="text-3xl outline-0 border-0 h-12 placeholder-primary w-full" type="text" className="bg-secondary w-full h-14 rounded-lg" />
                        </div>
                        <div className="m-2 w-4/12">
                            <input placeholder="   City ,State or pin code" className="text-3xl outline-0 border-0 h-12 placeholder-primary w-full" type="text" className="bg-secondary w-full h-14 rounded-lg" />
                        </div>
                        <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-lg cursor-pointer">
                        <Icon icon="akar-icons:search" className="text-white text-xl" />
                        </div>
                    </div>
            </div>

            <div className="h-auto w-screen ">
            <div className="container mx-auto pb-8 mt-12">
                <div className="grid grid-cols-2 gap-4">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </div>

        <div className="container mx-auto">
            <h5 className="font-semibold text-2xl my-3">Top Companies.</h5>
            <div className="w-full h-20 flex justify-around mt-4">
                <SmallCompanyCard />
                <SmallCompanyCard />
                <SmallCompanyCard />
                <SmallCompanyCard />
                <SmallCompanyCard />
            </div>
        </div>
        <div className="mt-60">
            <PostJob />
        </div>
        <Footer />
        </div>
    )
}

export default FindJobs