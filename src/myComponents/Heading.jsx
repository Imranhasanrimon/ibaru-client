
const Heading = ({ title, des }) => {
    return (
        <div className='max-w-2xl mx-auto'>
            <h3 className={`text-2xl sm:text-3xl text-center font-semibold mb-1`}>{title}</h3>
            <p className={`text-center dark:text-slate-400  text-slate-600  px-4 mb-8`}>{des}</p>
        </div>
    );
};

export default Heading;