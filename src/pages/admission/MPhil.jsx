import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "@/hooks/useTheme";
import building from "@/assets/buildings/building3.png";
import Typography from "@/components/ui/typography";

const MPhil = () => {
  const { theme } = useTheme();
  return (
    <div className="container mx-auto p-6">
      <div
        className="relative inset-0 rounded-xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0, 0.7)), url(${building})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h1"
          className={`text-center py-12 sm:py-20 md:py-24 lg:py-36 md:backdrop-blur-[3px] text-white ${theme === 'dark' ? "" : "text-white"}`}
        >
          M.Phil Admission
        </Typography>
      </div>
      <Tabs defaultValue="admission" className="w-full mt-6">
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="admission">Admission</TabsTrigger>
          <TabsTrigger value="fees">Fees</TabsTrigger>
          <TabsTrigger value="foreign">Foreign Students</TabsTrigger>
        </TabsList>

        <TabsContent value="admission">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">Admission Policy</h2>
              <p>The admission process is competitive, selecting students based on academic records, an admission test, and an interview.</p>

              <h3 className="text-xl font-medium">Eligibility Criteria:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A Master’s degree in a relevant field from a recognized university.</li>
                <li>Minimum CGPA of 3.0 (on a 4.0 scale) or First Class.</li>
                <li>Admission test and interview.</li>
              </ul>

              <h3 className="text-xl font-medium">Selection Process:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Written admission test covering relevant subjects and research aptitude.</li>
                <li>Interview for shortlisted candidates.</li>
                <li>Final selection based on academic performance, test, and interview.</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">Fees Structure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Admission Fee: Tk. 15,000/- (one-time)</li>
                <li>Tuition Fee: Tk. 5,000/- per semester</li>
                <li>Library Fee: Tk. 2,000/- per semester</li>
                <li>Examination Fee: Tk. 3,000/- per course</li>
                <li>Thesis Evaluation Fee: Tk. 10,000/- (one-time)</li>
                <li>Total Estimated Cost: Tk. 80,000/-</li>
              </ul>
              <p className="text-sm text-gray-500">* Fees are subject to change.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="foreign">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">Foreign Students</h2>
              <p>Students with foreign nationality can apply provided they fulfill the admission requirements.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>GMAT or GRE score of 400+ (minimum 25 percentile in verbal, 40 percentile in quantitative).</li>
                <li>Proof of English proficiency (IELTS/TOEFL recommended).</li>
                <li>Estimated cost for tuition and living: US$ 3,000 per academic year.</li>
              </ul>
              <p>For more information, contact: <span className="text-blue-500">info@iba-ru.ac.bd</span></p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MPhil;