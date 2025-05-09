import Heading from '@/myComponents/Heading';
import { BookOpenText, Cog, GraduationCap, ShieldCheck, Trophy, Users } from 'lucide-react';
import CountUp from 'react-countup';

const StatsHome = () => {
    return (
        <div>
            <Heading title="Institutional Highlights" des="An overview of IBA RU&apos;s achievements, academic excellence, and contributions to business education." />
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-center'>
                <div className="bg-card dark:hover:bg-card/50 hover:bg-slate-100 duration-400 p-6 rounded-md border shadow flex flex-col items-center">
                    <ShieldCheck size={32} className='text-red-500' />
                    <div className="text-3xl font-bold text-primary">
                        <CountUp end={25} duration={2} />+
                    </div>
                    <h3 className="text-sm text-muted-foreground mb-1">Years of Excellence</h3>
                </div>
                <div className="bg-card dark:hover:bg-card/50 hover:bg-slate-100 duration-400 p-6 rounded-md border shadow flex flex-col items-center">
                    <BookOpenText size={32} className='text-sky-500' />
                    <div className="text-3xl font-bold text-primary">
                        <CountUp end={170} duration={2} />+
                    </div>
                    <h3 className="text-sm text-muted-foreground mb-1">Research Publications</h3>
                </div>
                <div className="bg-card dark:hover:bg-card/50 hover:bg-slate-100 duration-400 p-6 rounded-md border shadow flex flex-col items-center">
                    <GraduationCap size={32} className='text-green-500' />
                    <div className="text-3xl font-bold text-primary">
                        <CountUp end={3500} duration={2} />+
                    </div>
                    <h3 className="text-sm text-muted-foreground mb-1">Graduates</h3>
                </div>
                <div className="bg-card dark:hover:bg-card/50 hover:bg-slate-100 duration-400 p-6 rounded-md border shadow flex flex-col items-center">
                    <Cog size={32} className='text-yellow-500' />
                    <div className="text-3xl font-bold text-primary">
                        <CountUp end={55} duration={2} />+
                    </div>
                    <h3 className="text-sm text-muted-foreground mb-1">Industry Partnerships</h3>
                </div>
                <div className="bg-card dark:hover:bg-card/50 hover:bg-slate-100 duration-400 p-6 rounded-md border shadow flex flex-col items-center">
                    <Users size={32} className='text-lime-500' />
                    <div className="text-3xl font-bold text-primary">
                        <CountUp end={450} duration={2} />+
                    </div>
                    <h3 className="text-sm text-muted-foreground mb-1">Current Students</h3>
                </div>
                <div className="bg-card dark:hover:bg-card/50 hover:bg-slate-100 duration-400 p-6 rounded-md border shadow flex flex-col items-center">
                    <Trophy size={32} className='text-red-500' />
                    <div className="text-3xl font-bold text-primary">
                        <CountUp end={199} duration={2} />
                    </div>
                    <h3 className="text-sm text-muted-foreground mb-1">Scholarships Awarded</h3>
                </div>
            </div>
        </div>
    );
};

export default StatsHome;