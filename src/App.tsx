import { RootLayout } from '@/components/layout/RootLayout'
import { SearchBar } from '@/components/search/SearchBar'
import { RecommendationsDirectory } from '@/components/recommendations/RecommendationsDirectory'
import { CommunityDashboard } from '@/components/dashboard/CommunityDashboard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function App() {
  return (
    <RootLayout>
      <div className="container py-6">
        <h1 className="mb-6 text-3xl font-bold">קהילת HR Wellbeing</h1>
        
        <Tabs defaultValue="recommendations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="recommendations">המלצות הקהילה</TabsTrigger>
            <TabsTrigger value="dashboard">דשבורד ניתוח</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recommendations">
            <div className="mb-8 max-w-2xl">
              <SearchBar />
            </div>
            <RecommendationsDirectory />
          </TabsContent>
          
          <TabsContent value="dashboard">
            <CommunityDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </RootLayout>
  )
}

export default App
