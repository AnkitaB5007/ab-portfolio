import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
    return (
        <div className="flex flex-col gap-6 w-[300px]">
            <p className="text-orange font-bold uppercase text-3xl font-special text-center">
                Since 2022
            </p>
            <div className="flex justify-center items-center gap-4">
                <ExperienceInfo number={3} text="Years" />
                <p className="font-bold text-6xl text-lightBrown">-</p>
                <ExperienceInfo number={15} text="Websites" />
            </div>
            <p className="text-center text-white text-2xl">
                With 4 years of experience building dynamic and user-friendly web
                applications.
            </p>
            <ExperienceInfo number={720000} text="Customers" />
            <ExperienceInfo number={4500} text="New Users monthly" />
            <ExperienceInfo number={8500000} text="Logins per month" />
            <p className="text-center text-white text-xl">
                *In my current company (dealing with banking domain)
            </p>
        </div>
    );
};

export default ExperienceTopLeft;
