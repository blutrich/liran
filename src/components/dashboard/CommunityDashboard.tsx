import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

// Community growth data
const growthData = [
  { month: 'אפר', members: 120 },
  { month: 'מאי', members: 210 },
  { month: 'יונ', members: 250 },
  { month: 'יול', members: 320 },
  { month: 'אוג', members: 340 },
  { month: 'ספט', members: 370 },
  { month: 'אוק', members: 390 },
  { month: 'נוב', members: 410 },
  { month: 'דצמ', members: 440 },
  { month: 'ינו', members: 470 },
  { month: 'פבר', members: 510 },
  { month: 'מרץ', members: 538 },
];

// Activity by hour data
const activityByHourData = [
  { hour: '9:00', messages: 320 },
  { hour: '10:00', messages: 480 },
  { hour: '11:00', messages: 631 },
  { hour: '12:00', messages: 554 },
  { hour: '13:00', messages: 420 },
  { hour: '14:00', messages: 544 },
  { hour: '15:00', messages: 556 },
  { hour: '16:00', messages: 541 },
  { hour: '17:00', messages: 380 },
  { hour: '18:00', messages: 230 },
];

// Participant roles data
const participantRolesData = [
  { name: 'פעילים מאוד (50+)', value: 11, percentage: 2.72 },
  { name: 'פעילים (10-49)', value: 122, percentage: 30.20 },
  { name: 'מזדמנים (3-9)', value: 142, percentage: 35.15 },
  { name: 'צופים (<3)', value: 129, percentage: 31.93 },
];

// Topic distribution data
const topicDistributionData = [
  { name: 'המלצות', value: 133 },
  { name: 'משאבים ושירותים', value: 52 },
  { name: 'אירועים', value: 35 },
  { name: 'רווחה והטבות', value: 12 },
  { name: 'שכר ותגמול', value: 2 },
  { name: 'הזדמנויות תעסוקה', value: 1 },
  { name: 'אחר', value: 700 },
];

// Top community members
const topMembersData = [
  { name: 'לירן וולף', messages: 582, percentage: 12.60 },
  { name: 'תומר ממן', messages: 120, percentage: 2.60 },
  { name: 'אופיר', messages: 98, percentage: 2.12 },
  { name: 'Dana', messages: 87, percentage: 1.88 },
  { name: 'Yv', messages: 76, percentage: 1.65 },
  { name: 'שירה בורנשטיין', messages: 65, percentage: 1.41 },
];

// Keyword usage data
const keywordData = [
  { keyword: 'המלצה', count: 296 },
  { keyword: 'מחפשת', count: 196 },
  { keyword: 'אירוע', count: 113 },
  { keyword: 'צריכה', count: 48 },
  { keyword: 'HR', count: 38 },
  { keyword: 'רווחה', count: 19 },
  { keyword: 'עזרה', count: 17 },
  { keyword: 'משרה', count: 14 },
  { keyword: 'שכר', count: 12 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a569bd', '#5dade2', '#ec7063'];

export function CommunityDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">ניתוח קהילת "HR Wellbeing" בוואטסאפ</h1>
      <p className="text-muted-foreground">
        ניתוח מקיף של קהילת הוואטסאפ "HR Wellbeing" מאפריל 2024 עד מרץ 2025. 
        הקהילה צמחה לכ-538 חברים, ומתמקדת בעיקר במשאבי אנוש, רווחה ופיתוח מקצועי.
      </p>

      <Tabs defaultValue="growth" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="growth">צמיחה</TabsTrigger>
          <TabsTrigger value="activity">פעילות</TabsTrigger>
          <TabsTrigger value="topics">נושאים</TabsTrigger>
          <TabsTrigger value="members">חברים</TabsTrigger>
        </TabsList>

        <TabsContent value="growth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>צמיחת הקהילה</CardTitle>
              <CardDescription>
                מספר החברים בקהילה לאורך זמן (אפריל 2024 - מרץ 2025)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={growthData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="members" fill="#8884d8" name="מספר חברים" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>סה"כ חברים</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">538</div>
                <p className="text-sm text-muted-foreground">
                  נכון למרץ 2025
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>קצב צמיחה חודשי ממוצע</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">35</div>
                <p className="text-sm text-muted-foreground">
                  חברים חדשים בחודש
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>אחוז משתתפים פעילים</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">33%</div>
                <p className="text-sm text-muted-foreground">
                  שלחו 10 הודעות או יותר
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>פעילות לפי שעות היום</CardTitle>
              <CardDescription>
                התפלגות ההודעות בקהילה לפי שעות ביום
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={activityByHourData}>
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="messages" fill="#8884d8" name="מספר הודעות" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>חלוקת תפקידי המשתתפים</CardTitle>
              <CardDescription>
                פילוח המשתתפים לפי רמת הפעילות בקהילה
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={participantRolesData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ percentage }) => `${percentage}%`}
                    >
                      {participantRolesData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, _, props) => [`${value} משתמשים`, props.payload.name]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="topics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>התפלגות נושאי שאלות בקהילה</CardTitle>
              <CardDescription>
                פילוח השאלות הנפוצות שנשאלו בקהילה לפי קטגוריות
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={topicDistributionData} 
                    layout="vertical"
                    barSize={30}
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={120} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" name="מספר שאלות" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>תדירות מילות מפתח</CardTitle>
              <CardDescription>
                המילים הנפוצות ביותר בשיחות הקהילה
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={keywordData} 
                    layout="vertical"
                    barSize={30}
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="keyword" type="category" width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#82ca9d" name="מספר אזכורים" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>משתתפים מובילים</CardTitle>
              <CardDescription>
                החברים הפעילים ביותר בקהילה לפי מספר הודעות
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topMembersData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="messages" fill="#82ca9d" name="מספר הודעות" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>סה"כ משתתפים פעילים</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">404</div>
                <p className="text-sm text-muted-foreground">
                  מתוך 538 חברים
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>הודעות ממנהל הקהילה</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">582</div>
                <p className="text-sm text-muted-foreground">
                  12.60% מכלל ההודעות
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>זוגות אינטראקציה מובילים</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-md font-bold">שרן → לירן: 14</div>
                <div className="text-md font-bold">לירן → שרן: 13</div>
                <div className="text-md font-bold">לירן → Yv: 10</div>
                <p className="text-sm text-muted-foreground mt-1">
                  מספר תגובות הדדיות
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>תובנות מרכזיות</CardTitle>
          <CardDescription>
            ממצאים עיקריים מניתוח הקהילה
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>הקהילה צמחה באופן יציב לאורך השנה והגיעה ל-538 חברים.</li>
            <li>רוב הפעילות מתרחשת בשעות העבודה, עם שיא בין 11:00-12:00.</li>
            <li>33% מהחברים בקהילה פעילים באופן קבוע (10 הודעות או יותר).</li>
            <li>נושאי המפתח כוללים המלצות, חיפוש משאבים ושירותים, ואירועים.</li>
            <li>מנהל הקהילה (לירן וולף) מוביל את הפעילות עם 582 הודעות (12.60%).</li>
            <li>בקהילה התפתחו דפוסי אינטראקציה משמעותיים בין חברים מרכזיים.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 