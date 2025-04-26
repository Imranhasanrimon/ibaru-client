import CountUp from 'react-countup';

const StatsHome = () => {
    const title = "Total Students"
    const value = 240
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow flex flex-col items-center">
            <h3 className="text-sm text-muted-foreground mb-1">{title}</h3>
            <div className="text-3xl font-bold text-primary">
                <CountUp end={value} duration={2} />
            </div>
        </div>
    );
};

export default StatsHome;